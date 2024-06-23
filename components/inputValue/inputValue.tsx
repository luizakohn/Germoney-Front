'use client'

import { Input, InputGroup, InputGroupText } from "reactstrap";
import styles from "./inputValue.module.scss";
import { useState } from "react";

const InputValue = () => {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e: { target: { value: any; }; }) => {
        const newValue = e.target.value;
        setValue(newValue);
        validateValue(newValue);
    };

    const validateValue = (value: string) => {
        const parsedValue = parseFloat(value);
        if (!isNaN(parsedValue) && parsedValue > 0) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className={styles.inputContainer}>
            <InputGroup className={styles.inputValue}>
                <InputGroupText>
                    $
                </InputGroupText>
                <Input
                    type="number"
                    value={value}
                    placeholder="Insira o valor de Germoneys"
                    onChange={handleChange}
                    className={isValid ? '' : styles.invalid}
                />
            </InputGroup>
            {!isValid && <div className={styles.error}>Por favor, insira um valor válido.</div>}
        </div>
    );
};

export default InputValue;