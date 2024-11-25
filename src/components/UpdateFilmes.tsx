import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Filme } from "../types/Filme";
import { atualizarFilme } from "../services/api";

export function UpdateFilmes() {
    const { handleSubmit, register, formState: { errors } } = useForm<Filme>();

   
    const handleFormSubmit: SubmitHandler<Filme> = async (data) => {
        try {
            console.log(data);
            await atualizarFilme(data);
            window.location.reload();  
        } catch (err) {
            console.error("Erro ao atualizar filme:", err);
        }
    };

    return (
        <section>
            <Container className="mt-5">
                <h2>Atualizar Filme</h2>
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

                    <Form.Group className="mb-3">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                            {...register("titulo", { required: "O título é obrigatório" })} 
                             type="text"
                        />
                        {errors.titulo && <span className="text-danger">{errors.titulo.message}</span>}  
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Ator</Form.Label>
                        <Form.Control
                            {...register("ator", { required: "O ator é obrigatório" })} 
                            type="text"
                        />
                        {errors.ator && <span className="text-danger">{errors.ator.message}</span>} 
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Faixa Etaria</Form.Label>
                        <Form.Control
                            {...register("faixa_etaria", { required: "A faixa etária é obrigatória" })}  
                            type="number"
                        />
                        {errors.faixa_etaria && <span className="text-danger">{errors.faixa_etaria.message}</span>} 
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Genero</Form.Label>
                        <Form.Control
                            {...register("genero", { required: "O gênero é obrigatório" })} 
                            type="text"
                        />
                        {errors.genero && <span className="text-danger">{errors.genero.message}</span>}  
                    </Form.Group>

                    <Button variant="primary" type="submit">Atualizar</Button>
                </Form>
            </Container>
        </section>
    );
}
