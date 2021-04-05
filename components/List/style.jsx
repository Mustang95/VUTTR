import styled from 'styled-components'
export const Grid = styled.div`
	margin: 1rem;
	flex: 1;
	display: grid;
	grid-template-columns: ${(props) =>
		/* props.columns === 2 ? '1fr 1fr' : '1fr'}; */
		props.columns === 3 ? '1fr 1fr 1fr' : '1fr'}; //melhorar
	/* props.columns === 4 ? '1fr 1fr 1fr 1fr' : '1fr'}; */
	/* props.columns === 5 ? '1fr 1fr 1fr 1fr 1fr' : '1fr'}; */
	grid-auto-columns: min-content;

	@media (max-width: 1280px) {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-auto-columns: min-content;
	}

	@media (max-width: 900px) {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: min-content;
	}

	@media (max-width: 600px) {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-columns: min-content;
	}

	@media (max-width: 0px) {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-columns: min-content;
	}
`
export const GridItem = styled(Grid)`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: ${(props) => (props.end ? 'flex-end' : 'flex-start')};
`
export const List = styled.div`
	/* margin: 1rem; */
	flex: 1;
	display: grid;
	grid-template-columns: 1fr; //melhorar
	grid-auto-columns: min-content;
`
export const Typography = styled.p`
	font: ${(props) => props.theme.typography[props.variant].font};
	letter-spacing: ${(props) =>
		props.theme.typography[props.variant].letterSpacing};
	color: ${(props) => props.theme.typography.color};
	opacity: ${(props) => props.theme.typography.opacity};
`
export const Label = styled.label`
	width: 15rem;
	height: 2.125rem;
	padding-left: ​0.5rem;
	padding-top: 0.5rem;
`
export const LabelSwitch = styled.label`
	position: relative;
	display: inline-block;

	width: 3.75rem;
	height: 2.125rem;

	margin-right: 1rem;

	input {
		opacity: 0;
		width: 0;
		height: 0;
	}
`
export const Input = styled.input`
	font: normal normal normal 1.25rem/1.625rem Source Sans Pro;
	letter-spacing: 0.4px;
	color: #b1adb9;
	opacity: 1;

	width: 25rem;
	height: 3.125rem;

	background: #f5f4f6 0% 0% no-repeat padding-box;
	border: 1px solid #ebeaed;
	border-radius: 5px;
	padding: 0.813rem 0px 0.75rem 1.326rem;
	-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
	-moz-box-sizing: border-box; /* Firefox, other Gecko */
	box-sizing: border-box; /* Opera/IE 8+ */

	:focus {
		background: #ebeaed 0% 0% no-repeat padding-box;
		border: 1px solid #dedce1;
		outline: 0;

		font: normal normal normal 1.25rem/1.563rem Source Sans Pro;
		letter-spacing: 0px;
		color: #170c3a;
	}
`

export const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;

	border-radius: 34px;

	:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}
`
export const Switch = styled.input.attrs({ type: 'checkbox' })`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;

	:focus + ${Slider} {
		box-shadow: 0 0 1px #12db89;
	}
	:checked + ${Slider} {
		background-color: #12db89;
	}
	:checked + :before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
`
