import { useQuery } from 'react-query';
import axios from 'axios'
import {TableContainer,TableCell,TableRow,Table,TableHead,TableBody,Paper} from '@mui/material';

import Carregando from './Carregando';


export default function DataTable (){

  const { data, isLoading, error } = useQuery("viagens", () => 
        axios.get("http://localhost:8080/corretor").then((res) => res.data)
    );

    if (isLoading) {
        return <Carregando />
    }

    if (error) {
      return <span>Error: {}</span>
  }

    return (
      
        <div style={{ height: 400, width: '100%' }}>
         {!data || data===null || data===undefined ? <p className='font-bold text-red-500 text-4xl'> Não há jogadores para exibir</p> :
          <>
          <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Nome</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Posicao</TableCell>
                        <TableCell align="right">Idade</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row:any) => (
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                        {row.identifier}
                        </TableCell>
                        <TableCell align="right">{row.nome}</TableCell>
                        <TableCell align="right">{row.time}</TableCell>
                        <TableCell align="right">{row.posicao}</TableCell>
                        <TableCell align="right">{row.idade}</TableCell>
                        
                        
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer></>}

      </div>
      )
  }