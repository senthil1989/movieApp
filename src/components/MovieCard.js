import React from "react";
import Card from './Card';
const MovieCard = ({items}) => {
  return (
    <>
     {items?.map(
         (item)=><Card item={item}/>
     )}       
</>
  );
};
export const MemoizedMovie = React.memo(MovieCard);
export default MemoizedMovie;
