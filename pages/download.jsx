import Header from "@/components/Header";
import MainLayout from "@/layout/MainLayout";
import styles from "@/styles/pages/download.module.css";
import Head from "next/head";

export default function Download() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <meta name="description" content="Gerencie sua empresa de forma eletrônica, gratuita e eficiente com o Hermes." />
        <meta name="keywords" content="hermes, business, pro, projeto, curso, renato, ovidio" />
        <meta name="author" content="Renato Augusto" />

        <title>Baixe o Hermes</title>
        <link rel="shortcut icon" href="img/Hermes.png" />
      </Head>
      <Header />
      <MainLayout id={styles.main}>
        <p>Escolha sua plataforma preferida</p>
        <div>
          <a onClick={() => window?.alert('Em construção')}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg" />
          </a>
          <a onClick={() => window?.alert('Em construção')}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1745px-Android_robot.svg.png" />
          </a>
          <a onClick={() => window?.alert('Em construção')}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png" />
          </a>
        </div>
      </MainLayout>
    </>
  );
}
