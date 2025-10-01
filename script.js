// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 네비게이션 메뉴 스무스 스크롤 기능
    initSmoothScroll();
    
    // CTA 버튼 클릭 이벤트
    initCtaButton();
    
    // 스크롤 시 네비게이션 배경 투명도 변경
    initScrollEffect();
});

/**
 * 네비게이션 메뉴의 스무스 스크롤 기능을 초기화
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // 네비게이션 높이를 고려한 오프셋
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * CTA 버튼 클릭 시 프로젝트 섹션으로 스크롤
 */
function initCtaButton() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const projectsSection = document.querySelector('#projects');
            
            if (projectsSection) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = projectsSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

/**
 * 스크롤 시 네비게이션 배경 투명도 변경 효과
 */
function initScrollEffect() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        // 스크롤 위치에 따라 배경 투명도 조절
        if (scrollTop > 100) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.backgroundColor = '#fff';
            nav.style.backdropFilter = 'none';
        }
    });
}

/**
 * 페이지 로드 애니메이션 효과
 */
function initPageLoadAnimation() {
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
}

// 페이지 로드 시 애니메이션 실행
window.addEventListener('load', initPageLoadAnimation);
