import { useContext } from 'react';
import { UserCardContext } from '../../pages/Profile';
import Spinner from '../Spinner/Spinner';
import Calories from './../../assets/images/calories.svg';
import Carbs from './../../assets/images/carbs.svg';
import Fat from './../../assets/images/fat.svg';
import Protein from './../../assets/images/protein.svg';

/**
 * Component for render user card information
 * 
 * @returns {React.ReactElement}
 */
function UserCardInformations() {
    //get the data from the context 
    const {calorieCount, carbohydrateCount, lipidCount, proteinCount} = useContext(UserCardContext);

    //if there is no data render the spinner component
    if(!calorieCount) {
        return <Spinner />
    }

    return (
        <>
            <div className='user-card-infos'>
                <div>
                    <img alt='' className='' src={Calories} />
                </div>
                <div>
                    <p>{calorieCount}Kcal</p>
                    <p>Calories</p>
                </div>
            </div>

            <div className='user-card-infos'>
                <div>
                    <img alt='' className='' src={Protein} />
                </div>
                <div>
                    <p>{proteinCount}g</p>
                    <p>Proteines</p>
                </div>
            </div>

            <div className='user-card-infos'>
                <div>
                    <img alt='' className='' src={Carbs} />
                </div>
                <div>
                    <p>{carbohydrateCount}g</p>
                    <p>Glucides</p>
                </div>
            </div>

            <div className='user-card-infos'>
                <div>
                    <img alt='' className='' src={Fat} />
                </div>
                <div>
                    <p>{lipidCount}g</p>
                    <p>Lipides</p>
                </div>
            </div>
        </>
    )
}

//no validated props for that component
Error.propTypes = {

}

//no default props for that component
Error.defaultProps = {
    
}

//export UserCardInformations component
export default UserCardInformations