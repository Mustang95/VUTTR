import styled from 'styled-components'

export const Label = styled.label`
	font: ${(props) => props.theme.typography[props.variant].font};
	letter-spacing: ${(props) =>
		props.theme.typography[props.variant].letterSpacing};
	color: ${(props) => props.theme.typography.color};
	opacity: ${(props) => props.theme.typography.opacity};
`
export const Input = styled.input`
	font: normal normal normal 1.25rem/1.625rem Source Sans Pro;
	letter-spacing: 0.4px;
	color: #b1adb9;
	opacity: 1;

	width: 32.5rem;
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

		font: normal normal normal 1.25/1.563rem Source Sans Pro;
		letter-spacing: 0px;
		color: #170c3a;
	}
`

export const Chips = styled.div`
	position: unset;
	/* margin: 0.1rem; */
	div {
		position: inherit;
		display: inline-block;
		height: auto;
		width: auto;
		align-items: flex-start;
		justify-content: flex-start;
	}
	i {
		position: absolute;
		border: 1px solid #ebeaed;
		border-radius: 15px;
		background: #ffffff;
		cursor: pointer;
		z-index: 1000;
	}
	span {
		position: inherit;
		border: 1px solid #ebeaed;
		border-radius: 5px;
		margin: 0.3rem;
		background: #ffffff;
	}
`
export const ChipInput = styled.input`
	font: normal normal normal 1.25rem/1.625rem Source Sans Pro;
	letter-spacing: 0.4px;
	color: #b1adb9;
	opacity: 1;

	width: 32.5rem;
	height: 3.125rem;

	background: #f5f4f6 0% 0% no-repeat padding-box;
	border: none;
	/* border-radius: 5px; */
	padding: 0.813rem 0px 0.75rem 1.326rem;
	-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
	-moz-box-sizing: border-box; /* Firefox, other Gecko */
	box-sizing: border-box; /* Opera/IE 8+ */

	:focus {
		background: #f5f4f6 0% 0% no-repeat padding-box;
		border: none;
		outline: 0;

		font: normal normal normal 1.25/1.563rem Source Sans Pro;
		letter-spacing: 0px;
		color: #170c3a;
	}
`
export const FieldChip = styled.div`
	width: 400px;
	height: auto;
	min-height: 34px;
	border: 2px solid #737679;
	padding: 8px;
	margin: 8px;
	cursor: text;
	border-radius: 3px;

	box-shadow: 0 2px 6px rgba(25, 25, 25, 0.2);
	${Chips} & ${ChipInput} & {
		display: inline-block;
		width: auto;

		background-color: #0077b5;
		color: #fff;
		border-radius: 3px;
		margin: 2px;
		overflow: hidden;
	}
`
export const TextArea = styled.textarea`
	font: normal normal normal 1.25rem/1.625rem Source Sans Pro;
	letter-spacing: 0.4px;
	color: #b1adb9;
	opacity: 1;

	width: 32.5rem;
	height: 3.125rem;

	resize: vertical;

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

		font: normal normal normal 1.25/1.563rem Source Sans Pro;
		letter-spacing: 0px;
		color: #170c3a;
	}
`
export const SnackBar = styled.div`
	visibility: hidden;
	min-width: 250px;
	margin-left: -125px;
	background-color: #333;
	color: #fff;
	text-align: center;
	border-radius: 2px;
	padding: 16px;
	position: fixed;
	z-index: 1;
	left: 50%;
	bottom: 30px;
	font-size: 17px;
`
