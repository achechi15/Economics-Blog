import { github, instagram, logo } from '../assets/index'

export const Footer = () => {
    return (
        <div className="w-full bg-[#02044A] text-gray-300 py-8 px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 place-items-center md:grid-cols-3 border-b-2 border-gray-600 py-8 ">
                <div>
                    <img src={ logo } className='xxs:ml-4 sm:ml-10 ss:ml-10 md:ml-3 opacity-[80%] w-full h-[80px] xxs:h-[40px]' alt='logo'/>
                </div>

                <div>
                    <h6 className="font-bold py-2"><a href='https://www.bancosantander.es/politica-de-cookies' className="underline">Política de Privacidad</a> - <a href='https://www.bancosantander.es/politica-de-cookies' className="underline">Política de cookies</a></h6>

                </div>
                <div>
                    <h6 className="font-bold uppercase py-2">Contacto</h6>
                    <ol className='grid grid-cols-2'>
                        <li className="py-1"><a href='https://github.com/achechi15'><img src={github} className='w-[24px] h-[24px]' /></a></li>
                        <li className="py-1"><a href='https://www.instagram.com/amon.c_/'><img src={ instagram } className='w-[24px] h-[24px]' /></a></li>
                    </ol>
                </div>
                
            </div>
            <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between text-center text-gray-500'>
                <p>GO KYS</p>
            </div>
        </div>
    )
}
