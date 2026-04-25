import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import { useListings } from './useListings';

export const useFilters = () => {
  const { filters, applyFilter, resetFilters, getFilteredListings } = useContext(FilterContext);
  const { listings, loading } = useListings();
  
  return {
    filters,
    applyFilter,
    resetFilters,
    filteredListings: getFilteredListings(listings),
    loading
  };
};
