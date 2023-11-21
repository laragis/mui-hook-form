import React from 'react'
import MuiTextField from '@mui/material/TextField/index.js'

// text, number, email, phone, password, url

const TextField = React.forwardRef(function TextField(inProps, ref: any) {
  const rootProps = {
    ...inProps,
    ref
  }

  return <MuiTextField {...rootProps} />
})

export default TextField
