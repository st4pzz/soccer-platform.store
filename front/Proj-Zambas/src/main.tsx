import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import './index.css'
import ListarCorretor from './pages/ListarCorretor.tsx'
import ListarPartidas from './pages/ListarTimes.tsx'
import CriarCorretor from './pages/CriarCorretor.tsx'
import LoginComponent from './components/LoginComponent.tsx';
import CriarPartida from './pages/CriarPartida.tsx';

import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
    
  },
  {
    path: "/cadastrar/jogador",
    element: <CriarCorretor/>,
  },
  {
    path: "/cadastrar/time",
    element: <CriarPartida/>,
  },
  
  {
    path: "/listar/partidas",
    element: <ListarPartidas/>,
  },
  {
    path: "/listar/jogadores",
    element: <ListarCorretor/>,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </QueryClientProvider>
)
