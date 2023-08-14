import IconButton from '../IconButton';
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import styles from './styles.module.css';

function Header() {
    
    const clickHandler = () => {
        void console.log('Something');
    }

    return (
        <header className={styles.header}>
            <section className={styles.headerContent}>
                <div className={styles.titleContainer}>
                    <h3>Fisio</h3>
                    <SearchBar />
                </div>
            </section>
            <section className={styles.navContent}>
                <Navbar />
                <IconButton />
            </section>
        </header>
    )
}

export default Header;