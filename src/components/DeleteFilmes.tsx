import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Filme } from "../types/Filme";
import { deletarFilmes } from "../services/api"; 

export function DeletarFilmes() {
    const { handleSubmit, register, formState: { errors } } = useForm<Filme>();

    const handleFormSubmit: SubmitHandler<Filme> = async (data) => {
        try {
            console.log(data);
            await deletarFilmes(data); 
            window.location.reload(); 
        } catch (err) {
            console.error("Erro ao deletar filme:", err);
        }
    };

    return (
        <section>
            <Container className="mt-5">
                <h2>Deletar Filme</h2>
                <Form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>ID do Filme</Form.Label>
                        <Form.Control
                            {...register("id", { required: "O ID do filme é obrigatório" })} 
                            type="text"
                            placeholder="Digite o ID do filme"
                        />
                        {errors.id && <span className="text-danger">{errors.id.message}</span>}
                    </Form.Group>
                    <Button variant="danger" type="submit">Deletar</Button>
                </Form>
            </Container>
        </section>
    );
}
