import '../../index.css'

export const TextCamp = (props) => {
    return (
        <div className="my-6 ">
            <label className="block mb-2 text-x1">
                {props.label}
            </label>
            <input required={props.obrigatorio} className="bg-white shadow-lg w-full border-none text-xl p-6 box-border" placeholder={props.placeholder}/>
        </div>
    )
    
}