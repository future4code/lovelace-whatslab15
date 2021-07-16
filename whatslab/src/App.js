import './App.css';
import styled, { createGlobalStyle } from 'styled-components'
import React from 'react';
import { render } from '@testing-library/react';
import "./components/App.Styled"

const GlobalStyle = createGlobalStyle`
*{
  margin: 10px auto 0 auto;
  overflow: auto
}
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  align-items: center;
  width: 40vw;
  height: 95vh;
  border: 1px solid black;

  /* h1{
    justify-self: flex-start;
  } */

  /* div{
    align-self: flex-start;
  } */
`

const ChatContainer = styled.div`
  /* display: flex;
  justify-content: center;
  background-color: red;
  align-items: flex-start;
  word-wrap: break-word; */
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
  justify-content: flex-end;
  background-color: blue;
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

        <ChatContainer>
          <h1>WHATSLAB</h1>
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
