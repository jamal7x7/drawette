var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
__export(exports, {
  handler: () => handler
});
init_react();
var import_netlify = __toModule(require("@remix-run/netlify"));

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/jamalrayane/Desktop/NewProjects/drawette/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/shared.css
var shared_default = "/build/_assets/shared-LTPRFASM.css";

// route:/Users/jamalrayane/Desktop/NewProjects/drawette/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: shared_default }];
}
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.4",
      overflow: "hidden",
      margin: 0,
      padding: 0
    }
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/jamalrayane/Desktop/NewProjects/drawette/app/routes/drawette.tsx
var drawette_exports = {};
__export(drawette_exports, {
  default: () => Drawette
});
init_react();
var import_remix3 = __toModule(require_remix());
var import_jotai = __toModule(require("jotai"));
function Drawette() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_jotai.Provider, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}

// route:/Users/jamalrayane/Desktop/NewProjects/drawette/app/routes/drawette/index.tsx
var drawette_exports2 = {};
__export(drawette_exports2, {
  default: () => drawette_default
});
init_react();

// app/routes/drawette/App.tsx
init_react();
var import_jotai2 = __toModule(require("jotai"));
var import_uuid = __toModule(require("uuid"));
var WINDOW_WIDTH = 1400;
var WINDOW_HEIGHT = 800;
function log(x) {
  console.log(x);
}
var ScreenMousePositionOnCanvas = (0, import_jotai2.atom)({});
var MousePositionOnCanvas = (0, import_jotai2.atom)({});
var ScreenMousePosition = (0, import_jotai2.atom)({ x: 600, y: 400 });
var ShowHelpersAtom = (0, import_jotai2.atom)(false);
var ObjectSelected = (0, import_jotai2.atom)(false);
var Drawing = (0, import_jotai2.atom)(false);
var MouseDownAtom = (0, import_jotai2.atom)("");
var ToolChoosed = (0, import_jotai2.atom)("");
var MousePosition = (0, import_jotai2.atom)({ x: 600, y: 400 });
var ObjectList = (0, import_jotai2.atom)([]);
function App2() {
  const [mousePositiononOnCanvas, setMousePositiononOnCanvas] = (0, import_jotai2.useAtom)(MousePositionOnCanvas);
  const [screenMousePositionOnCanvas, setScreenMousePositionOnCanvas] = (0, import_jotai2.useAtom)(ScreenMousePositionOnCanvas);
  const [Rects, setRects] = (0, import_jotai2.useAtom)(ObjectList);
  const [showHelpers, setShowHelpers] = (0, import_jotai2.useAtom)(ShowHelpersAtom);
  const [tool, setTool] = (0, import_jotai2.useAtom)(ToolChoosed);
  const [mouseDown, setMouseDown] = (0, import_jotai2.useAtom)(MouseDownAtom);
  const [mousePosition, setMousePosition] = (0, import_jotai2.useAtom)(MousePosition);
  const [screenMousePosition, setScreenMousePosition] = (0, import_jotai2.useAtom)(ScreenMousePosition);
  const [selected, setSelected] = (0, import_jotai2.useAtom)(ObjectSelected);
  const [startDrawing, setStartDrawing] = (0, import_jotai2.useAtom)(Drawing);
  let mousePose0 = { x: 50, y: 50 };
  let shapePose0 = { x: 0, y: 0 };
  function handleRectClick(e, id) {
    e.stopPropagation();
    setRects([
      ...Rects.map((r) => {
        if (r.id === id) {
          r.selected = true;
        } else {
          r.selected = false;
        }
        return r;
      })
    ]);
  }
  function handleOnDoubleClick(e, id) {
    log(e);
    setRects([
      ...Rects.map((r) => {
        if (r.id === id) {
          r = __spreadProps(__spreadValues({}, r), {
            selected: true,
            text: "M",
            textEdit: true
          });
        }
        return r;
      })
    ]);
  }
  function handleMouseLeave(e, id) {
    handleOnMouseMove(e, id);
  }
  function handleOnMouseMove(e, id) {
    e.stopPropagation();
    e.preventDefault();
    mouseDown === "mouse down" && setRects([
      ...Rects.map((r) => {
        if (r.id === id) {
          r = __spreadProps(__spreadValues({}, r), {
            id,
            selected: false,
            x: e.clientX - 50,
            y: e.clientY - 50
          });
        }
        return r;
      })
    ]);
    mouseDown === "mouse down" && setScreenMousePosition((prev) => ({
      x: e.screenX,
      y: e.screenY
    }));
  }
  function handleOnMousemoveOnCanvas(e) {
    setMousePositiononOnCanvas((prev) => ({
      x: e.clientX,
      y: e.clientY
    }));
    setScreenMousePositionOnCanvas((prev) => ({
      x: e.screenX,
      y: e.screenY
    }));
  }
  function handleDown(e, i) {
    setMouseDown((prev) => "mouse down");
    setSelected((prev) => !prev);
  }
  function handleUp(e) {
    setMouseDown((prev) => "mouse up");
    setSelected((prev) => !prev);
  }
  function handleOnClickOnCanvas(e) {
    e.stopPropagation();
    setRects([
      ...Rects,
      {
        selected: false,
        id: (0, import_uuid.v4)(),
        x: WINDOW_WIDTH / 4,
        y: WINDOW_HEIGHT / 4,
        width: 100,
        heigth: 100,
        color: `rgba(255, 0, 0)`,
        text: "",
        textEdit: false
      }
    ]);
    setRects([
      ...Rects.map((r) => {
        if (r.selected) {
          r.selected = false;
          r.textEdit = false;
        }
        return r;
      })
    ]);
  }
  function handleAddRectangleToolClick(e) {
    setTool((p) => "addRectangle");
    setRects([
      ...Rects,
      {
        selected: false,
        id: (0, import_uuid.v4)(),
        x: WINDOW_WIDTH / 4,
        y: WINDOW_HEIGHT / 4,
        width: 100,
        heigth: 100,
        color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
        text: "R",
        textEdit: false
      }
    ]);
  }
  function handleMoveToolClick(e) {
    setTool((p) => "move");
  }
  function handleAddLinkToolClick(e) {
    setTool((p) => "addLink");
  }
  function handleAddTextToolClick(e) {
    setTool((p) => "addText");
  }
  function handleAddOthersToolClick(e) {
    setTool((p) => "addOhers");
  }
  function handleOnTextChange(e, id) {
    log(Rects);
    setRects([
      ...Rects.map((r) => {
        if (r.id == id) {
          r.selected = true;
          r.textEdit = true;
          r.text = e.target.value;
        }
        return r;
      })
    ]);
  }
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.4",
      overflow: "hidden"
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ShowHelpersButton, {
    cn: "button showHelpers"
  }, " ", /* @__PURE__ */ React.createElement("svg", {
    name: "showHelpers",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.364 9.77818L20.6642 12.0784L18.3637 14.3788C14.849 17.8935 9.15049 17.8935 5.63577 14.3788L3.33558 12.0786L5.63604 9.77818C9.15075 6.26346 14.8492 6.26346 18.364 9.77818Z",
    stroke: "#F5F5F5",
    strokeWidth: "2"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3",
    fill: "#F5F5F5"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "topbar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "toolbar"
  }, /* @__PURE__ */ React.createElement(Button, {
    cn: ` ${tool == "move" && "selected"}`,
    hundleOnClick: handleMoveToolClick
  }, " ", /* @__PURE__ */ React.createElement("svg", {
    name: "move",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7.61269 4.9957L10.3526 19.3133L13.876 14.6404L19.578 13.3222L7.61269 4.9957Z",
    stroke: "#F5F5F5",
    strokeWidth: "2"
  }))), /* @__PURE__ */ React.createElement(Button, {
    cn: ` ${tool == "addRectangle" && "selected"}`,
    hundleOnClick: handleAddRectangleToolClick
  }, /* @__PURE__ */ React.createElement("svg", {
    name: "rectangle",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2",
    stroke: "#F5F5F5",
    strokeWidth: "2"
  }))), /* @__PURE__ */ React.createElement(Button, {
    cn: ` ${tool == "addLink" && "selected"}`,
    hundleOnClick: handleAddLinkToolClick
  }, /* @__PURE__ */ React.createElement("svg", {
    name: "link",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M21 4.0004C8 4.0005 16 20.0004 3 20.0004",
    stroke: "#F5F5F5",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))), /* @__PURE__ */ React.createElement(Button, {
    cn: ` ${tool == "addText" && "selected"}`,
    hundleOnClick: handleAddTextToolClick
  }, /* @__PURE__ */ React.createElement("svg", {
    name: "text",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3H13ZM11 20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20H11ZM11 3V20H13V3H11Z",
    fill: "#F5F5F5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 3C6.00001 2.44772 5.55229 2 5.00001 2C4.44772 2 4.00001 2.44771 4 3L6 3ZM4 3.99999C4 4.55228 4.44771 4.99999 5 5C5.55228 5 6 4.55228 6 4L4 3.99999ZM4 3L4 3.99999L6 4L6 3L4 3Z",
    fill: "#F5F5F5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 3C20 2.44772 19.5523 2 19 2C18.4477 2 18 2.44771 18 3L20 3ZM18 3.99999C18 4.55228 18.4477 4.99999 19 5C19.5523 5 20 4.55228 20 4L18 3.99999ZM18 3L18 3.99999L20 4L20 3L18 3Z",
    fill: "#F5F5F5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 2C4.44772 2 4 2.44772 4 3C4 3.55228 4.44772 4 5 4L5 2ZM19 4C19.5523 4 20 3.55229 20 3C20 2.44772 19.5523 2 19 2L19 4ZM5 4L19 4L19 2L5 2L5 4Z",
    fill: "#F5F5F5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 20C9.44772 20 9 20.4477 9 21C9 21.5523 9.44772 22 10 22L10 20ZM14 22C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20L14 22ZM10 22L14 22L14 20L10 20L10 22Z",
    fill: "#F5F5F5"
  }))), /* @__PURE__ */ React.createElement(Button, {
    cn: ` ${tool == "addOthers" && "selected"}`,
    hundleOnClick: handleAddOthersToolClick
  }, /* @__PURE__ */ React.createElement("svg", {
    name: "others",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929C15.3166 9.90237 14.6834 9.90237 14.2929 10.2929L15.7071 11.7071ZM12 14L11.2929 14.7071L12 15.4142L12.7071 14.7071L12 14ZM9.7071 10.2929C9.31658 9.90237 8.68341 9.90237 8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.2929 11.7071L9.7071 10.2929ZM14.2929 10.2929L11.2929 13.2929L12.7071 14.7071L15.7071 11.7071L14.2929 10.2929ZM12.7071 13.2929L9.7071 10.2929L8.2929 11.7071L11.2929 14.7071L12.7071 13.2929Z",
    fill: "#F5F5F5"
  }))))), /* @__PURE__ */ React.createElement("svg", {
    name: "grid",
    onMouseMove: (e) => handleOnMousemoveOnCanvas(e),
    onClick: (e) => handleOnClickOnCanvas(e),
    "z-index": "1",
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    viewBox: `0 0 ${WINDOW_WIDTH} ${WINDOW_HEIGHT}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("filter", {
    id: "filter"
  }), /* @__PURE__ */ React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "#18181B"
  }), Rects.map((rec, i) => {
    return /* @__PURE__ */ React.createElement("g", {
      key: "rectangle" + rec.id
    }, rec.selected && /* @__PURE__ */ React.createElement("rect", {
      x: rec.x - 4,
      y: rec.y - 4,
      width: rec.width + 8,
      height: rec.heigth + 8,
      stroke: "#0EA5E9"
    }), /* @__PURE__ */ React.createElement("rect", {
      rx: "15",
      x: rec.x,
      y: rec.y,
      width: rec.width,
      height: rec.heigth,
      fill: rec.color
    }), /* @__PURE__ */ React.createElement("foreignObject", {
      id: "text",
      x: rec.x + 50,
      y: rec.y + 50,
      width: rec.width + 8,
      height: "50"
    }, /* @__PURE__ */ React.createElement("input", {
      placeholder: rec.text,
      style: {},
      onChange: (e) => handleOnTextChange(e, rec.id)
    })), /* @__PURE__ */ React.createElement("rect", {
      onMouseMove: (e) => handleOnMouseMove(e, rec.id),
      onTouchMove: (e) => handleOnMouseMove(e, rec.id),
      x: rec.x - 4,
      y: rec.y - 4,
      width: rec.width + 8,
      height: rec.heigth + 8,
      fill: "#00000000",
      onClick: (e) => handleRectClick(e, rec.id),
      onMouseDown: (e) => handleDown(e, rec.id),
      onTouchStart: (e) => handleDown(e, rec.id),
      onMouseUp: (e) => handleUp(e),
      onMouseLeave: (e) => handleMouseLeave(e, rec.id),
      onTouchEnd: (e) => handleMouseLeave(e, rec.id),
      onDoubleClick: (e) => handleOnDoubleClick(e, rec.id)
    }));
  }), showHelpers && /* @__PURE__ */ React.createElement("g", null, mouseDown === "mouse down" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", {
    x: "0",
    y: "700",
    width: "1600",
    height: "10",
    fill: "#00eeff"
  }), /* @__PURE__ */ React.createElement("text", {
    x: "1200",
    y: "50",
    fill: "#00eeff"
  }, "mousePosition: ", mousePosition.x, ",", mousePosition.y), /* @__PURE__ */ React.createElement("text", {
    x: "1200",
    y: "70",
    fill: "#ff5100"
  }, "screenMousePosition: ", screenMousePosition.x, ",", screenMousePosition.y)), /* @__PURE__ */ React.createElement("text", {
    x: "12",
    y: "20",
    fill: "#2bff00"
  }, "Tool Choosed: ", tool), /* @__PURE__ */ React.createElement("text", {
    x: "12",
    y: "50",
    fill: "#00eeff"
  }, "mousePosition: ", mousePositiononOnCanvas.x, ",", mousePositiononOnCanvas.y), /* @__PURE__ */ React.createElement("text", {
    x: "12",
    y: "70",
    fill: "#ff5100"
  }, "screenMousePosition: ", screenMousePositionOnCanvas.x, ",", screenMousePositionOnCanvas.y), Rects.map((r, i) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("text", {
    key: r.id,
    x: "12",
    y: 90 + 16 * i,
    fill: "#ff00b7"
  }, "i: ", i, " Pos: ", r.x, ",", r.y, " ----", ">", " ", r.selected ? "selected" : "not selected"))))));
}
function Button({ cn = "button", hundleOnClick, children }) {
  const [Rects, setRects] = (0, import_jotai2.useAtom)(ObjectList);
  const [startDrawing, setStartDrawing] = (0, import_jotai2.useAtom)(Drawing);
  function handleOnMouseOver(e) {
  }
  function handleOnMouseout(e) {
  }
  return /* @__PURE__ */ React.createElement("button", {
    onMouseOver: (e) => handleOnMouseOver(e),
    onMouseOut: (e) => handleOnMouseout(e),
    className: cn,
    onClick: hundleOnClick
  }, /* @__PURE__ */ React.createElement("div", {
    className: "icon24"
  }, children));
}
function ShowHelpersButton({ cn = "button", children }) {
  const [showHelpers, setShowHelpers] = (0, import_jotai2.useAtom)(ShowHelpersAtom);
  function hundleToolClick(e) {
    setShowHelpers((prev) => !prev);
  }
  function handleOnMouseOver(e) {
  }
  function handleOnMouseout(e) {
  }
  return /* @__PURE__ */ React.createElement("button", {
    onMouseOver: (e) => handleOnMouseOver(e),
    onMouseOut: (e) => handleOnMouseout(e),
    className: cn,
    onClick: (e) => hundleToolClick(e)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "icon24"
  }, children));
}

// route:/Users/jamalrayane/Desktop/NewProjects/drawette/app/routes/drawette/index.tsx
var drawette_default = App2;

// route:/Users/jamalrayane/Desktop/NewProjects/drawette/app/routes/drawette/App.tsx
var App_exports = {};
__export(App_exports, {
  Button: () => Button2,
  ShowHelpersButton: () => ShowHelpersButton2,
  addRectangle: () => addRectangle,
  default: () => App3
});
init_react();
var import_jotai3 = __toModule(require("jotai"));
var import_uuid2 = __toModule(require("uuid"));
var WINDOW_WIDTH2 = 1400;
var WINDOW_HEIGHT2 = 800;
function log2(x) {
  console.log(x);
}
var ScreenMousePositionOnCanvas2 = (0, import_jotai3.atom)({});
var MousePositionOnCanvas2 = (0, import_jotai3.atom)({});
var ScreenMousePosition2 = (0, import_jotai3.atom)({ x: 600, y: 400 });
var ShowHelpersAtom2 = (0, import_jotai3.atom)(false);
var ObjectSelected2 = (0, import_jotai3.atom)(false);
var Drawing2 = (0, import_jotai3.atom)(false);
var MouseDownAtom2 = (0, import_jotai3.atom)("");
var ToolChoosed2 = (0, import_jotai3.atom)("");
var MousePosition2 = (0, import_jotai3.atom)({ x: 600, y: 400 });
var ObjectList2 = (0, import_jotai3.atom)([]);
function App3() {
  const [mousePositiononOnCanvas, setMousePositiononOnCanvas] = (0, import_jotai3.useAtom)(MousePositionOnCanvas2);
  const [screenMousePositionOnCanvas, setScreenMousePositionOnCanvas] = (0, import_jotai3.useAtom)(ScreenMousePositionOnCanvas2);
  const [Rects, setRects] = (0, import_jotai3.useAtom)(ObjectList2);
  const [showHelpers, setShowHelpers] = (0, import_jotai3.useAtom)(ShowHelpersAtom2);
  const [tool, setTool] = (0, import_jotai3.useAtom)(ToolChoosed2);
  const [mouseDown, setMouseDown] = (0, import_jotai3.useAtom)(MouseDownAtom2);
  const [mousePosition, setMousePosition] = (0, import_jotai3.useAtom)(MousePosition2);
  const [screenMousePosition, setScreenMousePosition] = (0, import_jotai3.useAtom)(ScreenMousePosition2);
  const [selected, setSelected] = (0, import_jotai3.useAtom)(ObjectSelected2);
  const [startDrawing, setStartDrawing] = (0, import_jotai3.useAtom)(Drawing2);
  let mousePose0 = { x: 50, y: 50 };
  let shapePose0 = { x: 0, y: 0 };
  function handleRectClick(e, id) {
    e.stopPropagation();
    setRects([
      ...Rects.map((r) => {
        if (r.id === id) {
          r.selected = true;
        } else {
          r.selected = false;
        }
        return r;
      })
    ]);
  }
  function handleOnDoubleClick(e, id) {
    log2(e);
    setRects([
      ...Rects.map((r) => {
        if (r.id === id) {
          r = __spreadProps(__spreadValues({}, r), {
            selected: true,
            text: "M",
            textEdit: true
          });
        }
        return r;
      })
    ]);
  }
  function handleMouseLeave(e, id) {
    handleOnMouseMove(e, id);
  }
  function handleOnMouseMove(e, id) {
    e.stopPropagation();
    e.preventDefault();
    mouseDown === "mouse down" && setRects([
      ...Rects.map((r) => {
        if (r.id === id) {
          r = __spreadProps(__spreadValues({}, r), {
            id,
            selected: false,
            x: e.clientX - 50,
            y: e.clientY - 50
          });
        }
        return r;
      })
    ]);
    mouseDown === "mouse down" && setScreenMousePosition((prev) => ({
      x: e.screenX,
      y: e.screenY
    }));
  }
  function handleOnMousemoveOnCanvas(e) {
    setMousePositiononOnCanvas((prev) => ({
      x: e.clientX,
      y: e.clientY
    }));
    setScreenMousePositionOnCanvas((prev) => ({
      x: e.screenX,
      y: e.screenY
    }));
  }
  function handleDown(e, i) {
    setMouseDown((prev) => "mouse down");
    setSelected((prev) => !prev);
  }
  function handleUp(e) {
    setMouseDown((prev) => "mouse up");
    setSelected((prev) => !prev);
  }
  function handleOnClickOnCanvas(e) {
    e.stopPropagation();
    setRects([
      ...Rects,
      {
        selected: false,
        id: (0, import_uuid2.v4)(),
        x: WINDOW_WIDTH2 / 4,
        y: WINDOW_HEIGHT2 / 4,
        width: 100,
        heigth: 100,
        color: `rgba(255, 0, 0)`,
        text: "",
        textEdit: false
      }
    ]);
    setRects([
      ...Rects.map((r) => {
        if (r.selected) {
          r.selected = false;
          r.textEdit = false;
        }
        return r;
      })
    ]);
  }
  function handleAddRectangleToolClick(e) {
    setTool((p) => "addRectangle");
    setRects([
      ...Rects,
      {
        selected: false,
        id: (0, import_uuid2.v4)(),
        x: WINDOW_WIDTH2 / 4,
        y: WINDOW_HEIGHT2 / 4,
        width: 100,
        heigth: 100,
        color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
        text: "R",
        textEdit: false
      }
    ]);
  }
  function handleMoveToolClick(e) {
    setTool((p) => "move");
  }
  function handleAddLinkToolClick(e) {
    setTool((p) => "addLink");
  }
  function handleAddTextToolClick(e) {
    setTool((p) => "addText");
  }
  function handleAddOthersToolClick(e) {
    setTool((p) => "addOhers");
  }
  function handleOnTextChange(e, id) {
    log2(Rects);
    setRects([
      ...Rects.map((r) => {
        if (r.id == id) {
          r.selected = true;
          r.textEdit = true;
          r.text = e.target.value;
        }
        return r;
      })
    ]);
  }
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.4",
      overflow: "hidden"
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ShowHelpersButton2, {
    cn: "button showHelpers"
  }, " ", /* @__PURE__ */ React.createElement("svg", {
    name: "showHelpers",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M18.364 9.77818L20.6642 12.0784L18.3637 14.3788C14.849 17.8935 9.15049 17.8935 5.63577 14.3788L3.33558 12.0786L5.63604 9.77818C9.15075 6.26346 14.8492 6.26346 18.364 9.77818Z",
    stroke: "#F5F5F5",
    strokeWidth: "2"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3",
    fill: "#F5F5F5"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "topbar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "toolbar"
  }, /* @__PURE__ */ React.createElement(Button2, {
    cn: ` ${tool == "move" && "selected"}`,
    hundleOnClick: handleMoveToolClick
  }, " ", /* @__PURE__ */ React.createElement("svg", {
    name: "move",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M7.61269 4.9957L10.3526 19.3133L13.876 14.6404L19.578 13.3222L7.61269 4.9957Z",
    stroke: "#F5F5F5",
    strokeWidth: "2"
  }))), /* @__PURE__ */ React.createElement(Button2, {
    cn: ` ${tool == "addRectangle" && "selected"}`,
    hundleOnClick: handleAddRectangleToolClick
  }, /* @__PURE__ */ React.createElement("svg", {
    name: "rectangle",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2",
    stroke: "#F5F5F5",
    strokeWidth: "2"
  }))), /* @__PURE__ */ React.createElement(Button2, {
    cn: ` ${tool == "addLink" && "selected"}`,
    hundleOnClick: handleAddLinkToolClick
  }, /* @__PURE__ */ React.createElement("svg", {
    name: "link",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M21 4.0004C8 4.0005 16 20.0004 3 20.0004",
    stroke: "#F5F5F5",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))), /* @__PURE__ */ React.createElement(Button2, {
    cn: ` ${tool == "addText" && "selected"}`,
    hundleOnClick: handleAddTextToolClick
  }, /* @__PURE__ */ React.createElement("svg", {
    name: "text",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3H13ZM11 20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20H11ZM11 3V20H13V3H11Z",
    fill: "#F5F5F5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M6 3C6.00001 2.44772 5.55229 2 5.00001 2C4.44772 2 4.00001 2.44771 4 3L6 3ZM4 3.99999C4 4.55228 4.44771 4.99999 5 5C5.55228 5 6 4.55228 6 4L4 3.99999ZM4 3L4 3.99999L6 4L6 3L4 3Z",
    fill: "#F5F5F5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M20 3C20 2.44772 19.5523 2 19 2C18.4477 2 18 2.44771 18 3L20 3ZM18 3.99999C18 4.55228 18.4477 4.99999 19 5C19.5523 5 20 4.55228 20 4L18 3.99999ZM18 3L18 3.99999L20 4L20 3L18 3Z",
    fill: "#F5F5F5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M5 2C4.44772 2 4 2.44772 4 3C4 3.55228 4.44772 4 5 4L5 2ZM19 4C19.5523 4 20 3.55229 20 3C20 2.44772 19.5523 2 19 2L19 4ZM5 4L19 4L19 2L5 2L5 4Z",
    fill: "#F5F5F5"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 20C9.44772 20 9 20.4477 9 21C9 21.5523 9.44772 22 10 22L10 20ZM14 22C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20L14 22ZM10 22L14 22L14 20L10 20L10 22Z",
    fill: "#F5F5F5"
  }))), /* @__PURE__ */ React.createElement(Button2, {
    cn: ` ${tool == "addOthers" && "selected"}`,
    hundleOnClick: handleAddOthersToolClick
  }, /* @__PURE__ */ React.createElement("svg", {
    name: "others",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929C15.3166 9.90237 14.6834 9.90237 14.2929 10.2929L15.7071 11.7071ZM12 14L11.2929 14.7071L12 15.4142L12.7071 14.7071L12 14ZM9.7071 10.2929C9.31658 9.90237 8.68341 9.90237 8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.2929 11.7071L9.7071 10.2929ZM14.2929 10.2929L11.2929 13.2929L12.7071 14.7071L15.7071 11.7071L14.2929 10.2929ZM12.7071 13.2929L9.7071 10.2929L8.2929 11.7071L11.2929 14.7071L12.7071 13.2929Z",
    fill: "#F5F5F5"
  }))))), /* @__PURE__ */ React.createElement("svg", {
    name: "grid",
    onMouseMove: (e) => handleOnMousemoveOnCanvas(e),
    onClick: (e) => handleOnClickOnCanvas(e),
    "z-index": "1",
    width: WINDOW_WIDTH2,
    height: WINDOW_HEIGHT2,
    viewBox: `0 0 ${WINDOW_WIDTH2} ${WINDOW_HEIGHT2}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("filter", {
    id: "filter"
  }), /* @__PURE__ */ React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "#18181B"
  }), Rects.map((rec, i) => {
    return /* @__PURE__ */ React.createElement("g", {
      key: "rectangle" + rec.id
    }, rec.selected && /* @__PURE__ */ React.createElement("rect", {
      x: rec.x - 4,
      y: rec.y - 4,
      width: rec.width + 8,
      height: rec.heigth + 8,
      stroke: "#0EA5E9"
    }), /* @__PURE__ */ React.createElement("rect", {
      rx: "15",
      x: rec.x,
      y: rec.y,
      width: rec.width,
      height: rec.heigth,
      fill: rec.color
    }), /* @__PURE__ */ React.createElement("foreignObject", {
      id: "text",
      x: rec.x + 50,
      y: rec.y + 50,
      width: rec.width + 8,
      height: "50"
    }, /* @__PURE__ */ React.createElement("input", {
      placeholder: rec.text,
      style: {},
      onChange: (e) => handleOnTextChange(e, rec.id)
    })), /* @__PURE__ */ React.createElement("rect", {
      onMouseMove: (e) => handleOnMouseMove(e, rec.id),
      onTouchMove: (e) => handleOnMouseMove(e, rec.id),
      x: rec.x - 4,
      y: rec.y - 4,
      width: rec.width + 8,
      height: rec.heigth + 8,
      fill: "#00000000",
      onClick: (e) => handleRectClick(e, rec.id),
      onMouseDown: (e) => handleDown(e, rec.id),
      onTouchStart: (e) => handleDown(e, rec.id),
      onMouseUp: (e) => handleUp(e),
      onMouseLeave: (e) => handleMouseLeave(e, rec.id),
      onTouchEnd: (e) => handleMouseLeave(e, rec.id),
      onDoubleClick: (e) => handleOnDoubleClick(e, rec.id)
    }));
  }), showHelpers && /* @__PURE__ */ React.createElement("g", null, mouseDown === "mouse down" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", {
    x: "0",
    y: "700",
    width: "1600",
    height: "10",
    fill: "#00eeff"
  }), /* @__PURE__ */ React.createElement("text", {
    x: "1200",
    y: "50",
    fill: "#00eeff"
  }, "mousePosition: ", mousePosition.x, ",", mousePosition.y), /* @__PURE__ */ React.createElement("text", {
    x: "1200",
    y: "70",
    fill: "#ff5100"
  }, "screenMousePosition: ", screenMousePosition.x, ",", screenMousePosition.y)), /* @__PURE__ */ React.createElement("text", {
    x: "12",
    y: "20",
    fill: "#2bff00"
  }, "Tool Choosed: ", tool), /* @__PURE__ */ React.createElement("text", {
    x: "12",
    y: "50",
    fill: "#00eeff"
  }, "mousePosition: ", mousePositiononOnCanvas.x, ",", mousePositiononOnCanvas.y), /* @__PURE__ */ React.createElement("text", {
    x: "12",
    y: "70",
    fill: "#ff5100"
  }, "screenMousePosition: ", screenMousePositionOnCanvas.x, ",", screenMousePositionOnCanvas.y), Rects.map((r, i) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("text", {
    key: r.id,
    x: "12",
    y: 90 + 16 * i,
    fill: "#ff00b7"
  }, "i: ", i, " Pos: ", r.x, ",", r.y, " ----", ">", " ", r.selected ? "selected" : "not selected"))))));
}
function Button2({ cn = "button", hundleOnClick, children }) {
  const [Rects, setRects] = (0, import_jotai3.useAtom)(ObjectList2);
  const [startDrawing, setStartDrawing] = (0, import_jotai3.useAtom)(Drawing2);
  function handleOnMouseOver(e) {
  }
  function handleOnMouseout(e) {
  }
  return /* @__PURE__ */ React.createElement("button", {
    onMouseOver: (e) => handleOnMouseOver(e),
    onMouseOut: (e) => handleOnMouseout(e),
    className: cn,
    onClick: hundleOnClick
  }, /* @__PURE__ */ React.createElement("div", {
    className: "icon24"
  }, children));
}
function ShowHelpersButton2({ cn = "button", children }) {
  const [showHelpers, setShowHelpers] = (0, import_jotai3.useAtom)(ShowHelpersAtom2);
  function hundleToolClick(e) {
    setShowHelpers((prev) => !prev);
  }
  function handleOnMouseOver(e) {
  }
  function handleOnMouseout(e) {
  }
  return /* @__PURE__ */ React.createElement("button", {
    onMouseOver: (e) => handleOnMouseOver(e),
    onMouseOut: (e) => handleOnMouseout(e),
    className: cn,
    onClick: (e) => hundleToolClick(e)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "icon24"
  }, children));
}
function addRectangle() {
  const [Rects, setRects] = (0, import_jotai3.useAtom)(ObjectList2);
  setRects([
    ...Rects,
    {
      text: "",
      selected: false,
      id: (0, import_uuid2.v4)(),
      x: WINDOW_WIDTH2 / 4,
      y: WINDOW_HEIGHT2 / 4,
      width: 100,
      heigth: 100,
      color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
      textEdit: false
    }
  ]);
}

// route:/Users/jamalrayane/Desktop/NewProjects/drawette/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_remix4 = __toModule(require_remix());
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.4"
    }
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/drawette"
  }, " Go to drawette "));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "50f27505", "entry": { "module": "/build/entry.client-2EVBZZFR.js", "imports": ["/build/_shared/chunk-75QY65SR.js", "/build/_shared/chunk-YZVLR6ER.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-5Q5SRR22.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/drawette": { "id": "routes/drawette", "parentId": "root", "path": "drawette", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/drawette-UT5UOPXM.js", "imports": ["/build/_shared/chunk-I27JDQ6T.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/drawette/App": { "id": "routes/drawette/App", "parentId": "routes/drawette", "path": "App", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/drawette/App-QFB4PUYW.js", "imports": ["/build/_shared/chunk-5NCCHI7C.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/drawette/index": { "id": "routes/drawette/index", "parentId": "routes/drawette", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/drawette/index-2GG6542Y.js", "imports": ["/build/_shared/chunk-5NCCHI7C.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-S2OKX4ZT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-50F27505.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/drawette": {
    id: "routes/drawette",
    parentId: "root",
    path: "drawette",
    index: void 0,
    caseSensitive: void 0,
    module: drawette_exports
  },
  "routes/drawette/index": {
    id: "routes/drawette/index",
    parentId: "routes/drawette",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: drawette_exports2
  },
  "routes/drawette/App": {
    id: "routes/drawette/App",
    parentId: "routes/drawette",
    path: "App",
    index: void 0,
    caseSensitive: void 0,
    module: App_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2phbWFscmF5YW5lL0Rlc2t0b3AvTmV3UHJvamVjdHMvZHJhd2V0dGUvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9Vc2Vycy9qYW1hbHJheWFuZS9EZXNrdG9wL05ld1Byb2plY3RzL2RyYXdldHRlL2FwcC9yb3V0ZXMvZHJhd2V0dGUudHN4IiwgInJvdXRlOi9Vc2Vycy9qYW1hbHJheWFuZS9EZXNrdG9wL05ld1Byb2plY3RzL2RyYXdldHRlL2FwcC9yb3V0ZXMvZHJhd2V0dGUvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9yb3V0ZXMvZHJhd2V0dGUvQXBwLnRzeCIsICJyb3V0ZTovVXNlcnMvamFtYWxyYXlhbmUvRGVza3RvcC9OZXdQcm9qZWN0cy9kcmF3ZXR0ZS9hcHAvcm91dGVzL2RyYXdldHRlL0FwcC50c3giLCAicm91dGU6L1VzZXJzL2phbWFscmF5YW5lL0Rlc2t0b3AvTmV3UHJvamVjdHMvZHJhd2V0dGUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgY29uc3QgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJ4LW5ldGxpZnktZ3JhcGgtc2lnbmF0dXJlXCJdO1xuXG4gIGlmIChhdXRoSGVhZGVyICE9IG51bGwgJiYgL0JlYXJlciAvZ2kudGVzdChhdXRoSGVhZGVyKSkge1xuICAgIHJhd0F1dGhvcml6YXRpb25TdHJpbmcgPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvamFtYWxyYXlhbmUvRGVza3RvcC9OZXdQcm9qZWN0cy9kcmF3ZXR0ZS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvVXNlcnMvamFtYWxyYXlhbmUvRGVza3RvcC9OZXdQcm9qZWN0cy9kcmF3ZXR0ZS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL1VzZXJzL2phbWFscmF5YW5lL0Rlc2t0b3AvTmV3UHJvamVjdHMvZHJhd2V0dGUvYXBwL3JvdXRlcy9kcmF3ZXR0ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2phbWFscmF5YW5lL0Rlc2t0b3AvTmV3UHJvamVjdHMvZHJhd2V0dGUvYXBwL3JvdXRlcy9kcmF3ZXR0ZS9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2phbWFscmF5YW5lL0Rlc2t0b3AvTmV3UHJvamVjdHMvZHJhd2V0dGUvYXBwL3JvdXRlcy9kcmF3ZXR0ZS9BcHAudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy9qYW1hbHJheWFuZS9EZXNrdG9wL05ld1Byb2plY3RzL2RyYXdldHRlL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9kcmF3ZXR0ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZHJhd2V0dGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZHJhd2V0dGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2RyYXdldHRlL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kcmF3ZXR0ZS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RyYXdldHRlXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvZHJhd2V0dGUvQXBwXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kcmF3ZXR0ZS9BcHBcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9kcmF3ZXR0ZVwiLFxuICAgICAgcGF0aDogXCJBcHBcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnfi9zdHlsZXMvc2hhcmVkLmNzcydcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlcyB9XVxufVxuXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogJ05ldyBSZW1peCBBcHAnIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9J2VuJz5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEnIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHlcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMS40JyxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnam90YWknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyYXdldHRlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UHJvdmlkZXI+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsICJpbXBvcnQgeyBhdG9tLCB1c2VBdG9tIH0gZnJvbSAnam90YWknXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCdcblxuLy8gbGV0IFdJTkRPV19XSURUSCA9IGF0b20od2luZG93LmlubmVyV2lkdGgpXG4vLyBsZXQgV0lORE9XX0hFSUdIVCA9IGF0b20od2luZG93LmlubmVySGVpZ2h0KVxuXG5sZXQgV0lORE9XX1dJRFRIID0gMTQwMFxubGV0IFdJTkRPV19IRUlHSFQgPSA4MDBcblxuZnVuY3Rpb24gbG9nKHg6IGFueSkge1xuICBjb25zb2xlLmxvZyh4KVxufVxuXG5jb25zdCBTY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMgPSBhdG9tKHt9KVxuY29uc3QgTW91c2VQb3NpdGlvbk9uQ2FudmFzID0gYXRvbSh7fSlcbmNvbnN0IFNjcmVlbk1vdXNlUG9zaXRpb24gPSBhdG9tKHsgeDogNjAwLCB5OiA0MDAgfSlcblxuY29uc3QgU2hvd0hlbHBlcnNBdG9tID0gYXRvbShmYWxzZSlcbmNvbnN0IE9iamVjdFNlbGVjdGVkID0gYXRvbShmYWxzZSlcbmNvbnN0IERyYXdpbmcgPSBhdG9tKGZhbHNlKVxuY29uc3QgTW91c2VEb3duQXRvbSA9IGF0b20oJycpXG5jb25zdCBUb29sQ2hvb3NlZCA9IGF0b20oJycpXG5jb25zdCBNb3VzZVBvc2l0aW9uID0gYXRvbSh7IHg6IDYwMCwgeTogNDAwIH0pXG5cbmNvbnN0IE9iamVjdExpc3QgPSBhdG9tPFxuICB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlndGg6IG51bWJlclxuICAgIGNvbG9yOiBzdHJpbmdcbiAgICBzZWxlY3RlZDogYm9vbGVhblxuICAgIHRleHQ6IHN0cmluZ1xuICAgIHRleHRFZGl0OiBib29sZWFuXG4gIH1bXVxuPihbXSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIFdJTkRPV19XSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIC8vICAgV0lORE9XX0hFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAvLyB9LCBbXSlcblxuICBjb25zdCBbbW91c2VQb3NpdGlvbm9uT25DYW52YXMsIHNldE1vdXNlUG9zaXRpb25vbk9uQ2FudmFzXSA9IHVzZUF0b20oXG4gICAgTW91c2VQb3NpdGlvbk9uQ2FudmFzXG4gIClcbiAgY29uc3QgW3NjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhcywgc2V0U2NyZWVuTW91c2VQb3NpdGlvbk9uQ2FudmFzXSA9IHVzZUF0b20oXG4gICAgU2NyZWVuTW91c2VQb3NpdGlvbk9uQ2FudmFzXG4gIClcbiAgY29uc3QgW1JlY3RzLCBzZXRSZWN0c10gPSB1c2VBdG9tKE9iamVjdExpc3QpXG5cbiAgY29uc3QgW3Nob3dIZWxwZXJzLCBzZXRTaG93SGVscGVyc10gPSB1c2VBdG9tKFNob3dIZWxwZXJzQXRvbSlcbiAgY29uc3QgW3Rvb2wsIHNldFRvb2xdID0gdXNlQXRvbShUb29sQ2hvb3NlZClcblxuICBjb25zdCBbbW91c2VEb3duLCBzZXRNb3VzZURvd25dID0gdXNlQXRvbShNb3VzZURvd25BdG9tKVxuICBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VBdG9tKE1vdXNlUG9zaXRpb24pXG4gIGNvbnN0IFtzY3JlZW5Nb3VzZVBvc2l0aW9uLCBzZXRTY3JlZW5Nb3VzZVBvc2l0aW9uXSA9XG4gICAgdXNlQXRvbShTY3JlZW5Nb3VzZVBvc2l0aW9uKVxuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZUF0b20oT2JqZWN0U2VsZWN0ZWQpXG5cbiAgY29uc3QgW3N0YXJ0RHJhd2luZywgc2V0U3RhcnREcmF3aW5nXSA9IHVzZUF0b20oRHJhd2luZylcblxuICBsZXQgbW91c2VQb3NlMCA9IHsgeDogNTAsIHk6IDUwIH1cbiAgbGV0IHNoYXBlUG9zZTAgPSB7IHg6IDAsIHk6IDAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVJlY3RDbGljayhlLCBpZCkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5rZXksIGlkKVxuICAgIHNldFJlY3RzKFtcbiAgICAgIC4uLlJlY3RzLm1hcCgocikgPT4ge1xuICAgICAgICBpZiAoci5pZCA9PT0gaWQpIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIHIuY29sb3IgPSAnIzAwZSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICAvLyByLmNvbG9yID0gci5jb2xvclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByXG4gICAgICB9KSxcbiAgICBdKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25Eb3VibGVDbGljayhlLCBpZCkge1xuICAgIC8vIHNldE1vdXNlRG93bigocHJldikgPT4gJ21vdXNlIGRvd24nKVxuICAgIGxvZyhlKVxuXG4gICAgLy8gbW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiZcbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuaWQgPT09IGlkKSB7XG4gICAgICAgICAgciA9IHtcbiAgICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHQ6ICdNJyxcbiAgICAgICAgICAgIHRleHRFZGl0OiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKGUsIGlkKSB7XG4gICAgLy8gc2V0TW91c2VEb3duKChwcmV2KSA9PiAnbW91c2UgZG93bicpXG4gICAgaGFuZGxlT25Nb3VzZU1vdmUoZSwgaWQpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZU1vdmUoZSwgaWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBtb3VzZURvd24gPT09ICdtb3VzZSBkb3duJyAmJlxuICAgICAgc2V0UmVjdHMoW1xuICAgICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgICBpZiAoci5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICB4OiBlLmNsaWVudFggLSA1MCxcbiAgICAgICAgICAgICAgeTogZS5jbGllbnRZIC0gNTAsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByXG4gICAgICAgIH0pLFxuICAgICAgXSlcblxuICAgIG1vdXNlRG93biA9PT0gJ21vdXNlIGRvd24nICYmXG4gICAgICBzZXRTY3JlZW5Nb3VzZVBvc2l0aW9uKChwcmV2KSA9PiAoe1xuICAgICAgICB4OiBlLnNjcmVlblgsXG4gICAgICAgIHk6IGUuc2NyZWVuWSxcbiAgICAgIH0pKVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2Vtb3ZlT25DYW52YXMoZSkge1xuICAgIHNldE1vdXNlUG9zaXRpb25vbk9uQ2FudmFzKChwcmV2KSA9PiAoe1xuICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgeTogZS5jbGllbnRZLFxuICAgIH0pKVxuXG4gICAgc2V0U2NyZWVuTW91c2VQb3NpdGlvbk9uQ2FudmFzKChwcmV2KSA9PiAoe1xuICAgICAgeDogZS5zY3JlZW5YLFxuICAgICAgeTogZS5zY3JlZW5ZLFxuICAgIH0pKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRG93bihlLCBpKSB7XG4gICAgc2V0TW91c2VEb3duKChwcmV2KSA9PiAnbW91c2UgZG93bicpXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS1tb3VzZSBkb3duJywgZSlcbiAgICAvLyBsb2dNb3VzZSgpXG4gICAgLy8gc2hhcGVQb3NlMCA9IHsgeDogZS50YXJnZXQueC5iYXNlVmFsLnZhbHVlLCB5OiBlLnRhcmdldC54LmJhc2VWYWwudmFsdWUgfVxuICAgIC8vIG1vdXNlUG9zZTAgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH1cbiAgICBzZXRTZWxlY3RlZCgocHJldikgPT4gIXByZXYpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlVXAoZSkge1xuICAgIHNldE1vdXNlRG93bigocHJldikgPT4gJ21vdXNlIHVwJylcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLW1vdXNlIHVwJylcbiAgICAvLyBsb2dNb3VzZSgpXG4gICAgc2V0U2VsZWN0ZWQoKHByZXYpID0+ICFwcmV2KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25DbGlja09uQ2FudmFzKFxuICAgIGU6IE1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgLy8gc3RhcnREcmF3aW5nICYmXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMsXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgeDogV0lORE9XX1dJRFRIIC8gNCxcbiAgICAgICAgeTogV0lORE9XX0hFSUdIVCAvIDQsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWd0aDogMTAwLFxuICAgICAgICBjb2xvcjogYHJnYmEoMjU1LCAwLCAwKWAsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICB0ZXh0RWRpdDogZmFsc2UsXG4gICAgICB9LFxuICAgIF0pXG5cbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLW1vdXNlIGNsaWNrJywgZSlcbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuc2VsZWN0ZWQpIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICByLnRleHRFZGl0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFJlY3RhbmdsZVRvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZFJlY3RhbmdsZScpXG5cbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cyxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICB4OiBXSU5ET1dfV0lEVEggLyA0LFxuICAgICAgICB5OiBXSU5ET1dfSEVJR0hUIC8gNCxcbiAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgaGVpZ3RoOiAxMDAsXG4gICAgICAgIGNvbG9yOiBgcmdiYSgke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSl9LCAke01hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxuICAgICAgICApfSwgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpfSlgLFxuICAgICAgICB0ZXh0OiAnUicsXG4gICAgICAgIHRleHRFZGl0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdmVUb29sQ2xpY2soZSkge1xuICAgIHNldFRvb2woKHApID0+ICdtb3ZlJylcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVBZGRMaW5rVG9vbENsaWNrKGUpIHtcbiAgICBzZXRUb29sKChwKSA9PiAnYWRkTGluaycpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQWRkVGV4dFRvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZFRleHQnKVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUFkZE90aGVyc1Rvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZE9oZXJzJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9uVGV4dENoYW5nZShcbiAgICBlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBpZDogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIGxvZyhSZWN0cylcbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuaWQgPT0gaWQpIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgIHIudGV4dEVkaXQgPSB0cnVlXG4gICAgICAgICAgci50ZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuICAvLyBSRVRVUk5cbiAgLy8gUkVUVVJOXG4gIC8vIFJFVFVSTlxuICAvLyBSRVRVUk5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNob3dIZWxwZXJzQnV0dG9uIGNuPXsnYnV0dG9uIHNob3dIZWxwZXJzJ30+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBuYW1lPSdzaG93SGVscGVycydcbiAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgIGhlaWdodD0nMjQnXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00xOC4zNjQgOS43NzgxOEwyMC42NjQyIDEyLjA3ODRMMTguMzYzNyAxNC4zNzg4QzE0Ljg0OSAxNy44OTM1IDkuMTUwNDkgMTcuODkzNSA1LjYzNTc3IDE0LjM3ODhMMy4zMzU1OCAxMi4wNzg2TDUuNjM2MDQgOS43NzgxOEM5LjE1MDc1IDYuMjYzNDYgMTQuODQ5MiA2LjI2MzQ2IDE4LjM2NCA5Ljc3ODE4WidcbiAgICAgICAgICAgICAgc3Ryb2tlPScjRjVGNUY1J1xuICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PScxMicgY3k9JzEyJyByPSczJyBmaWxsPScjRjVGNUY1JyAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L1Nob3dIZWxwZXJzQnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3BiYXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9vbGJhcic+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY249e2AgJHt0b29sID09ICdtb3ZlJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVNb3ZlVG9vbENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J21vdmUnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTcuNjEyNjkgNC45OTU3TDEwLjM1MjYgMTkuMzEzM0wxMy44NzYgMTQuNjQwNEwxOS41NzggMTMuMzIyMkw3LjYxMjY5IDQuOTk1N1onXG4gICAgICAgICAgICAgICAgc3Ryb2tlPScjRjVGNUY1J1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY249e2AgJHt0b29sID09ICdhZGRSZWN0YW5nbGUnICYmICdzZWxlY3RlZCd9YH1cbiAgICAgICAgICAgIGh1bmRsZU9uQ2xpY2s9e2hhbmRsZUFkZFJlY3RhbmdsZVRvb2xDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J3JlY3RhbmdsZSdcbiAgICAgICAgICAgICAgd2lkdGg9JzI0J1xuICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICB4PSczJ1xuICAgICAgICAgICAgICAgIHk9JzUnXG4gICAgICAgICAgICAgICAgd2lkdGg9JzE4J1xuICAgICAgICAgICAgICAgIGhlaWdodD0nMTQnXG4gICAgICAgICAgICAgICAgcng9JzInXG4gICAgICAgICAgICAgICAgc3Ryb2tlPScjRjVGNUY1J1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY249e2AgJHt0b29sID09ICdhZGRMaW5rJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVBZGRMaW5rVG9vbENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgbmFtZT0nbGluaydcbiAgICAgICAgICAgICAgd2lkdGg9JzI0J1xuICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPSdNMjEgNC4wMDA0QzggNC4wMDA1IDE2IDIwLjAwMDQgMyAyMC4wMDA0J1xuICAgICAgICAgICAgICAgIHN0cm9rZT0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnYWRkVGV4dCcgJiYgJ3NlbGVjdGVkJ31gfVxuICAgICAgICAgICAgaHVuZGxlT25DbGljaz17aGFuZGxlQWRkVGV4dFRvb2xDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J3RleHQnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTEzIDNDMTMgMi40NDc3MiAxMi41NTIzIDIgMTIgMkMxMS40NDc3IDIgMTEgMi40NDc3MiAxMSAzSDEzWk0xMSAyMEMxMSAyMC41NTIzIDExLjQ0NzcgMjEgMTIgMjFDMTIuNTUyMyAyMSAxMyAyMC41NTIzIDEzIDIwSDExWk0xMSAzVjIwSDEzVjNIMTFaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTYgM0M2LjAwMDAxIDIuNDQ3NzIgNS41NTIyOSAyIDUuMDAwMDEgMkM0LjQ0NzcyIDIgNC4wMDAwMSAyLjQ0NzcxIDQgM0w2IDNaTTQgMy45OTk5OUM0IDQuNTUyMjggNC40NDc3MSA0Ljk5OTk5IDUgNUM1LjU1MjI4IDUgNiA0LjU1MjI4IDYgNEw0IDMuOTk5OTlaTTQgM0w0IDMuOTk5OTlMNiA0TDYgM0w0IDNaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTIwIDNDMjAgMi40NDc3MiAxOS41NTIzIDIgMTkgMkMxOC40NDc3IDIgMTggMi40NDc3MSAxOCAzTDIwIDNaTTE4IDMuOTk5OTlDMTggNC41NTIyOCAxOC40NDc3IDQuOTk5OTkgMTkgNUMxOS41NTIzIDUgMjAgNC41NTIyOCAyMCA0TDE4IDMuOTk5OTlaTTE4IDNMMTggMy45OTk5OUwyMCA0TDIwIDNMMTggM1onXG4gICAgICAgICAgICAgICAgZmlsbD0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPSdNNSAyQzQuNDQ3NzIgMiA0IDIuNDQ3NzIgNCAzQzQgMy41NTIyOCA0LjQ0NzcyIDQgNSA0TDUgMlpNMTkgNEMxOS41NTIzIDQgMjAgMy41NTIyOSAyMCAzQzIwIDIuNDQ3NzIgMTkuNTUyMyAyIDE5IDJMMTkgNFpNNSA0TDE5IDRMMTkgMkw1IDJMNSA0WidcbiAgICAgICAgICAgICAgICBmaWxsPScjRjVGNUY1J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J00xMCAyMEM5LjQ0NzcyIDIwIDkgMjAuNDQ3NyA5IDIxQzkgMjEuNTUyMyA5LjQ0NzcyIDIyIDEwIDIyTDEwIDIwWk0xNCAyMkMxNC41NTIzIDIyIDE1IDIxLjU1MjMgMTUgMjFDMTUgMjAuNDQ3NyAxNC41NTIzIDIwIDE0IDIwTDE0IDIyWk0xMCAyMkwxNCAyMkwxNCAyMEwxMCAyMEwxMCAyMlonXG4gICAgICAgICAgICAgICAgZmlsbD0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnYWRkT3RoZXJzJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVBZGRPdGhlcnNUb29sQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBuYW1lPSdvdGhlcnMnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTE1LjcwNzEgMTEuNzA3MUMxNi4wOTc2IDExLjMxNjYgMTYuMDk3NiAxMC42ODM0IDE1LjcwNzEgMTAuMjkyOUMxNS4zMTY2IDkuOTAyMzcgMTQuNjgzNCA5LjkwMjM3IDE0LjI5MjkgMTAuMjkyOUwxNS43MDcxIDExLjcwNzFaTTEyIDE0TDExLjI5MjkgMTQuNzA3MUwxMiAxNS40MTQyTDEyLjcwNzEgMTQuNzA3MUwxMiAxNFpNOS43MDcxIDEwLjI5MjlDOS4zMTY1OCA5LjkwMjM3IDguNjgzNDEgOS45MDIzNyA4LjI5Mjg5IDEwLjI5MjlDNy45MDIzNyAxMC42ODM0IDcuOTAyMzcgMTEuMzE2NiA4LjI5MjkgMTEuNzA3MUw5LjcwNzEgMTAuMjkyOVpNMTQuMjkyOSAxMC4yOTI5TDExLjI5MjkgMTMuMjkyOUwxMi43MDcxIDE0LjcwNzFMMTUuNzA3MSAxMS43MDcxTDE0LjI5MjkgMTAuMjkyOVpNMTIuNzA3MSAxMy4yOTI5TDkuNzA3MSAxMC4yOTI5TDguMjkyOSAxMS43MDcxTDExLjI5MjkgMTQuNzA3MUwxMi43MDcxIDEzLjI5MjlaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN2Z1xuICAgICAgICBuYW1lPSdncmlkJ1xuICAgICAgICBvbk1vdXNlTW92ZT17KGUpID0+IGhhbmRsZU9uTW91c2Vtb3ZlT25DYW52YXMoZSl9XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPbkNsaWNrT25DYW52YXMoZSl9XG4gICAgICAgIHotaW5kZXg9JzEnXG4gICAgICAgIHdpZHRoPXtXSU5ET1dfV0lEVEh9XG4gICAgICAgIGhlaWdodD17V0lORE9XX0hFSUdIVH1cbiAgICAgICAgdmlld0JveD17YDAgMCAke1dJTkRPV19XSURUSH0gJHtXSU5ET1dfSEVJR0hUfWB9XG4gICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgID5cbiAgICAgICAgPGZpbHRlciBpZD0nZmlsdGVyJz5cbiAgICAgICAgICB7LyogPGZlTW9ycGhvbG9neSBvcGVyYXRvcj0nZXJvZGUnIHJhZGl1cz0nMzAnIC8+ICovfVxuICAgICAgICAgIHsvKiA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSc1JyAvPiAqL31cbiAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9JyMxODE4MUInIC8+XG5cbiAgICAgICAgey8qIDxyZWN0XG4gICAgICAgICAgLy8gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Mjk5fSAkezIwMH0pYH1cbiAgICAgICAgICB4PScxMjAwJ1xuICAgICAgICAgIHk9JzcwJ1xuICAgICAgICAgIHdpZHRoPSc4MCdcbiAgICAgICAgICBoZWlnaHQ9JzgwJ1xuICAgICAgICAgIGZpbGw9JyMwMDAwZmYnXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfVxuICAgICAgICAvPiAqL31cblxuICAgICAgICB7UmVjdHMubWFwKChyZWMsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGcga2V5PXsncmVjdGFuZ2xlJyArIHJlYy5pZH0+XG4gICAgICAgICAgICAgIHtyZWMuc2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICB4PXtyZWMueCAtIDR9XG4gICAgICAgICAgICAgICAgICB5PXtyZWMueSAtIDR9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17cmVjLndpZHRoICsgOH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17cmVjLmhlaWd0aCArIDh9XG4gICAgICAgICAgICAgICAgICAvLyBmaWxsPScjMEVBNUU5J1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlPScjMEVBNUU5J1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAvLyB6LWluZGV4PScxMDAwJ1xuICAgICAgICAgICAgICAgIC8vIGZpbHRlcj0ndXJsKCNlcm9kZSknXG4gICAgICAgICAgICAgICAgcng9JzE1J1xuICAgICAgICAgICAgICAgIC8vIG9uTW91c2VNb3ZlPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU1vdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAvLyBvblRvdWNoTW92ZT17KGUpID0+IGhhbmRsZU9uTW91c2VNb3ZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgLy8gb25EcmFnPXsoZSkgPT4gaGFuZGxlT25tb3VzZW1vdmUoZSl9XG4gICAgICAgICAgICAgICAgeD17cmVjLnh9XG4gICAgICAgICAgICAgICAgeT17cmVjLnl9XG4gICAgICAgICAgICAgICAgd2lkdGg9e3JlYy53aWR0aH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e3JlYy5oZWlndGh9XG4gICAgICAgICAgICAgICAgZmlsbD17cmVjLmNvbG9yfVxuICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVSZWN0Q2xpY2soZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAvLyBvbk1vdXNlRG93bj17KGUpID0+IGhhbmRsZURvd24oZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAvLyBvblRvdWNoU3RhcnQ9eyhlKSA9PiBoYW5kbGVEb3duKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgLy8gb25Nb3VzZVVwPXsoZSkgPT4gaGFuZGxlVXAoZSl9XG4gICAgICAgICAgICAgICAgLy8gb25Nb3VzZUxlYXZlPXsoZSkgPT4gaGFuZGxlTW91c2VMZWF2ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIC8vIG9uVG91Y2hFbmQ9eyhlKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgey8qIDx0ZXh0IHg9e3JlYy54ICsgNTB9IHk9e3JlYy55ICsgNTB9IGZpbGw9JyNkY2QyZmYnPlxuICAgICAgICAgICAgICAgIHtyZWMudGV4dH1cbiAgICAgICAgICAgICAgPC90ZXh0PiAqL31cblxuICAgICAgICAgICAgICA8Zm9yZWlnbk9iamVjdFxuICAgICAgICAgICAgICAgIGlkPSd0ZXh0J1xuICAgICAgICAgICAgICAgIHg9e3JlYy54ICsgNTB9XG4gICAgICAgICAgICAgICAgeT17cmVjLnkgKyA1MH1cbiAgICAgICAgICAgICAgICB3aWR0aD17cmVjLndpZHRoICsgOH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzUwJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cmVjLnRleHR9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e319XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZU9uVGV4dENoYW5nZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZm9yZWlnbk9iamVjdD5cblxuICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgIC8vIHotaW5kZXg9JzEwMDAnXG4gICAgICAgICAgICAgICAgLy9QcmltYXJ5IExheWVyXG5cbiAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KGUpID0+IGhhbmRsZU9uTW91c2VNb3ZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgb25Ub3VjaE1vdmU9eyhlKSA9PiBoYW5kbGVPbk1vdXNlTW92ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIC8vIG9uRHJhZz17KGUpID0+IGhhbmRsZU9ubW91c2Vtb3ZlKGUpfVxuICAgICAgICAgICAgICAgIHg9e3JlYy54IC0gNH1cbiAgICAgICAgICAgICAgICB5PXtyZWMueSAtIDR9XG4gICAgICAgICAgICAgICAgd2lkdGg9e3JlYy53aWR0aCArIDh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtyZWMuaGVpZ3RoICsgOH1cbiAgICAgICAgICAgICAgICBmaWxsPScjMDAwMDAwMDAnXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVJlY3RDbGljayhlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gaGFuZGxlRG93bihlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17KGUpID0+IGhhbmRsZURvd24oZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eyhlKSA9PiBoYW5kbGVVcChlKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17KGUpID0+IGhhbmRsZU1vdXNlTGVhdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoZSkgPT4gaGFuZGxlT25Eb3VibGVDbGljayhlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG5cbiAgICAgICAge3Nob3dIZWxwZXJzICYmIChcbiAgICAgICAgICAvLyBTaG93IEhlbHBlcnMgYW5kIFN0YXRzXG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICB7bW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxyZWN0IHg9JzAnIHk9JzcwMCcgd2lkdGg9JzE2MDAnIGhlaWdodD0nMTAnIGZpbGw9JyMwMGVlZmYnIC8+XG4gICAgICAgICAgICAgICAgPHRleHQgeD0nMTIwMCcgeT0nNTAnIGZpbGw9JyMwMGVlZmYnPlxuICAgICAgICAgICAgICAgICAgbW91c2VQb3NpdGlvbjoge21vdXNlUG9zaXRpb24ueH0se21vdXNlUG9zaXRpb24ueX1cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgPHRleHQgeD0nMTIwMCcgeT0nNzAnIGZpbGw9JyNmZjUxMDAnPlxuICAgICAgICAgICAgICAgICAgc2NyZWVuTW91c2VQb3NpdGlvbjoge3NjcmVlbk1vdXNlUG9zaXRpb24ueH0sXG4gICAgICAgICAgICAgICAgICB7c2NyZWVuTW91c2VQb3NpdGlvbi55fVxuICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7LyogPGZvcmVpZ25PYmplY3QgeD0nMjAnIHk9JzIwJyB3aWR0aD0nMTYwJyBoZWlnaHQ9JzE2MCc+XG4gICAgICAgICAgICAgIDxkaXY+VG9vbCBDaG9vc2VkOiB7dG9vbH08L2Rpdj5cbiAgICAgICAgICAgIDwvZm9yZWlnbk9iamVjdD4gKi99XG5cbiAgICAgICAgICAgIDx0ZXh0IHg9JzEyJyB5PScyMCcgZmlsbD0nIzJiZmYwMCc+XG4gICAgICAgICAgICAgIFRvb2wgQ2hvb3NlZDoge3Rvb2x9XG4gICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICA8dGV4dCB4PScxMicgeT0nNTAnIGZpbGw9JyMwMGVlZmYnPlxuICAgICAgICAgICAgICBtb3VzZVBvc2l0aW9uOiB7bW91c2VQb3NpdGlvbm9uT25DYW52YXMueH0sXG4gICAgICAgICAgICAgIHttb3VzZVBvc2l0aW9ub25PbkNhbnZhcy55fVxuICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgeD0nMTInIHk9JzcwJyBmaWxsPScjZmY1MTAwJz5cbiAgICAgICAgICAgICAgc2NyZWVuTW91c2VQb3NpdGlvbjoge3NjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhcy54fSxcbiAgICAgICAgICAgICAge3NjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhcy55fVxuICAgICAgICAgICAgPC90ZXh0PlxuXG4gICAgICAgICAgICB7UmVjdHMubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHRleHQga2V5PXtyLmlkfSB4PScxMicgeT17OTAgKyAxNiAqIGl9IGZpbGw9JyNmZjAwYjcnPlxuICAgICAgICAgICAgICAgICAgey8qIFJlY3RJZDp7ci5pZH0gICovfVxuICAgICAgICAgICAgICAgICAgaToge2l9IFBvczoge3IueH0se3IueX0gLS0tLXsnPid9eycgJ31cbiAgICAgICAgICAgICAgICAgIHtyLnNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICdub3Qgc2VsZWN0ZWQnfVxuICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2c+XG4gICAgICAgICl9XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHsgY24gPSAnYnV0dG9uJywgaHVuZGxlT25DbGljaywgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbUmVjdHMsIHNldFJlY3RzXSA9IHVzZUF0b20oT2JqZWN0TGlzdClcbiAgY29uc3QgW3N0YXJ0RHJhd2luZywgc2V0U3RhcnREcmF3aW5nXSA9IHVzZUF0b20oRHJhd2luZylcblxuICAvLyBmdW5jdGlvbiBodW5kbGVUb29sQ2xpY2soZSkge1xuICAvLyAgIHNldFN0YXJ0RHJhd2luZyh0cnVlKVxuICAvLyAgIC8vIGUuc3RvcFByb3BwYWdhdGlvbigpXG4gIC8vICAgLy8gY29uc29sZS5sb2coUmVjdHMpXG5cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZU92ZXIoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwRjAnXG4gICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjBlJ1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2VvdXQoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwRjAnXG4gICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDAwMDAwMDAnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU92ZXIoZSl9XG4gICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gaGFuZGxlT25Nb3VzZW91dChlKX1cbiAgICAgIC8vIG9uTW91c2VPdXQ9eyhlKSA9PiAodGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEYnKX1cbiAgICAgIGNsYXNzTmFtZT17Y259XG4gICAgICBvbkNsaWNrPXtodW5kbGVPbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uMjQnPntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2hvd0hlbHBlcnNCdXR0b24oeyBjbiA9ICdidXR0b24nLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzaG93SGVscGVycywgc2V0U2hvd0hlbHBlcnNdID0gdXNlQXRvbShTaG93SGVscGVyc0F0b20pXG5cbiAgZnVuY3Rpb24gaHVuZGxlVG9vbENsaWNrKGUpIHtcbiAgICAvLyBlLnN0b3BQcm9wcGFnYXRpb24oKVxuICAgIHNldFNob3dIZWxwZXJzKChwcmV2KSA9PiAhcHJldilcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVPbk1vdXNlT3ZlcihlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAvLyB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnIzBGMCdcbiAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmMGUnXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZW91dChlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAvLyB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnIzBGMCdcbiAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMDAwMDAwMCdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25Nb3VzZU92ZXI9eyhlKSA9PiBoYW5kbGVPbk1vdXNlT3ZlcihlKX1cbiAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBoYW5kbGVPbk1vdXNlb3V0KGUpfVxuICAgICAgLy8gb25Nb3VzZU91dD17KGUpID0+ICh0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwRicpfVxuICAgICAgY2xhc3NOYW1lPXtjbn1cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiBodW5kbGVUb29sQ2xpY2soZSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24yNCc+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZWN0YW5nbGUoKSB7XG4gIGNvbnN0IFtSZWN0cywgc2V0UmVjdHNdID0gdXNlQXRvbShPYmplY3RMaXN0KVxuICBzZXRSZWN0cyhbXG4gICAgLi4uUmVjdHMsXG4gICAge1xuICAgICAgdGV4dDogJycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICBpZDogdXVpZCgpLFxuICAgICAgeDogV0lORE9XX1dJRFRIIC8gNCxcbiAgICAgIHk6IFdJTkRPV19IRUlHSFQgLyA0LFxuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIGhlaWd0aDogMTAwLFxuICAgICAgY29sb3I6IGByZ2JhKCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KX0sICR7TWF0aC5mbG9vcihcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxuICAgICAgKX0sICR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KX0pYCxcblxuICAgICAgdGV4dEVkaXQ6IGZhbHNlLFxuICAgIH0sXG4gIF0pXG59XG4iLCAiaW1wb3J0IHsgYXRvbSwgdXNlQXRvbSB9IGZyb20gJ2pvdGFpJ1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXG5cbi8vIGxldCBXSU5ET1dfV0lEVEggPSBhdG9tKHdpbmRvdy5pbm5lcldpZHRoKVxuLy8gbGV0IFdJTkRPV19IRUlHSFQgPSBhdG9tKHdpbmRvdy5pbm5lckhlaWdodClcblxubGV0IFdJTkRPV19XSURUSCA9IDE0MDBcbmxldCBXSU5ET1dfSEVJR0hUID0gODAwXG5cbmZ1bmN0aW9uIGxvZyh4OiBhbnkpIHtcbiAgY29uc29sZS5sb2coeClcbn1cblxuY29uc3QgU2NyZWVuTW91c2VQb3NpdGlvbk9uQ2FudmFzID0gYXRvbSh7fSlcbmNvbnN0IE1vdXNlUG9zaXRpb25PbkNhbnZhcyA9IGF0b20oe30pXG5jb25zdCBTY3JlZW5Nb3VzZVBvc2l0aW9uID0gYXRvbSh7IHg6IDYwMCwgeTogNDAwIH0pXG5cbmNvbnN0IFNob3dIZWxwZXJzQXRvbSA9IGF0b20oZmFsc2UpXG5jb25zdCBPYmplY3RTZWxlY3RlZCA9IGF0b20oZmFsc2UpXG5jb25zdCBEcmF3aW5nID0gYXRvbShmYWxzZSlcbmNvbnN0IE1vdXNlRG93bkF0b20gPSBhdG9tKCcnKVxuY29uc3QgVG9vbENob29zZWQgPSBhdG9tKCcnKVxuY29uc3QgTW91c2VQb3NpdGlvbiA9IGF0b20oeyB4OiA2MDAsIHk6IDQwMCB9KVxuXG5jb25zdCBPYmplY3RMaXN0ID0gYXRvbTxcbiAge1xuICAgIGlkOiBzdHJpbmdcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgaGVpZ3RoOiBudW1iZXJcbiAgICBjb2xvcjogc3RyaW5nXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW5cbiAgICB0ZXh0OiBzdHJpbmdcbiAgICB0ZXh0RWRpdDogYm9vbGVhblxuICB9W11cbj4oW10pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBXSU5ET1dfV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAvLyAgIFdJTkRPV19IRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgLy8gfSwgW10pXG5cbiAgY29uc3QgW21vdXNlUG9zaXRpb25vbk9uQ2FudmFzLCBzZXRNb3VzZVBvc2l0aW9ub25PbkNhbnZhc10gPSB1c2VBdG9tKFxuICAgIE1vdXNlUG9zaXRpb25PbkNhbnZhc1xuICApXG4gIGNvbnN0IFtzY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMsIHNldFNjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhc10gPSB1c2VBdG9tKFxuICAgIFNjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhc1xuICApXG4gIGNvbnN0IFtSZWN0cywgc2V0UmVjdHNdID0gdXNlQXRvbShPYmplY3RMaXN0KVxuXG4gIGNvbnN0IFtzaG93SGVscGVycywgc2V0U2hvd0hlbHBlcnNdID0gdXNlQXRvbShTaG93SGVscGVyc0F0b20pXG4gIGNvbnN0IFt0b29sLCBzZXRUb29sXSA9IHVzZUF0b20oVG9vbENob29zZWQpXG5cbiAgY29uc3QgW21vdXNlRG93biwgc2V0TW91c2VEb3duXSA9IHVzZUF0b20oTW91c2VEb3duQXRvbSlcbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlQXRvbShNb3VzZVBvc2l0aW9uKVxuICBjb25zdCBbc2NyZWVuTW91c2VQb3NpdGlvbiwgc2V0U2NyZWVuTW91c2VQb3NpdGlvbl0gPVxuICAgIHVzZUF0b20oU2NyZWVuTW91c2VQb3NpdGlvbilcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VBdG9tKE9iamVjdFNlbGVjdGVkKVxuXG4gIGNvbnN0IFtzdGFydERyYXdpbmcsIHNldFN0YXJ0RHJhd2luZ10gPSB1c2VBdG9tKERyYXdpbmcpXG5cbiAgbGV0IG1vdXNlUG9zZTAgPSB7IHg6IDUwLCB5OiA1MCB9XG4gIGxldCBzaGFwZVBvc2UwID0geyB4OiAwLCB5OiAwIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZWN0Q2xpY2soZSwgaWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQua2V5LCBpZClcbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuaWQgPT09IGlkKSB7XG4gICAgICAgICAgci5zZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAvLyByLmNvbG9yID0gJyMwMGUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgci5zZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgLy8gci5jb2xvciA9IHIuY29sb3JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9uRG91YmxlQ2xpY2soZSwgaWQpIHtcbiAgICAvLyBzZXRNb3VzZURvd24oKHByZXYpID0+ICdtb3VzZSBkb3duJylcbiAgICBsb2coZSlcblxuICAgIC8vIG1vdXNlRG93biA9PT0gJ21vdXNlIGRvd24nICYmXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMubWFwKChyKSA9PiB7XG4gICAgICAgIGlmIChyLmlkID09PSBpZCkge1xuICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAuLi5yLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0OiAnTScsXG4gICAgICAgICAgICB0ZXh0RWRpdDogdHJ1ZSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH0pLFxuICAgIF0pXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZShlLCBpZCkge1xuICAgIC8vIHNldE1vdXNlRG93bigocHJldikgPT4gJ21vdXNlIGRvd24nKVxuICAgIGhhbmRsZU9uTW91c2VNb3ZlKGUsIGlkKVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2VNb3ZlKGUsIGlkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgbW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiZcbiAgICAgIHNldFJlY3RzKFtcbiAgICAgICAgLi4uUmVjdHMubWFwKChyKSA9PiB7XG4gICAgICAgICAgaWYgKHIuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICByID0ge1xuICAgICAgICAgICAgICAuLi5yLFxuICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgeDogZS5jbGllbnRYIC0gNTAsXG4gICAgICAgICAgICAgIHk6IGUuY2xpZW50WSAtIDUwLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gclxuICAgICAgICB9KSxcbiAgICAgIF0pXG5cbiAgICBtb3VzZURvd24gPT09ICdtb3VzZSBkb3duJyAmJlxuICAgICAgc2V0U2NyZWVuTW91c2VQb3NpdGlvbigocHJldikgPT4gKHtcbiAgICAgICAgeDogZS5zY3JlZW5YLFxuICAgICAgICB5OiBlLnNjcmVlblksXG4gICAgICB9KSlcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVPbk1vdXNlbW92ZU9uQ2FudmFzKGUpIHtcbiAgICBzZXRNb3VzZVBvc2l0aW9ub25PbkNhbnZhcygocHJldikgPT4gKHtcbiAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgIHk6IGUuY2xpZW50WSxcbiAgICB9KSlcblxuICAgIHNldFNjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhcygocHJldikgPT4gKHtcbiAgICAgIHg6IGUuc2NyZWVuWCxcbiAgICAgIHk6IGUuc2NyZWVuWSxcbiAgICB9KSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURvd24oZSwgaSkge1xuICAgIHNldE1vdXNlRG93bigocHJldikgPT4gJ21vdXNlIGRvd24nKVxuICAgIC8vIGNvbnNvbGUubG9nKCctLS0tbW91c2UgZG93bicsIGUpXG4gICAgLy8gbG9nTW91c2UoKVxuICAgIC8vIHNoYXBlUG9zZTAgPSB7IHg6IGUudGFyZ2V0LnguYmFzZVZhbC52YWx1ZSwgeTogZS50YXJnZXQueC5iYXNlVmFsLnZhbHVlIH1cbiAgICAvLyBtb3VzZVBvc2UwID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9XG4gICAgc2V0U2VsZWN0ZWQoKHByZXYpID0+ICFwcmV2KVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVVwKGUpIHtcbiAgICBzZXRNb3VzZURvd24oKHByZXYpID0+ICdtb3VzZSB1cCcpXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS1tb3VzZSB1cCcpXG4gICAgLy8gbG9nTW91c2UoKVxuICAgIHNldFNlbGVjdGVkKChwcmV2KSA9PiAhcHJldilcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2tPbkNhbnZhcyhcbiAgICBlOiBNb3VzZUV2ZW50PFNWR1NWR0VsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICk6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIC8vIHN0YXJ0RHJhd2luZyAmJlxuICAgIHNldFJlY3RzKFtcbiAgICAgIC4uLlJlY3RzLFxuICAgICAge1xuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIHg6IFdJTkRPV19XSURUSCAvIDQsXG4gICAgICAgIHk6IFdJTkRPV19IRUlHSFQgLyA0LFxuICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICBoZWlndGg6IDEwMCxcbiAgICAgICAgY29sb3I6IGByZ2JhKDI1NSwgMCwgMClgLFxuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgdGV4dEVkaXQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdKVxuXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS1tb3VzZSBjbGljaycsIGUpXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMubWFwKChyKSA9PiB7XG4gICAgICAgIGlmIChyLnNlbGVjdGVkKSB7XG4gICAgICAgICAgci5zZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgci50ZXh0RWRpdCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH0pLFxuICAgIF0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBZGRSZWN0YW5nbGVUb29sQ2xpY2soZSkge1xuICAgIHNldFRvb2woKHApID0+ICdhZGRSZWN0YW5nbGUnKVxuXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMsXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgeDogV0lORE9XX1dJRFRIIC8gNCxcbiAgICAgICAgeTogV0lORE9XX0hFSUdIVCAvIDQsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWd0aDogMTAwLFxuICAgICAgICBjb2xvcjogYHJnYmEoJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpfSwgJHtNYXRoLmZsb29yKFxuICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcbiAgICAgICAgKX0sICR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KX0pYCxcbiAgICAgICAgdGV4dDogJ1InLFxuICAgICAgICB0ZXh0RWRpdDogZmFsc2UsXG4gICAgICB9LFxuICAgIF0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3ZlVG9vbENsaWNrKGUpIHtcbiAgICBzZXRUb29sKChwKSA9PiAnbW92ZScpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQWRkTGlua1Rvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZExpbmsnKVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFRleHRUb29sQ2xpY2soZSkge1xuICAgIHNldFRvb2woKHApID0+ICdhZGRUZXh0JylcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVBZGRPdGhlcnNUb29sQ2xpY2soZSkge1xuICAgIHNldFRvb2woKHApID0+ICdhZGRPaGVycycpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVPblRleHRDaGFuZ2UoXG4gICAgZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgaWQ6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBsb2coUmVjdHMpXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMubWFwKChyKSA9PiB7XG4gICAgICAgIGlmIChyLmlkID09IGlkKSB7XG4gICAgICAgICAgci5zZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICByLnRleHRFZGl0ID0gdHJ1ZVxuICAgICAgICAgIHIudGV4dCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH0pLFxuICAgIF0pXG4gIH1cbiAgLy8gUkVUVVJOXG4gIC8vIFJFVFVSTlxuICAvLyBSRVRVUk5cbiAgLy8gUkVUVVJOXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjQnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaG93SGVscGVyc0J1dHRvbiBjbj17J2J1dHRvbiBzaG93SGVscGVycyd9PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgbmFtZT0nc2hvd0hlbHBlcnMnXG4gICAgICAgICAgICB3aWR0aD0nMjQnXG4gICAgICAgICAgICBoZWlnaHQ9JzI0J1xuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMTguMzY0IDkuNzc4MThMMjAuNjY0MiAxMi4wNzg0TDE4LjM2MzcgMTQuMzc4OEMxNC44NDkgMTcuODkzNSA5LjE1MDQ5IDE3Ljg5MzUgNS42MzU3NyAxNC4zNzg4TDMuMzM1NTggMTIuMDc4Nkw1LjYzNjA0IDkuNzc4MThDOS4xNTA3NSA2LjI2MzQ2IDE0Ljg0OTIgNi4yNjM0NiAxOC4zNjQgOS43NzgxOFonXG4gICAgICAgICAgICAgIHN0cm9rZT0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzInXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMycgZmlsbD0nI0Y1RjVGNScgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9TaG93SGVscGVyc0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wYmFyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rvb2xiYXInPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnbW92ZScgJiYgJ3NlbGVjdGVkJ31gfVxuICAgICAgICAgICAgaHVuZGxlT25DbGljaz17aGFuZGxlTW92ZVRvb2xDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBuYW1lPSdtb3ZlJ1xuICAgICAgICAgICAgICB3aWR0aD0nMjQnXG4gICAgICAgICAgICAgIGhlaWdodD0nMjQnXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J003LjYxMjY5IDQuOTk1N0wxMC4zNTI2IDE5LjMxMzNMMTMuODc2IDE0LjY0MDRMMTkuNTc4IDEzLjMyMjJMNy42MTI2OSA0Ljk5NTdaJ1xuICAgICAgICAgICAgICAgIHN0cm9rZT0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnYWRkUmVjdGFuZ2xlJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVBZGRSZWN0YW5nbGVUb29sQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBuYW1lPSdyZWN0YW5nbGUnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgeD0nMydcbiAgICAgICAgICAgICAgICB5PSc1J1xuICAgICAgICAgICAgICAgIHdpZHRoPScxOCdcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzE0J1xuICAgICAgICAgICAgICAgIHJ4PScyJ1xuICAgICAgICAgICAgICAgIHN0cm9rZT0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnYWRkTGluaycgJiYgJ3NlbGVjdGVkJ31gfVxuICAgICAgICAgICAgaHVuZGxlT25DbGljaz17aGFuZGxlQWRkTGlua1Rvb2xDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J2xpbmsnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTIxIDQuMDAwNEM4IDQuMDAwNSAxNiAyMC4wMDA0IDMgMjAuMDAwNCdcbiAgICAgICAgICAgICAgICBzdHJva2U9JyNGNUY1RjUnXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzInXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbj17YCAke3Rvb2wgPT0gJ2FkZFRleHQnICYmICdzZWxlY3RlZCd9YH1cbiAgICAgICAgICAgIGh1bmRsZU9uQ2xpY2s9e2hhbmRsZUFkZFRleHRUb29sQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBuYW1lPSd0ZXh0J1xuICAgICAgICAgICAgICB3aWR0aD0nMjQnXG4gICAgICAgICAgICAgIGhlaWdodD0nMjQnXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J00xMyAzQzEzIDIuNDQ3NzIgMTIuNTUyMyAyIDEyIDJDMTEuNDQ3NyAyIDExIDIuNDQ3NzIgMTEgM0gxM1pNMTEgMjBDMTEgMjAuNTUyMyAxMS40NDc3IDIxIDEyIDIxQzEyLjU1MjMgMjEgMTMgMjAuNTUyMyAxMyAyMEgxMVpNMTEgM1YyMEgxM1YzSDExWidcbiAgICAgICAgICAgICAgICBmaWxsPScjRjVGNUY1J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J002IDNDNi4wMDAwMSAyLjQ0NzcyIDUuNTUyMjkgMiA1LjAwMDAxIDJDNC40NDc3MiAyIDQuMDAwMDEgMi40NDc3MSA0IDNMNiAzWk00IDMuOTk5OTlDNCA0LjU1MjI4IDQuNDQ3NzEgNC45OTk5OSA1IDVDNS41NTIyOCA1IDYgNC41NTIyOCA2IDRMNCAzLjk5OTk5Wk00IDNMNCAzLjk5OTk5TDYgNEw2IDNMNCAzWidcbiAgICAgICAgICAgICAgICBmaWxsPScjRjVGNUY1J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J00yMCAzQzIwIDIuNDQ3NzIgMTkuNTUyMyAyIDE5IDJDMTguNDQ3NyAyIDE4IDIuNDQ3NzEgMTggM0wyMCAzWk0xOCAzLjk5OTk5QzE4IDQuNTUyMjggMTguNDQ3NyA0Ljk5OTk5IDE5IDVDMTkuNTUyMyA1IDIwIDQuNTUyMjggMjAgNEwxOCAzLjk5OTk5Wk0xOCAzTDE4IDMuOTk5OTlMMjAgNEwyMCAzTDE4IDNaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTUgMkM0LjQ0NzcyIDIgNCAyLjQ0NzcyIDQgM0M0IDMuNTUyMjggNC40NDc3MiA0IDUgNEw1IDJaTTE5IDRDMTkuNTUyMyA0IDIwIDMuNTUyMjkgMjAgM0MyMCAyLjQ0NzcyIDE5LjU1MjMgMiAxOSAyTDE5IDRaTTUgNEwxOSA0TDE5IDJMNSAyTDUgNFonXG4gICAgICAgICAgICAgICAgZmlsbD0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPSdNMTAgMjBDOS40NDc3MiAyMCA5IDIwLjQ0NzcgOSAyMUM5IDIxLjU1MjMgOS40NDc3MiAyMiAxMCAyMkwxMCAyMFpNMTQgMjJDMTQuNTUyMyAyMiAxNSAyMS41NTIzIDE1IDIxQzE1IDIwLjQ0NzcgMTQuNTUyMyAyMCAxNCAyMEwxNCAyMlpNMTAgMjJMMTQgMjJMMTQgMjBMMTAgMjBMMTAgMjJaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbj17YCAke3Rvb2wgPT0gJ2FkZE90aGVycycgJiYgJ3NlbGVjdGVkJ31gfVxuICAgICAgICAgICAgaHVuZGxlT25DbGljaz17aGFuZGxlQWRkT3RoZXJzVG9vbENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgbmFtZT0nb3RoZXJzJ1xuICAgICAgICAgICAgICB3aWR0aD0nMjQnXG4gICAgICAgICAgICAgIGhlaWdodD0nMjQnXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J00xNS43MDcxIDExLjcwNzFDMTYuMDk3NiAxMS4zMTY2IDE2LjA5NzYgMTAuNjgzNCAxNS43MDcxIDEwLjI5MjlDMTUuMzE2NiA5LjkwMjM3IDE0LjY4MzQgOS45MDIzNyAxNC4yOTI5IDEwLjI5MjlMMTUuNzA3MSAxMS43MDcxWk0xMiAxNEwxMS4yOTI5IDE0LjcwNzFMMTIgMTUuNDE0MkwxMi43MDcxIDE0LjcwNzFMMTIgMTRaTTkuNzA3MSAxMC4yOTI5QzkuMzE2NTggOS45MDIzNyA4LjY4MzQxIDkuOTAyMzcgOC4yOTI4OSAxMC4yOTI5QzcuOTAyMzcgMTAuNjgzNCA3LjkwMjM3IDExLjMxNjYgOC4yOTI5IDExLjcwNzFMOS43MDcxIDEwLjI5MjlaTTE0LjI5MjkgMTAuMjkyOUwxMS4yOTI5IDEzLjI5MjlMMTIuNzA3MSAxNC43MDcxTDE1LjcwNzEgMTEuNzA3MUwxNC4yOTI5IDEwLjI5MjlaTTEyLjcwNzEgMTMuMjkyOUw5LjcwNzEgMTAuMjkyOUw4LjI5MjkgMTEuNzA3MUwxMS4yOTI5IDE0LjcwNzFMMTIuNzA3MSAxMy4yOTI5WidcbiAgICAgICAgICAgICAgICBmaWxsPScjRjVGNUY1J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdmdcbiAgICAgICAgbmFtZT0nZ3JpZCdcbiAgICAgICAgb25Nb3VzZU1vdmU9eyhlKSA9PiBoYW5kbGVPbk1vdXNlbW92ZU9uQ2FudmFzKGUpfVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT25DbGlja09uQ2FudmFzKGUpfVxuICAgICAgICB6LWluZGV4PScxJ1xuICAgICAgICB3aWR0aD17V0lORE9XX1dJRFRIfVxuICAgICAgICBoZWlnaHQ9e1dJTkRPV19IRUlHSFR9XG4gICAgICAgIHZpZXdCb3g9e2AwIDAgJHtXSU5ET1dfV0lEVEh9ICR7V0lORE9XX0hFSUdIVH1gfVxuICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICA+XG4gICAgICAgIDxmaWx0ZXIgaWQ9J2ZpbHRlcic+XG4gICAgICAgICAgey8qIDxmZU1vcnBob2xvZ3kgb3BlcmF0b3I9J2Vyb2RlJyByYWRpdXM9JzMwJyAvPiAqL31cbiAgICAgICAgICB7LyogPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nNScgLz4gKi99XG4gICAgICAgIDwvZmlsdGVyPlxuICAgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjMTgxODFCJyAvPlxuXG4gICAgICAgIHsvKiA8cmVjdFxuICAgICAgICAgIC8vIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgkezI5OX0gJHsyMDB9KWB9XG4gICAgICAgICAgeD0nMTIwMCdcbiAgICAgICAgICB5PSc3MCdcbiAgICAgICAgICB3aWR0aD0nODAnXG4gICAgICAgICAgaGVpZ2h0PSc4MCdcbiAgICAgICAgICBmaWxsPScjMDAwMGZmJ1xuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgLz4gKi99XG5cbiAgICAgICAge1JlY3RzLm1hcCgocmVjLCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxnIGtleT17J3JlY3RhbmdsZScgKyByZWMuaWR9PlxuICAgICAgICAgICAgICB7cmVjLnNlbGVjdGVkICYmIChcbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgeD17cmVjLnggLSA0fVxuICAgICAgICAgICAgICAgICAgeT17cmVjLnkgLSA0fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e3JlYy53aWR0aCArIDh9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e3JlYy5oZWlndGggKyA4fVxuICAgICAgICAgICAgICAgICAgLy8gZmlsbD0nIzBFQTVFOSdcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT0nIzBFQTVFOSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgLy8gei1pbmRleD0nMTAwMCdcbiAgICAgICAgICAgICAgICAvLyBmaWx0ZXI9J3VybCgjZXJvZGUpJ1xuICAgICAgICAgICAgICAgIHJ4PScxNSdcbiAgICAgICAgICAgICAgICAvLyBvbk1vdXNlTW92ZT17KGUpID0+IGhhbmRsZU9uTW91c2VNb3ZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgLy8gb25Ub3VjaE1vdmU9eyhlKSA9PiBoYW5kbGVPbk1vdXNlTW92ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIC8vIG9uRHJhZz17KGUpID0+IGhhbmRsZU9ubW91c2Vtb3ZlKGUpfVxuICAgICAgICAgICAgICAgIHg9e3JlYy54fVxuICAgICAgICAgICAgICAgIHk9e3JlYy55fVxuICAgICAgICAgICAgICAgIHdpZHRoPXtyZWMud2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtyZWMuaGVpZ3RofVxuICAgICAgICAgICAgICAgIGZpbGw9e3JlYy5jb2xvcn1cbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUmVjdENsaWNrKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgLy8gb25Nb3VzZURvd249eyhlKSA9PiBoYW5kbGVEb3duKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgLy8gb25Ub3VjaFN0YXJ0PXsoZSkgPT4gaGFuZGxlRG93bihlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIC8vIG9uTW91c2VVcD17KGUpID0+IGhhbmRsZVVwKGUpfVxuICAgICAgICAgICAgICAgIC8vIG9uTW91c2VMZWF2ZT17KGUpID0+IGhhbmRsZU1vdXNlTGVhdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAvLyBvblRvdWNoRW5kPXsoZSkgPT4gaGFuZGxlTW91c2VMZWF2ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIHsvKiA8dGV4dCB4PXtyZWMueCArIDUwfSB5PXtyZWMueSArIDUwfSBmaWxsPScjZGNkMmZmJz5cbiAgICAgICAgICAgICAgICB7cmVjLnRleHR9XG4gICAgICAgICAgICAgIDwvdGV4dD4gKi99XG5cbiAgICAgICAgICAgICAgPGZvcmVpZ25PYmplY3RcbiAgICAgICAgICAgICAgICBpZD0ndGV4dCdcbiAgICAgICAgICAgICAgICB4PXtyZWMueCArIDUwfVxuICAgICAgICAgICAgICAgIHk9e3JlYy55ICsgNTB9XG4gICAgICAgICAgICAgICAgd2lkdGg9e3JlYy53aWR0aCArIDh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PSc1MCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3JlYy50ZXh0fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3t9fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVPblRleHRDaGFuZ2UoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+XG5cbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAvLyB6LWluZGV4PScxMDAwJ1xuICAgICAgICAgICAgICAgIC8vUHJpbWFyeSBMYXllclxuXG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyhlKSA9PiBoYW5kbGVPbk1vdXNlTW92ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU1vdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAvLyBvbkRyYWc9eyhlKSA9PiBoYW5kbGVPbm1vdXNlbW92ZShlKX1cbiAgICAgICAgICAgICAgICB4PXtyZWMueCAtIDR9XG4gICAgICAgICAgICAgICAgeT17cmVjLnkgLSA0fVxuICAgICAgICAgICAgICAgIHdpZHRoPXtyZWMud2lkdGggKyA4fVxuICAgICAgICAgICAgICAgIGhlaWdodD17cmVjLmhlaWd0aCArIDh9XG4gICAgICAgICAgICAgICAgZmlsbD0nIzAwMDAwMDAwJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVSZWN0Q2xpY2soZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGhhbmRsZURvd24oZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9eyhlKSA9PiBoYW5kbGVEb3duKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoZSkgPT4gaGFuZGxlVXAoZSl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4gaGFuZGxlTW91c2VMZWF2ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9eyhlKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KGUpID0+IGhhbmRsZU9uRG91YmxlQ2xpY2soZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuXG4gICAgICAgIHtzaG93SGVscGVycyAmJiAoXG4gICAgICAgICAgLy8gU2hvdyBIZWxwZXJzIGFuZCBTdGF0c1xuICAgICAgICAgIDxnPlxuICAgICAgICAgICAge21vdXNlRG93biA9PT0gJ21vdXNlIGRvd24nICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8cmVjdCB4PScwJyB5PSc3MDAnIHdpZHRoPScxNjAwJyBoZWlnaHQ9JzEwJyBmaWxsPScjMDBlZWZmJyAvPlxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9JzEyMDAnIHk9JzUwJyBmaWxsPScjMDBlZWZmJz5cbiAgICAgICAgICAgICAgICAgIG1vdXNlUG9zaXRpb246IHttb3VzZVBvc2l0aW9uLnh9LHttb3VzZVBvc2l0aW9uLnl9XG4gICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9JzEyMDAnIHk9JzcwJyBmaWxsPScjZmY1MTAwJz5cbiAgICAgICAgICAgICAgICAgIHNjcmVlbk1vdXNlUG9zaXRpb246IHtzY3JlZW5Nb3VzZVBvc2l0aW9uLnh9LFxuICAgICAgICAgICAgICAgICAge3NjcmVlbk1vdXNlUG9zaXRpb24ueX1cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIDxmb3JlaWduT2JqZWN0IHg9JzIwJyB5PScyMCcgd2lkdGg9JzE2MCcgaGVpZ2h0PScxNjAnPlxuICAgICAgICAgICAgICA8ZGl2PlRvb2wgQ2hvb3NlZDoge3Rvb2x9PC9kaXY+XG4gICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+ICovfVxuXG4gICAgICAgICAgICA8dGV4dCB4PScxMicgeT0nMjAnIGZpbGw9JyMyYmZmMDAnPlxuICAgICAgICAgICAgICBUb29sIENob29zZWQ6IHt0b29sfVxuICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgeD0nMTInIHk9JzUwJyBmaWxsPScjMDBlZWZmJz5cbiAgICAgICAgICAgICAgbW91c2VQb3NpdGlvbjoge21vdXNlUG9zaXRpb25vbk9uQ2FudmFzLnh9LFxuICAgICAgICAgICAgICB7bW91c2VQb3NpdGlvbm9uT25DYW52YXMueX1cbiAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IHg9JzEyJyB5PSc3MCcgZmlsbD0nI2ZmNTEwMCc+XG4gICAgICAgICAgICAgIHNjcmVlbk1vdXNlUG9zaXRpb246IHtzY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMueH0sXG4gICAgICAgICAgICAgIHtzY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMueX1cbiAgICAgICAgICAgIDwvdGV4dD5cblxuICAgICAgICAgICAge1JlY3RzLm1hcCgociwgaSkgPT4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDx0ZXh0IGtleT17ci5pZH0geD0nMTInIHk9ezkwICsgMTYgKiBpfSBmaWxsPScjZmYwMGI3Jz5cbiAgICAgICAgICAgICAgICAgIHsvKiBSZWN0SWQ6e3IuaWR9ICAqL31cbiAgICAgICAgICAgICAgICAgIGk6IHtpfSBQb3M6IHtyLnh9LHtyLnl9IC0tLS17Jz4nfXsnICd9XG4gICAgICAgICAgICAgICAgICB7ci5zZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnbm90IHNlbGVjdGVkJ31cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9nPlxuICAgICAgICApfVxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7IGNuID0gJ2J1dHRvbicsIGh1bmRsZU9uQ2xpY2ssIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW1JlY3RzLCBzZXRSZWN0c10gPSB1c2VBdG9tKE9iamVjdExpc3QpXG4gIGNvbnN0IFtzdGFydERyYXdpbmcsIHNldFN0YXJ0RHJhd2luZ10gPSB1c2VBdG9tKERyYXdpbmcpXG5cbiAgLy8gZnVuY3Rpb24gaHVuZGxlVG9vbENsaWNrKGUpIHtcbiAgLy8gICBzZXRTdGFydERyYXdpbmcodHJ1ZSlcbiAgLy8gICAvLyBlLnN0b3BQcm9wcGFnYXRpb24oKVxuICAvLyAgIC8vIGNvbnNvbGUubG9nKFJlY3RzKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2VPdmVyKGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgIC8vIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9ICcjMEYwJ1xuICAgIC8vIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI2YwZSdcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVPbk1vdXNlb3V0KGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgIC8vIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9ICcjMEYwJ1xuICAgIC8vIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnIzAwMDAwMDAwJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IGhhbmRsZU9uTW91c2VPdmVyKGUpfVxuICAgICAgb25Nb3VzZU91dD17KGUpID0+IGhhbmRsZU9uTW91c2VvdXQoZSl9XG4gICAgICAvLyBvbk1vdXNlT3V0PXsoZSkgPT4gKHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBGJyl9XG4gICAgICBjbGFzc05hbWU9e2NufVxuICAgICAgb25DbGljaz17aHVuZGxlT25DbGlja31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbjI0Jz57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNob3dIZWxwZXJzQnV0dG9uKHsgY24gPSAnYnV0dG9uJywgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbc2hvd0hlbHBlcnMsIHNldFNob3dIZWxwZXJzXSA9IHVzZUF0b20oU2hvd0hlbHBlcnNBdG9tKVxuXG4gIGZ1bmN0aW9uIGh1bmRsZVRvb2xDbGljayhlKSB7XG4gICAgLy8gZS5zdG9wUHJvcHBhZ2F0aW9uKClcbiAgICBzZXRTaG93SGVscGVycygocHJldikgPT4gIXByZXYpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZU92ZXIoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwRjAnXG4gICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjBlJ1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2VvdXQoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwRjAnXG4gICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDAwMDAwMDAnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU92ZXIoZSl9XG4gICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gaGFuZGxlT25Nb3VzZW91dChlKX1cbiAgICAgIC8vIG9uTW91c2VPdXQ9eyhlKSA9PiAodGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEYnKX1cbiAgICAgIGNsYXNzTmFtZT17Y259XG4gICAgICBvbkNsaWNrPXsoZSkgPT4gaHVuZGxlVG9vbENsaWNrKGUpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uMjQnPntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUmVjdGFuZ2xlKCkge1xuICBjb25zdCBbUmVjdHMsIHNldFJlY3RzXSA9IHVzZUF0b20oT2JqZWN0TGlzdClcbiAgc2V0UmVjdHMoW1xuICAgIC4uLlJlY3RzLFxuICAgIHtcbiAgICAgIHRleHQ6ICcnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgIHg6IFdJTkRPV19XSURUSCAvIDQsXG4gICAgICB5OiBXSU5ET1dfSEVJR0hUIC8gNCxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICBoZWlndGg6IDEwMCxcbiAgICAgIGNvbG9yOiBgcmdiYSgke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSl9LCAke01hdGguZmxvb3IoXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcbiAgICAgICl9LCAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSl9KWAsXG5cbiAgICAgIHRleHRFZGl0OiBmYWxzZSxcbiAgICB9LFxuICBdKVxufVxuIiwgImltcG9ydCB7IExpbmssIE91dGxldCB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMaW5rIHRvPScvZHJhd2V0dGUnPiBHbyB0byBkcmF3ZXR0ZSA8L0xpbms+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic1MGYyNzUwNScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtMkVWQlpaRlIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTc1UVk2NVNSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstWVpWTFI2RVIuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LTVRNVNSUjIyLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZHJhd2V0dGUnOnsnaWQnOidyb3V0ZXMvZHJhd2V0dGUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZHJhd2V0dGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZHJhd2V0dGUtVVQ1VU9QWE0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUkyN0pEUTZULmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kcmF3ZXR0ZS9BcHAnOnsnaWQnOidyb3V0ZXMvZHJhd2V0dGUvQXBwJywncGFyZW50SWQnOidyb3V0ZXMvZHJhd2V0dGUnLCdwYXRoJzonQXBwJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RyYXdldHRlL0FwcC1RRkI0UFVZVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNU5DQ0hJN0MuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RyYXdldHRlL2luZGV4Jzp7J2lkJzoncm91dGVzL2RyYXdldHRlL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZHJhd2V0dGUnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZHJhd2V0dGUvaW5kZXgtMkdHNjU0MlkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVOQ0NISTdDLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1TMk9LWDRaVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC01MEYyNzUwNS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyx3QkFBd0I7QUFBQSxNQUNyRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRzFDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsVUFBVTtBQUFBLE1BQ3ZDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFlBQVk7QUFBQSxNQUN6QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG9CQUFvQjtBQUFBLE1BQ2pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUN0T2xDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXFDOzs7QUNBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBR2IsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBT087Ozs7OztBQUlBLGlCQUFpQjtBQUN0QixTQUFPLENBQUMsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBO0FBSzlCLElBQU0sT0FBcUIsTUFBTTtBQUN0QyxTQUFPLEVBQUUsT0FBTztBQUFBO0FBR0gsZUFBZTtBQUM1QixTQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE1BQUs7QUFBQSxLQUNULG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxTQUFRO0FBQUEsTUFDZCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsSUFBVyxTQUFRO0FBQUEsTUFDOUIsb0NBQUMsb0JBQUQsT0FDQSxvQ0FBQyxxQkFBRCxRQUVGLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQTtBQUFBLEtBR1gsb0NBQUMsc0JBQUQsT0FDQSxvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQzJDLG9DQUFDLDBCQUFEO0FBQUE7OztBQzFDbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF1QjtBQUN2QixtQkFBeUI7QUFFVixvQkFBb0I7QUFDakMsU0FDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsdUJBQUQsTUFDRSxvQ0FBQyxzQkFBRDtBQUFBOzs7QUNQUjtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBLG9CQUE4QjtBQUM5QixrQkFBMkI7QUFLM0IsSUFBSSxlQUFlO0FBQ25CLElBQUksZ0JBQWdCO0FBRXBCLGFBQWEsR0FBUTtBQUNuQixVQUFRLElBQUk7QUFBQTtBQUdkLElBQU0sOEJBQThCLHdCQUFLO0FBQ3pDLElBQU0sd0JBQXdCLHdCQUFLO0FBQ25DLElBQU0sc0JBQXNCLHdCQUFLLEVBQUUsR0FBRyxLQUFLLEdBQUc7QUFFOUMsSUFBTSxrQkFBa0Isd0JBQUs7QUFDN0IsSUFBTSxpQkFBaUIsd0JBQUs7QUFDNUIsSUFBTSxVQUFVLHdCQUFLO0FBQ3JCLElBQU0sZ0JBQWdCLHdCQUFLO0FBQzNCLElBQU0sY0FBYyx3QkFBSztBQUN6QixJQUFNLGdCQUFnQix3QkFBSyxFQUFFLEdBQUcsS0FBSyxHQUFHO0FBRXhDLElBQU0sYUFBYSx3QkFZakI7QUFFYSxnQkFBZTtBQU01QixRQUFNLENBQUMseUJBQXlCLDhCQUE4QiwyQkFDNUQ7QUFFRixRQUFNLENBQUMsNkJBQTZCLGtDQUFrQywyQkFDcEU7QUFFRixRQUFNLENBQUMsT0FBTyxZQUFZLDJCQUFRO0FBRWxDLFFBQU0sQ0FBQyxhQUFhLGtCQUFrQiwyQkFBUTtBQUM5QyxRQUFNLENBQUMsTUFBTSxXQUFXLDJCQUFRO0FBRWhDLFFBQU0sQ0FBQyxXQUFXLGdCQUFnQiwyQkFBUTtBQUMxQyxRQUFNLENBQUMsZUFBZSxvQkFBb0IsMkJBQVE7QUFDbEQsUUFBTSxDQUFDLHFCQUFxQiwwQkFDMUIsMkJBQVE7QUFDVixRQUFNLENBQUMsVUFBVSxlQUFlLDJCQUFRO0FBRXhDLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQiwyQkFBUTtBQUVoRCxNQUFJLGFBQWEsRUFBRSxHQUFHLElBQUksR0FBRztBQUM3QixNQUFJLGFBQWEsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUU1QiwyQkFBeUIsR0FBRyxJQUFJO0FBQzlCLE1BQUU7QUFFRixhQUFTO0FBQUEsTUFDUCxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU07QUFDbEIsWUFBSSxFQUFFLE9BQU8sSUFBSTtBQUNmLFlBQUUsV0FBVztBQUFBLGVBRVI7QUFDTCxZQUFFLFdBQVc7QUFBQTtBQUdmLGVBQU87QUFBQTtBQUFBO0FBQUE7QUFLYiwrQkFBNkIsR0FBRyxJQUFJO0FBRWxDLFFBQUk7QUFHSixhQUFTO0FBQUEsTUFDUCxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU07QUFDbEIsWUFBSSxFQUFFLE9BQU8sSUFBSTtBQUNmLGNBQUksaUNBQ0MsSUFERDtBQUFBLFlBRUYsVUFBVTtBQUFBLFlBQ1YsTUFBTTtBQUFBLFlBQ04sVUFBVTtBQUFBO0FBQUE7QUFHZCxlQUFPO0FBQUE7QUFBQTtBQUFBO0FBSWIsNEJBQTBCLEdBQUcsSUFBSTtBQUUvQixzQkFBa0IsR0FBRztBQUFBO0FBRXZCLDZCQUEyQixHQUFHLElBQUk7QUFDaEMsTUFBRTtBQUNGLE1BQUU7QUFFRixrQkFBYyxnQkFDWixTQUFTO0FBQUEsTUFDUCxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU07QUFDbEIsWUFBSSxFQUFFLE9BQU8sSUFBSTtBQUNmLGNBQUksaUNBQ0MsSUFERDtBQUFBLFlBRUY7QUFBQSxZQUNBLFVBQVU7QUFBQSxZQUNWLEdBQUcsRUFBRSxVQUFVO0FBQUEsWUFDZixHQUFHLEVBQUUsVUFBVTtBQUFBO0FBQUE7QUFHbkIsZUFBTztBQUFBO0FBQUE7QUFJYixrQkFBYyxnQkFDWix1QkFBdUIsQ0FBQyxTQUFVO0FBQUEsTUFDaEMsR0FBRyxFQUFFO0FBQUEsTUFDTCxHQUFHLEVBQUU7QUFBQTtBQUFBO0FBR1gscUNBQW1DLEdBQUc7QUFDcEMsK0JBQTJCLENBQUMsU0FBVTtBQUFBLE1BQ3BDLEdBQUcsRUFBRTtBQUFBLE1BQ0wsR0FBRyxFQUFFO0FBQUE7QUFHUCxtQ0FBK0IsQ0FBQyxTQUFVO0FBQUEsTUFDeEMsR0FBRyxFQUFFO0FBQUEsTUFDTCxHQUFHLEVBQUU7QUFBQTtBQUFBO0FBSVQsc0JBQW9CLEdBQUcsR0FBRztBQUN4QixpQkFBYSxDQUFDLFNBQVM7QUFLdkIsZ0JBQVksQ0FBQyxTQUFTLENBQUM7QUFBQTtBQUV6QixvQkFBa0IsR0FBRztBQUNuQixpQkFBYSxDQUFDLFNBQVM7QUFHdkIsZ0JBQVksQ0FBQyxTQUFTLENBQUM7QUFBQTtBQUd6QixpQ0FDRSxHQUNNO0FBQ04sTUFBRTtBQUdGLGFBQVM7QUFBQSxNQUNQLEdBQUc7QUFBQSxNQUNIO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixJQUFJO0FBQUEsUUFDSixHQUFHLGVBQWU7QUFBQSxRQUNsQixHQUFHLGdCQUFnQjtBQUFBLFFBQ25CLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBO0FBS2QsYUFBUztBQUFBLE1BQ1AsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNO0FBQ2xCLFlBQUksRUFBRSxVQUFVO0FBQ2QsWUFBRSxXQUFXO0FBQ2IsWUFBRSxXQUFXO0FBQUE7QUFFZixlQUFPO0FBQUE7QUFBQTtBQUFBO0FBS2IsdUNBQXFDLEdBQUc7QUFDdEMsWUFBUSxDQUFDLE1BQU07QUFFZixhQUFTO0FBQUEsTUFDUCxHQUFHO0FBQUEsTUFDSDtBQUFBLFFBQ0UsVUFBVTtBQUFBLFFBQ1YsSUFBSTtBQUFBLFFBQ0osR0FBRyxlQUFlO0FBQUEsUUFDbEIsR0FBRyxnQkFBZ0I7QUFBQSxRQUNuQixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixPQUFPLFFBQVEsS0FBSyxNQUFNLEtBQUssV0FBVyxTQUFTLEtBQUssTUFDdEQsS0FBSyxXQUFXLFNBQ1osS0FBSyxNQUFNLEtBQUssV0FBVztBQUFBLFFBQ2pDLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFLaEIsK0JBQTZCLEdBQUc7QUFDOUIsWUFBUSxDQUFDLE1BQU07QUFBQTtBQUVqQixrQ0FBZ0MsR0FBRztBQUNqQyxZQUFRLENBQUMsTUFBTTtBQUFBO0FBRWpCLGtDQUFnQyxHQUFHO0FBQ2pDLFlBQVEsQ0FBQyxNQUFNO0FBQUE7QUFFakIsb0NBQWtDLEdBQUc7QUFDbkMsWUFBUSxDQUFDLE1BQU07QUFBQTtBQUdqQiw4QkFDRSxHQUNBLElBQ007QUFDTixRQUFJO0FBQ0osYUFBUztBQUFBLE1BQ1AsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNO0FBQ2xCLFlBQUksRUFBRSxNQUFNLElBQUk7QUFDZCxZQUFFLFdBQVc7QUFDYixZQUFFLFdBQVc7QUFDYixZQUFFLE9BQU8sRUFBRSxPQUFPO0FBQUE7QUFFcEIsZUFBTztBQUFBO0FBQUE7QUFBQTtBQVFiLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBO0FBQUEsS0FHWixvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsbUJBQUQ7QUFBQSxJQUFtQixJQUFJO0FBQUEsS0FDcEIsS0FDRCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixRQUFPO0FBQUEsSUFDUCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsS0FFTixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixRQUFPO0FBQUEsSUFDUCxhQUFZO0FBQUEsTUFFZCxvQ0FBQyxVQUFEO0FBQUEsSUFBUSxJQUFHO0FBQUEsSUFBSyxJQUFHO0FBQUEsSUFBSyxHQUFFO0FBQUEsSUFBSSxNQUFLO0FBQUEsU0FLekMsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsUUFBRDtBQUFBLElBQ0UsSUFBSSxJQUFJLFFBQVEsVUFBVTtBQUFBLElBQzFCLGVBQWU7QUFBQSxLQUVkLEtBQ0Qsb0NBQUMsT0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLEtBRU4sb0NBQUMsUUFBRDtBQUFBLElBQ0UsR0FBRTtBQUFBLElBQ0YsUUFBTztBQUFBLElBQ1AsYUFBWTtBQUFBLFFBSWxCLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLElBQUksSUFBSSxRQUFRLGtCQUFrQjtBQUFBLElBQ2xDLGVBQWU7QUFBQSxLQUVmLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLFFBQU87QUFBQSxJQUNQLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxLQUVOLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLEdBQUU7QUFBQSxJQUNGLE9BQU07QUFBQSxJQUNOLFFBQU87QUFBQSxJQUNQLElBQUc7QUFBQSxJQUNILFFBQU87QUFBQSxJQUNQLGFBQVk7QUFBQSxRQUlsQixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxJQUFJLElBQUksUUFBUSxhQUFhO0FBQUEsSUFDN0IsZUFBZTtBQUFBLEtBRWYsb0NBQUMsT0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLEtBRU4sb0NBQUMsUUFBRDtBQUFBLElBQ0UsR0FBRTtBQUFBLElBQ0YsUUFBTztBQUFBLElBQ1AsYUFBWTtBQUFBLElBQ1osZUFBYztBQUFBLFFBSXBCLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLElBQUksSUFBSSxRQUFRLGFBQWE7QUFBQSxJQUM3QixlQUFlO0FBQUEsS0FFZixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixRQUFPO0FBQUEsSUFDUCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsS0FFTixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsTUFFUCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsTUFFUCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsTUFFUCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsTUFFUCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsUUFJWCxvQ0FBQyxRQUFEO0FBQUEsSUFDRSxJQUFJLElBQUksUUFBUSxlQUFlO0FBQUEsSUFDL0IsZUFBZTtBQUFBLEtBRWYsb0NBQUMsT0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLEtBRU4sb0NBQUMsUUFBRDtBQUFBLElBQ0UsR0FBRTtBQUFBLElBQ0YsTUFBSztBQUFBLFVBT2Ysb0NBQUMsT0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsYUFBYSxDQUFDLE1BQU0sMEJBQTBCO0FBQUEsSUFDOUMsU0FBUyxDQUFDLE1BQU0sc0JBQXNCO0FBQUEsSUFDdEMsV0FBUTtBQUFBLElBQ1IsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLElBQ1IsU0FBUyxPQUFPLGdCQUFnQjtBQUFBLElBQ2hDLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxLQUVOLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQSxNQUlYLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLE9BQU07QUFBQSxJQUFPLFFBQU87QUFBQSxJQUFPLE1BQUs7QUFBQSxNQVlyQyxNQUFNLElBQUksQ0FBQyxLQUFLLE1BQU07QUFDckIsV0FDRSxvQ0FBQyxLQUFEO0FBQUEsTUFBRyxLQUFLLGNBQWMsSUFBSTtBQUFBLE9BQ3ZCLElBQUksWUFDSCxvQ0FBQyxRQUFEO0FBQUEsTUFDRSxHQUFHLElBQUksSUFBSTtBQUFBLE1BQ1gsR0FBRyxJQUFJLElBQUk7QUFBQSxNQUNYLE9BQU8sSUFBSSxRQUFRO0FBQUEsTUFDbkIsUUFBUSxJQUFJLFNBQVM7QUFBQSxNQUVyQixRQUFPO0FBQUEsUUFJWCxvQ0FBQyxRQUFEO0FBQUEsTUFHRSxJQUFHO0FBQUEsTUFJSCxHQUFHLElBQUk7QUFBQSxNQUNQLEdBQUcsSUFBSTtBQUFBLE1BQ1AsT0FBTyxJQUFJO0FBQUEsTUFDWCxRQUFRLElBQUk7QUFBQSxNQUNaLE1BQU0sSUFBSTtBQUFBLFFBYVosb0NBQUMsaUJBQUQ7QUFBQSxNQUNFLElBQUc7QUFBQSxNQUNILEdBQUcsSUFBSSxJQUFJO0FBQUEsTUFDWCxHQUFHLElBQUksSUFBSTtBQUFBLE1BQ1gsT0FBTyxJQUFJLFFBQVE7QUFBQSxNQUNuQixRQUFPO0FBQUEsT0FFUCxvQ0FBQyxTQUFEO0FBQUEsTUFDRSxhQUFhLElBQUk7QUFBQSxNQUNqQixPQUFPO0FBQUEsTUFDUCxVQUFVLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxJQUFJO0FBQUEsU0FJL0Msb0NBQUMsUUFBRDtBQUFBLE1BSUUsYUFBYSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSTtBQUFBLE1BQzdDLGFBQWEsQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUk7QUFBQSxNQUU3QyxHQUFHLElBQUksSUFBSTtBQUFBLE1BQ1gsR0FBRyxJQUFJLElBQUk7QUFBQSxNQUNYLE9BQU8sSUFBSSxRQUFRO0FBQUEsTUFDbkIsUUFBUSxJQUFJLFNBQVM7QUFBQSxNQUNyQixNQUFLO0FBQUEsTUFDTCxTQUFTLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJO0FBQUEsTUFDdkMsYUFBYSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUk7QUFBQSxNQUN0QyxjQUFjLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSTtBQUFBLE1BQ3ZDLFdBQVcsQ0FBQyxNQUFNLFNBQVM7QUFBQSxNQUMzQixjQUFjLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJO0FBQUEsTUFDN0MsWUFBWSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSTtBQUFBLE1BQzNDLGVBQWUsQ0FBQyxNQUFNLG9CQUFvQixHQUFHLElBQUk7QUFBQTtBQUFBLE1BTXhELGVBRUMsb0NBQUMsS0FBRCxNQUNHLGNBQWMsZ0JBQ2IsMERBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQUksR0FBRTtBQUFBLElBQU0sT0FBTTtBQUFBLElBQU8sUUFBTztBQUFBLElBQUssTUFBSztBQUFBLE1BQ2xELG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFPLEdBQUU7QUFBQSxJQUFLLE1BQUs7QUFBQSxLQUFVLG1CQUNuQixjQUFjLEdBQUUsS0FBRSxjQUFjLElBRWxELG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFPLEdBQUU7QUFBQSxJQUFLLE1BQUs7QUFBQSxLQUFVLHlCQUNiLG9CQUFvQixHQUFFLEtBQzNDLG9CQUFvQixLQVMzQixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBSyxHQUFFO0FBQUEsSUFBSyxNQUFLO0FBQUEsS0FBVSxrQkFDbEIsT0FFakIsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQUssR0FBRTtBQUFBLElBQUssTUFBSztBQUFBLEtBQVUsbUJBQ2pCLHdCQUF3QixHQUFFLEtBQ3pDLHdCQUF3QixJQUUzQixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBSyxHQUFFO0FBQUEsSUFBSyxNQUFLO0FBQUEsS0FBVSx5QkFDWCw0QkFBNEIsR0FBRSxLQUNuRCw0QkFBNEIsSUFHOUIsTUFBTSxJQUFJLENBQUMsR0FBRyxNQUNiLDBEQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEtBQUssRUFBRTtBQUFBLElBQUksR0FBRTtBQUFBLElBQUssR0FBRyxLQUFLLEtBQUs7QUFBQSxJQUFHLE1BQUs7QUFBQSxLQUNyQixPQUNsQixHQUFFLFVBQU8sRUFBRSxHQUFFLEtBQUUsRUFBRSxHQUFFLFNBQU0sS0FBSyxLQUNqQyxFQUFFLFdBQVcsYUFBYTtBQUFBO0FBV3RDLGdCQUFnQixFQUFFLEtBQUssVUFBVSxlQUFlLFlBQVk7QUFDakUsUUFBTSxDQUFDLE9BQU8sWUFBWSwyQkFBUTtBQUNsQyxRQUFNLENBQUMsY0FBYyxtQkFBbUIsMkJBQVE7QUFPaEQsNkJBQTJCLEdBQUc7QUFBQTtBQUs5Qiw0QkFBMEIsR0FBRztBQUFBO0FBTTdCLFNBQ0Usb0NBQUMsVUFBRDtBQUFBLElBQ0UsYUFBYSxDQUFDLE1BQU0sa0JBQWtCO0FBQUEsSUFDdEMsWUFBWSxDQUFDLE1BQU0saUJBQWlCO0FBQUEsSUFFcEMsV0FBVztBQUFBLElBQ1gsU0FBUztBQUFBLEtBRVQsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQVU7QUFBQTtBQUt4QiwyQkFBMkIsRUFBRSxLQUFLLFVBQVUsWUFBWTtBQUM3RCxRQUFNLENBQUMsYUFBYSxrQkFBa0IsMkJBQVE7QUFFOUMsMkJBQXlCLEdBQUc7QUFFMUIsbUJBQWUsQ0FBQyxTQUFTLENBQUM7QUFBQTtBQUU1Qiw2QkFBMkIsR0FBRztBQUFBO0FBSzlCLDRCQUEwQixHQUFHO0FBQUE7QUFNN0IsU0FDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxhQUFhLENBQUMsTUFBTSxrQkFBa0I7QUFBQSxJQUN0QyxZQUFZLENBQUMsTUFBTSxpQkFBaUI7QUFBQSxJQUVwQyxXQUFXO0FBQUEsSUFDWCxTQUFTLENBQUMsTUFBTSxnQkFBZ0I7QUFBQSxLQUVoQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBVTtBQUFBOzs7QUQzbEIvQixJQUFPLG1CQUFROzs7QUVGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQThCO0FBQzlCLG1CQUEyQjtBQUszQixJQUFJLGdCQUFlO0FBQ25CLElBQUksaUJBQWdCO0FBRXBCLGNBQWEsR0FBUTtBQUNuQixVQUFRLElBQUk7QUFBQTtBQUdkLElBQU0sK0JBQThCLHdCQUFLO0FBQ3pDLElBQU0seUJBQXdCLHdCQUFLO0FBQ25DLElBQU0sdUJBQXNCLHdCQUFLLEVBQUUsR0FBRyxLQUFLLEdBQUc7QUFFOUMsSUFBTSxtQkFBa0Isd0JBQUs7QUFDN0IsSUFBTSxrQkFBaUIsd0JBQUs7QUFDNUIsSUFBTSxXQUFVLHdCQUFLO0FBQ3JCLElBQU0saUJBQWdCLHdCQUFLO0FBQzNCLElBQU0sZUFBYyx3QkFBSztBQUN6QixJQUFNLGlCQUFnQix3QkFBSyxFQUFFLEdBQUcsS0FBSyxHQUFHO0FBRXhDLElBQU0sY0FBYSx3QkFZakI7QUFFYSxnQkFBZTtBQU01QixRQUFNLENBQUMseUJBQXlCLDhCQUE4QiwyQkFDNUQ7QUFFRixRQUFNLENBQUMsNkJBQTZCLGtDQUFrQywyQkFDcEU7QUFFRixRQUFNLENBQUMsT0FBTyxZQUFZLDJCQUFRO0FBRWxDLFFBQU0sQ0FBQyxhQUFhLGtCQUFrQiwyQkFBUTtBQUM5QyxRQUFNLENBQUMsTUFBTSxXQUFXLDJCQUFRO0FBRWhDLFFBQU0sQ0FBQyxXQUFXLGdCQUFnQiwyQkFBUTtBQUMxQyxRQUFNLENBQUMsZUFBZSxvQkFBb0IsMkJBQVE7QUFDbEQsUUFBTSxDQUFDLHFCQUFxQiwwQkFDMUIsMkJBQVE7QUFDVixRQUFNLENBQUMsVUFBVSxlQUFlLDJCQUFRO0FBRXhDLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQiwyQkFBUTtBQUVoRCxNQUFJLGFBQWEsRUFBRSxHQUFHLElBQUksR0FBRztBQUM3QixNQUFJLGFBQWEsRUFBRSxHQUFHLEdBQUcsR0FBRztBQUU1QiwyQkFBeUIsR0FBRyxJQUFJO0FBQzlCLE1BQUU7QUFFRixhQUFTO0FBQUEsTUFDUCxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU07QUFDbEIsWUFBSSxFQUFFLE9BQU8sSUFBSTtBQUNmLFlBQUUsV0FBVztBQUFBLGVBRVI7QUFDTCxZQUFFLFdBQVc7QUFBQTtBQUdmLGVBQU87QUFBQTtBQUFBO0FBQUE7QUFLYiwrQkFBNkIsR0FBRyxJQUFJO0FBRWxDLFNBQUk7QUFHSixhQUFTO0FBQUEsTUFDUCxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU07QUFDbEIsWUFBSSxFQUFFLE9BQU8sSUFBSTtBQUNmLGNBQUksaUNBQ0MsSUFERDtBQUFBLFlBRUYsVUFBVTtBQUFBLFlBQ1YsTUFBTTtBQUFBLFlBQ04sVUFBVTtBQUFBO0FBQUE7QUFHZCxlQUFPO0FBQUE7QUFBQTtBQUFBO0FBSWIsNEJBQTBCLEdBQUcsSUFBSTtBQUUvQixzQkFBa0IsR0FBRztBQUFBO0FBRXZCLDZCQUEyQixHQUFHLElBQUk7QUFDaEMsTUFBRTtBQUNGLE1BQUU7QUFFRixrQkFBYyxnQkFDWixTQUFTO0FBQUEsTUFDUCxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU07QUFDbEIsWUFBSSxFQUFFLE9BQU8sSUFBSTtBQUNmLGNBQUksaUNBQ0MsSUFERDtBQUFBLFlBRUY7QUFBQSxZQUNBLFVBQVU7QUFBQSxZQUNWLEdBQUcsRUFBRSxVQUFVO0FBQUEsWUFDZixHQUFHLEVBQUUsVUFBVTtBQUFBO0FBQUE7QUFHbkIsZUFBTztBQUFBO0FBQUE7QUFJYixrQkFBYyxnQkFDWix1QkFBdUIsQ0FBQyxTQUFVO0FBQUEsTUFDaEMsR0FBRyxFQUFFO0FBQUEsTUFDTCxHQUFHLEVBQUU7QUFBQTtBQUFBO0FBR1gscUNBQW1DLEdBQUc7QUFDcEMsK0JBQTJCLENBQUMsU0FBVTtBQUFBLE1BQ3BDLEdBQUcsRUFBRTtBQUFBLE1BQ0wsR0FBRyxFQUFFO0FBQUE7QUFHUCxtQ0FBK0IsQ0FBQyxTQUFVO0FBQUEsTUFDeEMsR0FBRyxFQUFFO0FBQUEsTUFDTCxHQUFHLEVBQUU7QUFBQTtBQUFBO0FBSVQsc0JBQW9CLEdBQUcsR0FBRztBQUN4QixpQkFBYSxDQUFDLFNBQVM7QUFLdkIsZ0JBQVksQ0FBQyxTQUFTLENBQUM7QUFBQTtBQUV6QixvQkFBa0IsR0FBRztBQUNuQixpQkFBYSxDQUFDLFNBQVM7QUFHdkIsZ0JBQVksQ0FBQyxTQUFTLENBQUM7QUFBQTtBQUd6QixpQ0FDRSxHQUNNO0FBQ04sTUFBRTtBQUdGLGFBQVM7QUFBQSxNQUNQLEdBQUc7QUFBQSxNQUNIO0FBQUEsUUFDRSxVQUFVO0FBQUEsUUFDVixJQUFJO0FBQUEsUUFDSixHQUFHLGdCQUFlO0FBQUEsUUFDbEIsR0FBRyxpQkFBZ0I7QUFBQSxRQUNuQixPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUE7QUFBQTtBQUtkLGFBQVM7QUFBQSxNQUNQLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTTtBQUNsQixZQUFJLEVBQUUsVUFBVTtBQUNkLFlBQUUsV0FBVztBQUNiLFlBQUUsV0FBVztBQUFBO0FBRWYsZUFBTztBQUFBO0FBQUE7QUFBQTtBQUtiLHVDQUFxQyxHQUFHO0FBQ3RDLFlBQVEsQ0FBQyxNQUFNO0FBRWYsYUFBUztBQUFBLE1BQ1AsR0FBRztBQUFBLE1BQ0g7QUFBQSxRQUNFLFVBQVU7QUFBQSxRQUNWLElBQUk7QUFBQSxRQUNKLEdBQUcsZ0JBQWU7QUFBQSxRQUNsQixHQUFHLGlCQUFnQjtBQUFBLFFBQ25CLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLE9BQU8sUUFBUSxLQUFLLE1BQU0sS0FBSyxXQUFXLFNBQVMsS0FBSyxNQUN0RCxLQUFLLFdBQVcsU0FDWixLQUFLLE1BQU0sS0FBSyxXQUFXO0FBQUEsUUFDakMsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUtoQiwrQkFBNkIsR0FBRztBQUM5QixZQUFRLENBQUMsTUFBTTtBQUFBO0FBRWpCLGtDQUFnQyxHQUFHO0FBQ2pDLFlBQVEsQ0FBQyxNQUFNO0FBQUE7QUFFakIsa0NBQWdDLEdBQUc7QUFDakMsWUFBUSxDQUFDLE1BQU07QUFBQTtBQUVqQixvQ0FBa0MsR0FBRztBQUNuQyxZQUFRLENBQUMsTUFBTTtBQUFBO0FBR2pCLDhCQUNFLEdBQ0EsSUFDTTtBQUNOLFNBQUk7QUFDSixhQUFTO0FBQUEsTUFDUCxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU07QUFDbEIsWUFBSSxFQUFFLE1BQU0sSUFBSTtBQUNkLFlBQUUsV0FBVztBQUNiLFlBQUUsV0FBVztBQUNiLFlBQUUsT0FBTyxFQUFFLE9BQU87QUFBQTtBQUVwQixlQUFPO0FBQUE7QUFBQTtBQUFBO0FBUWIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUE7QUFBQSxLQUdaLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxvQkFBRDtBQUFBLElBQW1CLElBQUk7QUFBQSxLQUNwQixLQUNELG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLFFBQU87QUFBQSxJQUNQLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxLQUVOLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLFFBQU87QUFBQSxJQUNQLGFBQVk7QUFBQSxNQUVkLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLElBQUc7QUFBQSxJQUFLLElBQUc7QUFBQSxJQUFLLEdBQUU7QUFBQSxJQUFJLE1BQUs7QUFBQSxTQUt6QyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxTQUFEO0FBQUEsSUFDRSxJQUFJLElBQUksUUFBUSxVQUFVO0FBQUEsSUFDMUIsZUFBZTtBQUFBLEtBRWQsS0FDRCxvQ0FBQyxPQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixRQUFPO0FBQUEsSUFDUCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsS0FFTixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixRQUFPO0FBQUEsSUFDUCxhQUFZO0FBQUEsUUFJbEIsb0NBQUMsU0FBRDtBQUFBLElBQ0UsSUFBSSxJQUFJLFFBQVEsa0JBQWtCO0FBQUEsSUFDbEMsZUFBZTtBQUFBLEtBRWYsb0NBQUMsT0FBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsU0FBUTtBQUFBLElBQ1IsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLEtBRU4sb0NBQUMsUUFBRDtBQUFBLElBQ0UsR0FBRTtBQUFBLElBQ0YsR0FBRTtBQUFBLElBQ0YsT0FBTTtBQUFBLElBQ04sUUFBTztBQUFBLElBQ1AsSUFBRztBQUFBLElBQ0gsUUFBTztBQUFBLElBQ1AsYUFBWTtBQUFBLFFBSWxCLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLElBQUksSUFBSSxRQUFRLGFBQWE7QUFBQSxJQUM3QixlQUFlO0FBQUEsS0FFZixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixRQUFPO0FBQUEsSUFDUCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsS0FFTixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixRQUFPO0FBQUEsSUFDUCxhQUFZO0FBQUEsSUFDWixlQUFjO0FBQUEsUUFJcEIsb0NBQUMsU0FBRDtBQUFBLElBQ0UsSUFBSSxJQUFJLFFBQVEsYUFBYTtBQUFBLElBQzdCLGVBQWU7QUFBQSxLQUVmLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxJQUNOLFFBQU87QUFBQSxJQUNQLFNBQVE7QUFBQSxJQUNSLE1BQUs7QUFBQSxJQUNMLE9BQU07QUFBQSxLQUVOLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLE1BQUs7QUFBQSxNQUVQLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLE1BQUs7QUFBQSxNQUVQLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLE1BQUs7QUFBQSxNQUVQLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLE1BQUs7QUFBQSxNQUVQLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLEdBQUU7QUFBQSxJQUNGLE1BQUs7QUFBQSxRQUlYLG9DQUFDLFNBQUQ7QUFBQSxJQUNFLElBQUksSUFBSSxRQUFRLGVBQWU7QUFBQSxJQUMvQixlQUFlO0FBQUEsS0FFZixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsSUFDTixRQUFPO0FBQUEsSUFDUCxTQUFRO0FBQUEsSUFDUixNQUFLO0FBQUEsSUFDTCxPQUFNO0FBQUEsS0FFTixvQ0FBQyxRQUFEO0FBQUEsSUFDRSxHQUFFO0FBQUEsSUFDRixNQUFLO0FBQUEsVUFPZixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxNQUFLO0FBQUEsSUFDTCxhQUFhLENBQUMsTUFBTSwwQkFBMEI7QUFBQSxJQUM5QyxTQUFTLENBQUMsTUFBTSxzQkFBc0I7QUFBQSxJQUN0QyxXQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsSUFDUixTQUFTLE9BQU8saUJBQWdCO0FBQUEsSUFDaEMsTUFBSztBQUFBLElBQ0wsT0FBTTtBQUFBLEtBRU4sb0NBQUMsVUFBRDtBQUFBLElBQVEsSUFBRztBQUFBLE1BSVgsb0NBQUMsUUFBRDtBQUFBLElBQU0sT0FBTTtBQUFBLElBQU8sUUFBTztBQUFBLElBQU8sTUFBSztBQUFBLE1BWXJDLE1BQU0sSUFBSSxDQUFDLEtBQUssTUFBTTtBQUNyQixXQUNFLG9DQUFDLEtBQUQ7QUFBQSxNQUFHLEtBQUssY0FBYyxJQUFJO0FBQUEsT0FDdkIsSUFBSSxZQUNILG9DQUFDLFFBQUQ7QUFBQSxNQUNFLEdBQUcsSUFBSSxJQUFJO0FBQUEsTUFDWCxHQUFHLElBQUksSUFBSTtBQUFBLE1BQ1gsT0FBTyxJQUFJLFFBQVE7QUFBQSxNQUNuQixRQUFRLElBQUksU0FBUztBQUFBLE1BRXJCLFFBQU87QUFBQSxRQUlYLG9DQUFDLFFBQUQ7QUFBQSxNQUdFLElBQUc7QUFBQSxNQUlILEdBQUcsSUFBSTtBQUFBLE1BQ1AsR0FBRyxJQUFJO0FBQUEsTUFDUCxPQUFPLElBQUk7QUFBQSxNQUNYLFFBQVEsSUFBSTtBQUFBLE1BQ1osTUFBTSxJQUFJO0FBQUEsUUFhWixvQ0FBQyxpQkFBRDtBQUFBLE1BQ0UsSUFBRztBQUFBLE1BQ0gsR0FBRyxJQUFJLElBQUk7QUFBQSxNQUNYLEdBQUcsSUFBSSxJQUFJO0FBQUEsTUFDWCxPQUFPLElBQUksUUFBUTtBQUFBLE1BQ25CLFFBQU87QUFBQSxPQUVQLG9DQUFDLFNBQUQ7QUFBQSxNQUNFLGFBQWEsSUFBSTtBQUFBLE1BQ2pCLE9BQU87QUFBQSxNQUNQLFVBQVUsQ0FBQyxNQUFNLG1CQUFtQixHQUFHLElBQUk7QUFBQSxTQUkvQyxvQ0FBQyxRQUFEO0FBQUEsTUFJRSxhQUFhLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJO0FBQUEsTUFDN0MsYUFBYSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSTtBQUFBLE1BRTdDLEdBQUcsSUFBSSxJQUFJO0FBQUEsTUFDWCxHQUFHLElBQUksSUFBSTtBQUFBLE1BQ1gsT0FBTyxJQUFJLFFBQVE7QUFBQSxNQUNuQixRQUFRLElBQUksU0FBUztBQUFBLE1BQ3JCLE1BQUs7QUFBQSxNQUNMLFNBQVMsQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUk7QUFBQSxNQUN2QyxhQUFhLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSTtBQUFBLE1BQ3RDLGNBQWMsQ0FBQyxNQUFNLFdBQVcsR0FBRyxJQUFJO0FBQUEsTUFDdkMsV0FBVyxDQUFDLE1BQU0sU0FBUztBQUFBLE1BQzNCLGNBQWMsQ0FBQyxNQUFNLGlCQUFpQixHQUFHLElBQUk7QUFBQSxNQUM3QyxZQUFZLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJO0FBQUEsTUFDM0MsZUFBZSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsSUFBSTtBQUFBO0FBQUEsTUFNeEQsZUFFQyxvQ0FBQyxLQUFELE1BQ0csY0FBYyxnQkFDYiwwREFDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBSSxHQUFFO0FBQUEsSUFBTSxPQUFNO0FBQUEsSUFBTyxRQUFPO0FBQUEsSUFBSyxNQUFLO0FBQUEsTUFDbEQsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQU8sR0FBRTtBQUFBLElBQUssTUFBSztBQUFBLEtBQVUsbUJBQ25CLGNBQWMsR0FBRSxLQUFFLGNBQWMsSUFFbEQsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQU8sR0FBRTtBQUFBLElBQUssTUFBSztBQUFBLEtBQVUseUJBQ2Isb0JBQW9CLEdBQUUsS0FDM0Msb0JBQW9CLEtBUzNCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFLLEdBQUU7QUFBQSxJQUFLLE1BQUs7QUFBQSxLQUFVLGtCQUNsQixPQUVqQixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBSyxHQUFFO0FBQUEsSUFBSyxNQUFLO0FBQUEsS0FBVSxtQkFDakIsd0JBQXdCLEdBQUUsS0FDekMsd0JBQXdCLElBRTNCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFLLEdBQUU7QUFBQSxJQUFLLE1BQUs7QUFBQSxLQUFVLHlCQUNYLDRCQUE0QixHQUFFLEtBQ25ELDRCQUE0QixJQUc5QixNQUFNLElBQUksQ0FBQyxHQUFHLE1BQ2IsMERBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sS0FBSyxFQUFFO0FBQUEsSUFBSSxHQUFFO0FBQUEsSUFBSyxHQUFHLEtBQUssS0FBSztBQUFBLElBQUcsTUFBSztBQUFBLEtBQ3JCLE9BQ2xCLEdBQUUsVUFBTyxFQUFFLEdBQUUsS0FBRSxFQUFFLEdBQUUsU0FBTSxLQUFLLEtBQ2pDLEVBQUUsV0FBVyxhQUFhO0FBQUE7QUFXdEMsaUJBQWdCLEVBQUUsS0FBSyxVQUFVLGVBQWUsWUFBWTtBQUNqRSxRQUFNLENBQUMsT0FBTyxZQUFZLDJCQUFRO0FBQ2xDLFFBQU0sQ0FBQyxjQUFjLG1CQUFtQiwyQkFBUTtBQU9oRCw2QkFBMkIsR0FBRztBQUFBO0FBSzlCLDRCQUEwQixHQUFHO0FBQUE7QUFNN0IsU0FDRSxvQ0FBQyxVQUFEO0FBQUEsSUFDRSxhQUFhLENBQUMsTUFBTSxrQkFBa0I7QUFBQSxJQUN0QyxZQUFZLENBQUMsTUFBTSxpQkFBaUI7QUFBQSxJQUVwQyxXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsS0FFVCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBVTtBQUFBO0FBS3hCLDRCQUEyQixFQUFFLEtBQUssVUFBVSxZQUFZO0FBQzdELFFBQU0sQ0FBQyxhQUFhLGtCQUFrQiwyQkFBUTtBQUU5QywyQkFBeUIsR0FBRztBQUUxQixtQkFBZSxDQUFDLFNBQVMsQ0FBQztBQUFBO0FBRTVCLDZCQUEyQixHQUFHO0FBQUE7QUFLOUIsNEJBQTBCLEdBQUc7QUFBQTtBQU03QixTQUNFLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLGFBQWEsQ0FBQyxNQUFNLGtCQUFrQjtBQUFBLElBQ3RDLFlBQVksQ0FBQyxNQUFNLGlCQUFpQjtBQUFBLElBRXBDLFdBQVc7QUFBQSxJQUNYLFNBQVMsQ0FBQyxNQUFNLGdCQUFnQjtBQUFBLEtBRWhDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFVO0FBQUE7QUFLeEIsd0JBQXdCO0FBQzdCLFFBQU0sQ0FBQyxPQUFPLFlBQVksMkJBQVE7QUFDbEMsV0FBUztBQUFBLElBQ1AsR0FBRztBQUFBLElBQ0g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLElBQUk7QUFBQSxNQUNKLEdBQUcsZ0JBQWU7QUFBQSxNQUNsQixHQUFHLGlCQUFnQjtBQUFBLE1BQ25CLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLE9BQU8sUUFBUSxLQUFLLE1BQU0sS0FBSyxXQUFXLFNBQVMsS0FBSyxNQUN0RCxLQUFLLFdBQVcsU0FDWixLQUFLLE1BQU0sS0FBSyxXQUFXO0FBQUEsTUFFakMsVUFBVTtBQUFBO0FBQUE7QUFBQTs7O0FDbG5CaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUE2QjtBQUVkLGlCQUFpQjtBQUM5QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQTtBQUFBLEtBR2Qsb0NBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUc7QUFBQSxLQUFZO0FBQUE7OztBQ1YzQjtBQUFBLElBQU8sMEJBQVEsRUFBQyxXQUFVLFlBQVcsU0FBUSxFQUFDLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMsdUNBQXFDLFVBQVMsRUFBQyxRQUFPLEVBQUMsTUFBSyxRQUFPLFlBQVcsUUFBVSxRQUFPLElBQUcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMkJBQTBCLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLG1CQUFrQixFQUFDLE1BQUssbUJBQWtCLFlBQVcsUUFBTyxRQUFPLFlBQVcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsc0NBQXFDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx1QkFBc0IsRUFBQyxNQUFLLHVCQUFzQixZQUFXLG1CQUFrQixRQUFPLE9BQU0sU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMENBQXlDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx5QkFBd0IsRUFBQyxNQUFLLHlCQUF3QixZQUFXLG1CQUFrQixRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsNENBQTJDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxnQkFBZSxFQUFDLE1BQUssZ0JBQWUsWUFBVyxRQUFPLFFBQU8sUUFBVSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyxtQ0FBa0MsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFdBQVEsT0FBTTs7O0FSUXhsRCxJQUFNLFFBQVEsRUFBRSxRQUFRO0FBQ3hCLElBQU0sU0FBUztBQUFBLEVBQ3BCLFFBQVE7QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosbUJBQW1CO0FBQUEsSUFDZixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHlCQUF5QjtBQUFBLElBQ3JCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosdUJBQXVCO0FBQUEsSUFDbkIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOzs7QURyQ2Qsd0JBQXdCLE9BQU8sU0FBUztBQUN0QyxNQUFJO0FBQ0osTUFBSTtBQUVKLE1BQUksTUFBTSxpQkFBaUIsTUFBTTtBQUMvQix3QkFBb0IsTUFBTTtBQUFBO0FBRzVCLFFBQU0sYUFBYSxNQUFNLFFBQVE7QUFDakMsUUFBTSx1QkFBdUIsTUFBTSxRQUFRO0FBRTNDLE1BQUksY0FBYyxRQUFRLFlBQVksS0FBSyxhQUFhO0FBQ3RELDZCQUF5QixXQUFXLE1BQU0sS0FBSztBQUFBO0FBR2pELFFBQU0sY0FBYztBQUFBLElBQ2xCLCtCQUErQjtBQUFBLElBQy9CO0FBQUEsSUFDQSx1QkFBdUI7QUFBQTtBQUl6QixTQUFPLEtBQUssYUFBYSxRQUFRLFNBQU87QUFDdEMsUUFBSSxZQUFZLFFBQVEsTUFBTTtBQUM1QixhQUFPLFlBQVk7QUFBQTtBQUFBO0FBSXZCLFNBQU87QUFBQTtBQUdGLElBQU0sVUFBVSx5Q0FBcUI7QUFBQSxFQUMxQztBQUFBLEVBQ0E7QUFBQSxFQUNBLE1BQU07QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
