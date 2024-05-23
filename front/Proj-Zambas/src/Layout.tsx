import {Link} from "react-router-dom"
import Autenticacao from "./auth/autenticacao"


type LayoutProps = {
    texto : string | null
    children : React.ReactNode

}

export default function Layout (props : LayoutProps){
  

    return (
        <Autenticacao>
        <div className="flex flex-col w-screen bg-white ">
            <div className="flex flex-row justify-between px-6 items-center h-16 bg-gradient-to-r from-blue-500 to-red-600">
                <div >
                <p className="text-xl text-gray-200 tracking-wider font-mono ">Soccer Store</p>
                </div>
                <div className="flex flex-row text-lg font-sans text-gray-100 gap-6 ">
                    <Link to="/cadastrar/jogador">
                    <p className="hover:text-gray-400">Cadastrar Jogador</p>
                    </Link>
                    <Link to="/cadastrar/time">
                    <p className="hover:text-gray-400">Criar Partida</p>
                    </Link>
                    <Link to="/listar/partidas">
                    <p className="hover:text-gray-400">Listar Partidas</p>
                    </Link>
                    <Link to="/listar/jogadores">
                    <p className="hover:text-gray-400">Listar Jogadores</p>
                    </Link>
                   

                </div>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-4xl text-blue-500 tracking-wider font-sans mt-8 ">{props.texto}</p>
            </div>

            <div className="flex justify-center m-12">
                {props.children}
            </div>




        </div>
        </Autenticacao>
        
    )


}