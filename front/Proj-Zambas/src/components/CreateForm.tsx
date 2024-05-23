import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function CreateForm () {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [posicao, setPosicao] = useState("");
  const [idade, setIdade] = useState("");
  const [error, setError] = useState("")

  async function submeter(name:string,time:string,posicao:string,idade:string) {
   
    // Função de submissão
    let response = await fetch("http://localhost:8080/corretor", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: name,
        time: time,
        posicao: posicao,
        idade: idade

        
      }),
    });
    
    if (response.ok) {
      setError("Corretor cadastrado com sucesso!")
      return null
    } else {
      console.error("Falha na requisição:", response.status, response.statusText);
      setError("Erro ao cadastrar Corretor. Verifique suas credenciais.");
      return null;
    }
  };

  return (
    <div className='flex flex-col gap-4 w-1/2'>
      {error ? <div>
        <h3>{error}</h3>
      </div> : null}
      <TextField
        required
        id="outlined-required"
        label="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="time"
        value={time}
        onChange={e => setTime(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Posicao"
        value={posicao}
        onChange={e => setPosicao(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="idade"
        value={idade}
        onChange={e => setIdade(e.target.value)}
      />
      
      <div className='flex justify-center items-center'>
        <button onClick={()=> submeter(name,time,posicao,idade)} className='bg-gradient-to-r from-blue-500 to-red-600 hover:text-gray-300 py-3 px-5 text-gray-100 rounded-full'>
          Cadastrar
        </button>
      </div>
    </div>
  );
}
