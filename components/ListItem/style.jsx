import styled from 'styled-components'

export const Card = styled.div`
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 5px 7px #0000000d;
	border: 1px solid #ebeaed;
	border-radius: 5px;
	opacity: 1;

	position: relative;
	left: 0;
	right: 0;
	margin: 0rem 2rem 2rem 2rem;
	height: 12.625rem; //15.625rem 250px
`
export const Title = styled.div`
	/* margin: 1rem; */
	flex: 1;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-columns: min-content;
`
export const ButtonClose = styled.button`
	background: transparent 0% 0% no-repeat padding-box;

	width: 0.75rem;
	height: 0.75rem;

	margin-right: 1.188rem;
	margin-top: 1.25rem;

	display: flex;
	align-items: center;
	justify-content: center;

	border-style: none;
	:focus {
		outline: 0;
	}
`
export const TitleAction = styled.button`
	text-align: start;

	margin: ${(props) => (props.lessMargin ? '0' : '1rem')};

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
export const Content = styled.div`
	margin: 0rem 1rem 0rem 1rem;
`
export const Spacer = styled.div`
	margin: 1rem;
`
export const CardFooter = styled.div`
	display: flex;
	justify-content: flex-start;
`
export const Typography = styled.p`
	margin-right: ${(props) => (props.lessMargin ? 0 : '1rem')};
	font: ${(props) => props.theme.typography[props.variant].font};
	letter-spacing: ${(props) =>
		props.theme.typography[props.variant].letterSpacing};
	color: ${(props) => props.theme.typography.color};
	opacity: ${(props) => props.theme.typography.opacity};
`
export const Link = styled.link``
