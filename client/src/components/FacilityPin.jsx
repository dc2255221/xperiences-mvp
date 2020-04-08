import React from 'react'
import { Icon } from 'semantic-ui-react'
const pinStyle={
  borderRadius: '10px',
  transform: 'matrix(-1, 0, 0, 1, 10, 0)'
}
const FacilityPin = () => {
    return(
      <div>
        <Icon
          size='big'
          style={pinStyle}
         />
      </div>
    )
}
export default FacilityPin