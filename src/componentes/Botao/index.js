import '../../index.css'

export const Botao = (props) => {
    return (
        <button className=" bg-primaryOne-100 rounded-md font-semibold text-lg p-8 border-none text-white-100 hover:text-lightblue-100">
            {props.children}
        </button>
    )
}