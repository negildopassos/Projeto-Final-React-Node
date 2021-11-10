import { Component } from "react";  
import {FaTrash, FaEdit} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import api from '../../service/api';
export default class Home extends Component{

    state = {
        registros:[],
    };

    componentDidMount = async e =>{

        const response = await api.get(`/clientes`); 
        
        response.data.map(res=>{
            const {registros} = this.state;
            
            this.setState({
                registros :[...registros, res],     
            });    
        })

        console.log(this.state.registros);

    }

    deleteCustomer = async (id) =>{


        console.log(id);
		
        await api.delete(`/cliente/${id}`);     

        alert('Cliente Excluido Com Sucesso.');

        this.setState({
            registros:[]
        });

        const response = await api.get(`/clientes`); 
        
        response.data.map(res=>{
            const {registros} = this.state;
            
            this.setState({
                registros :[...registros, res],     
            });    
        })
    }

    
    render(){

        const {registros} = this.state;
        
            return(
                <div id="content" class = "content">
                   
                <h1 >LISTA DE CLIENTES</h1>
                <table>
                <thead >
                   
                    <tr>
                    <th >ID</th>    
                    <th>NOME</th>
                    <th>IDADE</th>
                    <th>E-MAIL</th>
                    <th>TELEFONE</th>
                    <th></th>
                    </tr>
                    
                </thead>
                    <tbody>
                    {registros.map(registro=>(
                            <tr>
                            <td data-label="Id" >{registro.id}</td>
                            <td data-label="Nome" >{registro.nome}</td>
                            <td data-label="Idade" >{registro.idade}</td>
                            <td data-label="Endereco">{registro.email}</td>
                            <td data-label="Telefone">{registro.telefone}</td>
                            <td>
                                
                                <Link to={`/edit/${encodeURIComponent(registro.id)}`}>
									<button><FaEdit/></button>
								</Link>
                                <button onClick={()=>this.deleteCustomer(registro.id)}>
									<FaTrash/>
								</button>
                            </td>
                            </tr>
                        ))}
                </tbody>
                </table>
                <p></p>
                <button class = "tipo"><Link to='/add'>CADASTRAR UM NOVO CLIENTE</Link></button>
                
            </div>
        );
    }
}


