import { useContext } from "react"
import { dataManager } from "../dataManager/context"

export default function OutputContainer(){
    const {xml,css,js} = useContext(dataManager)
    const src = `
                    <html>
                        <body>${xml}</body>
                        <style>${css}</style>
                        <script>${js}</script>
                    </html>
                `
    return(
        <>
        {console.log(css)}
        <div className="outputContainer">
            <iframe
            srcDoc={src}
            title="Hello"
            sandbox="allow-scripts"/>
        </div>
        </>
    )
}