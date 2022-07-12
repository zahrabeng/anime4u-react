export default function OrderBy():JSX.Element{
    return(
        <>
        <select>
            <option value="default" disabled>Order By</option>
            <option value="title">Title</option>
            <option value="episodes">Episodes</option>
            <option value="popularity">Popularity</option>
            <option value="rank">Rank</option>
        </select>
        </>
    )
}