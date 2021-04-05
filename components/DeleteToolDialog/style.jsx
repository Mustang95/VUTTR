import styled from 'styled-components'

export const ButtonClose = styled.button`
	background: transparent 0% 0% no-repeat padding-box;

	width: 0.75rem;
	height: 0.75rem;

	margin-right: 1.188rem;
	margin-top: ${(props) => (props.LargeMarginTop ? '2.25rem' : '1.25rem')};

	display: flex;
	align-items: center;
	justify-content: flex-end;
	justify-self: flex-end;

	border-style: none;
	:focus {
		outline: 0;
	}
`
export const Button = styled.button`
	margin: ${(props) => (props.lessMargin ? '0' : '1rem')};

	color: ${(props) => props.theme.buttons[props.color + 'Text']};

	/* if you want any change globally pls use GlobalStyle.jsx */
	width: ${(props) => props.theme.buttonSize[props.size].width};
	height: ${(props) => props.theme.buttonSize[props.size].height};
	background: ${(props) => props.theme.buttons[props.color]};

	:hover {
		background: ${(props) => props.theme.buttons[props.color + 'Hover']};
	}
	:active {
		background: ${(props) => props.theme.buttons[props.color + 'Click']};
	}
`
export const Modal = styled.div`
	width: 35.625rem; //rem
	height: 15rem; //rem

	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 1.25rem 1.563rem #0000001a;
	opacity: 1;

	position: absolute;
	top: 5%;
	left: 28.5%;
	//max-height: 616px; //rem
	padding: 0.3em;
	border: 1px solid #ccc;
	transition: 1.1s ease-out;
	filter: blur(0);
	visibility: visible;

	z-index: 300;
`
export const Title = styled.div`
	margin: 1rem;
	flex: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-columns: min-content;
`
export const Actions = styled.div`
	/* margin: 1rem; */
	flex: 1;
	display: grid;

	justify-items: self-end;

	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-auto-columns: min-content;
`
export const Typography = styled.p`
	padding-top: 0.5rem;
	padding-left: ${(props) => (props.normalPaddingLeft ? '1rem' : '0')};
	margin: ${(props) => (props.normalMargin ? '1rem' : '0')};

	font: ${(props) => props.theme.typography[props.variant].font};
	letter-spacing: ${(props) =>
		props.theme.typography[props.variant].letterSpacing};
	color: ${(props) => props.theme.typography.color};
	opacity: ${(props) => props.theme.typography.opacity};
`
