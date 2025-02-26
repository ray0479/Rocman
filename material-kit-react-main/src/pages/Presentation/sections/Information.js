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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Producción Musical
                    <br />
                    Integral
                  </>
                }
                description="Llevamos tu música del estudio al escenario con un proceso completo de grabación, mezcla y mastering."
              />
              <RotatingCardBack
                image={bgBack}
                title="Haz Realidad tu Proyecto"
                description="Trabajamos contigo en cada paso para lograr el sonido que imaginas."
                action={{
                  type: "internal",
                  route: "/",
                  label: "Descubre Más",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon=""
                  title="Sonido de Alta Calidad"
                  description="Usamos tecnología de vanguardia para lograr un audio profesional en cada producción."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon=""
                  title="Distribución en Plataformas"
                  description="Te ayudamos a lanzar tu música en Spotify, Apple Music y todas las plataformas digitales."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon=""
                  title="Eventos y Conciertos"
                  description="Organizamos y producimos presentaciones en vivo para que tu música llegue al público."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon=""
                  title="Asesoría para Artistas"
                  description="Te guiamos en cada paso del camino, desde la producción hasta la estrategia de lanzamiento."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
