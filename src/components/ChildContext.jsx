import { useContext } from "react";
import LanguageCon from "./LanguageCon";

function ChildContext() {
    let Language=useContext(LanguageCon)
  return (
    <div>
  My name is:{Language}
    </div>
  )
}

export default ChildContext