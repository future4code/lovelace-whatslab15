import styled, { createGlobalStyle } from 'styled-components'
import React from 'react';
import { findByLabelText, render } from '@testing-library/react';
import "./components/App.Styled"
import sendButton from './img/send01.png'

const GlobalStyle = createGlobalStyle`
*{
  overflow: auto;
  max-width: 100%;
}
`

const MainContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100vh;
  border: 1px solid black;
  margin: auto;

  h1, h6{
    align-self: center;
    margin-top: 0;
  }
`

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  padding: 10px;

`

const BoaIdeia = styled.div`
  display: flex;
`

const InputNome = styled.input`
  width: 100px;
`

const InputMensagem = styled.input`
  flex-grow: 1;
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
    this.setState({ valorInputNome: event.target.value })
  }

  onChangeInputMensagem = (event) => {
    console.log(event.target.value)
    this.setState({ valorInputMensagem: event.target.value })
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

    const conversa = this.state.form.map((item, index) => {

      return (
        <p key={index}>
          <strong>{item.valorInputNome}</strong> {item.valorInputMensagem}
        </p>
      )
    })



    return (
      <MainContainer> {/* início tag pai */}

        <GlobalStyle />

        <h1>WHATSLAB</h1>
        <h6>by Felipe & Guilherme</h6>

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
          <button onClick={this.addMensagem} src={sendButton}>
            Enviar
            </button>

        </BoaIdeia> {/* final do formulário */}

      </MainContainer> /* final tag pai */
    )

  }
}

export default App;
