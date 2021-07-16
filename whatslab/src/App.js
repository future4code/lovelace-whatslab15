import './App.css';
import styled, { createGlobalStyle } from 'styled-components'
import React from 'react';
import { findByLabelText, render } from '@testing-library/react';
import "./components/App.Styled"

const GlobalStyle = createGlobalStyle`
*{
  margin: 10px auto 0 auto;
  overflow: auto;
  max-width: 100%;
}
`

const MainContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 11fr 1fr;
  justify-items: center;
  width: 40vw;
  height: 95vh;
  border: 1px solid black;
  margin-bottom: 1em;

  h1{
    align-self: flex-start;
  }
`

const ChatContainer = styled.div`
  display: flex;


  /* grid-column-start: 1fr;
  grid-column-end: 2fr; */

/* p{
  display: grid;
  grid-column-start: 1fr;
  grid-column-end: 2fr;
} */
`
const BoaIdeia = styled.div`
  display: flex;
`

const InputNome = styled.input`
  /* height: 2em; */
  width: 100px;
`

const InputMensagem = styled.input`
  /* height: 2em; */
  flex-grow: 1
`
  
export class App extends React.Component {

  state = {

    form: [
      {
      valorInputNome: "",
      valorInputMensagem: ""
      }
    ]
    
  }

  onChangeInputNome = (event) => {
    console.log(event.target.value)
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputMensagem = (event) => {
    console.log(event.target.value)
    this.setState({valorInputMensagem: event.target.value})
  }

  addMensagem = () => {

    const newMessage = {
      valorInputNome: this.state.valorInputNome,
      valorInputMensagem: this.state.valorInputMensagem
    }
  
  const novaMensagem = [...this.state.form, newMessage]

  this.setState({
    form: novaMensagem,
    valorInputMensagem: ""
    })
  }

  render() {

    const conversa = this.state.form.map((item) => {

      return (
        <span>
          {item.valorInputNome} {item.valorInputMensagem}
        </span>
      )
    })



    return (
      <MainContainer> {/* início tag pai */}

        <GlobalStyle/>

        <h1>WHATSLAB</h1>

        <ChatContainer>
          <p>{conversa}</p>
        </ChatContainer>

        <BoaIdeia> {/* início do formulário */}

          <InputNome
            placeholder={"Nome"}
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
          />
          <InputMensagem
            placeholder={"Mensagem"}
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
          />
          <button onClick={this.addMensagem}>Enviar</button>

        </BoaIdeia> {/* final do formulário */}

      </MainContainer> /* final tag pai */
    )

  }
}

export default App;
