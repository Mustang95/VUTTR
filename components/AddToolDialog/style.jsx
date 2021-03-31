import styled from 'styled-components'
export const Button = styled.button`
	/* top: 103px; */
	/* left: 63px; */
	width: ${(props) => props.theme.buttonSize[props.size].width};
	height: ${(props) => props.theme.buttonSize[props.size].height};
	background: ${(props) => props.theme.buttons[props.color]};
	border-radius: 5px;
	opacity: 1;
`
