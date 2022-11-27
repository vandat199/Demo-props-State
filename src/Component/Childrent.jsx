export default function Child(props) {
    const changeText = (e) => {
        props.handleChange(e.target.value)
    }
    return(
        <>
           <div style={{margin:'50px'}}>
            <h4>I am Child : </h4>
            <input onChange={(e)=> changeText(e)} type="text" name="" id="" />
            <h1>{props.name}</h1>
           </div>
        </>
    )
}