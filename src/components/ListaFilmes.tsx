import { Container, Table } from "react-bootstrap";
import { fetchFilmesData } from "../services/api";
import { useEffect, useState } from "react";
import { Filme } from "../types/Filme";

export function ListarFilmes() {
    const [data, setData] = useState<Filme[]>([]); 

    useEffect(() => {
        fetchFilmesData(setData);
    }, []);

    return (
        <section>
            <Container className="mt-5">
                <h2>Listar Filmes</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Ator</th>
                            <th>Faixa Etaria</th>
                            <th>Genero</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.length > 0 ? (
                            data.map(filme => (
                                <tr key={filme.id?.toString() ?? "0"}>
                                    <td>{filme.id}</td>
                                    <td>{filme.titulo}</td>
                                    <td>{filme.ator}</td>
                                    <td>{filme.faixa_etaria}</td>
                                    <td>{filme.genero}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td></td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </section>
    );
}
