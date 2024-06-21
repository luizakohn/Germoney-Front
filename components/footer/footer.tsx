import styles from "./footer.module.scss";
import classNames from "classnames";

const Footer = () => {
    return (
        <footer className={classNames('position-relative bottom-0 text-white w-100 mt-auto', styles.footer)}>
            <div className="d-grid">
                <div className="row">
                    <div className="col-lg-6 text-lg-start mt-1">
                        <p>&copy; {new Date().getFullYear()} Germoneys. Todos os direitos reservados.</p>
                    </div>
                    <div className="col-lg-6 text-lg-end mt-1">
                        <p>Entre em contato: projeto.germoneys@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
