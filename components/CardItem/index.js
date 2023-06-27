import React from 'react';
import styles from '/styles/page.module.scss'

const CardItem = ({products}) => {
    const {aProduct} = products
    console.log(aProduct)
    return (
        <>
            {aProduct?.map((obj, index) => (
                <div className={styles.product_block} key={index}>
                    {<img src={obj?.photos[0].big + '&resize=size-middle'} alt={obj.name}/>}
                    <h1 className={styles.product_block__title}>{obj.name}</h1>
                    <p className={styles.product_block__description}>{obj?.descriptions.text}</p>
                </div>
            ))}
        </>
    );
};

export default CardItem;