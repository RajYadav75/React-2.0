import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import ManagingFormReset from "./ManagingFormReset.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/*<App />*/}
        {/*<ReactHookFormExample/>*/}
        {/*<NormalForm/>*/}
        {/*<HookForm/>*/}
        <ManagingFormReset/>
    </StrictMode>,
)
