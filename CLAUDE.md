# 임재정 Portfolio 웹사이트

## 프로젝트 개요
임재정 기술이사의 개인 포트폴리오 웹사이트. 20년 이상의 IT 경력(PM, DA, BA)을 소개하는 원페이지 스크롤 방식의 웹사이트로, Vercel에 배포한다.

## 기술 스택
- **Frontend**: Next.js (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes (Route Handlers)
- **Database**: 향후 연동 대비 (Prisma ORM 권장)
- **배포**: Vercel
- **패키지 매니저**: npm

## 프로젝트 구조
```
uos_limjj/
├── docs/                    # 요구사항, 이미지, 피그마 등 참조 문서
│   └── 01_Requirement/
├── frontend/                # Next.js 앱 (FE + BE 통합)
│   ├── public/              # 정적 파일 (이미지 등)
│   ├── src/
│   │   ├── app/             # App Router 페이지 및 API Routes
│   │   ├── components/      # React 컴포넌트
│   │   ├── lib/             # 유틸리티, DB 연결 등
│   │   └── types/           # TypeScript 타입 정의
│   ├── package.json
│   └── tsconfig.json
├── CLAUDE.md
└── PRD.md
```

## 개발 가이드라인

### 디자인 원칙
- 원페이지 스크롤 방식: 하위 페이지 이동 없이 하나의 긴 페이지에서 스크롤로 모든 콘텐츠 확인
- Figma 디자인 참조: `docs/01_Requirement/02_Figma/` 디렉토리의 파일 참고
- 반응형 디자인 필수 (모바일, 태블릿, 데스크톱)

### 코드 컨벤션
- 언어: TypeScript 사용 (`.ts`, `.tsx`)
- 스타일: Tailwind CSS 유틸리티 클래스 사용
- 컴포넌트: 함수형 컴포넌트 + React Hooks
- 네이밍: 컴포넌트 PascalCase, 함수/변수 camelCase, 파일명 kebab-case
- Server Components를 기본으로 사용하고, 클라이언트 상호작용이 필요한 경우에만 `"use client"` 사용

### 데이터 관리
- 향후 Database 연동을 대비하여 데이터를 별도 파일/API로 분리
- 하드코딩 지양, 데이터와 UI 분리
- API Routes를 통해 데이터를 제공하는 구조로 설계

### 이미지 리소스
- 원본 이미지: `docs/01_Requirement/01_Images/`
- 프로젝트에서 사용할 이미지는 `frontend/public/images/`에 복사하여 사용

## 명령어
```bash
# 개발 서버 실행
cd frontend && npm run dev

# 빌드
cd frontend && npm run build

# 린트
cd frontend && npm run lint
```

## 배포
- Vercel에 배포
- `frontend/` 디렉토리를 Root Directory로 설정
- 환경 변수는 Vercel Dashboard에서 관리
