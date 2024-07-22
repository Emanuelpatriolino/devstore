import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home"
import Produtos from "../Pages/Produtos/Produtos";

function Rotas (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/produtos" element={ <Produtos/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;