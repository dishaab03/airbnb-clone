import { useContext } from 'react';
import { ListingsContext } from '../context/ListingsContext';
export const useListings = () => useContext(ListingsContext);
