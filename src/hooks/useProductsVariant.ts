import React, { useMemo } from 'react';
import { IProduct } from '../types/models';

export default function useProductsVariant(products: IProduct[]): IProduct[] {
  return useMemo<IProduct[]>(() => {
    let currentVariant = 0;
    return products.map((product) => {
      if (product.stock || product.hit || product.discount) {
        currentVariant = currentVariant === 3 ? 1 : currentVariant + 1;
        return { ...product, variant: currentVariant };
      }

      return product;
    });
  }, [products]);
}
