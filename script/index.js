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
      <Footer />
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
      <div className="modal-title title ">
        <span className="border-bottom">About Program</span>
      </div>
      <div className="translate-language-uzbek">
        Bu dastur asosan krilchadayaxshi yozaolmaydiganlarga yordam beradigan
        dastur hisoblanadi. Bu sitening controller qismining Introduct qismida
        joylashgan hisoblanadi. Buning bitta tomoni bor bu dasturning krildan
        lotinga tarjima qilish funksiyasi hali yaratilgani yo'q.
      </div>
    </div>
  </div>
);
const Footer = () => (
  <footer
    style={{
      position: "absolute",
      bottom: 0,
      textAlign:"center",
    }}
    className="w-100 text-center"
  >
    <h1
      data-tag="message"
      className="m-auto fs-1 text-primary"
    >
      Site ishlab chiquchisi Anonymous Developer
      <p>(2023 17 yanvar)</p>
    </h1>
  </footer>
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
var Writer = () => {
  text = $(".uzb-text").val();
  copytext = text;
  newText = "";
  elements = [];
  for (let i = 0; i < copytext.length; i++) {
    //ё й ц у к е н г ш щ з х ъ ф ы в а п р о л c ж э я ч с м и т ь б ю
    elements.push(text[i]);
    if (copytext != "") {
      if (copytext[i] == "a") {
        elements[i] = "а";
      }
      if (copytext[i] == "b") {
        elements[i] = "б";
      }
      if (copytext[i] == "d") {
        elements[i] = "д";
      }
      if (copytext[i] == "e") {
        elements[i] = "э";
      }
      if (copytext[i] == "f") {
        elements[i] = "ф";
      }
      if (copytext[i] == "g") {
        elements[i] = "г";
      }
      if (copytext[i] == "h") {
        elements[i] = "х";
      }
      if (copytext[i] == "i") {
        elements[i] = "и";
      }
      if (copytext[i] == "j") {
        elements[i] = "ж";
      }
      if (copytext[i] == "k") {
        elements[i] = "к";
      }
      if (copytext[i] == "l") {
        elements[i] = "л";
      }
      if (copytext[i] == "m") {
        elements[i] = "м";
      }
      if (copytext[i] == "n") {
        elements[i] = "н";
      }
      if (copytext[i] == "o") {
        elements[i] = "о";
      }
      if (copytext[i] == "p") {
        elements[i] = "п";
      }
      if (copytext[i] == "q") {
        elements[i] = "к";
      }
      if (copytext[i] == "r") {
        elements[i] = "р";
      }
      if (copytext[i] == "s") {
        elements[i] = "с";
      }
      //shni qo'shamiz
      if (copytext[i] == "h" && copytext[i - 1] == "s") {
        elements[i] = "ш";
        elements[i - 1] = "";
      }
      if (copytext[i] == "t") {
        elements[i] = "т";
      }
      if (copytext[i] == "u") {
        elements[i] = "у";
      }
      if (copytext[i] == "v") {
        elements[i] = "в";
      }
      if (copytext[i] == "x") {
        elements[i] = "х";
      }
      if (
        copytext[i] == "y" &&
        copytext[i + 1] != "a" &&
        copytext[i + 1] != "u"
      ) {
        elements[i] = "й";
      }
      if (copytext[i] == "z") {
        elements[i] = "з";
      }
      if (copytext[i] == "h" && copytext[i - 1] == "c") {
        elements[i] = "ч";
        elements[i - 1] = "";
      }
      if (copytext[i] == "a" && copytext[i - 1] == "y") {
        elements[i] = "я";
        elements[i - 1] = "";
      }
      if (copytext[i] == "u" && copytext[i - 1] == "y") {
        elements[i] = "ю";
        elements[i - 1] = "";
      }
      if (copytext[i] == "s" && copytext[i - 1] == "t") {
        elements[i] = "ц";
        elements[i - 1] = "";
      }
      if (
        (copytext[i] == "'" || copytext[i] == "‘") &&
        copytext[i - 1] == "g"
      ) {
        elements[i] = "г";
        elements[i - 1] = "";
      }
      if (copytext[i] == "o" && copytext[i - 1] == "y") {
        elements[i] = "ё";
        elements[i - 1] = "";
      }
      //ya
    }
    if (copytext != "") {
      if (
        copytext[i] == "'".toUpperCase() ||
        copytext[i] == "‘".toUpperCase()
      ) {
        elements[i] = "ь".toUpperCase();
      }
      if (copytext[i] == "a".toUpperCase()) {
        elements[i] = "а".toUpperCase();
      }
      if (copytext[i] == "b".toUpperCase()) {
        elements[i] = "б".toUpperCase();
      }
      if (copytext[i] == "d".toUpperCase()) {
        elements[i] = "д".toUpperCase();
      }
      if (copytext[i] == "e") {
        elements[i] = "э";
      }
      if (copytext[i] == "f".toUpperCase()) {
        elements[i] = "ф".toUpperCase();
      }
      if (copytext[i] == "g") {
        elements[i] = "г";
      }
      if (copytext[i] == "h".toUpperCase()) {
        elements[i] = "х".toUpperCase();
      }
      if (copytext[i] == "i".toUpperCase()) {
        elements[i] = "и".toUpperCase();
      }
      if (copytext[i] == "j".toUpperCase()) {
        elements[i] = "ж".toUpperCase();
      }
      if (copytext[i] == "k".toUpperCase()) {
        elements[i] = "к".toUpperCase();
      }
      if (copytext[i] == "l".toUpperCase()) {
        elements[i] = "л".toUpperCase();
      }
      if (copytext[i] == "m".toUpperCase()) {
        elements[i] = "м".toUpperCase();
      }
      if (copytext[i] == "n".toUpperCase()) {
        elements[i] = "н".toUpperCase();
      }
      if (copytext[i] == "o".toUpperCase()) {
        elements[i] = "о".toUpperCase();
      }
      if (copytext[i] == "p".toUpperCase()) {
        elements[i] = "п".toUpperCase();
      }
      if (copytext[i] == "q".toUpperCase()) {
        elements[i] = "к".toUpperCase();
      }
      if (copytext[i] == "r".toUpperCase()) {
        elements[i] = "р".toUpperCase();
      }
      if (copytext[i] == "s".toUpperCase()) {
        elements[i] = "с".toUpperCase();
      }
      if (
        copytext[i] == "o".toUpperCase() &&
        copytext[i - 1] == "y".toUpperCase()
      ) {
        elements[i] = "ё".toUpperCase();
        elements[i - 1] = "";
      }
      //shni qo'shamiz
      if (
        copytext[i] == "h".toUpperCase() &&
        copytext[i - 1] == "s".toUpperCase()
      ) {
        elements[i] = "ш".toUpperCase();
        elements[i - 1] = "";
      }
      if (copytext[i] == "t".toUpperCase()) {
        elements[i] = "т".toUpperCase();
      }
      if (copytext[i] == "u".toUpperCase()) {
        elements[i] = "у".toUpperCase();
      }
      if (copytext[i] == "v".toUpperCase()) {
        elements[i] = "в".toUpperCase();
      }
      if (copytext[i] == "x".toUpperCase()) {
        elements[i] = "х".toUpperCase();
      }
      if (
        copytext[i] == "y".toUpperCase() &&
        copytext[i + 1] != "a".toUpperCase() &&
        copytext[i + 1] != "u".toUpperCase()
      ) {
        elements[i] = "й".toUpperCase();
      }
      if (copytext[i] == "z".toUpperCase()) {
        elements[i] = "з".toUpperCase();
      }
      if (
        copytext[i] == "h".toUpperCase() &&
        copytext[i - 1] == "c".toUpperCase()
      ) {
        elements[i] = "ч".toUpperCase();
        elements[i - 1] = "";
      }
      if (
        copytext[i] == "a".toUpperCase() &&
        copytext[i - 1] == "y".toUpperCase()
      ) {
        elements[i] = "я".toUpperCase();
        elements[i - 1] = "";
      }
      if (
        copytext[i] == "u".toUpperCase() &&
        copytext[i - 1] == "y".toUpperCase()
      ) {
        elements[i] = "ю".toUpperCase();
        elements[i - 1] = "";
      }
      if (
        copytext[i] == "s".toUpperCase() &&
        copytext[i - 1] == "t".toUpperCase()
      ) {
        elements[i] = "ц".toUpperCase();
        elements[i - 1] = "";
      }
      if (
        (copytext[i] == "'".toUpperCase() ||
          copytext[i] == "‘".toUpperCase()) &&
        copytext[i - 1] == "g".toUpperCase()
      ) {
        elements[i] = "г".toUpperCase();
        elements[i - 1] = "";
      }
      //ya
    }
  }
  for (let i = 0; i < elements.length; i++) {
    newText += elements[i];
  }
  $(".russian-text").val(newText);
};
$(document).ready(function () {
  setTimeout(() => {
    var len = $(".title").html().length;
    var title = $(".title").html();
    // var n = $(".uzb-text").val().length;
    $(".clear").on("click", () => {
      $(".uzb-text").val("");
      $(".russian-text").val("");
    });

    $(".uzb-text").on("input", Writer);
    $(".swap").on("click", Writer);

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
