/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { useState } from "react";
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";


// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";

function DesignBlocks() {
  const [openModal, setOpenModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // Función para abrir el modal con la imagen
  const handleImageClick = (image) => {
    setImageUrl(image);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setImageUrl(""); // Resetear la imagen cuando se cierra el modal
  };

  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1} id={title}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link to={pro ? "/" : route}>
                <MKBox
                  position="relative"
                  onClick={() => handleImageClick(image)} // Al hacer clic, abrir el modal
                >
                  <ExampleCard image={image} name={name} count={count} pro={pro} />
                </MKBox>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={-5} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>

      {/* Modal to show the image */}
      <Dialog open={openModal} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Imagen</DialogTitle>
        <DialogContent>
          <MKBox
            component="img"
            src={imageUrl}
            alt="Full Image"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
        </DialogContent>
        <DialogActions>
          <MKTypography
            variant="button"
            color="secondary"
            sx={{ cursor: "pointer", padding: "8px" }}
            onClick={handleClose}
          >
            Cerrar
          </MKTypography>
        </DialogActions>
      </Dialog>
    </MKBox>
  );
}

export default DesignBlocks;
