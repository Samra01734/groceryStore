'use client';
import React, { useState } from "react";
import Welcome from "../../components/Welcome";
import RegisterForm from "../../components/RegisterForm";

export default function Home() {

  const [step, setStep] = useState(1);

  return (
    <div>

      {step === 1 && (
        <Welcome onNext={() => setStep(2)} />
      )}

      {step === 2 && (
        <RegisterForm />
      )}

    </div>
  );
}