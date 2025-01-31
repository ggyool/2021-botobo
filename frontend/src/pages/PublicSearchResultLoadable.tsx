import styled from '@emotion/styled';
import React from 'react';

import { Button, CardSkeleton, HeaderSkeleton } from '../components';
import { Flex, loadContent } from '../styles';
import PageTemplate from './PageTemplate';

const PublicSearchResultLoadable = () => (
  <>
    <HeaderSkeleton />
    <StyledPageTemplate isScroll={true}>
      <Title />
      <Filter>
        {[...Array(4)].map((_, index) => (
          <Button
            key={index}
            shape="round"
            backgroundColor={'gray_5'}
            inversion={true}
            disabled={true}
          >
            {''}
          </Button>
        ))}
      </Filter>

      <StyledUl>
        {[...Array(8)].map((_, index) => (
          <StyledCardSkeleton key={index} />
        ))}
      </StyledUl>
    </StyledPageTemplate>
  </>
);

const StyledPageTemplate = styled(PageTemplate)`
  padding-top: 1rem;
`;

const Title = styled.div`
  width: 40%;
  height: 1.5rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  ${loadContent};
`;

const Filter = styled.div`
  ${Flex()};
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  & > button {
    width: 4rem;
    height: 2rem;
  }
`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin: 1rem 0;
`;

const StyledCardSkeleton = styled(CardSkeleton)`
  ${Flex({ direction: 'column', items: 'center' })};
  height: 6rem;
`;

export default PublicSearchResultLoadable;
