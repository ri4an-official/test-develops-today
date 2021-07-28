import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../models/mainReducer'
import './../styles/loader.css'
import { Template } from '../components/Template'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Template title='Test assingment'>
                <Component {...pageProps} />
            </Template>
        </Provider>
    )
}
export default MyApp
