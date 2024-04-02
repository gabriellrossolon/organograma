import '../../index.css'
import './index.css'

export const Colaborador = () => {
    return (
        // <div className='w-280'>
        //     <div className='bg-f0f0f0-100 rounded-t-lg'> 
        //         <img className='w-24 h-24 rounded-full -mt-24 relative -bottom-12 mx-auto' src='https://github.com/gabriellrossolon.png' alt='Gabriell Rossolon'/>
        //     </div>
        //     <div className='bg-white-100 shadow-lg rounded-b-lg pt-24 pb-16'>
        //         <h4 className='text-primaryOne-100 text-xl font-bold mb-2'>Gabriell</h4>
        //         <h5 className='text-212121-100 text-lg px-4'>Dev Front-End</h5>
        //     </div>
        // </div>

        <div className='colaborador'>
            <div className='cabecalho'> 
                <img src='https://github.com/gabriellrossolon.png' alt='Gabriell Rossolon'/>
            </div>
            <div className='rodape'>
                <h4 className=''>Gabriell</h4>
                <h5 className=''>Dev Front-End</h5>
            </div>
        </div>
        
    )
}