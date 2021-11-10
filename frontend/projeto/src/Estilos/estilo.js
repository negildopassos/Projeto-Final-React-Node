import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`


body{

  margin:10px;
  
  
}




.tipo{
  
  width: 100%!important;
  cursor: pointer;	
  background: #9BB7D4;
  padding: 8px 5px;
  color: black;
  font-size: 20px;	
  border: 1px solid #fff;	
  margin-bottom: 10px;	
  margin-bottom: 10px;	
  text-shadow: 0 1px 1px #333;
  
  -webkit-border-radius: 1px;
  border-radius: 25px;
  
  transition: all 0.2s linear;
  
}
.tipo:hover{
  background: #4ab3c6;
}

a{
  text-decoration: none;
}

/* esconde as ancoras da tela */
a.links{
  display: none;
}



/* formatando o cabeçalho dos formulários */
h1{
  font-size: 60px;
  color: #black;
  padding: 10px 0;
  font-family: Cafe Françoise;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
}
h1:after{
  content: ' ';
  display: block;
  width: 100%;
  height: 2px;
  margin-top: 10px;
  background: -webkit-linear-gradient(left, rgba(147,184,189,0) 0%,rgba(147,184,189,0.8) 20%,rgba(147,184,189,1) 53%,rgba(147,184,189,0.8) 79%,rgba(147,184,189,0) 100%); 
  background: linear-gradient(left, rgba(147,184,189,0) 0%,rgba(147,184,189,0.8) 20%,rgba(147,184,189,1) 53%,rgba(147,184,189,0.8) 79%,rgba(147,184,189,0) 100%); 
}

p{
  margin-bottom:15px;
}
p:first-child{
  margin: 0px;
}
label{
  color: #405c60;
  position: relative;
}

/**** advanced input styling ****/
/* placeholder */
::-webkit-input-placeholder  {
  color: #bebcbc; 
  font-style: italic;
}
input:-moz-placeholder,
textarea:-moz-placeholder{
  color: #bebcbc;
  font-style: italic;
} 
input {
  outline: none;
}

input:not([type="checkbox"]){
  width: 95%;
  margin-top: 4px;
  padding: 10px;	
  border: 1px solid #b2b2b2;
  
  -webkit-border-radius: 3px;
  border-radius: 3px;
  
  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

/*estilo do botão submit */
input[type="submit"]{
  width: 100%!important;
  cursor: pointer;	
  background: #9BB7D4;
  padding: 8px 5px;
  color: black;
  font-size: 20px;	
  border: 1px solid #fff;	
  margin-bottom: 10px;	
  text-shadow: 0 1px 1px #333;
  
  -webkit-border-radius: 1px;
  border-radius: 25px;
  
  transition: all 0.2s linear;
}
input[type="submit"]:hover{
  background: #4ab3c6;
}



/* estilos para o formulário */
#cadastro, 
#login,
#content,
#Alterar
{
  position: absolute;
  top: 30px;
  width: 40%;	
  
  padding: 18px 6% 60px 6%;
  margin:  0px  400px  ;
  background: #FDAC53;
  border: 10px solid #9BB7D4;

  font-family: Cafe Françoise;
  font-size:25px;
  color:black;
  -webkit-box-shadow: 5px;
  border-radius: 15px;
  
  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

#paracadastro:target ~ #content #cadastro,
#paralogin:target ~ #content #login{
  z-index: 2;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;

  -webkit-animation-delay: .1s;
  animation-delay: .1s;
}
#registro:target ~ #content #login,
#paralogin:target ~ #content #cadastro{
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}



table {
  font-weight: 600;
  min-width: 420px;
  width: 100%;
  color:black;
  font-size:25px;
  border: 10px solid #9BB7D4;


  
  thead {
    display: nome;
    font-weight: 500;
  }
  
  tbody {
    tr {
      border: 1px solid #dad6eb;
      border-radius: 5px;
      display: block;
      padding: 30px;
      margin-bottom: 30px;
      
      td {
        display: block;
        font-weight: 500;
        padding: 5px;
        position: relative;
        text-align: right;
        
        button {
          background: Teal;
          border: none;
          border-radius: 25px;
          box-shadow: 0 4px 8px transparentize(#222, .8);
          bottom: -30px;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          left: 50%;
          padding: 10px 0;
          position: absolute;
          transform: translate(-50%, 50%);
          transition: background .12s ease-out;
          width: 50%;
          margin:3px;

          &:hover,
          &:focus {
            background: lighten(#927cfe, 5%);
            cursor: pointer;
          }
        }
        
      }
    }
  }
}

@media all and (min-width: 400px) {
  table {
    border: 1px solid #eee;
    border-collapse: collapse;
    max-width: 992px;
    text-align: left;
    width: 100%;
    
    thead {
      display: table-header-group;
      
      th {
        padding: 10px;
      }
    }
    
    tbody {
      font-size: .875em;
      
      tr {
        border: none;
        display: table-row;
        
        &:nth-child(odd) {
          background: #eee;
        }
        
        td {
          display: table-cell;
          font-weight: 400;
          padding: 10px;
          text-align: left;
          
          button {
            display: inline-block;
            padding: 10px 15px;
            position: initial;
            transform: translate(0);
            width: auto;
          }
          
          &:before {
            display: none;
          }
          
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
}
`;