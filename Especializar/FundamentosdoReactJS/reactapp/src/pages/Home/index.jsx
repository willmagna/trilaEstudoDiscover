//Um padrão comum no React é que um componente pode 
//retornar múltiplos elementos. 
//Os Fragmentos (Fragment) permitem agrupar uma 
//lista de filhos sem adicionar nós extras ao DOM.
//Fragment:
//<>
//</>

import React, { useState } from 'react'; //permite que cria estado

import './styles.css';

import { Card } from '../../components/Card';

export function Home() {

  const [studentName, setStudentName] = useState(''); //estado
  const [students, setStudents] = useState([]);

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


  return (
    <div className="container">
      
      <header>
        <h1>Nome: {studentName}</h1>
        <div>
            <strong>will.magna</strong>
            <img src="https://avatars.githubusercontent.com/u/18670313?v=4" alt="AvatarPerfil" />
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


