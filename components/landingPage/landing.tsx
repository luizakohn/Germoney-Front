import { Col, Container, Row, Button } from "reactstrap";
import styles from "./landing.module.scss"
import React from "react"
import classNames  from "classnames"
import Footer from "../footer/footer";



const Landing = () => {
    return(
        <>
        <Container  className={styles.Container} fluid>
            <Row>
                <Col md="auto" className={styles.Col}>
                    <img src="https://static.ndmais.com.br/2023/08/img-9476-533x800.jpg" className={styles.img} alt="Compras" />
                </Col>
                <Col>
                    <Row>
                        <button className={styles.button}>Login</button>
                    </Row>
                    <Row>
                        <img src="logoicon.ico" className={styles.logoImage}></img>
                    </Row>
                    <Row>
                        <p className={styles.mainText}>Catálogo Germoneys</p>
                    </Row>
                    <Row>
                        <button className={styles.button}>Ver Catálogo</button>
                    </Row>
                </Col>
            </Row>
            <Row>
            <Footer/>
            </Row>
        </Container>
        </>

    )

}
export default Landing