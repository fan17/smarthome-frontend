import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Room from "../../module/room/Room";
import TemperatureState from "../../module/temperature/TemperatureState";
import HumidityState from "../../module/humidity/HumidityState";
import LampState from "../../module/lamp/LampState";
import HumidifierState from "../../module/humidifier/HumidifierState";
import WindowState from "../../module/window/WindowState";
import DoorState from "../../module/door/DoorState";

const DevicesStates: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            p: 2,
            bgcolor: "background.default",
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Room {...{ title: "Office" }}>
            <div>
              <TemperatureState {...{ value: 22 }} />
            </div>
            <div>
              <HumidityState {...{ value: 50 }} />
            </div>
            <div>
              <LampState {...{ isOn: false }} />
            </div>
            <div>
              <HumidifierState {...{ isOn: false }} />
            </div>
            <div>
              <WindowState
                {...{ isOpen: false, windowName: "garden window" }}
              />
            </div>
            <div>
              <WindowState
                {...{ isOpen: false, windowName: "window to the neighbour" }}
              />
            </div>
          </Room>
          <Room {...{ title: "Antoś room" }}>
            <div>
              <TemperatureState {...{ value: 22 }} />
            </div>
            <div>
              <HumidityState {...{ value: 50 }} />
            </div>
            <div>
              <HumidifierState {...{ isOn: false }} />
            </div>
            <div>
              <WindowState {...{ isOpen: false }} />
            </div>
          </Room>
          <Room {...{ title: "Main bathroom" }}>
            <div>
              <TemperatureState {...{ value: 22 }} />
            </div>
            <div>
              <HumidityState {...{ value: 50 }} />
            </div>
          </Room>
          <Room {...{ title: "Bedroom" }}>
            <div>
              <TemperatureState {...{ value: 22 }} />
            </div>
            <div>
              <HumidityState {...{ value: 50 }} />
            </div>
            <div>
              <LampState {...{ isOn: false }} />
            </div>
            <div>
              <HumidifierState {...{ isOn: false }} />
            </div>
            <div>
              <WindowState {...{ isOpen: false }} />
            </div>
          </Room>
          <Room {...{ title: "Play room" }} />
          <Room {...{ title: "Living room" }}>
            <div>
              <TemperatureState {...{ value: 22 }} />
            </div>
            <div>
              <HumidityState {...{ value: 50 }} />
            </div>

            <div>
              <HumidifierState {...{ isOn: false }} />
            </div>
            <div>
              <WindowState
                {...{ isOpen: false, windowName: "kitchen window" }}
              />
            </div>
            <div>
              <WindowState
                {...{ isOpen: false, windowName: "garden window" }}
              />
            </div>
          </Room>
          <Room {...{ title: "Main hall / garage" }}>
            <div>
              <DoorState {...{ isOpen: false, doorName: "garage" }} />
            </div>
            <div>
              <DoorState {...{ isOpen: false }} />
            </div>
          </Room>
          <Room {...{ title: "Outside" }}>
            <div>
              <TemperatureState {...{ value: 22 }} />
            </div>
            <div>
              <HumidityState {...{ value: 50 }} />
            </div>
            <div>
              <DoorState {...{ isOpen: false, doorName: "gate" }} />
            </div>
            <div>
              <DoorState {...{ isOpen: false, doorName: "wicket" }} />
            </div>
          </Room>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DevicesStates;
