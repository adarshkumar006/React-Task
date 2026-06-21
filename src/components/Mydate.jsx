const Mydate=()=>{
  let dt= new Date();
    return (
        <div>
            <h3>{dt.toString()}</h3>
            <h3>Date:{dt.toDateString()}</h3>
            <h3>Date Formate: {dt.toLocaleDateString()}</h3>
            <h3>Time:{dt.toTimeString()}</h3>
            <h3>Time Formate:{dt.toLocaleTimeString()}</h3>
        </div>
    )
}
export default Mydate;