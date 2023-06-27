import React from 'react';
import CardItem from "@/components/CardItem";

const CardList = ({products}) => {
    return (
        <CardItem products={products}/>
    );
};

export default CardList;