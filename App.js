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

class Text extends Component {
  render() {
    return <p>{this.props.text}</p>
  }
}

class App extends Component {
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
          <Text text="O que é o Planejando?"/>
          <Text text="Um jovem universitário é contratado em seu primeiro estágio, abre sua primeira conta e passa a ser remunerado. Entretanto, a maioria dos jovens nunca aprendeu como organizar suas finanças, podendo cair em endividamentos. O planejamento financeiro é essencial em todas as idades e faixas de remuneração. Para auxiliar nessa tarefa, nossa plataforma vem para ajudar a monitorar seus ganhos e gastos de forma prática e visual."/>
        </div>
      </>
    );
  }
}

export default App;