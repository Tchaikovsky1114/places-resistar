import React, { useState } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UI/Modal';
import GoogleMap from '../../shared/components/UI/GoogleMap';
const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal,setShowConfirmModal] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);


  const toggleWarningModalHandler = () => {
    console.log('toggle!')
    setShowConfirmModal(prev => !prev)
  }
  const confirmDeleteHandler = () => {
    setShowConfirmModal(prev => !prev)
    console.log('Delete!');
  }
  console.log(props.coordinates)
  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="p-0"
        footerClass="text-right"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="2xs:h-48 md:h-80 w-full border border-slate-300">
        <GoogleMap center={props.coordinates} zoom={16} />
        </div>
      </Modal>

      <Modal
      header="please ensure this message"
      footerClass="text-right"
      footer={<>
        <Button inverse
        onClick={toggleWarningModalHandler}>CANCEL</Button>
        <Button danger
        
        onClick={confirmDeleteHandler}>DELETE</Button>
      </>}
      show={showConfirmModal}
      >
        <p>Do you want to proceed and delete this place? </p>
      </Modal>
      <li className="mt-4 bg-slate-50">
        <div className="w-full h-60 mr-6">
          <img
            className="block w-full h-full object-cover"
            src={props.image}
            alt={props.title}
          />
        </div>
        <div className="p-8 text-center">
          <h2 className="mb-2 text-2xl">{props.title}</h2>
          <h2 className="mb-2">{props.address}</h2>
          <h2 className="mb-2">{props.description}</h2>
        </div>
        <div className="p-4 text-center border-t-2 border-gray-200 2xs:flex 2xs:justify-center 2xs:whitespace-nowrap 2xs:items-center 2xs:text-center 2xs:w-full 2xs:p-0 md:block">
          <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger onClick={toggleWarningModalHandler}>DELETE</Button>
        </div>
      </li>
    </>
  );
};

export default PlaceItem;
