import React, { useRef,useState,useEffect } from 'react';

import Button from './Button';

const ImageUpload = props => {
  const [file,setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState(props.initialImage || null);
  const [isValid, setIsValid] = useState(false);
  const filePickerRef = useRef();
  const pickedHandler = e => {
    let pickedFile
    let fileIsValid = isValid
    if(e.target.files && e.target.files.length === 1){
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      // setIsValid는 호출 스케줄링으로 즉각적으로 값이 바뀌는 것이 아니라
      // 변경 예약이기 때문에, 변수 할당으로 먼저 상태를 즉시 업데이트하게 만든다.
      fileIsValid = true
    }else {
      setIsValid(false)
      fileIsValid = false
    }
    props.onInput(props.id, pickedFile, fileIsValid)
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
    
  };

  useEffect(()=>{
    if(!file) {
      return
    }else{
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      
      // 출력할 수 있는 url을 생성. promise를 생성하지 않음.
      fileReader.readAsDataURL(file);
    }
  },[file,previewUrl])
  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
      />
      <div className={`${props.center && 'flex justify-center items-center flex-col'}`}>
        <div className="w-52 h-52 border border-gray-200 flex justify-center items-center text-center mb-4">
          
          {previewUrl && <img className="w-full h-full object-cover" src={previewUrl} alt="Preview" />}
          
          {!previewUrl && <p>이미지를 설정해주세요!</p>}
        </div>
        <Button type="button" onClick={pickImageHandler}>PICK IMAGE</Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;