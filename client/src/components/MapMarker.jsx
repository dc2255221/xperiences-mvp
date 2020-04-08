import React from 'react';
import { PushpinFilled } from '@ant-design/icons';

const MapMarker = (({ name, key }) => {
  return (
    <div key={key}>
      <span>{name}</span>
      <PushpinFilled className="font-1-5" style={{ fontSize: '20px', color: '#fa0210'}}/>
    </div>
  );
});

export default MapMarker;