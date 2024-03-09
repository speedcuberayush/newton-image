"use client";
import type { CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { CldUploadWidget, CldImage } from "next-cloudinary";

import { SetStateAction, useState, useRef } from "react";
// import Temp from "@/app/Temp";
export default function Home() {
  return (
    <>
      {/* <Temp /> */}
      <PART1 />
    </>
  );
}

function PART1() {
  const [selectedOption, setSelectedOption] = useState("");
  const [result, setResult] = useState<CloudinaryUploadWidgetInfo | null>();
  const handleOptionClick = (option: SetStateAction<string>) => {
    setSelectedOption(option);
  };
  const ishqjaisakuch = useRef(null);
  const ishqjaisakuch2 = useRef(null);
  const ishqjaisakuch3 = useRef(null);

  const handleClick = () => {
    // Accessing the button element using the ref
    console.log(ishqjaisakuch.current);
    console.log(ishqjaisakuch2.current);
    console.log(ishqjaisakuch3.current);
  };

  const renderImageOption = () => {
    switch (selectedOption) {
      case "generativeFill":
        return (
          <>
            {result ? (
              <CldImage
                src={result.public_id}
                alt="uploaded widget"
                width="500"
                height="1000"
                crop="fill"
                sizes="100vw"
                fillBackground
                preserveTransformations
              />
            ) : (
              <p>Generated Image </p>
            )}
          </>
        );
      case "recolor":
        return (
          <>
            {result ? (
              <CldImage
                src={result.public_id}
                alt="uploaded widget"
                width="500"
                height="500"
                recolor={["face", "orange"]}
                crop="fill"
                sizes="100vw"
              />
            ) : (
              <p>Generated Image </p>
            )}
          </>
        );
      case "objectRemover":
        return (
          <>
            {result ? (
              <CldImage
                src={result.public_id}
                alt="uploaded widget"
                width="500"
                height="500"
                crop="fill"
                remove="person"
                sizes="100vw"
              />
            ) : (
              <p>Generated Image </p>
            )}
          </>
        );
      case "removeBackground":
        return (
          <>
            {result ? (
              <CldImage
                src={result.public_id}
                alt="uploaded widget"
                width="500"
                height="500"
                crop="fill"
                removeBackground
                sizes="100vw"
              />
            ) : (
              <p>Generated Image </p>
            )}
          </>
        );
      case "replace":
        return (
          <>
            {result ? (
              <CldImage
                src={result.public_id}
                alt="uploaded widget"
                width="500"
                height="500"
                crop="fill"
                replace={["person", "virat kohli"]}
                sizes="100vw"
              />
            ) : (
              <p>Generated Image </p>
            )}
          </>
        );
      case "restore":
        return (
          <>
            {result ? (
              <CldImage
                src={result.public_id}
                alt="uploaded widget"
                width="500"
                height="500"
                restore
                crop="fill"
                sizes="100vw"
              />
            ) : (
              <p>Generated Image </p>
            )}
            {/* <CldImage
            src="twtgadlggpwjncpegnjw"
            alt=""
          /> */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="Imagnify"
      style={{
        display: "flex",
        height: "calc(100vh - 100px)",
        overflow: "auto",
        background: "#111216",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <div className="IMheader">
        AI IMAGE <span style={{ color: "#0096ff" }}>EDITOR</span>
      </div>
      <div className="IMmain">
        <div className="IMOrg IMGCARD ">
          {result ? (
            <CldImage
              src={result.public_id}
              width="500"
              crop="fill"
              height="500"
              alt="uploaded widget"
              sizes="100vw"
            />
          ) : (
            <p>Uploaded Image </p>
          )}
        </div>
        <div className="IMuploader">
          <div id="option1" className="IMupload">
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
          </div>
          <div id="option2">
            <p>Remove Object: </p>
            <input
              type="text"
              value="Button 1"
              placeholder="Enter the object to remove"
              ref={ishqjaisakuch}
              onClick={handleClick}
            />
          </div>
          <div
            id="option3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "250px",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <p>OBJECT: </p>
              <input
                type="text"
                value="Button 2"
                placeholder="Enter the object to remove"
                ref={ishqjaisakuch2}
                onClick={handleClick}
              />
            </div>
            <div
              style={{
                width: "250px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px",
              }}
            >
              <p>REPLACE: </p>
              <input
                type="text"
                value="Button 3"
                placeholder="Enter the object to remove"
                ref={ishqjaisakuch3}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>

        <div className="IMGCARD IMgenerated">{renderImageOption()}</div>
      </div>
      <nav className="flex justify-center space-x-4">
        <button onClick={() => handleOptionClick("generativeFill")}>
          Generative Fill
        </button>
        <button onClick={() => handleOptionClick("recolor")}>Recolor</button>
        <button onClick={() => handleOptionClick("objectRemover")}>
          Object Remover
        </button>
        <button onClick={() => handleOptionClick("removeBackground")}>
          Remove Background
        </button>
        <button onClick={() => handleOptionClick("replace")}>Replace</button>
        <button onClick={() => handleOptionClick("restore")}>Restore</button>
      </nav>
    </div>
  );
}
