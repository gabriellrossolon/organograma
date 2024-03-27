import '../../index.css'

export const Time = (props) => {
    return (
        
        <section className="text-center font-bold p-8" style={{ backgroundColor: props.corSecundaria }}> 
            <h3 className="text-3xl border-b-4 border-solid inline-block pb-8" style={{ borderColor: props.corPrimaria }} >{props.nome}</h3>
        </section>
    )
}