import Header from "@/components/Header";
import MainLayout from "@/layout/MainLayout";
import styles from "@/styles/pages/index.module.css";
import Head from "next/head";

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

        <title>Entrada</title>
        <link rel="shortcut icon" href="img/Hermes.png" />
      </Head>
      <Header />
      <MainLayout>
        <div className="LogonSeletor">
          <button className="Opcao ativo" id="RegistroOpcao">cadastrar nova conta</button>
          <button className="Opcao" id="LoginOpcao">entrar em conta existente</button>
        </div>

        <div className="Logon">

          <div id="RegistroMenu" className="LogOption ativo">
            <h1>Criar uma nova conta</h1>
            <form id="RegistroFormulario">
              <label htmlFor="NomeR">Nome</label><br />
              <input className="FormularioCampoPrimario" type="text" id="NomeR" name="nome" placeholder="Ovídio Antoninho Marques" required /><br />

              <label htmlFor="EmpresaR">Empresa</label><br />
              <input className="FormularioCampoPrimario" type="text" id="EmpresaR" name="empresa" placeholder="Nome da empresa" required /><br />

              <label htmlFor="EmailR">E-mail</label><br />
              <input className="FormularioCampoPrimario" type="email" id="EmailR" name="email" placeholder="fulano@email.com" required /><br />

              <label htmlFor="SenhaR">Senha</label><br />
              <input className="FormularioCampoPrimario" type="password" id="SenhaR" name="senha" placeholder="****" required />
              <button className="ExibirSenha" id="ExibirSenhaR" type="button"><i className="fa-solid fa-eye"></i></button><br />

              <input type="hidden" name="tipo" value="empresarial" />

              <div className="LogOptionBotoes">
                <button className="BotaoTerciario" type="reset">Limpar dados</button>
                <button className="BotaoPrimario" type="submit">Realizar cadastro</button>
              </div>
            </form>
          </div>

          <div id="LoginMenu" className="LogOption">
            <h1>Entrar na sua conta</h1>
            <form id="LoginFormulario">
              <label htmlFor="EmailL">E-mail</label><br />
              <input className="FormularioCampoPrimario" type="email" id="EmailL" name="email" placeholder="fulano@email.com" required /><br />

              <label htmlFor="SenhaL">Senha</label><br />
              <input className="FormularioCampoPrimario" type="password" id="SenhaL" name="senha" placeholder="****" required />
              <button className="ExibirSenha" id="ExibirSenhaL" type="button"><i className="fa-solid fa-eye"></i></button><br />

              <input type="hidden" name="tipo" value="login" />
              <div className="LogOptionBotoes">
                <button className="BotaoTerciario" id="BotaoEsqueciMinhaSenha" type="button">Esqueci minha senha</button>
                <button className="BotaoPrimario" type="submit">Entrar</button>
              </div>
            </form>
          </div>

        </div>
      </MainLayout>
    </>
  );
}
