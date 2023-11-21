import React from 'react'
import MuiTextField from '@mui/material/TextField/index.js'

const LocationField = React.forwardRef(function LocationField(inProps, ref: any) {
  const rootProps = {
    ...inProps,
    ref
  }

  return <MuiTextField {...rootProps} />
})

export default LocationField
