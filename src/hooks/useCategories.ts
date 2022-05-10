import React from 'react';

import api from "~/services/api";
import { Category } from '~/types';

export default function useCategories() {
  const [categories, setCategories] = React.useState<Category[]>([]);  	
    
  React.useEffect(() => {
    async function getData() {
      const { data } = await api.get('categories')
      setCategories(data)
    } 
    getData()
  }, []);

  return categories;
}