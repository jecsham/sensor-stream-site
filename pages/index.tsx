import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { configExample, dataExample } from "../lib/jsonexamples";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { json } from "@codemirror/lang-json";
import { foldAll } from "@codemirror/fold";

export default function Home() {
  const [state, setState] = useState({
    version: null,
    downloadName: ".exe",
    downloadUrl: "https://github.com/jecsham/SensorStream/releases", //fallback url
    downloadSourceUrl: "https://github.com/jecsham/SensorStream/releases", //fallback url
    fetching: false,
  });

  const getProductInfo = async () => {
    setState({ ...state, fetching: true });
    let resp = await fetch(
      "https://api.github.com/repos/jecsham/SensorStream/releases"
    );
    if (resp.status !== 200) {
      // use fallback
      setState({ ...state, fetching: false });
      return;
    }
    let data = await resp.json();
    if (data?.length == 0) {
      // use fallback
      setState({ ...state, fetching: false });
      return;
    }
    setState({
      ...state,
      fetching: false,
      downloadUrl: data[0].assets[0].browser_download_url,
      downloadName: data[0].assets[0].name,
      downloadSourceUrl: data[0].zipball_url,
      version: data[0].tag_name,
    });
    console.log(data);
    return true;
  };

  const renderJsonExample = () => {
    foldAll(
      new EditorView({
        state: EditorState.create({
          extensions: [basicSetup, json(), EditorView.editable.of(false)],
          doc: dataExample,
        }),
        parent: document.querySelector(".data-example"),
      })
    );
    foldAll(
      new EditorView({
        state: EditorState.create({
          extensions: [basicSetup, json(), EditorView.editable.of(false)],
          doc: configExample,
        }),
        parent: document.querySelector(".config-example"),
      })
    );
  };

  const fetchingInfo = () => {
    if (!state.fetching) return;
    return (
      <div className="text-muted">
        <div
          className="spinner-border spinner-border-sm text-muted me-1"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        Fetching information from Github...
      </div>
    );
  };

  useEffect(() => {
    getProductInfo();
    renderJsonExample();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Sensor Stream | Jecsham Castillo</title>
      </Head>
      <div className="row">
        <div className="col">
          <div className="text-center mt-4">
            <img className="hero-logo" draggable="false" src="/images/ss.svg" />
            <p className="display-1 fw-bold">Sensor Stream</p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="row align-items-center py-4">
            <div className="col-12 col-lg-6">
              <h5>What is Sensor Stream?</h5>
              <p>
                Sensor Stream allows you to stream sensor data of pc components
                like gpu, cpu, ram, storage, etc, of your PC through UDP
                datagrams or WebSockets.
              </p>

              <h5>Download last version for Windows 10</h5>
              <p>Last version is available for Windows 10 from GitHub.</p>
              {fetchingInfo()}
              <div data-bs-toggle="modal" data-bs-target="#protectModal">
                <a
                  href={state.downloadUrl}
                  className={`btn btn-success ${
                    state.fetching ? "disabled" : ""
                  }`}
                >
                  Download {state.version} - {state.downloadName}
                </a>
              </div>
              <div className="mt-1">
                <a
                  href={state.downloadSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-2 small"
                >
                  Download source code
                </a>
                <a
                  href="https://github.com/jecsham/SensorStream/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="small"
                >
                  Go to releases page
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-center">
                <Image
                  draggable={false}
                  src="/images/ss1.jpg"
                  width={272}
                  height={448}
                  quality={100}
                  alt="Sensor Stream Screenshot"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-9">
          <h4>API</h4>
          <h5>Sensor Data</h5>
          <p>
            Sensor Stream uses{" "}
            <a
              href="https://github.com/LibreHardwareMonitor/LibreHardwareMonitor"
              target="_blank"
              rel="noopener noreferrer"
            >
              LibreHardwareMonitor
            </a>{" "}
            as its main library, so all the data that is provided by this
            library is converted to <code>json</code> and sent through the
            transports (UDP or WebSockets) at a defined interval. Here is an
            example of how the data would look like in <code>json</code>.
          </p>
          <div className="alert alert-warning" role="alert">
            Please note that the data provided in this example is from a
            specific pc. The number of components and sensors may vary depending
            on the type of computer the user owns and the settings of the Sensor
            Stream program.
          </div>
          <h6>Sensor Data Example</h6>
          <div className="data-example mb-3"></div>

          <h5>User Settings - QR Code</h5>
          <p>
            It is possible to obtain Sensor Stream user settings from a qr code.
          </p>
          <p>
            Ideal if your application is external and you want to avoid the user
            to manually enter ip and ports. It also provides information about
            enabled hardware and transports.
          </p>
          <h6>Settings Example (QR Content)</h6>
          <div className="config-example"></div>
        </div>
      </div>

      <footer className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="d-flex justify-content-center my-4 ">
            <a
              href="https://github.com/jecsham/SensorStream"
              className="small me-4 text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://jecsham.com/donate"
              className="small me-4 text-muted"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </a>
            <span className="small text-muted">
              Copyright ?? {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </footer>
      <div
        className="modal fade"
        id="protectModal"
        tabIndex={-1}
        aria-labelledby="protectModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="protectModalLabel">
                Important Notice
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                You may receive a warning from{" "}
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/what-is-smartscreen-and-how-can-it-help-protect-me-1c9a874a-6826-be5e-45b1-67fa445a74c8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SmartScreen
                </a>
                . This is because this program is relatively new, so it has no
                reputation.{" "}
                <a
                  href="https://support.microsoft.com/en-us/microsoft-edge/what-is-smartscreen-and-how-can-it-help-protect-me-1c9a874a-6826-be5e-45b1-67fa445a74c8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>.
              </p>
              <p>
                To continue with the installation, you can click in{" "}
                <strong>More info</strong> &gt; <strong>Run anyway</strong>
              </p>
              <Image
                draggable={false}
                src="/images/protected.jpg"
                width={1085}
                height={500}
                quality={100}
                alt="Protected screenshot"
              />
              <p>
                This program is <strong>Open Source</strong>, so you can also
                compile your own version by downloading the{" "}
                <a
                  href="https://github.com/jecsham/SensorStream"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  source code
                </a>
                .
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
