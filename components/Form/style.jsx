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
