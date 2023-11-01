import ContentHospitals from "../ContentHospitals/index";
import Footer from "../Footer/index";
import NavBar from "../NavBar";
import Prueba from "../Prueba/Prueba";

const MainPage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <ContentHospitals />
      <Footer />
      <Prueba />
    </>
  );
};

export default MainPage;
