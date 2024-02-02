import React, { useState, useEffect } from "react";
import classes from "./Ecggraph.module.css";

const Ecggraph = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Function to update the formatted date
    const updateFormattedDate = () => {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString("en-US", { month: "short" });
      const year = currentDate.getFullYear();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      // Manually construct the formatted date
      const formatted = `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
      setFormattedDate(formatted);
    };

    // Update the date initially
    updateFormattedDate();

    // Set up an interval to update the date every second
    const intervalId = setInterval(updateFormattedDate, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className={classes.container}>
      <nav className={classes.navbar}>
        <div className={classes["left-nav"]}>
          <div className={classes["time-container"]}>
            <span className={classes.time}>{formattedDate}</span>
          </div>
          <div className={classes["profile-container"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="10"
              viewBox="0 0 320 512"
              fill="white"
            >
              <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
            </svg>
            <span className={classes.name}>Jhon Doe</span>
            <span className={classes.details}>
              patient id: 4343522882
              <br /> <span>Last Adviced : 17 jul 2023</span>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </div>
        </div>
        <div className={classes["right-nav"]}>
          <span className={classes.navsvg}>
            <svg
              className={classes.svg}
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="36"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
            </svg>
            Run
          </span>
          <span className={classes.navsvg}>
            <svg
              className={classes.svg}
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="36"
              viewBox="0 0 384 512"
              fill="white"
            >
              <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
            </svg>
            Stop
          </span>
          <span className={classes.navsvg}>
            <svg
              className={classes.svg}
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="36"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
            </svg>
            Reset
          </span>
          <span className={classes.navsvg}>
            <svg
              className={classes.svg}
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="36"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
            Settings
          </span>
        </div>
      </nav>
      {/* results */}
      <div className={classes["main-container"]}>
        <div className={classes["wave-container"]}>
          <div className={classes["single-wave-box"]}></div>
          <div className={classes["single-wave-box"]}></div>
          <div className={classes["single-wave-box"]}></div>
          <div className={classes["single-wave-box"]}></div>
          <div className={classes["single-wave-box"]}></div>
          <div className={classes["single-wave-box"]}></div>
        </div>
        <div className={classes["wave-container"]}>
          <div className={classes["single-wave-box"]}></div>
          <div className={classes["single-wave-box"]}></div>
          <div className={classes["single-wave-box"]}></div>
          <div className={classes["single-wave-box"]}></div>
          <div className={classes["single-wave-box"]}></div>
          <div className={classes["single-wave-box"]}></div>
        </div>

        <div className={classes["box-container"]}>
          <div className={classes.bpmbox}>
            <div className={classes["bpm-text-container"]}>
              <span className={classes.bpmtext}>BPM</span>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                  fill="red"
                  style={{ marginTop: "10px" }}
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>

                <span style={{ color: "white" }}> Tachycardia ↾ </span>
              </p>
            </div>
            <p className={classes.bpmrate}>122</p>
          </div>
          <div className={classes.stbox}>
            <div className={classes["st-text-container"]}>
              <p className={classes.bpmtext}>ST mm</p>
              <p className={classes.green}>||- 0.3</p>
              <p className={classes.blue}>
                v5 - <span>0.1</span>
              </p>
              <p className={classes.gold}>avl - 0.1</p>
            </div>
            <div className={classes["stmmrate-container"]}>
              <p className={classes.bpmtext}>dv2</p>
              <p className={`${classes.green} ${classes.stmmrate}`}>-0.1</p>
            </div>
          </div>

          <div className={classes.spo2}>
            <span style={{ textAlign: "end" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                fill="red"
                style={{ marginTop: "10px" }}
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
              <span className={classes.bpmtext}> 122 BPM</span>
            </span>
            <div className={classes.sporate}>
              <span className={classes.bpmtext}>spo2</span>
              <span className={classes.sporatetext}>109</span>
            </div>
          </div>

          <div className={classes["nbp-container"]}>
            <p className={classes.bpmtext}>
              NBP <span className={classes.red}>mmHg</span>
            </p>
            <p className={classes.nbprate}>
              130/89<span style={{ fontSize: "8px" }}> (98)</span>
            </p>
            <p
              style={{ color: "white", textAlign: "end", paddingRight: "4px" }}
            >
              ↾ 160 ⇂ 90
            </p>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <div className={classes.first}>
          <button className={classes.history}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
            </svg>
            <span>History</span>
          </button>
          <button className={classes.history}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
            </svg>
            <span>NBP start/stop</span>
          </button>
        </div>
        <div className={classes.second}>
          <button className={classes.pdf}>Save As PDF</button>
          <button className={classes.print}>Print</button>
        </div>
      </div>
    </div>
  );
};

export default Ecggraph;
