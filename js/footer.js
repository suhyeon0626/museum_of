/* ==========================================================================
   my-homepage - 공통 푸터 스크립트
   - 모든 페이지 하단 영역에 저작권, 작성자, 제작일 정보를 동적으로 생성합니다.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // HTML 상의 <footer id="site-footer"></footer> 요소를 탐색
  const footerContainer = document.getElementById('site-footer');
  if (!footerContainer) return;

  // [PRD 기획서 반영] 작성자 및 최초 제작일 정보
  const authorName = '김수현';
  const createdDate = '2026년 07월 28일';

  // 푸터 내부 HTML 구조 작성
  footerContainer.innerHTML = `
    <div class="footer-content">
      <p>🌿 <strong>힐링 박물관 (my-homepage)</strong> — 일상의 스트레스를 해소하는 공간</p>
      <p style="margin-top: 0.4rem; font-size: 0.85rem; opacity: 0.8;">
        제작자: ${authorName} | 제작일: ${createdDate}
      </p>
    </div>
  `;
});