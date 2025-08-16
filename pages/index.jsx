import styles from "@/styles/pages/index.module.css";
import Head from "next/head";
import Header from "@/components/Header";
import MainLayout from "@/layout/MainLayout";

export default function Index() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <meta name="description" content="Gerencie sua empresa de forma eletrônica, gratuita e eficiente com o Hermes." />
        <meta name="keywords" content="hermes, business, pro, projeto, curso, renato, ovidio" />
        <meta name="author" content="Renato Augusto" />

        <title>Hermes</title>
        <link rel="shortcut icon" href="img/Hermes.png" />
      </Head>
      <Header />
      <MainLayout id={styles.main}>
        <section>
          <div>
            <h1>O que é o Hermes?</h1>
            <br />
            <p>O Hermes é uma solução digital integrada com IA desenvolvida especialmente para otimizar a gestão de seus negócios de maneira simples e eficiente.</p>
          </div>
        </section>
        <section>
          <p>O controle do seu negócio na palma da mão.</p>
        </section>
      </MainLayout>
    </>
  );
}
