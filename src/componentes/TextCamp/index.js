import '../../index.css'

export const TextCamp = (props) => {

    const placeHolderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="my-6 ">
            <label className="block mb-2 text-x1">
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} className="bg-white shadow-lg w-full border-none text-xl p-6 box-border" placeholder={placeHolderModificada}/>
        </div>
    )
    
}