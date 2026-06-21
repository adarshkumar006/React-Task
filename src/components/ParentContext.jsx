import { useContext } from "react";
import LanguageCon from "./LanguageCon";

const ParentContext=()=>{
    let Language=useContext(LanguageCon)
    return (
        <div>
            Your Name is:{Language}
        </div>
    )
}
export default ParentContext