import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { ListarFilmes } from "./components/ListaFilmes";
import { FormFilmes } from "./components/FormFilmes";
import { UpdateFilmes } from "./components/UpdateFilmes";
import { DeletarFilmes } from "./components/DeleteFilmes";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/listar" />} />
                <Route path="/listar" element={<ListarFilmes />} />
                <Route path="/cadastrar" element={<FormFilmes />} />
                <Route path="/atualizar" element={<UpdateFilmes />} />
                <Route path="/deletar" element={<DeletarFilmes/>} />
            </Routes>
        </Router>
    );
}

export default App;
