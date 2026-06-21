import PropTypes from 'prop-types';//package not install
const Student=({name,course,age})=>{
    return(
        <div>
            <p>Name:{name}</p>
               <p>Course:{course}</p>
                <p>Age:{age}</p>
        </div>
    )}
    export default Student;

{/*    function Student(props){

            return(
                    <div>
                        <h2>{props.name}</h2>
                        <h2>Age:{props.age}</h2>
                        <p>Active:{props.isActive ? "yes" : "no"}</p>
                    </div>
            )};

        Student.propTypes={
            name:PropTypes.string.isRequired,
            age:PropTypes.number,
            isActive:PropTypes.bool
        };
         export default Student;
*/}
         {/*const Student=(props)=>{
console.log(props);
    return(
        <div>
            <p>Name:{props.name}</p>
             <p>Name:{props.course}</p>
              <p>Name:{props.age}</p>
        </div>
    )}
    export default Student;
*/}

