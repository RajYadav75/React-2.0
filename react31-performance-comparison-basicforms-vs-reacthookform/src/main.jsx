import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import HookForm from "./HookForm.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<App />*/}
        {/*<ReactHookFormExample/>*/}
        {/*<NormalForm/>*/}
        <HookForm/>
    </StrictMode>,
)
