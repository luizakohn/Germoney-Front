import styles from "./navbar.module.scss"
import classNames from "classnames";

const NavBar = () => {
    return (
        <>
            <nav className={classNames('navbar position-fixed w-100', styles.navBar)}>
                <div className={classNames('container-sm justify-content-center', styles.navbarText)}>
                    <img src="/logoicon.ico" alt="Logo" width="40" height="40"
                         className="d-inline-blockalign-text-bottom"/>
                    Germoneys
                </div>
            </nav>
        </>
    )
}

export default NavBar