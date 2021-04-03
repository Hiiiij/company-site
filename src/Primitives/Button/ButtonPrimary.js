import styled from '@emotion/styled'

export const ButtonPrimary = styled.button(props => ({
    height: '3.25rem',
    width: '16rem',
    borderRadius: '100px',
    padding: '12px 29px',
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

