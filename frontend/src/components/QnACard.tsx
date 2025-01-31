import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

import EmptyStarIcon from '../assets/star-empty.svg';
import FillStarIcon from '../assets/star-fill.svg';
import { useModal } from '../hooks';
import { Flex } from '../styles';
import { CardResponse } from '../types';
import { debounce } from '../utils';
import CardEditForm from './CardEditForm';
import CardTemplate from './CardTemplate';
import Confirm from './Confirm';

interface Props {
  cardInfo: CardResponse;
  workbookName: string;
  editCard: (cardInfo: CardResponse) => Promise<void>;
  deleteCard: (id: number) => Promise<void>;
  toggleBookmark: (cardInfo: CardResponse) => Promise<void>;
}

const QnACard = ({
  cardInfo,
  workbookName,
  editCard,
  deleteCard,
  toggleBookmark,
}: Props) => {
  const { openModal } = useModal();
  const [isBookmark, setIsBookmark] = useState(cardInfo.bookmark);

  const onClickBookmark = () => {
    setIsBookmark((prevState) => !prevState);
    debounce(() => toggleBookmark({ ...cardInfo, bookmark: !isBookmark }), 200);
  };

  return (
    <CardTemplate
      editable={true}
      onClickEditButton={async () => {
        openModal({
          content: <CardEditForm cardInfo={cardInfo} onSubmit={editCard} />,
          title: workbookName,
          closeIcon: 'back',
          type: 'full',
        });
      }}
      onClickDeleteButton={() => {
        openModal({
          content: (
            <Confirm onConfirm={() => deleteCard(cardInfo.id)}>
              해당 카드를 정말 삭제하시겠어요?
            </Confirm>
          ),
          type: 'center',
        });
      }}
    >
      <Header>
        <div>풀어본 횟수: {cardInfo.encounterCount}</div>
        <BookmarkButton onClick={onClickBookmark}>
          {isBookmark ? <FillStarIcon /> : <EmptyStarIcon />}
        </BookmarkButton>
      </Header>
      <Question>Q. {cardInfo.question}</Question>
      <Answer>A. {cardInfo.answer}</Answer>
    </CardTemplate>
  );
};

const Header = styled.div`
  ${Flex({ justify: 'space-between', items: 'center' })};
  text-align: right;
  height: 1.5rem;
  margin-bottom: 1rem;

  ${({ theme }) => css`
    color: ${theme.color.gray_6};
    font-size: ${theme.fontSize.small};
  `}
`;

const BookmarkButton = styled.button`
  & > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const Question = styled.div`
  padding-bottom: 1rem;

  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.color.gray_3};
  `}
`;

const Answer = styled.div`
  padding-top: 1.5rem;
`;

export default QnACard;
