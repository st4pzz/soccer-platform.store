import { useQuery, } from 'react-query';
import axios from 'axios'
import {TableContainer,TableCell,TableRow,Table,TableHead,TableBody,Paper,} from '@mui/material';

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
          {!data || data===null || data===undefined ? <p className='font-bold text-red-500 text-4xl'> Não há partidas para exibir </p> :
          <>
          <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Time 1</TableCell>
                        <TableCell align="right">Time 2</TableCell>
                        <TableCell align="right">Data</TableCell>
                        <TableCell align="right">Local</TableCell>
                        <TableCell align="right">Campeonato</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row:any) => (
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                        {row.identifier}
                        </TableCell>
                        <TableCell align="right">{row.time1}</TableCell>
                        <TableCell align="right">{row.time2}</TableCell>
                        <TableCell align="right">{row.data}</TableCell>
                        <TableCell align="right">{row.local}</TableCell>
                        <TableCell align="right">{row.campeonato}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer></>}
        
      
          

      </div>
      )
  }