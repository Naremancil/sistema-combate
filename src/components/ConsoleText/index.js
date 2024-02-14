import './consoletext.css'
import { useState, useEffect, useRef } from 'react'

const ConsoleText = ({ novaMensagem }) => {
    const [log, logText] = useState('')
    const textareaRef = useRef(null);


    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
      }
    }, [novaMensagem]);


    useEffect(() => {
        if(novaMensagem) logText((oldLog) => oldLog + novaMensagem + '\n')
    }, [novaMensagem])

    
    return (
        <section className='consoleText'>
            <textarea
                ref={textareaRef}
                rows={10}
                cols={50}
                value={log}
                readOnly
            ></textarea>
        </section>
    )
}

export default ConsoleText