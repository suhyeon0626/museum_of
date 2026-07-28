/* ==========================================================================
   my-homepage - 공통 헤더 네비게이션 스크립트
   - 모든 페이지의 상단 메뉴를 동적으로 생성합니다.
   - 최상위(index.html)와 pages/ 폴더 간 경로 차이를 자동 계산하여 연결합니다.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('site-header');
  if (!headerContainer) return;

  // 1. 현재 파일의 위치에 따른 상대 경로 자동 계산
  const isInPagesDir = window.location.pathname.includes('/pages/');
  const basePath = isInPagesDir ? '../' : './';
  const pagesPath = isInPagesDir ? './' : './pages/';

  // 2. PRD 기획서 기반 메뉴 목록 정의
  const menuItems = [
    { name: '메인', path: `${basePath}index.html`, key: 'index' },
    { name: '귀여운 것', path: `${pagesPath}cute_things.html`, key: 'cute_things' },
    { name: '멋진 것', path: `${pagesPath}great_things.html`, key: 'great_things' },
    { name: '노트', path: `${pagesPath}feeling_note.html`, key: 'feeling_note' }
  ];

  // 3. 네비게이션 DOM 구조 생성
  const navContainer = document.createElement('nav');
  navContainer.className = 'nav-container';

  // 로고 엘리먼트 생성
  const logo = document.createElement('a');
  logo.href = `${basePath}index.html`;
  logo.className = 'nav-logo';
  logo.textContent = '🌿 힐링 박물관';

  // 메뉴 리스트 생성
  const navMenu = document.createElement('ul');
  navMenu.className = 'nav-menu';

  const currentPath = window.location.pathname;

  menuItems.forEach((item) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.path;
    a.textContent = item.name;

    // 현재 페이지 위치 감지 및 활성화(active) 클래스 추가
    const isMain = item.key === 'index' && (currentPath.endsWith('/') || currentPath.endsWith('index.html') || currentPath === '');
    const isOther = item.key !== 'index' && currentPath.includes(item.key);

    if (isMain || isOther) {
      a.classList.add('active');
    }

    li.appendChild(a);
    navMenu.appendChild(li);
  });

  // 최종 DOM 조립 및 헤더에 부착
  navContainer.appendChild(logo);
  navContainer.appendChild(navMenu);
  headerContainer.appendChild(navContainer);
});