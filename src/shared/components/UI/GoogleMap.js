import React, {useRef,useEffect} from 'react';

const GoogleMap = (props) => {
  const mapRef = useRef();
  const {center,zoom} = props;
  
  useEffect(()=>{
    const map = new window.google.maps.Map(mapRef.current,{
      center:center,
      zoom:zoom
    });
    
    new window.google.maps.Marker({position: center, map:map})
  
  },[center,zoom])
  return (
    <div ref={mapRef} className={`w-full h-full `}>
      
    </div>
  );
};

export default GoogleMap;