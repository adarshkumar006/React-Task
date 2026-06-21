import styles from './Footer.module.css';
let Header=()=>{

    let title="adarsh";
    let style={'color':'red','font-family':'cursive','backgroundColor':'yellow','fontSize':50};
    return(
        <>
        <h4 style={style}>www.{title}.com</h4>
      {/* <p className="test">hello how are you</p>  error due to same name*/ }
       <p className={`${styles.footertest} ${styles.xyz}`}>hello how are you</p>
        <a className={`${styles.footertest} ${styles.xyz}`} href="#">Home of web page</a>
        </>
    )
}
export default Header;