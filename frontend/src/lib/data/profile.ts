import type { Profile } from "@/types";

export const profileData: Profile = {
  name: "임재정",
  nameEn: "Jae-Jeong Lim",
  company: "(주)ONESTEP",
  title: "기술이사",
  titleEn: "CTO",
  phone: "010-3769-0000",
  email: "limjj157@naver.com",
  intro:
    "20년 이상의 IT 경력으로 비즈니스와 기술을 잇는 아키텍트. 프로젝트 관리부터 데이터 설계까지, 시스템의 전체 라이프사이클을 아우르는 전문가입니다.",
  profileImage: "/images/profile-simpson.png",
  roles: [
    {
      title: "Project Manager",
      titleEn: "PM",
      description:
        "프로젝트 전체 일정, 인력, 리스크를 관리하며 성공적인 프로젝트 완수를 이끕니다.",
    },
    {
      title: "Project Leader",
      titleEn: "PL",
      description:
        "개발팀을 이끌며 기술적 의사결정과 아키텍처 방향을 주도합니다.",
    },
    {
      title: "Data Architect",
      titleEn: "DA",
      description:
        "DSS, BI, EIS 시스템의 데이터베이스를 설계하고 최적화된 데이터 구조를 구축합니다.",
    },
    {
      title: "QA Manager",
      titleEn: "QA",
      description:
        "품질 기준을 수립하고 테스트 전략을 통해 안정적인 시스템 운영을 보장합니다.",
    },
  ],
  specialties: [
    "외부 업체 관리 및 Project Management",
    "Business Architect: 시스템 진단 및 분석/설계",
    "Database Architect: DSS(BI, EIS) 시스템 Database 설계 및 구축",
    "SLA/SLM Process 및 정책 수립",
  ],
  education: [
    {
      type: "학사",
      school: "서울시립대학교",
      major: "경영학부",
      period: "1995.03 ~ 2002.02",
    },
    {
      type: "고등학교",
      school: "의정부고등학교",
      major: "인문계",
      period: "1992.03 ~ 1995.02",
    },
  ],
  certifications: [
    {
      name: "정보처리기사",
      issuer: "한국산업인력관리공단",
      date: "2003.12",
    },
    {
      name: "Oracle Certified Associate",
      issuer: "ORACLE",
      date: "2005.01",
    },
    {
      name: "ITIL Foundation",
      issuer: "EXIN",
      date: "2005.12",
    },
  ],
};
