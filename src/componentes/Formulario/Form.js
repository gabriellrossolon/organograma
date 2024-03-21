import '../../index.css'
import { ListaSuspensa } from '../ListaSuspensa/ListaSuspensa'
import { TextCamp } from '../TextCamp/TextCamp'

export const Form = () => {

    const times =[
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className="flex justify-center my-20">
            <form className=" bg-primaryTwo-100 rounded-lg p-9 shadow-md">
                <h2 className="text-2xl">Preencha os dados para criar o card do colaborador</h2>
                <TextCamp label="Nome" placeholder="Digite seu nome" />
                <TextCamp label="Cargo" placeholder="Digite seu cargo"  />
                <TextCamp label="Imagem" placeholder="Insira o endereço da sua imagem"  />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}