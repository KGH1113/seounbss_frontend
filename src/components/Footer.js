const Footer = () => {
  return (
    <>
      <br />
      <br />
      <ins
        className="kakao_ad_area"
        style={{ display: "block" }}
        data-ad-unit="DAN-pMdtI9Bdxf6I09hR"
        data-ad-width="320"
        data-ad-height="100"
      ></ins>
      <script
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      ></script>
      <div className="footer">
        <div className="footer-header">SeounBSS</div>
        <div className="footer-links">
          <div className="link">
            <h5>Website Dev</h5>
            <p>21201 강구현</p>
            <p
              onClick={function () {
                window.open("mailTo:gangguhyeon1113@gmail.com");
              }}
            >
              Email: gangguhyeon1113@gmail.com
            </p>
            <p
              onClick={function () {
                window.open("https://github.com/KGH1113");
              }}
            >
              Github: KGH1113
            </p>
            <p
              onClick={function () {
                window.open("https://www.instagram.com/kgh_guhyeon/");
              }}
            >
              Instagram: @kgh_guhyeon
            </p>
          </div>
          <div className="link">
            <h5>Contact</h5>
            <p
              onClick={function () {
                window.open("https://seoun.sen.ms.kr/");
              }}
            >
              서운중학교
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2023, AsmrProg Youtube Channel.</p>
      </div>
    </>
  );
};

export default Footer;
