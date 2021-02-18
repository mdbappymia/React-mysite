import React from "react";
import {
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaVuejs,
} from "react-icons/fa";
import "./App.css";
const Home = () => {
  return (
    <>
      <div className="section-1">
        <div className="container pt-5">
          <div className="row ">
            <div className="col-md-6 ">
              <h1>
                This is <strong className="brand-name">Md Bappy Mia</strong>
              </h1>
              <h3 className="my-3">
                I am a professional web developer. I am highly working on react
                and other javascript framwork. I liked javascript very much. I
                also working on digital marketing sector.
              </h3>
              <div className="mt-5">
                <a href="https://ww.fiverr.com/devbappy" className="btn btn-primary btn-get-started">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <img
                src="assets/bappy.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="container">
          <div>
            <h1 className="text-center p-5">What I do</h1>
            <p>
              I have more than 3 years exprience on web development. Below is a
              quick overview of my main technical skill sets and technologies I
              use. You can also check my portfolio.
            </p>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div>
                <FaJsSquare
                  style={{ fontSize: 40, color: "yellow", margin: 5 }}
                />
              </div>
              <h3>Vanilla JavaScript</h3>
              <p>
                The term vanilla script is used to refer to the pure JavaScript
                (or we can say plain JavaScript) without any type of additional
                library. Sometimes people often used it as a joke"nowadays
                several things can also be done without using any additional
                JavaScript libraries".
              </p>
            </div>
            <div className="col-md-3">
              <div>
                <FaHtml5
                  style={{ fontSize: 40, color: "#DC4C2D", margin: 5 }}
                />
              </div>
              <h3>HTML5</h3>
              <p>
                HTML (Hypertext Markup Language) is the code that is used to
                structure a web page and its content. For example, content could
                be structured within a set of paragraphs, a list of bulleted
                points, or using images and data tables.
              </p>
            </div>
            <div className="col-md-3">
              <div>
                <FaCss3 style={{ fontSize: 40, color: "#2E63DD", margin: 5 }} />
              </div>
              <h3>CSS3</h3>
              <p>
                CSS is the acronym of “Cascading Style Sheets”. CSS is a
                computer language for laying out and structuring web pages (HTML
                or XML). This language contains coding elements and is composed
                of these “cascading style sheets” which are equally called CSS
                files (. css).
              </p>
            </div>
            <div className="col-md-3">
              <div>
                <FaBootstrap
                  style={{ fontSize: 40, color: "#563D7C", margin: 5 }}
                />
              </div>
              <h3>BOOTSTRAP</h3>
              <p>
                The term vanilla script is used to refer to the pure JavaScript
                (or we can say plain JavaScript) without any type of additional
                library. Sometimes people often used it as a joke"nowadays
                several things can also be done without using any additional
                JavaScript libraries".
              </p>
            </div>
            <div className="col-md-3">
              <div>
                <FaAngular
                  style={{ fontSize: 40, color: "#D7392F", margin: 5 }}
                />
              </div>
              <h3>ANGULAR JS</h3>
              <p>
                AngularJS is a structural framework for dynamic web apps. It
                lets you use HTML as your template language and lets you extend
                HTML's syntax to express your application's components clearly
                and succinctly. ... AngularJS is what HTML would have been, had
                it been designed for applications.
              </p>
            </div>
            <div className="col-md-3">
              <div>
                <FaReact
                  style={{ fontSize: 40, color: "#5ED3F4", margin: 5 }}
                />
              </div>
              <h3>REACT JS</h3>
              <p>
                React. js is an open-source JavaScript library that is used for
                building user interfaces specifically for single-page
                applications. It's used for handling the view layer for web and
                mobile apps. React also allows us to create reusable UI
                components. ... The main purpose of React is to be fast,
                scalable, and simple
              </p>
            </div>
            <div className="col-md-3">
              <div>
                <FaNodeJs
                  style={{ fontSize: 40, color: "#3E863D", margin: 5 }}
                />
              </div>
              <h3>NODE JS</h3>
              <p>
                Node. js is a platform built on Chrome's JavaScript runtime for
                easily building fast and scalable network applications. Node. js
                uses an event-driven, non-blocking I/O model that makes it
                lightweight and efficient, perfect for data-intensive real-time
                applications that run across distributed devices.
              </p>
            </div>
            <div className="col-md-3">
              <div>
                <FaVuejs
                  style={{ fontSize: 40, color: "#3FB27F", margin: 5 }}
                />
              </div>
              <h3>VUE JS</h3>
              <p>
                Vue. js is a progressive framework for JavaScript used to build
                web interfaces and one-page applications. Not just for web
                interfaces, Vue. js is also used both for desktop and mobile app
                development with Electron framework.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
