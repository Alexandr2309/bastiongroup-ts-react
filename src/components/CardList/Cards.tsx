import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import CardItem from './CardItem';
import { IProduct } from '../../types/models';
import { filterProducts } from '../../utils/helpFunc';
import useProductsVariant from '../../hooks/useProductsVariant';
import { CardGrid } from '../../utils/contants';
import { BeatLoader } from 'react-spinners';

const Cards: React.FC = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [time, setTime] = useState<ReturnType<typeof setTimeout>>();
  const [isF, setIsF] = useState<boolean>(true);
  const { products: allProds } = useAppSelector((state) => state.products);
  const { filters } = useAppSelector((state) => state.list);

  const [products, setProducts] = useState<IProduct[]>(allProds.slice(0, 9));

  useEffect(() => {
    const { cost, type, gosts } = filters;
    if (
      cost[0] === 104 &&
      cost[1] === 9990 &&
      !type.length &&
      !gosts.length &&
      isF
    )
      return setIsF(false);

    if (time) clearTimeout(time);
    setLoader(true);
    setTime(
      setTimeout(() => {
        filterProducts(allProds, filters, setProducts);
        setLoader(false);
      }, 550)
    );
  }, [filters.cost, filters.type, filters.gosts]);

  const productsWithVariant = useProductsVariant(products);

  return (
    <>
      {loader && (
        <div
          style={{ display: 'flex', justifyContent: 'center', paddingTop: 50 }}
        >
          <BeatLoader margin={10} size={25} />
        </div>
      )}
      <CardGrid className='main__cards cards'>
        {!loader &&
          productsWithVariant.map((product, i) => {
            return (
              <CardItem
                variant={product.variant || 0}
                key={product.id}
                {...product}
              />
            );
          })}
      </CardGrid>
      {!loader && !productsWithVariant.length && (
        <div className='main__cards__not-found'>
          Ничего подходящего не найдено
        </div>
      )}
    </>
  );
};

export default Cards;
