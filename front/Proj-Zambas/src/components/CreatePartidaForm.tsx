import { TextField } from '@mui/material';
import { useState } from 'react';


export default function CreatePartidaForm (){

  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");
  const [data, setData] = useState("");
  const [local, setLocal] = useState("");
  const [campeonato, setCampeonato] = useState("");
  const [error, setError] = useState("")

  async function submeter(time1:string,time2:string,data:string,local:string,campeonato:string) {
   
    // Função de submissão
    let response = await fetch("http://localhost:8080/corretor", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        time1: time1,
        time2: time2,
        data: data,
        local: local,
        campeonato: campeonato
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
        label="time 1"
        value={time1}
        onChange={e => setTime1(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="time 2"
        value={time2}
        onChange={e => setTime2(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        type='date'
        
        value={data}
        onChange={e => setData(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Local"
        value={local}
        onChange={e => setLocal(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Campeonato"
        value={campeonato}
        onChange={e => setCampeonato(e.target.value)}
      />
      
      <div className='flex justify-center items-center'>
        <button onClick={()=> submeter(time1,time2,data,local,campeonato)} className='bg-gradient-to-r from-blue-500 to-red-600 hover:text-gray-300 py-3 px-5 text-gray-100 rounded-full'>
          Cadastrar
        </button>
      </div>
    </div>
  );
  }
        
            
            

            