import React from "react";
import Particles from "react-tsparticles";
import { StyledContainer } from "./StyledComponents";

type ParticleProps = {
  children?: React.ReactNode;
  smallScreen?: boolean;
};

const Particle: React.FC<ParticleProps> = ({ children, smallScreen }) => {
  return (
    <StyledContainer
      styling={{
        zIndex: "1",
        position: smallScreen ? "absolute" : "relative",
        float: "right",
        width: smallScreen ? "100vw" : "calc(100vw - 225px)",
      }}
    >
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          padding: 0,
          margin: 0,
          zIndex: 0,
        }}
        params={{
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              enable: true,
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
            },
            number: {
              density: {
                enable: true,
                area: 1400,
              },
              value: 50,
            },
            shape: {
              type: "",
            },
          },
        }}
      />
      {children}
    </StyledContainer>
  );
};

export default Particle;
