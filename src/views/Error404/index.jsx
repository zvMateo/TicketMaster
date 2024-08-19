// import { useRouteError } from 'react-router-dom'; 

import styles from './Error404.module.css'; // Importa el módulo CSS

const ErrorPage = () => {
    

    console.log(error);
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorTitle}>404</h1>
            <p className={styles.errorMessage}>Oops! La pagina que buscas no existe.</p>
            <a href="/" className={styles.homeLink}>Volver a inicio</a>
        </div>
    );
};

export default ErrorPage;
