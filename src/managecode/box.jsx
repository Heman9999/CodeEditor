import { Controlled as MirrorController } from "react-codemirror2"
import { useContext,useState } from "react"
import { dataManager } from "../dataManager/context"


export default function Box({title,mode}){
    const {xml,css,js,setXml,setCss,setJs} = useContext(dataManager)
    const [value,setValue] = useState('')
    return(
        <>
        <div className="codingBox">
            <div className="Box_title">
                <div style={{color :"black"}}>{title}</div>
            </div>
            <div className="Box_item">
                <MirrorController
                className="Code"
                value={mode ==='xml'? xml : mode === 'css' ? css : mode === 'javascript' ? js : value}
                onBeforeChange={(editor,data,value)=>{
                    mode === 'xml' ? setXml(value) : mode === 'css' ? setCss(value) : mode === 'javascript' ? setJs(value) : setValue(value)
                }}
                options={{
                    mode : mode,
                    lineWrapping:true,
                    lineNumbers:true
                }}
                />
            </div>
        </div>
        </>
    )
}