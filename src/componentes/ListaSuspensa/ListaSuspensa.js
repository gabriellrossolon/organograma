import '../../index.css'

export const ListaSuspensa = (props) => {

    return (

        <div className="my-6">
            <label className="block mb-2 text-x1">{props.label}</label>
            <select className='shadow-lg w-full border-none text-xl p-6 box-border'>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}