import React from "react";
import NavApp from "../nav-app/NavApp";
import CarouselImg from "../carousel/CarouselImg";
import Apropos from "../A propos/Apropos";
import EventsButtons from "../event-proche/EventsButtons";
import Createur from "../createur/Createur";
import Newslater from "../Newslater/Newlater";
import Footer from "../footer/Footer";
import BackTop from "../Back-to-top/BackTop";
import ReactLoading from "react-loading";
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    fetch(`/api/adherent`)
      .then((res) => res.json())
      .then((json) => this.setState({ loading: true }));
  }

  render() {
    return (
      <div>
        {" "}
        {!this.state.loading ? (
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReactLoading
              type="balls"
              height={120}
              width={120}
              color="#f82249"
            />
          </div>
        ) : (
          <div>
            {/* {console.log(this.props.match.url)} */}
            <NavApp navActive={this.props.match.url} />
            <CarouselImg />
            <Apropos />
            <EventsButtons />
            <Createur />
            <Newslater />
            <Footer />
            <BackTop />
          </div>
        )}
      </div>
    );
  }
}

export default Index;
