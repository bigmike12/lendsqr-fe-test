import React from "react";

const IconComponent = React.lazy(() => import("./icon"));

export default function Icon() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <IconComponent />
    </React.Suspense>
  );
}
