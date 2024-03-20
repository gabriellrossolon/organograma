import '../../index.css'

export const Banner = () => {
    //JSX
    return (
        <header className='text-center max-w-full bg-primaryOne-100'>
            <img src="/assets/banner.png" alt="Banner Principal do Organograma"/>
        </header>   
    )
}


//Função exportada sem escopo global, exportada para o index.js, que então exporta para escopo global