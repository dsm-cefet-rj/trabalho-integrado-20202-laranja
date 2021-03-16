import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  render() {
    return <button>{this.props.label}</button>
  }
}
class TextLink extends Component {
  render() {
    return <a href={this.props.link}>{this.props.text}</a>
  }
}
class Title extends Component {
  render() {
    return <h2>{this.props.text}</h2>
  }
}
class TextLabel extends Component {
  render() {
    return <label>{this.props.text}</label>
  }
}
class TextP extends Component {
  render() {
    return <p className={this.props.className}>{this.props.text}</p>
  }
}
class Input extends Component {
  render() {
    return <input></input>
  }
}
class ButtonLink extends Component {
  render() {
    return(
      <form action={this.props.link}>
        <button>{this.props.label}</button>
      </form>
    );
  }
}

class Extrato extends Component {
  render() {
    return (
      <>
        <div id="barra" className="menu">
          <Title text="PLANEJANDO"/>
          <TextLink text="Início"/>
          <TextLink text="Cadastre-se"/>
          <TextLink text="Login"/>
        </div>
        <div className="textop">
          <TextP text="Aqui você pode ver seu extrato mensal e anual"/>
        </div>
        <div>
          <Title text="Entradas, Despesas e Saldo:"/>
          <TextP className="positivo" text="R$--,--"/>
          <TextP className="negativo" text="R$--,--"/>
          <TextP text="Total:"/>
          <TextP text="R$--,--"/>
        </div>
        <div>
          <Title text="Gráficos"/>
        </div>
        <div>
          <TextP/>
          <ButtonLink label="Voltar"/>
        </div>
      </>
    );
  }
}

export default Extrato;