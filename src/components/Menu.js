import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { changeOption } from "../reducers/optionSlice";
import "../styles/Menu.scss";

function Menu() {
    const option = useSelector((state) => state.option.value);
    const dispatch = useDispatch();

    const changeOptionFunction = (newOption) => (e) => {
        e.preventDefault();
        if (option !== newOption) {
            dispatch(changeOption(newOption));
        }
    };

    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary"
            bg="dark"
            data-bs-theme="dark"
        >
            <Container>
                <Navbar.Brand href="#home">Todo Project</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            eventKey={"tasks"}
                            onClick={changeOptionFunction("tasks")}
                        >
                            Tasks
                        </Nav.Link>
                        <Nav.Link
                            eventKey={"goals"}
                            onClick={changeOptionFunction("goals")}
                        >
                            Goals
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { Menu };
