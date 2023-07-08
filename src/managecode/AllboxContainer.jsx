import Box from "./box"



export default function AllBoxContainer(){
    return(
        <>
        <div className="AllBoxContainer">
            <Box title='html' mode="xml" />
            <Box title='css'mode="css"/>
            <Box title='javascript' mode="javascript"/>
        </div>
        </>
    )
}