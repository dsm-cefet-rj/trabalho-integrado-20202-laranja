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
    return <p>{this.props.text}</p>
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

class Fixos extends Component {
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
          <TextP text="Olá! Esse é o Planejando"/>
          <TextP text="Aqui você pode adicionar seus Ganhos Fixos e Despesas Fixas"/>
        </div>
        <div>
          <TextP text="GANHOS"/>
          <TextLabel text="Estágio: R$"/>
          <Input/> <Button label="Excluir"/> 
          <TextP/>
          <TextLabel text="Bolsa: R$"/>
          <Input/> <Button label="Excluir"/> 
          <TextP/> 
          <Button label="Adicionar ganho mensal"/>
          <Button label="Editar"/>
        </div>
        <div>
          <TextP text="DESPESAS"/>
          <TextLabel text="Aluguel: R$"/>
          <Input/> <Button label="Excluir"/> 
          <TextP/>
          <TextLabel text="Curso: R$"/>
          <Input/> <Button label="Excluir"/> 
          <TextP/>
          <TextLabel text="Academia: R$"/> 
          <Input/> <Button label="Excluir"/> 
          <TextP/>  
          <Button label="Adicionar ganho mensal"/>
          <Button label="Editar"/>
        </div>
        <div>
          <TextP/>
          <ButtonLink label="Próximo passo" link=""/>
        </div>
      </>
    );
  }
}

export default Fixos;