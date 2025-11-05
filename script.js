import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 300, // 가상 사용자 수
    duration: '10m', // 테스트 지속 시간
};

export default function () {
    // GET 요청 보내기(host.docker.internal 가능)
    const response = http.get('http://localhost:8080/posts');

    // 응답 확인
    check(response, {
        "success": (res) => res.status === 200,
    });
}