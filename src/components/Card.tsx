import styled from '@emotion/styled';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

interface Props {
  linkUrl: string;
  title: string;
  year: string;
  posterPath: string;
  voteAverage: number;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin-inline: 10px;
`;

export default function Card() {
  return <div>Card</div>;
}
