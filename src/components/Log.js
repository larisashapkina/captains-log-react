import { Link } from "react-router-dom";

function Log({log, index}){
return(
        <tr>
            <td>
                {log.mistakesWereMadeToday?(<span>Yes</span>) : (<span>No</span>)}
            </td>
            <td>
                {/* <a href={log.url} target="_blank" rel="noreferrer"> */}
                    {log.captainName}
                {/* </a> */}
            </td>
            <td>
                <Link to={`/logs/${index}`}>{log.title}</Link>
            </td>
        </tr>
    )
}

export default Log;