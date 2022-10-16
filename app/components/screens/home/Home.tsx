import { FC } from 'react'
import Layout from '../../layouts/layout'

const Home: FC = () => {
    return (
        <div>
            <Layout title="Главная">
                <div className="text-white">Домашний экран</div>
            </Layout>
        </div>
    )
}

export default Home
