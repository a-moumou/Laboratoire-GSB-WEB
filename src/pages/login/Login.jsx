import { useState, useContext } from 'react'
import axios from 'axios'
import { ShopContext } from '/src/context/ShopContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const currentState = 'Login'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { setClientId } = useContext(ShopContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(import.meta.env.VITE_NODEJS_API_BASEURL + '/clients/login',
            {
                email,
                password
            })

            console.log('Réponse de l\'API:', response.data)

            if (response.status === 200 && response.data.client_id) {
                setClientId(response.data.client_id)
                localStorage.setItem("client_id", response.data.client_id)
                toast.success('Connexion réussie !', {
                    position: "top-right",
                    autoClose: 2000
                })

                setTimeout(() => {
                    navigate('/')
                }, 1500)

            }
        } catch (error) {
            console.log(error)
            toast.error('Erreur de connexion', {
                position: "top-right",
                autoClose: 3000
            })
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>{currentState}</p>
                <hr className=' border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentState === 'Login' ? null : <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Name' required />}
            <input
                className='w-full px-3 py-2 border border-gray-800'
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                className='w-full px-3 py-2 border border-gray-800'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                {/* Ajoutez ici des éléments supplémentaires si nécessaire */}
            </div>
            <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4'>
                {currentState === 'Login' ? 'Sign in' : 'Sign up'}
            </button>

            <button
                type="button"
                onClick={() => window.location.href = 'http://localhost:5174/loginAdmin'}
                className='text-gray-600 hover:text-black mt-2'
            >
                Accès Administration
            </button>
        </form>
    )
}

export default Login

