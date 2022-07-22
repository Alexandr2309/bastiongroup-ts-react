import React, { FC, useEffect } from 'react';
import { MainHead } from '../components/MainHead';
import MainFilters from '../components/Filters/MainFilters';
import Gosts from '../components/Gosts/Gosts';
import Cards from '../components/CardList/Cards';
import Pagination from '../components/CardList/Pagination/Pagination';
import About from '../components/About';
import { useAppDispatch } from '../hooks/redux';
import { clearFilters } from '../store/reducers/list';

const MainPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return function() {
      dispatch(clearFilters(true));
    }
  }, []);

  return (
    <div className='main'>
      <div className='container'>
        <MainHead />
        <div className='main__block'>
          <div className='main__left'>
            <MainFilters />
          </div>
          <div className='main__right'>
            <Gosts />
            <Cards />
          </div>
        </div>
      </div>
      <div className='container'>
        <Pagination />
      </div>
      <div className='container'>
        <About />
      </div>
    </div>
  );
};

export default MainPage;
