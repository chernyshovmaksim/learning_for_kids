import Head from 'next/head'
import { FC, useEffect, useState } from 'react'
import Loader from '../ui/loader'
import faviconImage from './../../assets/images/favicon.png'
import styles from './../../../styles/Layout.module.css'

interface ILayout {
    children
    title: string
}

const Layout: FC<ILayout> = ({ children, title }) => {
    const [load, setLoad] = useState(true)

    useEffect(() => {
        let timer = setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, [])

    return (
        <div className={styles.layout + ' layout'}>
            <Head>
                <title>
                    {title} | Онлайн платформа подготовки детей к школе.
                </title>
                <link rel="shortcut icon" href={faviconImage.src} />
            </Head>

            {load ? <Loader /> : <div>{children}</div>}
        </div>
    )
}

export default Layout
