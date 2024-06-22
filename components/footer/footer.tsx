import styles from "./footer.module.scss";
import classNames from "classnames";

const Footer = () => {
    return (
        <footer className={classNames('position-relative bottom-0 text-white w-100 mt-auto', styles.footer)}>
            <div className="d-grid">
                <div className="row m-0">
                    <div className="text-lg-center mt-3">
                        <p>&copy; {new Date().getFullYear()} Germoneys. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
