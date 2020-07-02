//** @jsx jsx */

import React from 'react'
import {jsx, Box} from 'theme-ui';

const Code = ({children}) => {

	return (
		<Box as="code" sx={{color: 'codeText', bg: 'codeBG', fontSize: 3, fontFamily: "Roboto Mono", p: 1, px: 2, mt: 0, borderRadius: '4px' }}>
			{children}
		</Box>
	)
}

export default Code; 
