import type { CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { CldUploadWidget, CldImage } from "next-cloudinary";

import { useState } from "react";

export default function Temp() {
  const [result, setResult] = useState<CloudinaryUploadWidgetInfo | null>();
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <CldUploadWidget
        uploadPreset="bixbymessenger"
        onSuccess={(result) => {
          setResult(result?.info as CloudinaryUploadWidgetInfo);
        }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
      {result ? (
        <CldImage
          src={result.public_id}
          width={result.width}
          height={result.height}
          alt="uploaded widget"
        />
      ) : null}
    </div>
  );
}
