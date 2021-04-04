import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased !important;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

@media (max-width: 430px) {
  html {
    font-size: 81.75%;
  }
}

button {
  cursor: pointer;
  border-radius: 5px;
  opacity: 1;

  text-align: center;
  font: normal normal 600 1.125rem/1.5rem Source Sans Pro;
  letter-spacing: 0.2.25rem;
  color: #ffffff;
  opacity: 1;

  border-style: none;
  margin: 1rem 2rem 1rem 1rem;
  float: right;

  :focus {
    outline: 0;
  }
}
input {
  font: normal normal normal 1.25rem/26px Source Sans Pro;
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

		font: normal normal normal 1.25rem/1.563rem Source Sans Pro;
		letter-spacing: 0px;
		color: #170c3a;
	}
}
`
export default GlobalStyle
