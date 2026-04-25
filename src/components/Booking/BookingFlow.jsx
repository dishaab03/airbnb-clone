import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useListings } from '../../hooks/useListings';
import { useBooking } from '../../context/BookingContext';
import DatePicker from './DatePicker';
import BookingSummary from './BookingSummary';

const BookingFlow = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { listings } = useListings();
  const { calculatePrice, createBooking } = useBooking();
  
  const [step, setStep] = useState(1);
  const [listing, setListing] = useState(null);
  const [formData, setFormData] = useState({
    checkIn: location.state?.checkIn || '',
    checkOut: location.state?.checkOut || '',
    guests: location.state?.guests || 1,
    name: '',
    email: '',
    phone: '',
    requests: ''
  });

  const [pricing, setPricing] = useState({ subtotal: 0, taxes: 0, serviceFee: 0, total: 0, nights: 0 });

  useEffect(() => {
    const found = listings.find(l => l.id === id);
    if (found) setListing(found);
  }, [id, listings]);

  useEffect(() => {
    if (listing && formData.checkIn && formData.checkOut) {
      setPricing(calculatePrice(listing.pricePerNight, formData.checkIn, formData.checkOut, formData.guests));
    }
  }, [listing, formData, calculatePrice]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    const booking = await createBooking({
      listingId: id,
      ...formData,
      pricing
    });
    navigate(`/booking/confirmation/${booking.id}`);
  };

  if (!listing) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading listing...</div>;

  return (
    <div className="booking-flow" style={{ maxWidth: '1120px', margin: '0 auto', padding: '2rem 1rem' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', fontSize: '1.5rem' }}>←</button>
        <h1>Confirm and pay</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
        <div className="flow-steps">
          {step === 1 && (
            <div className="step-1">
              <h2>Your trip</h2>
              <div style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>Dates</h4>
                    <p>{formData.checkIn} – {formData.checkOut}</p>
                  </div>
                  <button onClick={() => {}} style={{ background: 'none', textDecoration: 'underline', fontWeight: 'bold' }}>Edit</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>Guests</h4>
                    <p>{formData.guests} guest{formData.guests > 1 ? 's' : ''}</p>
                  </div>
                  <button onClick={() => {}} style={{ background: 'none', textDecoration: 'underline', fontWeight: 'bold' }}>Edit</button>
                </div>
              </div>
              <hr style={{ margin: '2rem 0', borderColor: 'var(--light-gray)' }} />
              <button 
                onClick={handleNext}
                style={{ backgroundColor: 'var(--dark-green)', color: 'white', padding: '1rem 2rem', borderRadius: '8px', width: '100%' }}
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="step-2">
              <h2>Contact details</h2>
              <div style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input 
                  type="text" name="name" placeholder="Full Name" 
                  value={formData.name} onChange={handleInputChange}
                  style={{ padding: '1rem', border: '1px solid var(--gray)', borderRadius: '8px' }}
                />
                <input 
                  type="email" name="email" placeholder="Email Address" 
                  value={formData.email} onChange={handleInputChange}
                  style={{ padding: '1rem', border: '1px solid var(--gray)', borderRadius: '8px' }}
                />
                <input 
                  type="tel" name="phone" placeholder="Phone Number" 
                  value={formData.phone} onChange={handleInputChange}
                  style={{ padding: '1rem', border: '1px solid var(--gray)', borderRadius: '8px' }}
                />
                <textarea 
                  name="requests" placeholder="Special requests (optional)" 
                  value={formData.requests} onChange={handleInputChange}
                  style={{ padding: '1rem', border: '1px solid var(--gray)', borderRadius: '8px', minHeight: '100px' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={handleBack} style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid var(--dark-green)' }}>Back</button>
                <button 
                  onClick={handleSubmit}
                  style={{ flex: 2, backgroundColor: 'var(--yellow)', color: 'var(--dark-green)', padding: '1rem', borderRadius: '8px', fontWeight: 'bold' }}
                >
                  Confirm and Pay
                </button>
              </div>
            </div>
          )}
        </div>

        <aside className="flow-sidebar">
          <BookingSummary listing={listing} {...formData} pricing={pricing} />
        </aside>
      </div>
    </div>
  );
};

export default BookingFlow;
