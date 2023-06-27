import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import CardList from "@/components/CardList";
import getData from "@/pages/api/getProduct";
import styles from '/styles/page.module.scss'


export const getServerSideProps = async () => {
    const data = await getData()
    return {props: {data: data?.api_data}}
}


const Home = ({data}) => {
    const [products, setProducts] = useState(data)
    const {ref, inView} = useInView({
        threshold: 0
    })

    useEffect(() => {
        setProducts(data)
    }, [data])

    useEffect(() => {

        async function getProducts() {
            const response = await getData(6, products.iCurrentPage + 1);
            const data = await response
            data.api_data.aProduct = [...products?.aProduct, ...response?.api_data.aProduct];
            setProducts(data.api_data);
        }

        getProducts()

    }, [inView])

    return (
        <main className={styles.product_block_wrapper}>
            <CardList products={products}/>
            <div ref={ref}></div>
        </main>
    );
};


export default Home;