import axios from "axios";
import { Filme } from "../types/Filme";

export async function fetchFilmesData(setData:Function){
    try{
        const response = await axios.get("http://localhost:5000/filmes");
        console.log(response.data);
        setData(response.data);
    }catch(error:any){
        console.error(`Erro ao buscar contatos na api: ${error.message}`);
    }
}

export async function cadastrarFilme(data:Filme){
    try{
        const payload = {
            titulo: data.titulo,
            ator: data.ator,
            faixa_etaria: data.faixa_etaria,
            genero: data.genero
        }

        const response = await axios.post("http://localhost:5000/filmes", payload);
        console.log(response.data);
    }catch(error:any){
        console.log(`Erro ao enviar dados para api: ${error. message}`);
    }
}

export async function atualizarFilme(data: Filme) {
    try {
        const response = await axios.put(
            `http://localhost:5000/filmes/${data.id}`,
            data
        );
        console.log(`Filme atualizado com sucesso:`, response.data);
    } catch (error: any) {
        console.error(`Erro ao atualizar filme na API: ${error.message}`);
    }
}
export async function deletarFilmes(data: Filme) {
    try {
        const response = await axios.delete(
            `http://localhost:5000/filmes/${data.id}`
        );
        console.log(`Filme deletado com sucesso:`, response.data);
    } catch (error: any) {
        console.error(`Erro ao deletar filme na API: ${error.message}`);
    }
}

