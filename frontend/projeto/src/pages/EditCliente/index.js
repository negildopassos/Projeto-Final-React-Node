import React, {Component}from 'react'
import {Link} from 'react-router-dom';
import api from '../../service/api';

export default class EditCustomers extends Component{
    
  state = {
    id:this.props.match.params.id,
    cad_nome:'',
    cad_idade:'',
    cad_email:'',
    cad_telefone:'',

};

  componentDidMount = async e =>{
   
    const response = await api.get(`/cliente/${this.state.id}`)
    
    this.setState({
      cad_nome:response.data.nome,
      cad_idade:response.data.idade,
      cad_email:response.data.email,
      cad_telefone:response.data.telefone,
    })
    
    console.log(response);
  }

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
   const {id,cad_nome,cad_idade,cad_email,cad_telefone} = this.state;  
    
    e.preventDefault();

    const Cliente = {'id': Number(id),'nome':cad_nome,'idade':cad_idade,'email':cad_email,'telefone':cad_telefone}

    await api.put(`/cliente`,Cliente)

    .then(console.log(Cliente))

    alert('Dados Do Cliente Editados Com Sucesso.');    
}

  render(){

        const {id,cad_nome,cad_idade,cad_email,cad_telefone} = this.state;
        
        return (
            

            <div className="container" >
            
            <div className="content">      
            
              <div id="Alterar">
                <form onSubmit={this.handleOnSubmit}> 
                  <h1>ALTERAR CADASTRO</h1> 
                  
                  <p> 
                    <label htmlFor="id_cad">ID</label>
                    <input id="id_cad" 
                    name="id_cad" 
                    type="number"
                    readOnly value={id}/>
                  </p>  
        
                  <p> 
                    <label htmlFor="nome_cad">SEU NOME</label>
                    <input id="nome_cad" 
                      name="nome_cad" 
                      required="required" 
                      type="text" 
                      placeholder="Digite seu nome" 
                      value={cad_nome}
                      onChange={this.handleNomeChange}/>
                  </p>
                  
                  <p> 
                    <label htmlFor="idade_cad">SUA IDADE</label>
                    <input id="idade_cad" 
                      name="idade_cad" 
                      required="required" 
                      type="text" 
                      placeholder="Digite sua idade" 
                      value={cad_idade}
                      onChange={this.handleIdadeChange}/> 
                  </p>
                  
                  <p> 
                    <label htmlFor="email_cad">SEU E-MAIL</label>
                    <input id="emeil_cad" 
                      name="email_cad"
                       required="required"
                        type="text"
                         placeholder="Digite seu email"
                          value={cad_email}
                          onChange={this.handleEmailChange}/>
                  </p>

                  <p> 
                    <label htmlFor="telefone_cad">SEU  TELEFONE</label>
                    <input id="telefone_cad" 
                      name="telefone_cad"
                       required="required"
                        type="text"
                         placeholder="Digite seu Telefone"
                          value={cad_telefone}
                          onChange={this.handleTelefoneChange}/>
                  </p>
                  
                  <p> 
                    <input type="submit" value="EDITAR"/> 
                  </p>
                  <button class = "tipo"><Link to='/'>VOLTAR À  PÁGINA  INICIAL</Link></button>
                </form>
              </div>
            </div>
          </div>
           )
    }
}