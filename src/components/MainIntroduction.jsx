import Typer from "./Typer";

function MainIntroduction() {
  return (
    <div className="main-intro">
      <Typer />
      <h1>Razvan Ghilea</h1>
      <h1 style={{ fontSize: "1.2rem", fontWeight: "200" }}>Web Developer</h1>
      <a href="">
        <a
          href="https://github.com/razvanghr/resume/blob/main/CV-Ghilea%20Razvan%20Alin.pdf"
          target="_blank"
        >
          <button className="button-1">Resume</button>
        </a>
      </a>
    </div>
  );
}

export default MainIntroduction;
