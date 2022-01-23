import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "..";
import { DataProps } from "../../api/shared";

export interface childProps {
  name: string;
  id?: string | number;
  company?: string;
  email?: string;
  username?: string;
  avatar_url?: string;
}

interface ListProps {
  data: DataProps[];
  className?: string;
}

const StyledCard = styled(Card)`
  min-height: 150px;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${StyledCard} {
    border-bottom: 1px solid white;
  }
`;

const StyledColumn = styled.div`
  flex: 1;
  padding: 5px;
`;

const StyledLabel = styled.span`
  margin: 25px auto 0 0;
  display: block;
  width: 100%;
  padding: 10px 2px;
  border-bottom: 3px solid black;
`;

const StyledButton = styled.button`
  background-color: #c4c4c449;
  border: 1px solid lightgrey;
  color: white;
  height: 40px;
  border-radius: 7px;
  cursor: pointer;

  :hover {
    background-color: #d3d3d31d;
  }
`;

const StyledBody = styled.div`
  display: flex;
`;

export const List: React.FC<ListProps> = ({ data, className }) => {
  const [showMore, setShowMore] = useState(false);
  if (!data || data.length === 0) {
    return null;
  }

  const customFilterList = showMore ? data : data.slice(0, 4);

  return (
    <StyledList>
      <StyledBody>
        <StyledColumn>
          <StyledLabel>{`Results(${data.length})`}</StyledLabel>
          {customFilterList &&
            customFilterList.map((item: DataProps, index: number) => (
              <StyledCard user={item} key={`user-${index}`} />
            ))}
        </StyledColumn>
      </StyledBody>
      {!showMore && data.length > 4 && (
        <StyledButton
          data-testid="StyledButton"
          onClick={() => setShowMore(true)}
        >
          Click to show more
        </StyledButton>
      )}
    </StyledList>
  );
};
