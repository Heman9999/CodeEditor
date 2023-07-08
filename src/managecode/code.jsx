import {Controlled as CodeMirror} from 'react-codemirror2'
import { useState } from 'react'
import 'codemirror/mode/xml/xml'

export default function Code(){
    const [value,setValue] = useState('')
    return(
        <>
        <CodeMirror
        value={value}
        options={{
            mode : 'xml',
            theme : 'material',
            lineNumbers : true,
            lineWrapping : true,
        }}
        onBeforeChange={(editor,data,val)=>{
            setValue(val)
        }}
         />
        </>
    )
}
