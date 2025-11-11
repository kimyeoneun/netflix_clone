import React from "react";
import "./Help.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png"; // ✅ 아이콘 추가
import { useNavigate } from "react-router-dom"; // ✅ 네비게이트 추가

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="help">
      <img
        src={back_arrow_icon}
        alt="back"
        className="help-back"
        onClick={() => navigate(-1)} // ✅ 뒤로가기 동작
      />

      <div className="help-container">
        <h1>Help Center</h1>
        <p className="help-subtitle">
          안녕하세요! Netflix Clone 고객센터입니다. 아래에서 자주 묻는 질문을 확인해 보세요.
        </p>

        <section className="help-section">
          <h2>계정 및 로그인</h2>
          <div className="help-item">
            <h3>Q. 로그인 안 돼요</h3>
            <p>이 사이트는 연습용이라 아무 이메일/비밀번호 입력해도 로그인됩니다.</p>
          </div>
          <div className="help-item">
            <h3>Q. 로그아웃은 어떻게 하나요?</h3>
            <p>상단 네비게이션의 프로필을 클릭하면 로그아웃 메뉴가 나옵니다.</p>
          </div>
        </section>

        <section className="help-section">
          <h2>재생 관련</h2>
          <p>영상은 실제로 재생되지 않으며, 카드 클릭 시 Player 페이지가 표시됩니다.</p>
        </section>

        <section className="help-section">
          <h2>기타 문의</h2>
          <p>이 프로젝트는 개인 포트폴리오용 클론입니다 🦁</p>
        </section>
      </div>
    </div>
  );
};

export default Help;
