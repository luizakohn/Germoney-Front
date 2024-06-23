'use client'

import React from 'react';
import {Button} from "reactstrap";
import styles from "./filterButton.module.scss"

const FilterButton = () => {
    return (
        <>
            <Button className={styles.button}>
                Filtrar
            </Button>
        </>
    )
}

export default FilterButton