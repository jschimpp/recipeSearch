import './results.css';

const Results=({results, handleFinalRecipe})=>{

    return(
        <div>
            <ul>
                {results.map((item)=>(
                    <li onClick={()=>{handleFinalRecipe(item.id)}}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Results;