import styled from 'styled-components';

export const ID = 'ID';
export const TITLE = 'TITLE';
export const GOST = 'GOST';
export const COST = 'COST';

export const CardGrid = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, minmax(auto, 280px));
  & > div {
    padding: 15px 4px 20px 20px;
  }
`;
