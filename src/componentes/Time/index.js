import '../../index.css'

export const Time = (props) => {
    return (
        <section className="text-center font-bold p-32 bg-fundoum-100">
            <h3 className="text-4xl border-b-4 border-solid border-programacao-100 inline-block pb-8">{props.nome}</h3>
        </section>
    )
}