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
      <h1>Nome: {studentName}</h1>

      <input  
        type="text" 
        placeholder="Digite o nome..."
        onChange={e => setStudentName(e.target.value)}
      />
        
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => <Card name={student.name} time={student.time}/> )
      }

    </div>
  )
  
}


