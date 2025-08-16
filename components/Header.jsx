import { useState, useEffect } from 'react';
import styles from "@/styles/components/Header.module.css";
import Button from "@/components/Button";
import Link from "next/link";
import {
    BsBoxArrowLeft,
    BsDownload,
    BsFire,
    BsList,
    BsToggles
} from "react-icons/bs";
import Tippy from '@tippyjs/react';

export default function Header() {
    const [loggedUser, setLoggedUser] = useState(undefined);

    useEffect(() => {
        const storedValue = sessionStorage.getItem('loggedUser');
        if (storedValue) {
            setLoggedUser(storedValue);
        }
    }, []);

    return (<>
        <div className={styles.blankSpace} />
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
                    theme="dropdown"
                    arrow={false}
                    trigger="click"
                    animation="scale-extreme"
                    interactive={true}
                    content={<>
                        {
                            (
                                typeof process !== 'undefined' && 
                                typeof process.versions === 'object' && 
                                process.versions.hasOwnProperty('electron')
                            ) 
                            ||
                            <Link href="download">
                                <BsDownload />
                                Baixar aplicativo
                            </Link>
                        }
                        {
                            loggedUser == undefined ? 
                                <Link href="login">
                                    <BsFire />
                                    Começar!
                                </Link>
                            :
                                <>
                                <Link href="dashboard">
                                    <BsToggles />
                                    Painel de controle
                                </Link>
                                <Link>
                                    <BsBoxArrowLeft />
                                    Sair
                                </Link>
                                </>
                        }
                    </>}
                >
                    <BsList />
                </Tippy>
            </div>
        </header>
    </>)
}