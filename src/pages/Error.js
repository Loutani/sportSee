import { useContext } from "react"
import { ShowNavBarContext } from "../App"

/**
 * Component for render the Error page
 * 
 * @returns {React.ReactElement}
 */
function Error() {
    //context to use the show nav bar global state
    const showNavBar = useContext(ShowNavBarContext);

    //hide the nav bar and side bar by set the state to false
    showNavBar.setShow(false);

    return (
        <div class="error-page">
            <h1>ERROR 404</h1>
            <p>Something went wrong</p>
            <p>Go to <a href="/">Home</a> page</p>
        </div>
    )
}

//no validated props for that component
Error.propTypes = {

}

//no default props for that component
Error.defaultProps = {

}

//export Error component
export default Error