import React from 'react';
import Head from "next/head";
import Link from "next/link";
import styles from '/styles/page.module.scss'

const Home = () => {
    return (
        <>
            <Head>
                <title>LICHI</title>
            </Head>
            <div className={styles.home_button}>
                <Link href="/dresses">Клацк</Link>
            </div>
        </>
    );
};

export default Home;