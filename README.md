# 개인 웹 포트폴리오

개인 웹 포트폴리오 사이트입니다. GitHub Actions를 통해 자동으로 빌드되고 GitHub Pages에 배포됩니다.

## 🚀 기능

- 반응형 웹 디자인
- 스무스 스크롤 네비게이션
- 모던한 UI/UX 디자인
- GitHub Actions 자동 배포

## 📁 프로젝트 구조

```
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 파일
├── package.json        # 프로젝트 설정 파일
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions 워크플로우
└── README.md           # 프로젝트 문서
```

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js (v18 이상)
- npm 또는 yarn

### 설치 및 실행

1. 저장소 클론
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하여 사이트를 확인할 수 있습니다.

## 🚀 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다.

### 배포 과정
1. `main` 또는 `master` 브랜치에 코드 푸시
2. GitHub Actions가 자동으로 빌드 실행
3. GitHub Pages에 자동 배포

### GitHub Pages 설정
1. GitHub 저장소의 Settings > Pages로 이동
2. Source를 "GitHub Actions"로 설정
3. 워크플로우가 실행되면 자동으로 배포됩니다

## 📝 커스터마이징

### 개인 정보 수정
- `index.html`에서 연락처 정보 수정
- `package.json`에서 author 정보 수정
- `README.md`에서 저장소 URL 수정

### 스타일 수정
- `styles.css`에서 색상, 폰트, 레이아웃 수정

### 기능 추가
- `script.js`에서 JavaScript 기능 추가

## 📄 라이선스

MIT License

## 🤝 기여

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

- 이메일: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- 프로젝트 링크: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)
