import Button from "../Buttons/Button";
import {useHistory} from "react-router-dom";

const NewPlace = () => {
    const history = useHistory();
    return (
        <div>
            <p>Form to create a new place</p>
            <Button onClick={() => history.goBack()}>
                Cancel
            </Button>
        </div>
    )
}

export default NewPlace;
