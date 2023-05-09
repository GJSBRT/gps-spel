import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import CodeForm from './CodeForm'

export default function() {
    return (
        <div className='flex flex-col h-full'>
            <h1 className='pt-16 text-center text-4xl font-medium'><FontAwesomeIcon icon={faLocationDot} /> GPS Spel</h1>

            <div className='my-auto pb-16 flex flex-col'>
                <h2 className='text-center text-2xl font-medium mb-2'>Vul een code in</h2>
                <CodeForm/>
            </div>
        </div>
    )
}