import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components@material/Grid/GridItem.js";
import GridContainer from "../../components@material/Grid/GridContainer.js";
import Button from "../../components@material/CustomButtons/Button.js";
import Card from "../../components@material/Card/Card.js";
import CardHeader from "../../components@material/Card/CardHeader.js";
import TextField from "@material-ui/core/TextField";
import CardBody from "../../components@material/Card/CardBody.js";
import CardFooter from "../../components@material/Card/CardFooter.js";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";
import { getAdhrent } from "../../../../actions/authActions";
// import axios from "axios";

// import avatar from "../../assets/img/faces/marc.jpg";
// useEffect(() => {
//   axios.get("/api/adherent");
// }, []);

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

const UserProfile = (props) => {
  const classes = useStyles();
  const { user } = props.auth;
  const { adherent } = props.auth;

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <TextField />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <TextField />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField type="text" />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField type="text" />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <TextField type="text" />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField type="text" />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField type="text" />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField type="text" />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <TextField />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card
            profile
            style={{
              height: 600,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  height: 200,
                  marginTop: -60,
                  width: 200,
                  textAlign: "center",
                }}
                src={`http://localhost:3000/${adherent.userImage}`}
                roundedCircle
              />
              {console.log(adherent.userImage)}
            </div>
            <CardBody profile>
              <h4
                className={classes.cardTitle}
              >{`${user.firstName} ${user.lastName}`}</h4>
              <h6 className={classes.cardCategory}>{adherent.Age}</h6>

              <h6
                style={{
                  marginTop: "20px",
                }}
                className={classes.cardCategory}
              >
                Habite a: {adherent.Ville}
              </h6>
              <h6
                style={{
                  marginTop: "20px",
                }}
                className={classes.cardCategory}
              >
                De: {adherent.Gouvernorat}
              </h6>
              <h6
                style={{
                  marginTop: "20px",
                }}
                className={classes.cardCategory}
              >
                Code Postale: {adherent.Zip_Code}
              </h6>
              <h6
                style={{
                  marginTop: "20px",
                }}
                className={classes.cardCategory}
              >
                Télephone: {adherent.Phone}
              </h6>

              <p
                style={{
                  marginTop: 30,
                }}
                className={classes.cardCategory}
              >
                {adherent.aPropos}
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { getAdhrent })(UserProfile);
