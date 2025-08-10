import { useState, useEffect } from 'react';
import styles from "@/styles/components/Header.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import Tippy from '@tippyjs/react';

export default function Header() {
    const [loggedUser, setLoggedUser] = useState(undefined);

    useEffect(() => {
        const storedValue = sessionStorage.getItem('loggedUser');
        if (storedValue) {
            setLoggedUser(storedValue);
        }
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href=".">
                    Hermes
                </Link>
            </div>
            <ul className={styles.list}>
                {
                    (
                        typeof process !== 'undefined' && 
                        typeof process.versions === 'object' && 
                        process.versions.hasOwnProperty('electron')
                    ) 
                    ||
                    <li>
                        <Button href="download" hierarchy={3}>Baixar aplicativo</Button>
                    </li>
                }
                {
                    loggedUser == undefined ? 
                        <li>
                            <Button href="login" hierarchy={2}>Começar!</Button>
                        </li>
                    :
                        <>
                        <li>
                            <Button href="dashboard" hierarchy={3}>Painel de controle</Button>
                        </li>
                        <li>
                            <Button hierarchy={3} onClick={() => {alert('nao')}}>Sair</Button>
                        </li>
                        </>
                }
            </ul>
            <div className={styles.menuIcon}>
                <Tippy 
                    arrow={false}
                    trigger="click"
                    animation="scale-extreme"
                    interactive={true}
                    content={<>
                        <p>Baixar aplicativo</p>
                        <p>Painel de controle</p>
                        <p>Começar</p>
                        <p>Sair</p>
                    </>}
                >
                    <BsList />
                </Tippy>
            </div>
        </header>
    )
}