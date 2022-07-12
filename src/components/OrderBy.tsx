interface Iprops{
    setOrderBy: React.Dispatch<React.SetStateAction<string>>
}

export default function OrderBy(props:Iprops):JSX.Element{
    return(
        <>
        <select onChange={(e)=> props.setOrderBy(e.target.value)}>
            <option value="default" disabled>Order By</option>
            <option value="title">Title</option>
            <option value="episodes">Episodes</option>
            <option value="popularity">Popularity</option>
            <option value="rank">Rank</option>
        </select>
        </>
    )
}