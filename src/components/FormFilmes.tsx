import { Button, Container, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Filme } from "../types/Filme";
import { cadastrarFilme } from "../services/api";

export function FormFilmes() {
    // Usando o useForm para registrar os dados e gerenciar a validação
    const { handleSubmit, register, formState: { errors } } = useForm<Filme>();

    // Função chamada ao submeter o formulário
    const handleFormSubmit: SubmitHandler<Filme> = async (data) => {
        try {
            console.log(data);
            await cadastrarFilme(data); 
            window.location.reload();  // Recarrega a página após o cadastro
        } catch (err) {
            console.error("Erro ao cadastrar filme:", err);
        }
    };

    return (
        <section>
            <Container className="mt-5">
                <h2>Cadastrar Filme</h2>
                <Form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control
                            {...register("titulo", { required: "O título é obrigatório" })}  // Validação para título
                            type="text"
                        />
                        {errors.titulo && <span className="text-danger">{errors.titulo.message}</span>}  {/* Exibindo mensagem de erro */}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Ator</Form.Label>
                        <Form.Control
                            {...register("ator", { required: "O ator é obrigatório" })}  // Validação para ator
                            type="text"
                        />
                        {errors.ator && <span className="text-danger">{errors.ator.message}</span>}  {/* Exibindo mensagem de erro */}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Faixa Etaria</Form.Label>
                        <Form.Control
                            {...register("faixa_etaria", { required: "A faixa etária é obrigatória" })}  // Validação para faixa etária
                            type="number"
                        />
                        {errors.faixa_etaria && <span className="text-danger">{errors.faixa_etaria.message}</span>}  {/* Exibindo mensagem de erro */}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Genero</Form.Label>
                        <Form.Control
                            {...register("genero", { required: "O gênero é obrigatório" })}  // Validação para gênero
                            type="text"
                        />
                        {errors.genero && <span className="text-danger">{errors.genero.message}</span>}  {/* Exibindo mensagem de erro */}
                    </Form.Group>

                    <Button variant="primary" type="submit">Cadastrar</Button>
                </Form>
            </Container>
        </section>
    );
}
