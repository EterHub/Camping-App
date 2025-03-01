import React from "react";
import { Button } from "./components/ui/button";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
