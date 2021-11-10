import { Component } from "react";
import {Link} from 'react-router-dom';
import api from '../../service/api';
export default class Home extends Component{

    state = {
      novoCliente:{
        nome:'',
        idade:'',
        email:'',
        telefone:'',
      },
      cad_nome:'',
      cad_idade:'',
      cad_email:'',
      cad_telefone:'',
    };


    handleNomeChange = e =>{
      this.setState({cad_nome: e.target.value});
    };

    handleIdadeChange = e =>{
      this.setState({cad_idade: e.target.value});
    };

    handleEmailChange = e =>{
      this.setState({cad_email: e.target.value});
    };
    handleTelefoneChange = e =>{
      this.setState({cad_telefone: e.target.value});
    };

    handleOnSubmit = async e =>{
      const {cad_nome,cad_idade,cad_email,cad_telefone} = this.state;  
        e.preventDefault();

        const Cliente = {'nome':cad_nome,'idade':cad_idade,'email':cad_email, 'telefone':cad_telefone}

        await api.post(`/cliente`,Cliente)
        .then(console.log(Cliente))

        alert('Cliente Cadastrado Com Sucesso.');

    }

    render(){

        const {cad_nome,cad_idade,cad_email,cad_telefone} = this.state;

        return(

            <div className="container" >
            
            <div className="content">      
            
              <div id="cadastro" >
                <form onSubmit={this.handleOnSubmit}> 
                  <h1>CADASTRO DE CLIENTES</h1> 
                  
                  <p> 
                    <label >SEU NOME </label>
                    <input required="required"
                         type="text" 
                         placeholder="Digite seu Nome"
                         value={cad_nome}
                         onChange={this.handleNomeChange}/>
                  </p>
                  
                  <p> 
                    <label>SUA IDADE</label>
                    <input required="required"
                         type="text"
                         placeholder="Digite Sua Idade"
                         value={cad_idade}
                         onChange={this.handleIdadeChange}/> 
                  </p>
                  
                  <p> 
                    <label>SEU E-MAIL</label>
                    <input required="required"
                         type="text"
                         placeholder="Digite Seu E-mail"
                         value={cad_email}
                            onChange={this.handleEmailChange}/>
                  </p>

                  <p> 
                    <label>SEU TELEFONE</label>
                    <input required="required"
                         type="text"
                         placeholder="Digite Seu Telefone"
                         value={cad_telefone}
                            onChange={this.handleTelefoneChange}/>
                  </p>
                  
                  <p> 
                    <input type="submit" value="ENVIAR"/> 
                  </p>
                  <button class = "tipo"><Link to='/'>VOLTAR À  PÁGINA  INICIAL</Link></button>
                </form>
              </div>
            </div>
          </div>


        )
    }
}