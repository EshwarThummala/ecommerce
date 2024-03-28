import { MDBBtn } from "mdb-react-ui-kit";

const Home = ({ setShop }) => {
  return (
    <>
      <div
        id="intro"
        className="bg-image vh-100 shadow-1-strong"
        style={{ position: "relative" }}
      >
        <video
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          autoPlay
          muted
          loop
        >
          <source
            src="https://mdbootstrap.com/img/video/Lines.mp4"
            type="video/mp4"
          />
        </video>
        <div
          class="mask"
          style={{
            background:
              "linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)",
          }}
        >
          <div className="container d-flex align-items-center justify-content-center text-center h-100">
            <div className="text-white" data-mdb-theme="dark">
              <h1 className="mb-3">Welcome to shopping center</h1>
              <p>When in doubt, go shopping</p>
              <MDBBtn
                outline
                className="mx-2"
                style={{ color: "white", marginBottom: "20px" }}
                color="secondary"
                onClick={() => setShop(true)}
              >
                Go TO SHOP
              </MDBBtn>
              <p><i><b>Designed by Eshwar Reddy Thummala</b></i></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
