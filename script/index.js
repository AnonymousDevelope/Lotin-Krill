const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const BrowseRouting = ReactRouterDOM.HashRouter;
/* const variable begin*/
var text = null;
var copytext;
var elements = [];
var newText = "";
//const variable finishing

const ForSwap = () => {
  return (
    <BrowseRouting>
      <div className="container-fluid">
        <nav className="navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mb-auto mb-lg-1 me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link about-me">
                  <i
                    class="fa fa-folder-open text-primary"
                    aria-hidden="true"
                  ></i>
                  <span className="" style={{}}>
                    Introduct
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About_Program" className="nav-link about-me">
                  <i className="fa fa-desktop text-primary"></i>
                  <span className="" style={{}}>
                    {" "}
                    About Program
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <i className="fa fa-home text-primary"></i>
                  <span> Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <i className="fa fa-link text-primary"></i>
                  <span>Link</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link">
                  <i className="fa fa-user text-primary"></i>
                  <span className=""> About me</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Route exact path="/" component={Introduct} />
      <Route path="/About_Program" component={About_Program} />
    </BrowseRouting>
  );
};
//About Program Beginner Informations
const About_Program = () => (
  <div className="container h-50">
    <h1
      data-tag="message"
      className="text-primary fw-bolder justify-content-center d-flex align-items-center"
    >
      This is the Program helps to us
    </h1>
    <div className="container">
      <div className="modal-title title "><span className="border-bottom">About Program</span></div>
        <div className="translate-language-uzbek">
          Bu dastur asosan krilchadayaxshi yozaolmaydiganlarga yordam beradigan dastur hisoblanadi.
          Bu sitening controller qismining Introduct qismida joylashgan hisoblanadi.
          Buning bitta tomoni bor bu dasturning krildan lotinga tarjima qilish funksiyasi hali yaratilgani yo'q.
        </div>
    </div>
  </div>
);
const Introduct = () => (
  <div className="container">
    <div className="title">Lotin Krill Macros</div>
    <div className="row ">
      <div className="row m-0 ps-0 pe-0 text-center">
        <div className="col-md   btn-outline-secondary btn text-center disabled">
          <span>UZB</span>
        </div>

        <div className="col-md  btn-outline-secondary btn disabled">
          <span>RUS</span>
        </div>
      </div>
      <div className="row w-100 p-0 m-0">
        <div className="rowcontainer col-md-6 p-0">
          <textarea
            name=""
            id=""
            className="form-control uzb-text"
            placeholder="Input Text"
          ></textarea>
        </div>
        <div className="rowcontainer col-md-6 p-0">
          <textarea
            name=""
            id=""
            disable="yes"
            className="form-control russian-text"
            placeholder="Text....."
          ></textarea>
        </div>
      </div>
      <div className="row m-0 ps-0 pe-0 text-center">
        <div
          className="col-md  clear btn-outline-secondary btn text-center"
          title="This Button Can Clear text"
        >
          <span>Clear</span>
        </div>

        <div className="col-md  btn-outline-success btn swap">
          <span>Swap Text</span>
        </div>
      </div>
    </div>
  </div>
);
//this an informations finish
var Writer= ()=> {
  text = $(".uzb-text").val(); 
  copytext = text;
  newText = "";
  elements = [];
  for (let i = 0; i < copytext.length; i++) {
    //?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? c ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ??
    elements.push(text[i]);
    if (copytext != "") {
      if (copytext[i] == "a") {
        elements[i] = "??";
      }
      if (copytext[i] == "b") {
        elements[i] = "??";
      }
      if (copytext[i] == "d") {
        elements[i] = "??";
      }
      if (copytext[i] == "e") {
        elements[i] = "??";
      }
      if (copytext[i] == "f") {
        elements[i] = "??";
      }
      if (copytext[i] == "g") {
        elements[i] = "??";
      }
      if (copytext[i] == "h") {
        elements[i] = "??";
      }
      if (copytext[i] == "i") {
        elements[i] = "??";
      }
      if (copytext[i] == "j") {
        elements[i] = "??";
      }
      if (copytext[i] == "k") {
        elements[i] = "??";
      }
      if (copytext[i] == "l") {
        elements[i] = "??";
      }
      if (copytext[i] == "m") {
        elements[i] = "??";
      }
      if (copytext[i] == "n") {
        elements[i] = "??";
      }
      if (copytext[i] == "o") {
        elements[i] = "??";
      }
      if (copytext[i] == "p") {
        elements[i] = "??";
      }
      if (copytext[i] == "q") {
        elements[i] = "??";
      }
      if (copytext[i] == "r") {
        elements[i] = "??";
      }
      if (copytext[i] == "s") {
        elements[i] = "??";
      }
      //shni qo'shamiz
      if (copytext[i] == "h" && copytext[i - 1] == "s") {
        elements[i] = "??";
        elements[i - 1] = "";
      }
      if (copytext[i] == "t") {
        elements[i] = "??";
      }
      if (copytext[i] == "u") {
        elements[i] = "??";
      }
      if (copytext[i] == "v") {
        elements[i] = "??";
      }
      if (copytext[i] == "x") {
        elements[i] = "??";
      }
      if (
        copytext[i] == "y" &&
        copytext[i + 1] != "a" &&
        copytext[i + 1] != "u"
      ) {
        elements[i] = "??";
      }
      if (copytext[i] == "z") {
        elements[i] = "??";
      }
      if (copytext[i] == "h" && copytext[i - 1] == "c") {
        elements[i] = "??";
        elements[i - 1] = "";
      }
      if (copytext[i] == "a" && copytext[i - 1] == "y") {
        elements[i] = "??";
        elements[i - 1] = "";
      }
      if (copytext[i] == "u" && copytext[i - 1] == "y") {
        elements[i] = "??";
        elements[i - 1] = "";
      }
      if (copytext[i] == "s" && copytext[i - 1] == "t") {
        elements[i] = "??";
        elements[i - 1] = "";
      }
      if (
        (copytext[i] == "'" || copytext[i] == "???") &&
        copytext[i - 1] == "g"
      ) {
        elements[i] = "??";
        elements[i - 1] = "";
      }
      if (copytext[i] == "o" && copytext[i - 1] == "y") {
        elements[i] = "??";
        elements[i - 1] = "";
      }
      //ya
    }
    if (copytext != "") {
      if (
        copytext[i] == "'".toUpperCase() ||
        copytext[i] == "???".toUpperCase()
      ) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "a".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "b".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "d".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "e") {
        elements[i] = "??";
      }
      if (copytext[i] == "f".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "g") {
        elements[i] = "??";
      }
      if (copytext[i] == "h".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "i".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "j".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "k".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "l".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "m".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "n".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "o".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "p".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "q".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "r".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "s".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (
        copytext[i] == "o".toUpperCase() &&
        copytext[i - 1] == "y".toUpperCase()
      ) {
        elements[i] = "??".toUpperCase();
        elements[i - 1] = "";
      }
      //shni qo'shamiz
      if (
        copytext[i] == "h".toUpperCase() &&
        copytext[i - 1] == "s".toUpperCase()
      ) {
        elements[i] = "??".toUpperCase();
        elements[i - 1] = "";
      }
      if (copytext[i] == "t".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "u".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "v".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "x".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (
        copytext[i] == "y".toUpperCase() &&
        copytext[i + 1] != "a".toUpperCase() &&
        copytext[i + 1] != "u".toUpperCase()
      ) {
        elements[i] = "??".toUpperCase();
      }
      if (copytext[i] == "z".toUpperCase()) {
        elements[i] = "??".toUpperCase();
      }
      if (
        copytext[i] == "h".toUpperCase() &&
        copytext[i - 1] == "c".toUpperCase()
      ) {
        elements[i] = "??".toUpperCase();
        elements[i - 1] = "";
      }
      if (
        copytext[i] == "a".toUpperCase() &&
        copytext[i - 1] == "y".toUpperCase()
      ) {
        elements[i] = "??".toUpperCase();
        elements[i - 1] = "";
      }
      if (
        copytext[i] == "u".toUpperCase() &&
        copytext[i - 1] == "y".toUpperCase()
      ) {
        elements[i] = "??".toUpperCase();
        elements[i - 1] = "";
      }
      if (
        copytext[i] == "s".toUpperCase() &&
        copytext[i - 1] == "t".toUpperCase()
      ) {
        elements[i] = "??".toUpperCase();
        elements[i - 1] = "";
      }
      if (
        (copytext[i] == "'".toUpperCase() ||
          copytext[i] == "???".toUpperCase()) &&
        copytext[i - 1] == "g".toUpperCase()
      ) {
        elements[i] = "??".toUpperCase();
        elements[i - 1] = "";
      }
      //ya
    }
  }
  for (let i = 0; i < elements.length; i++) {
    newText += elements[i];
  }
  $(".russian-text").val(newText);
}
$(document).ready(function () {
  setTimeout(() => {
    var len = $(".title").html().length;
    var title = $(".title").html();
    // var n = $(".uzb-text").val().length;
    $(".clear").on("click", () => {
      $(".uzb-text").val("");
      $(".russian-text").val("");
    });
   
    $(".uzb-text").on("input",Writer);
    $(".swap").on("click",Writer);

    //for style textarea
    $(".russian-text").addClass("disable");
  }, 0);
  setInterval(() => {
    var heightUzb = $(".uzb-text").height();
    var heightRus = $(".russian-text").height();

    $(".russian-text").css({
      height: heightUzb + 14 + "px",
    });
  }, 0);
});
ReactDOM.render(<ForSwap />, document.querySelector("#root"));
