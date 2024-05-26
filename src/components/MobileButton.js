import Button from "react-bootstrap/Button";
import "../styles/MobileButton.scss";

function MobileButton() {
    return (
        <>
            <Button variant="info" className="btn-addgoal">
                Add
            </Button>
        </>
    );
}

export { MobileButton };
