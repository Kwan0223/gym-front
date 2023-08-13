import React, { useEffect, useState } from 'react';

const KakaoMap = ({ address }) => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (window.kakao && window.kakao.maps && map !== null) {
            // 주소-좌표 변환 객체를 생성합니다
            const geocoder = new window.kakao.maps.services.Geocoder();

            // 주소로 좌표를 검색합니다
            geocoder.addressSearch(address, function(result, status) {
                // 정상적으로 검색이 완료됐으면
                if (status === window.kakao.maps.services.Status.OK) {
                    const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                    // 결과값으로 받은 위치를 마커로 표시합니다
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: coords
                    });

                    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                    map.setCenter(coords);
                }
            });
        }
    }, [address, map]);

    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
            const options = { //지도를 생성할 때 필요한 기본 옵션
                center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
                level: 3 //지도의 레벨(확대, 축소 정도)
            };

            // 지도 생성 및 객체 리턴
            const mapInstance = new window.kakao.maps.Map(container, options);
            setMap(mapInstance);
        }
    }, []);

    return (
        <div id="map" style={{width: '100%', height: '100%'}}></div>
    );
};

export default KakaoMap;
