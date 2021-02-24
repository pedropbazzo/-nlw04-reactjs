import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://pedropbazzo.blog/images/logo.png" alt="Pedro Bazzo"/>
            <div>
                <strong>Pedro Bazzo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}