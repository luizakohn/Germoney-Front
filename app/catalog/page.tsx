import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import InputValue from "@/components/inputValue";
import FilterButton from "../../components/filterButton";
import styles from "./page.module.scss"
import classNames from "classnames";
import {Product} from "@/types/products";
import api from "@/api/api";

async function getProducts(): Promise<Product[]> {
    try {
        const response = await api.get('/products')
        return response.data;
    } catch (error) {
        console.error('Failed to fetch transactions', error);
        return [];
    }
}

export default async function Page() {
    const products: Product[] = await getProducts();

    console.log(products)
    return (
        <>
            <NavBar/>
            <div className={"p-5"}>
                <div className={classNames("rounded", styles.pageBox)}>
                    <h1 className={styles.text}>Cumpriu Tarefas, Ganhou Germoneys, Escolheu Prêmios!</h1>
                    <div className={"p-5 d-flex justify-content-center align-items-start"}>
                        <InputValue/>
                        <FilterButton/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}