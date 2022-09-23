//Um padrão comum no React é que um componente pode 
//retornar múltiplos elementos. 
//Os Fragmentos (Fragment) permitem agrupar uma 
//lista de filhos sem adicionar nós extras ao DOM.
//Fragment:
//<>
//</>

import React, { useState, useEffect } from 'react'; //permite que cria estado

import './styles.css';

import { Card } from '../../components/Card';

export function Home() {

  const [studentName, setStudentName] = useState(''); //estado
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: ''});

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-BR", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    setStudents(prevState => [...prevState, newStudent]); //princípio da imutabilidade
  }


//Declaração do hook useEffect
useEffect(() => {
  //corpo do useEffect
  //executado automaticamente assim que a interface for renderizada
  fetch('https://api.github.com/users/willmagna')
  .then(response => response.json())
  .then(data => {
    setUser({
      name: data.name,
      avatar: data.avatar_url,
    })
  })
  .catch(error => console.error(error))

}, []); //o array significa a dependencia do estado  


  return (
    <div className="container">
      
      <header>
        <h1>Lista de presença</h1>
        <div>
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="AvatarPerfil" />
        </div>
      </header>

      <input  
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
        
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => (
          <Card 
            key={student.time}
            name={student.name} 
            time={student.time}
          /> 
        ))
      }

    </div>
  )
  
}


