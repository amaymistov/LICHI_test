import React from 'react';
import Head from "next/head";
import Link from "next/link";
import styles from '/styles/button.module.scss'

const Home = () => {
    return (
        <>
            <Head>
                <title>LICHI</title>
            </Head>
            <div className={styles.wrapper_button}>
                <Link
                    className={styles.home_button}
                    href="/dresses">Клацк
                </Link>
            </div>
        </>
    );
};

export default Home;