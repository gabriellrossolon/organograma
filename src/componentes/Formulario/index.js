import '../../index.css'
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'
import { TextCamp } from '../TextCamp'

export const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="flex justify-center my-20">
            <form onSubmit={aoSalvar} className=" bg-primaryTwo-100 rounded-lg p-9 shadow-md">
                <h2 className="text-2xl">Preencha os dados para criar o card do colaborador</h2>
                <TextCamp obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <TextCamp obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"  />
                <TextCamp obrigatorio={true} label="Imagem" placeholder="Insira o endereço da sua imagem"  />
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}