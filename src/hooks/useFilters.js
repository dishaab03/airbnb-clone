import { useContext, useMemo } from 'react';
import { FilterContext } from '../context/FilterContext';
import { useListings } from './useListings';

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }

  const { listings } = useListings();
  const { filters, applyFilter, resetFilters, getFilteredListings } = context;

  const filteredListings = useMemo(() => {
    return getFilteredListings(listings);
  }, [listings, filters, getFilteredListings]);

  return {
    filters,
    applyFilter,
    resetFilters,
    filteredListings,
    totalResults: filteredListings.length
  };
};
