import React, { useContext } from 'react';
import Placelist from '../components/Placelist';
import {useParams} from 'react-router-dom'
import { PlaceContext } from '../../store/PlaceContext';
const UserPlaces = () => {
  const currentParams = useParams().userId;
  
  const placeCtx = useContext(PlaceContext) 
  const places = placeCtx.items
  // const DUMMY_PLACES = [
  //   {
  //     id:'place-22743454',
  //     title: '전주 한옥 마을',
  //     description:'전통 한옥, 서예 박물관, 전통술 박물관이 있는 문화 마을입니다.',
  //     imageURL:'https://lh5.googleusercontent.com/p/AF1QipMH_S511fGMCBX4Wjx5mgNamkO_oycZScZbp4Oe=w426-h240-k-no',
  //     address:'전라북도 전주시 완산구 풍남동3가 기린대로 99',
  //     location:{
  //       lat:35.8147105,
  //       lng:127.1526312
  //     },
  //     creator:'user-4414'
  //   },
  //   {
  //     id:'place-93645672',
  //     title: '세빛 둥둥섬',
  //     description:'3개의 인공 섬으로 이루어져 있으며, 카페와 레스토랑, 야간 조명 장식이 특징입니다.',
  //     imageURL:'https://lh5.googleusercontent.com/p/AF1QipPuLCiKhVs5DmdSWhAqBlYrRD2CzCWaF67pB2T9=w408-h306-k-no',
  //     address:'서울특별시 서초구 올림픽대로 2085-14(반포동)',
  //     location:{
  //       lat:37.5116807,
  //       lng:126.9947194
  //     },
  //     creator:'user-8716'
  //   },
  //   {
  //     id:'place-58596324',
  //     title: '서울숲공원',
  //     description:'나무가 많고 자전거 도로가 있는 넓은 공원으로 장미, 호수, 나비 정원이 있고 사슴에게 먹이를 줄 수 있습니다.',
  //     imageURL:'https://lh5.googleusercontent.com/p/AF1QipOLUECJXZJqEVIpnSuMWuoSs5_OJJKGZKNKEThs=w408-h272-k-no',
  //     address:'전라북도 전주시 완산구 풍남동3가 기린대로 99',
  //     location:{
  //       lat:37.5443878,
  //       lng:127.0374424
  //     },
  //     creator:'user-3334'
  //   },
  // ]
  const loadedPlaces = places.filter((place) => place.creator === currentParams);
  return (
    
      <Placelist items={loadedPlaces} />
    
  );
};

export default UserPlaces;