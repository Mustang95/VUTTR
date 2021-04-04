import styled from 'styled-components'
export const Header = styled.header`
	margin: 1rem;
`
export const Typography = styled.p`
	margin: 1rem;
	font: ${(props) => props.theme.typography[props.variant].font};
	letter-spacing: ${(props) =>
		props.theme.typography[props.variant].letterSpacing};
	color: ${(props) => props.theme.typography.color};
	opacity: ${(props) => props.theme.typography.opacity};
`
