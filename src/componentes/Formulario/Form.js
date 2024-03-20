import '../../index.css'
import { TextCamp } from '../TextCamp/TextCamp'


export const Form = () => {
    return (
        <section className="flex justify-center my-20">
            <form className=" bg-primaryTwo-100 rounded-lg p-9 shadow-md">
                <h2 className="text-2xl">Preencha os dados para criar o card do colaborador</h2>
                <TextCamp label="Nome" placeholder="Digite seu nome" />
                <TextCamp label="Cargo" placeholder="Digite seu cargo"  />
                <TextCamp label="Imagem" placeholder="Insira o endereço da sua imagem"  />
            </form>
        </section>
    )
}