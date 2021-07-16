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
  display: grid;
  grid-template-rows: 1fr 12fr 1fr;
  justify-items: center;
  width: 40vw;
  height: 95vh;
  border: 1px solid black;
  margin-bottom: 1em;

  h1{
    align-self: flex-start;
    border: 1px solid black
  }

  /* div{
    align-self: flex-start;
  } */
`

const ChatContainer = styled.div`
  display: grid;
  grid-column-start: 1fr;
  grid-column-end: 2fr;
  /* word-wrap: break-word; */

p{
  display: grid;
  grid-column-start: 1fr;
  grid-column-end: 2fr;
}
`


const InputNome = styled.input`
  height: 2.3em;
  width: 10vw;
  /* margin-left: 1em;
  padding-left: 1em; */
`

const InputMensagem = styled.input`
  height: 2.3em;
  width: 25vw;
  /* margin-left: 1em;
  padding-left: 1em; */
`

const BoaIdeia = styled.div`
  display: flex;
  align-items: flex-end;
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
        <p>
          {item.valorInputNome} {item.valorInputMensagem}
        </p>
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
