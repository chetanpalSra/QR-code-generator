import React, { useRef, useState, useEffect } from "react";

function Form() {
  const inputRef = useRef();
  const [maxLength, setMaxLength] = useState(4); // Default maxLength
  const [url, setUrl] = useState(
    "https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=200x200&format=png"
  );
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      const initialFormat = inputRef.current.value;
      setMaxLength(initialFormat === "svg" ? 1000000 : 1000);
    }
  }, []);

  const handleFormatChange = (e) => {
    const selectedFormat = e.target.value;
    setMaxLength(selectedFormat === "svg" ? 1000000 : 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = formData.get("data");
    const size = formData.get("size");
    const margin = formData.get("margin");
    const color = formData.get("color").substring(1);
    const bgcolor = formData.get("bgcolor").substring(1);
    const ecc = formData.get("ecc");
    const format = formData.get("format");

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}x${size}&margin=${margin}&color=${color}&bgcolor=${bgcolor}&ecc=${ecc}&format=${format}`;

    setUrl(qrUrl);

    try {
      const response = await fetch(qrUrl);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      setDownloadUrl(objectUrl);
    } catch (error) {
      console.error("Error downloading QR code:", error);
    }
  };

  return (
    <div className="container d-flex mt-5" style={{ gap: "2rem" }}>
      <div style={{marginTop: '-32px'}}>
        <form className="container" onSubmit={handleSubmit}>
          <h1 className="mt-3">
            📱 Create Your Custom QR Code: Enhance Your Brand's Connectivity 🌐
          </h1>
          <h4 className="mt-3">
            ✨ Start Designing Your Personalized QR Code Now! 🖋️📚
          </h4>

          <div className="d-flex gap-3">
            {/* Left Section */}
            <div className="left-section mt-3">
              <h3 className="underline-animation">
                <span className="emoji">✏️</span>
                Enter Details
              </h3>
              <div className="mb-3">
                <label
                  htmlFor="Qr-data"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  QR data(text or URL)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Qr-data"
                  name="data"
                  style={{ backgroundColor: "#f3f4f6" }}
                  defaultValue="Generate QR-Code!"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="size"
                  className="form-label"
                  style={{ fontWeight: "bold"}}
                >
                  Size (px)
                </label>
                <input
                  type="text"
                  className="form-control control"
                  id="size"
                  name="size"
                  style={{ backgroundColor: "#f3f4f6", width: "13%" }}
                  min={10}
                  defaultValue={200}
                  maxLength={maxLength}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="margin"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Margin (px)
                </label>
                <input
                  type="text"
                  className="form-control control"
                  id="margin"
                  name="margin"
                  style={{ backgroundColor: "#f3f4f6", width: "13%"}}
                  defaultValue="10"
                  min={0}
                  max={10}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleColorInput"
                  className="form-label"
                  style={{ fontWeight: "bold"}}
                >
                  Color (data-modules)
                </label>
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="exampleColorInput"
                  title="Choose your color"
                  name="color"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleColorInput"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Color (background)
                </label>
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="exampleColorInput"
                  title="Choose your color"
                  name="bgcolor"
                  defaultValue="#ffffff"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="ecc"
                  className="form-label"
                  style={{ fontWeight: "bold",marginRight: '68px' }}
                >
                  Error Correction
                </label>
                <select
                  className="form-select"
                  name="ecc"
                  defaultValue="middle" style={{width: "18%"}}
                >
                  <option value="low">Low</option>
                  <option value="middle">Middle</option>
                  <option value="quality">Quality</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="format"
                  className="form-label"
                  style={{ fontWeight: "bold" }}
                >
                  Format
                </label>
                <select
                  ref={inputRef}
                  className="form-select"
                  name="format"
                  onChange={handleFormatChange}
                  defaultValue="png"
                  style={{width: "18%"}}
                >
                  <option value="png">PNG</option>
                  <option value="gif">GIF</option>
                  <option value="jpeg">JPEG</option>
                  <option value="jpg">JPG</option>
                  <option value="svg">SVG</option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <button className="btn btn-outline-dark">Submit</button>
              </div>
            </div>

            {/* Right Section */}
            <div className="right-section mt-3" style={{ flex: 1 }}>
              <div
                style={{
                  backgroundColor: "#f9f9f9",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  marginBottom: '-10px',
                }}
              >
                <h3>📖 About This QR Code Generator</h3>
                <hr />
                <p>
                  🎉 Welcome to your go-to tool for creating custom QR codes! This generator
                  makes it effortless to design QR codes that reflect your unique style and
                  brand identity.
                </p>
              
                <p>
                  🌟 <b><u>**Features**:</u></b>
                  <ul>
                    <li>🔗 <b>**Customizable Data**</b>: Add any text or URL of your choice.</li>
                    <li>🎨 <b>**Flexible Design**</b>: Choose your QR code's size, colors, and margin.</li>
                    <li>📂 <b>**Multiple Formats**</b>: Supports PNG, JPEG, GIF, JPG, and SVG formats.</li>
                    <li>⚡ <b>**Error Correction**</b>: Choose error correction levels for reliable scanning.</li>
                    <li>📥 <b>**Instant Download**</b>: Generate and download your QR code instantly!</li>
                  </ul>
                </p>
                <p>✨ Perfect for business cards, marketing campaigns, or personal use!</p>
              </div>


              <div className="mt-4 text-center"  style={{
                  backgroundColor: "#f9f9f9",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}>
              <div style={{ display: downloadUrl === "" ? "none" : "block",textAlign: 'center',fontWeight: 'bold',fontSize: '19px' }}>{downloadUrl === ""?"":'Generated QR Code'}</div>
                <img
                  className="d-block"
                  src={url}
                  alt="Generated QR Code"
                  style={{
                    margin: "auto",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                  missing="Missing..."
                />
                <div className="mt-3">
                  {downloadUrl && (
                    <a
                      className="btn btn-success"
                      download={`qr-code.${url.split("format=")[1]}`}
                      href={downloadUrl}
                    >
                      Download QR Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
