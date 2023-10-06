"use client";
import React from "react";
import { Stepper, Step, CardHeader, Typography } from "@material-tailwind/react";
 
export function CustomStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
 
  return (
    <div className="py-4 px-8">
      <CardHeader floated={false} variant="gradient" color="gray" className="grid h-24 w-full m-0 place-items-center">
        <div className="">
          <Stepper
            activeStep={activeStep}
            lineClassName="bg-white/50"
            activeLineClassName="bg-white"
          >
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(0)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">HTML</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(1)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">React</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(2)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Vue</Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 !bg-blue-gray-50 text-white/75 cursor-pointer"
              activeClassName="ring-0 !bg-white text-white"
              completedClassName="!bg-white text-white"
              onClick={() => setActiveStep(3)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="inherit">Svelte</Typography>
              </div>
            </Step>
          </Stepper>
        </div>
      </CardHeader>
    </div>
  );
}