import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components@material/Grid/GridItem.js";
import GridContainer from "../../components@material/Grid/GridContainer.js";
import CustomInput from "../../components@material/CustomInput/CustomInput.js";
import Card from "../../components@material/Card/Card.js";
import CardHeader from "../../components@material/Card/CardHeader.js";
import CardBody from "../../components@material/Card/CardBody.js";

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

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer styles={{ BackgroundColor: "blue !important" }}>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
            <p className={classes.cardCategoryWhite}>Complete your profile</p>
          </CardHeader>
          <CardBody>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="userName"
                id="userName"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="userName"
                id="userName"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="userName"
                id="userName"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <CustomInput
                labelText="userName"
                id="userName"
                formControlProps={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
