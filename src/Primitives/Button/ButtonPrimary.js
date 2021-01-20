// import "./button.css"
import styled from '@emotion/styled'

export const ButtonPrimary = styled.button(props => ({
    height: '36px',
    width: '10rem',
    borderRadius: '100px',
    padding: '5px 20px',
    fontFamily: 'inherit',
    fontWeight: '600',
    background: props.type === "tertiary" ? "#222" : 'transparent',
    border: props.type === "primary" ? "2px solid #ff0000" : props.type === "secondary" ? "2px solid rgba(0, 0, 0, 0.1)" : "2px solid #fff",
    color: props.type === "primary" ? "#ff0000" : props.type === "secondary" ? "#222" : "#fff",
    '&:hover': {
        cursor: 'pointer',
        background: props.type === "primary" ? '#ff0000' : props.type === "secondary" ? "#222" : "#fff",
        color: props.type === "primary" ? '#fff' : props.type === "secondary" ? "#fff" : "#222"
    }
}))

/*.button - primary: hover {
    background:#ff0000;
    color: #fff;
}

    .button - secondary: hover {
        border- color: #222;
}

.button - tertiary: hover {
background:#fff;
color: #222;
}*/

    // return (
    //     <StyledButton type={type} className="button-primary"></StyledButton>
    // )
