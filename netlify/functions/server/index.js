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

// route:/Users/newmac/Desktop/MyDevProjects/drawette/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/shared.css
var shared_default = "/build/_assets/shared-TGVVBY4F.css";

// route:/Users/newmac/Desktop/MyDevProjects/drawette/app/root.tsx
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

// route:/Users/newmac/Desktop/MyDevProjects/drawette/app/routes/drawette.tsx
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

// route:/Users/newmac/Desktop/MyDevProjects/drawette/app/routes/drawette/index.tsx
var drawette_exports2 = {};
__export(drawette_exports2, {
  default: () => drawette_default
});
init_react();

// app/routes/drawette/App.tsx
init_react();
var import_jotai2 = __toModule(require("jotai"));
var import_uuid = __toModule(require("uuid"));
var WINDOW_WIDTH = 1600;
var WINDOW_HEIGHT = 1200;
var diffX = 0;
var diffY = 0;
function log(x) {
  console.log(x);
}
var ScreenMousePositionOnCanvas = (0, import_jotai2.atom)({});
var MousePositionOnCanvas = (0, import_jotai2.atom)({});
var ScreenMousePosition = (0, import_jotai2.atom)({ x: 600, y: 400 });
var ShowHelpersAtom = (0, import_jotai2.atom)(true);
var ObjectSelected = (0, import_jotai2.atom)(false);
var Drawing = (0, import_jotai2.atom)(false);
var MouseDownAtom = (0, import_jotai2.atom)("");
var ToolChoosed = (0, import_jotai2.atom)("");
var MousePosition = (0, import_jotai2.atom)({ x: 600, y: 400 });
var ObjectList = (0, import_jotai2.atom)([]);
var LinkList = (0, import_jotai2.atom)([]);
function App2() {
  const [mousePositiononOnCanvas, setMousePositiononOnCanvas] = (0, import_jotai2.useAtom)(MousePositionOnCanvas);
  const [screenMousePositionOnCanvas, setScreenMousePositionOnCanvas] = (0, import_jotai2.useAtom)(ScreenMousePositionOnCanvas);
  const [Rects2, setRects] = (0, import_jotai2.useAtom)(ObjectList);
  const [Links2, setLink] = (0, import_jotai2.useAtom)(LinkList);
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
      ...Rects2.map((r) => {
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
      ...Rects2.map((r) => {
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
    mouseDown === "mouse down" && tool == "move" && setRects([
      ...Rects2.map((r) => {
        if (r.id === id) {
          r = __spreadProps(__spreadValues({}, r), {
            id,
            selected: false,
            x: e.clientX - diffX,
            y: e.clientY - diffY
          });
        }
        return r;
      })
    ]);
    mouseDown === "mouse down" && tool == "addLink" && setLink([
      ...Links2,
      {
        selected: true,
        id: (0, import_uuid.v4)(),
        x1: 100,
        y1: 400,
        x2: 100,
        y2: 100,
        text: "",
        color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
      }
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
    diffX = e.clientX - e.target.x.baseVal.value;
    diffY = e.clientY - e.target.y.baseVal.value;
    setSelected((prev) => !prev);
  }
  function handleUp(e) {
    setMouseDown((prev) => "mouse up");
    setSelected((prev) => !prev);
  }
  function handleOnClickOnCanvas(e) {
    e.stopPropagation();
    setRects([
      ...Rects2,
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
      ...Rects2.map((r) => {
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
      ...Rects2,
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
    log(Rects2);
    setRects([
      ...Rects2.map((r) => {
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
  }), /* @__PURE__ */ React.createElement("g", {
    name: "Rects"
  }, Rects2.map((rec, i) => {
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
      x: rec.x,
      y: rec.y,
      width: rec.width + 8,
      height: rec.width + 8
    }, /* @__PURE__ */ React.createElement("div", {
      className: "input-Container"
    }, /* @__PURE__ */ React.createElement("input", {
      placeholder: i,
      style: {},
      onChange: (e) => handleOnTextChange(e, rec.id)
    }))), /* @__PURE__ */ React.createElement("rect", {
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
  })), /* @__PURE__ */ React.createElement("g", {
    name: "Links"
  }, Links2.map((l, i) => {
    return /* @__PURE__ */ React.createElement("g", {
      key: "Links" + l.id
    }, l.selected && /* @__PURE__ */ React.createElement("rect", {
      x: "500",
      y: "500",
      width: "200",
      height: "200",
      fill: "#0EA5E9",
      stroke: "#0EA5E9"
    }));
  })), showHelpers && /* @__PURE__ */ React.createElement("g", null, mouseDown === "mouse down" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", {
    style: { bottom: 0 },
    x: "0",
    width: "1600",
    height: "1",
    fill: "#00eeff11"
  }), /* @__PURE__ */ React.createElement("text", {
    x: "1200",
    y: "50",
    fill: "#00eeff"
  }), /* @__PURE__ */ React.createElement("text", {
    x: "1200",
    y: "70",
    fill: "#ff5100"
  })), /* @__PURE__ */ React.createElement("text", {
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
    fill: "#00eeff"
  }, "diff: ", diffX, ",", diffY))), showHelpers && /* @__PURE__ */ React.createElement("div", {
    className: "info-pannel"
  }, Rects2.map((r, i) => /* @__PURE__ */ React.createElement("div", {
    className: "info-item",
    key: r.id
  }, "\u25BA  ", " ", i, " ", r.text, " -- ", r.x, ",", r.y, r.selected ? " \u{1F601}" : ""))));
}
function Button({ cn = "button", hundleOnClick, children }) {
  const [Rects2, setRects] = (0, import_jotai2.useAtom)(ObjectList);
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

// route:/Users/newmac/Desktop/MyDevProjects/drawette/app/routes/drawette/index.tsx
var drawette_default = App2;

// route:/Users/newmac/Desktop/MyDevProjects/drawette/app/routes/drawette/App.tsx
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
var WINDOW_WIDTH2 = 1600;
var WINDOW_HEIGHT2 = 1200;
var diffX2 = 0;
var diffY2 = 0;
function log2(x) {
  console.log(x);
}
var ScreenMousePositionOnCanvas2 = (0, import_jotai3.atom)({});
var MousePositionOnCanvas2 = (0, import_jotai3.atom)({});
var ScreenMousePosition2 = (0, import_jotai3.atom)({ x: 600, y: 400 });
var ShowHelpersAtom2 = (0, import_jotai3.atom)(true);
var ObjectSelected2 = (0, import_jotai3.atom)(false);
var Drawing2 = (0, import_jotai3.atom)(false);
var MouseDownAtom2 = (0, import_jotai3.atom)("");
var ToolChoosed2 = (0, import_jotai3.atom)("");
var MousePosition2 = (0, import_jotai3.atom)({ x: 600, y: 400 });
var ObjectList2 = (0, import_jotai3.atom)([]);
var LinkList2 = (0, import_jotai3.atom)([]);
function App3() {
  const [mousePositiononOnCanvas, setMousePositiononOnCanvas] = (0, import_jotai3.useAtom)(MousePositionOnCanvas2);
  const [screenMousePositionOnCanvas, setScreenMousePositionOnCanvas] = (0, import_jotai3.useAtom)(ScreenMousePositionOnCanvas2);
  const [Rects2, setRects] = (0, import_jotai3.useAtom)(ObjectList2);
  const [Links2, setLink] = (0, import_jotai3.useAtom)(LinkList2);
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
      ...Rects2.map((r) => {
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
      ...Rects2.map((r) => {
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
    mouseDown === "mouse down" && tool == "move" && setRects([
      ...Rects2.map((r) => {
        if (r.id === id) {
          r = __spreadProps(__spreadValues({}, r), {
            id,
            selected: false,
            x: e.clientX - diffX2,
            y: e.clientY - diffY2
          });
        }
        return r;
      })
    ]);
    mouseDown === "mouse down" && tool == "addLink" && setLink([
      ...Links2,
      {
        selected: true,
        id: (0, import_uuid2.v4)(),
        x1: 100,
        y1: 400,
        x2: 100,
        y2: 100,
        text: "",
        color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
      }
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
    diffX2 = e.clientX - e.target.x.baseVal.value;
    diffY2 = e.clientY - e.target.y.baseVal.value;
    setSelected((prev) => !prev);
  }
  function handleUp(e) {
    setMouseDown((prev) => "mouse up");
    setSelected((prev) => !prev);
  }
  function handleOnClickOnCanvas(e) {
    e.stopPropagation();
    setRects([
      ...Rects2,
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
      ...Rects2.map((r) => {
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
      ...Rects2,
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
    log2(Rects2);
    setRects([
      ...Rects2.map((r) => {
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
  }), /* @__PURE__ */ React.createElement("g", {
    name: "Rects"
  }, Rects2.map((rec, i) => {
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
      x: rec.x,
      y: rec.y,
      width: rec.width + 8,
      height: rec.width + 8
    }, /* @__PURE__ */ React.createElement("div", {
      className: "input-Container"
    }, /* @__PURE__ */ React.createElement("input", {
      placeholder: i,
      style: {},
      onChange: (e) => handleOnTextChange(e, rec.id)
    }))), /* @__PURE__ */ React.createElement("rect", {
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
  })), /* @__PURE__ */ React.createElement("g", {
    name: "Links"
  }, Links2.map((l, i) => {
    return /* @__PURE__ */ React.createElement("g", {
      key: "Links" + l.id
    }, l.selected && /* @__PURE__ */ React.createElement("rect", {
      x: "500",
      y: "500",
      width: "200",
      height: "200",
      fill: "#0EA5E9",
      stroke: "#0EA5E9"
    }));
  })), showHelpers && /* @__PURE__ */ React.createElement("g", null, mouseDown === "mouse down" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", {
    style: { bottom: 0 },
    x: "0",
    width: "1600",
    height: "1",
    fill: "#00eeff11"
  }), /* @__PURE__ */ React.createElement("text", {
    x: "1200",
    y: "50",
    fill: "#00eeff"
  }), /* @__PURE__ */ React.createElement("text", {
    x: "1200",
    y: "70",
    fill: "#ff5100"
  })), /* @__PURE__ */ React.createElement("text", {
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
    fill: "#00eeff"
  }, "diff: ", diffX2, ",", diffY2))), showHelpers && /* @__PURE__ */ React.createElement("div", {
    className: "info-pannel"
  }, Rects2.map((r, i) => /* @__PURE__ */ React.createElement("div", {
    className: "info-item",
    key: r.id
  }, "\u25BA  ", " ", i, " ", r.text, " -- ", r.x, ",", r.y, r.selected ? " \u{1F601}" : ""))));
}
function Button2({ cn = "button", hundleOnClick, children }) {
  const [Rects2, setRects] = (0, import_jotai3.useAtom)(ObjectList2);
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
  const [Rects2, setRects] = (0, import_jotai3.useAtom)(ObjectList2);
  setRects([
    ...Rects2,
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

// route:/Users/newmac/Desktop/MyDevProjects/drawette/app/routes/index.tsx
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

// route:/Users/newmac/Desktop/MyDevProjects/drawette/app/routes/App.tsx
var App_exports2 = {};
__export(App_exports2, {
  Button: () => Button3,
  ShowHelpersButton: () => ShowHelpersButton3,
  addRectangle: () => addRectangle2,
  default: () => App4
});
init_react();
var import_jotai4 = __toModule(require("jotai"));
var import_uuid3 = __toModule(require("uuid"));
var WINDOW_WIDTH3 = 1600;
var WINDOW_HEIGHT3 = 1200;
var diffX3 = 0;
var diffY3 = 0;
function log3(x) {
  console.log(x);
}
var ScreenMousePositionOnCanvas3 = (0, import_jotai4.atom)({});
var MousePositionOnCanvas3 = (0, import_jotai4.atom)({});
var ScreenMousePosition3 = (0, import_jotai4.atom)({ x: 600, y: 400 });
var ShowHelpersAtom3 = (0, import_jotai4.atom)(true);
var ObjectSelected3 = (0, import_jotai4.atom)(false);
var Drawing3 = (0, import_jotai4.atom)(false);
var MouseDownAtom3 = (0, import_jotai4.atom)("");
var ToolChoosed3 = (0, import_jotai4.atom)("");
var MousePosition3 = (0, import_jotai4.atom)({ x: 600, y: 400 });
var ObjectList3 = (0, import_jotai4.atom)([]);
var LinkList3 = (0, import_jotai4.atom)([]);
function App4() {
  const [mousePositiononOnCanvas, setMousePositiononOnCanvas] = (0, import_jotai4.useAtom)(MousePositionOnCanvas3);
  const [screenMousePositionOnCanvas, setScreenMousePositionOnCanvas] = (0, import_jotai4.useAtom)(ScreenMousePositionOnCanvas3);
  const [Rects2, setRects] = (0, import_jotai4.useAtom)(ObjectList3);
  const [Links2, setLink] = (0, import_jotai4.useAtom)(LinkList3);
  const [showHelpers, setShowHelpers] = (0, import_jotai4.useAtom)(ShowHelpersAtom3);
  const [tool, setTool] = (0, import_jotai4.useAtom)(ToolChoosed3);
  const [mouseDown, setMouseDown] = (0, import_jotai4.useAtom)(MouseDownAtom3);
  const [mousePosition, setMousePosition] = (0, import_jotai4.useAtom)(MousePosition3);
  const [screenMousePosition, setScreenMousePosition] = (0, import_jotai4.useAtom)(ScreenMousePosition3);
  const [selected, setSelected] = (0, import_jotai4.useAtom)(ObjectSelected3);
  const [startDrawing, setStartDrawing] = (0, import_jotai4.useAtom)(Drawing3);
  let mousePose0 = { x: 50, y: 50 };
  let shapePose0 = { x: 0, y: 0 };
  function handleRectClick(e, id) {
    e.stopPropagation();
    setRects([
      ...Rects2.map((r) => {
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
    log3(e);
    setRects([
      ...Rects2.map((r) => {
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
    mouseDown === "mouse down" && tool == "move" && setRects([
      ...Rects2.map((r) => {
        if (r.id === id) {
          r = __spreadProps(__spreadValues({}, r), {
            id,
            selected: false,
            x: e.clientX - diffX3,
            y: e.clientY - diffY3
          });
        }
        return r;
      })
    ]);
    mouseDown === "mouse down" && tool == "addLink" && setLink([
      ...Links2,
      {
        selected: true,
        id: (0, import_uuid3.v4)(),
        x1: 100,
        y1: 400,
        x2: 100,
        y2: 100,
        text: "",
        color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
      }
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
    diffX3 = e.clientX - e.target.x.baseVal.value;
    diffY3 = e.clientY - e.target.y.baseVal.value;
    setSelected((prev) => !prev);
  }
  function handleUp(e) {
    setMouseDown((prev) => "mouse up");
    setSelected((prev) => !prev);
  }
  function handleOnClickOnCanvas(e) {
    e.stopPropagation();
    setRects([
      ...Rects2,
      {
        selected: false,
        id: (0, import_uuid3.v4)(),
        x: WINDOW_WIDTH3 / 4,
        y: WINDOW_HEIGHT3 / 4,
        width: 100,
        heigth: 100,
        color: `rgba(255, 0, 0)`,
        text: "",
        textEdit: false
      }
    ]);
    setRects([
      ...Rects2.map((r) => {
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
      ...Rects2,
      {
        selected: false,
        id: (0, import_uuid3.v4)(),
        x: WINDOW_WIDTH3 / 4,
        y: WINDOW_HEIGHT3 / 4,
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
    log3(Rects2);
    setRects([
      ...Rects2.map((r) => {
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
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ShowHelpersButton3, {
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
  }, /* @__PURE__ */ React.createElement(Button3, {
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
  }))), /* @__PURE__ */ React.createElement(Button3, {
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
  }))), /* @__PURE__ */ React.createElement(Button3, {
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
  }))), /* @__PURE__ */ React.createElement(Button3, {
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
  }))), /* @__PURE__ */ React.createElement(Button3, {
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
    width: WINDOW_WIDTH3,
    height: WINDOW_HEIGHT3,
    viewBox: `0 0 ${WINDOW_WIDTH3} ${WINDOW_HEIGHT3}`,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("filter", {
    id: "filter"
  }), /* @__PURE__ */ React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "#18181B"
  }), /* @__PURE__ */ React.createElement("g", {
    name: "Rects"
  }, Rects2.map((rec, i) => {
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
      x: rec.x,
      y: rec.y,
      width: rec.width + 8,
      height: rec.width + 8
    }, /* @__PURE__ */ React.createElement("div", {
      className: "input-Container"
    }, /* @__PURE__ */ React.createElement("input", {
      placeholder: i,
      style: {},
      onChange: (e) => handleOnTextChange(e, rec.id)
    }))), /* @__PURE__ */ React.createElement("rect", {
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
  })), /* @__PURE__ */ React.createElement("g", {
    name: "Links"
  }, Links2.map((l, i) => {
    return /* @__PURE__ */ React.createElement("g", {
      key: "Links" + l.id
    }, l.selected && /* @__PURE__ */ React.createElement("rect", {
      x: "500",
      y: "500",
      width: "200",
      height: "200",
      fill: "#0EA5E9",
      stroke: "#0EA5E9"
    }));
  })), showHelpers && /* @__PURE__ */ React.createElement("g", null, mouseDown === "mouse down" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("rect", {
    style: { bottom: 0 },
    x: "0",
    width: "1600",
    height: "1",
    fill: "#00eeff11"
  }), /* @__PURE__ */ React.createElement("text", {
    x: "1200",
    y: "50",
    fill: "#00eeff"
  }), /* @__PURE__ */ React.createElement("text", {
    x: "1200",
    y: "70",
    fill: "#ff5100"
  })), /* @__PURE__ */ React.createElement("text", {
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
    fill: "#00eeff"
  }, "diff: ", diffX3, ",", diffY3))), showHelpers && /* @__PURE__ */ React.createElement("div", {
    className: "info-pannel"
  }, Rects2.map((r, i) => /* @__PURE__ */ React.createElement("div", {
    className: "info-item",
    key: r.id
  }, "\u25BA  ", " ", i, " ", r.text, " -- ", r.x, ",", r.y, r.selected ? " \u{1F601}" : ""))));
}
function Button3({ cn = "button", hundleOnClick, children }) {
  const [Rects2, setRects] = (0, import_jotai4.useAtom)(ObjectList3);
  const [startDrawing, setStartDrawing] = (0, import_jotai4.useAtom)(Drawing3);
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
function ShowHelpersButton3({ cn = "button", children }) {
  const [showHelpers, setShowHelpers] = (0, import_jotai4.useAtom)(ShowHelpersAtom3);
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
function addRectangle2() {
  const [Rects2, setRects] = (0, import_jotai4.useAtom)(ObjectList3);
  setRects([
    ...Rects2,
    {
      text: "",
      selected: false,
      id: (0, import_uuid3.v4)(),
      x: WINDOW_WIDTH3 / 4,
      y: WINDOW_HEIGHT3 / 4,
      width: 100,
      heigth: 100,
      color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
      textEdit: false
    }
  ]);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "73e93229", "entry": { "module": "/build/entry.client-2EVBZZFR.js", "imports": ["/build/_shared/chunk-75QY65SR.js", "/build/_shared/chunk-YZVLR6ER.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-OT7PVMT7.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/App": { "id": "routes/App", "parentId": "root", "path": "App", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/App-UROX3PA2.js", "imports": ["/build/_shared/chunk-JTWWB2XH.js", "/build/_shared/chunk-I27JDQ6T.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/drawette": { "id": "routes/drawette", "parentId": "root", "path": "drawette", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/drawette-XMQAFFCX.js", "imports": ["/build/_shared/chunk-I27JDQ6T.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/drawette/App": { "id": "routes/drawette/App", "parentId": "routes/drawette", "path": "App", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/drawette/App-6I7XY7LR.js", "imports": ["/build/_shared/chunk-CUUKZN6S.js", "/build/_shared/chunk-JTWWB2XH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/drawette/index": { "id": "routes/drawette/index", "parentId": "routes/drawette", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/drawette/index-56UK5MXA.js", "imports": ["/build/_shared/chunk-CUUKZN6S.js", "/build/_shared/chunk-JTWWB2XH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EDAHS4EE.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-73E93229.js" };

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
  },
  "routes/App": {
    id: "routes/App",
    parentId: "root",
    path: "App",
    index: void 0,
    caseSensitive: void 0,
    module: App_exports2
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL25ld21hYy9EZXNrdG9wL015RGV2UHJvamVjdHMvZHJhd2V0dGUvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9Vc2Vycy9uZXdtYWMvRGVza3RvcC9NeURldlByb2plY3RzL2RyYXdldHRlL2FwcC9yb3V0ZXMvZHJhd2V0dGUudHN4IiwgInJvdXRlOi9Vc2Vycy9uZXdtYWMvRGVza3RvcC9NeURldlByb2plY3RzL2RyYXdldHRlL2FwcC9yb3V0ZXMvZHJhd2V0dGUvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9yb3V0ZXMvZHJhd2V0dGUvQXBwLnRzeCIsICJyb3V0ZTovVXNlcnMvbmV3bWFjL0Rlc2t0b3AvTXlEZXZQcm9qZWN0cy9kcmF3ZXR0ZS9hcHAvcm91dGVzL2RyYXdldHRlL0FwcC50c3giLCAicm91dGU6L1VzZXJzL25ld21hYy9EZXNrdG9wL015RGV2UHJvamVjdHMvZHJhd2V0dGUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGU6L1VzZXJzL25ld21hYy9EZXNrdG9wL015RGV2UHJvamVjdHMvZHJhd2V0dGUvYXBwL3JvdXRlcy9BcHAudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vbmV0bGlmeVwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG4vKlxuICogUmV0dXJucyBhIGNvbnRleHQgb2JqZWN0IHdpdGggYXQgbW9zdCAzIGtleXM6XG4gKiAgLSBgbmV0bGlmeUdyYXBoVG9rZW5gOiByYXcgYXV0aGVudGljYXRpb24gdG9rZW4gdG8gdXNlIHdpdGggTmV0bGlmeSBHcmFwaFxuICogIC0gYGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuYDogRm9yIHVzZSB3aXRoIEpXVHMgZ2VuZXJhdGVkIGJ5XG4gKiAgICBgbmV0bGlmeS1ncmFwaC1hdXRoYC5cbiAqICAtIGBuZXRsaWZ5R3JhcGhTaWduYXR1cmVgOiBhIHNpZ25hdHVyZSBmb3Igc3Vic2NyaXB0aW9uIGV2ZW50cy4gV2lsbCBiZVxuICogICAgcHJlc2VudCBpZiBhIHNlY3JldCBpcyBzZXQuXG4gKi9cbmZ1bmN0aW9uIGdldExvYWRDb250ZXh0KGV2ZW50LCBjb250ZXh0KSB7XG4gIGxldCByYXdBdXRob3JpemF0aW9uU3RyaW5nO1xuICBsZXQgbmV0bGlmeUdyYXBoVG9rZW47XG5cbiAgaWYgKGV2ZW50LmF1dGhsaWZ5VG9rZW4gIT0gbnVsbCkge1xuICAgIG5ldGxpZnlHcmFwaFRva2VuID0gZXZlbnQuYXV0aGxpZnlUb2tlbjtcbiAgfVxuXG4gIGNvbnN0IGF1dGhIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXTtcbiAgY29uc3QgZ3JhcGhTaWduYXR1cmVIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wieC1uZXRsaWZ5LWdyYXBoLXNpZ25hdHVyZVwiXTtcblxuICBpZiAoYXV0aEhlYWRlciAhPSBudWxsICYmIC9CZWFyZXIgL2dpLnRlc3QoYXV0aEhlYWRlcikpIHtcbiAgICByYXdBdXRob3JpemF0aW9uU3RyaW5nID0gYXV0aEhlYWRlci5zcGxpdChcIiBcIilbMV07XG4gIH1cblxuICBjb25zdCBsb2FkQ29udGV4dCA9IHtcbiAgICBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbjogcmF3QXV0aG9yaXphdGlvblN0cmluZyxcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbjogbmV0bGlmeUdyYXBoVG9rZW4sXG4gICAgbmV0bGlmeUdyYXBoU2lnbmF0dXJlOiBncmFwaFNpZ25hdHVyZUhlYWRlclxuICB9O1xuXG4gIC8vIFJlbW92ZSBrZXlzIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICBPYmplY3Qua2V5cyhsb2FkQ29udGV4dCkuZm9yRWFjaChrZXkgPT4ge1xuICAgIGlmIChsb2FkQ29udGV4dFtrZXldID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBsb2FkQ29udGV4dFtrZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxvYWRDb250ZXh0O1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgYnVpbGQsXG4gIGdldExvYWRDb250ZXh0LFxuICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL25ld21hYy9EZXNrdG9wL015RGV2UHJvamVjdHMvZHJhd2V0dGUvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL25ld21hYy9EZXNrdG9wL015RGV2UHJvamVjdHMvZHJhd2V0dGUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9uZXdtYWMvRGVza3RvcC9NeURldlByb2plY3RzL2RyYXdldHRlL2FwcC9yb3V0ZXMvZHJhd2V0dGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9Vc2Vycy9uZXdtYWMvRGVza3RvcC9NeURldlByb2plY3RzL2RyYXdldHRlL2FwcC9yb3V0ZXMvZHJhd2V0dGUvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9Vc2Vycy9uZXdtYWMvRGVza3RvcC9NeURldlByb2plY3RzL2RyYXdldHRlL2FwcC9yb3V0ZXMvZHJhd2V0dGUvQXBwLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbmV3bWFjL0Rlc2t0b3AvTXlEZXZQcm9qZWN0cy9kcmF3ZXR0ZS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvVXNlcnMvbmV3bWFjL0Rlc2t0b3AvTXlEZXZQcm9qZWN0cy9kcmF3ZXR0ZS9hcHAvcm91dGVzL0FwcC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2RyYXdldHRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kcmF3ZXR0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkcmF3ZXR0ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvZHJhd2V0dGUvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RyYXdldHRlL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZHJhd2V0dGVcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9kcmF3ZXR0ZS9BcHBcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2RyYXdldHRlL0FwcFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2RyYXdldHRlXCIsXG4gICAgICBwYXRoOiBcIkFwcFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvQXBwXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9BcHBcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiQXBwXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL3NoYXJlZC5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV1cbn1cblxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdOZXcgUmVtaXggQXBwJyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPSdlbic+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ2pvdGFpJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcmF3ZXR0ZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFByb3ZpZGVyPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCAiaW1wb3J0IHsgYXRvbSwgdXNlQXRvbSB9IGZyb20gJ2pvdGFpJ1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXG5cbi8vIGxldCBXSU5ET1dfV0lEVEggPSBhdG9tKHdpbmRvdy5pbm5lcldpZHRoKVxuLy8gbGV0IFdJTkRPV19IRUlHSFQgPSBhdG9tKHdpbmRvdy5pbm5lckhlaWdodClcblxubGV0IFdJTkRPV19XSURUSCA9IDE2MDBcbmxldCBXSU5ET1dfSEVJR0hUID0gMTIwMFxuXG5sZXQgZGlmZlggPSAwXG5sZXQgZGlmZlkgPSAwXG5cbmZ1bmN0aW9uIGxvZyh4OiBhbnkpIHtcbiAgY29uc29sZS5sb2coeClcbn1cblxuY29uc3QgU2NyZWVuTW91c2VQb3NpdGlvbk9uQ2FudmFzID0gYXRvbSh7fSlcbmNvbnN0IE1vdXNlUG9zaXRpb25PbkNhbnZhcyA9IGF0b20oe30pXG5jb25zdCBTY3JlZW5Nb3VzZVBvc2l0aW9uID0gYXRvbSh7IHg6IDYwMCwgeTogNDAwIH0pXG5cbmNvbnN0IFNob3dIZWxwZXJzQXRvbSA9IGF0b20odHJ1ZSlcbmNvbnN0IE9iamVjdFNlbGVjdGVkID0gYXRvbShmYWxzZSlcbmNvbnN0IERyYXdpbmcgPSBhdG9tKGZhbHNlKVxuY29uc3QgTW91c2VEb3duQXRvbSA9IGF0b20oJycpXG5jb25zdCBUb29sQ2hvb3NlZCA9IGF0b20oJycpXG5jb25zdCBNb3VzZVBvc2l0aW9uID0gYXRvbSh7IHg6IDYwMCwgeTogNDAwIH0pXG5cbmNvbnN0IE9iamVjdExpc3QgPSBhdG9tPFxuICB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBoZWlndGg6IG51bWJlclxuICAgIGNvbG9yOiBzdHJpbmdcbiAgICBzZWxlY3RlZDogYm9vbGVhblxuICAgIHRleHQ6IHN0cmluZ1xuICAgIHRleHRFZGl0OiBib29sZWFuXG4gIH1bXVxuPihbXSlcblxuY29uc3QgTGlua0xpc3QgPSBhdG9tPFxuICB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIHgxOiBudW1iZXJcbiAgICB4MjogbnVtYmVyXG4gICAgeTE6IG51bWJlclxuICAgIHkyOiBudW1iZXJcblxuICAgIGNvbG9yOiBzdHJpbmdcbiAgICBzZWxlY3RlZDogYm9vbGVhblxuICAgIHRleHQ6IHN0cmluZ1xuICB9W11cbj4oW10pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBXSU5ET1dfV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAvLyAgIFdJTkRPV19IRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgLy8gfSwgW10pXG5cbiAgY29uc3QgW21vdXNlUG9zaXRpb25vbk9uQ2FudmFzLCBzZXRNb3VzZVBvc2l0aW9ub25PbkNhbnZhc10gPSB1c2VBdG9tKFxuICAgIE1vdXNlUG9zaXRpb25PbkNhbnZhc1xuICApXG4gIGNvbnN0IFtzY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMsIHNldFNjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhc10gPSB1c2VBdG9tKFxuICAgIFNjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhc1xuICApXG4gIGNvbnN0IFtSZWN0cywgc2V0UmVjdHNdID0gdXNlQXRvbShPYmplY3RMaXN0KVxuICBjb25zdCBbTGlua3MsIHNldExpbmtdID0gdXNlQXRvbShMaW5rTGlzdClcblxuICBjb25zdCBbc2hvd0hlbHBlcnMsIHNldFNob3dIZWxwZXJzXSA9IHVzZUF0b20oU2hvd0hlbHBlcnNBdG9tKVxuICBjb25zdCBbdG9vbCwgc2V0VG9vbF0gPSB1c2VBdG9tKFRvb2xDaG9vc2VkKVxuXG4gIGNvbnN0IFttb3VzZURvd24sIHNldE1vdXNlRG93bl0gPSB1c2VBdG9tKE1vdXNlRG93bkF0b20pXG4gIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZUF0b20oTW91c2VQb3NpdGlvbilcbiAgY29uc3QgW3NjcmVlbk1vdXNlUG9zaXRpb24sIHNldFNjcmVlbk1vdXNlUG9zaXRpb25dID1cbiAgICB1c2VBdG9tKFNjcmVlbk1vdXNlUG9zaXRpb24pXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlQXRvbShPYmplY3RTZWxlY3RlZClcblxuICBjb25zdCBbc3RhcnREcmF3aW5nLCBzZXRTdGFydERyYXdpbmddID0gdXNlQXRvbShEcmF3aW5nKVxuXG4gIGxldCBtb3VzZVBvc2UwID0geyB4OiA1MCwgeTogNTAgfVxuICBsZXQgc2hhcGVQb3NlMCA9IHsgeDogMCwgeTogMCB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVjdENsaWNrKGUsIGlkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmtleSwgaWQpXG5cbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuaWQgPT09IGlkKSB7XG4gICAgICAgICAgci5zZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAvLyByLmNvbG9yID0gJyMwMGUnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgci5zZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgLy8gci5jb2xvciA9IHIuY29sb3JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9uRG91YmxlQ2xpY2soZSwgaWQpIHtcbiAgICAvLyBzZXRNb3VzZURvd24oKHByZXYpID0+ICdtb3VzZSBkb3duJylcbiAgICBsb2coZSlcblxuICAgIC8vIG1vdXNlRG93biA9PT0gJ21vdXNlIGRvd24nICYmXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMubWFwKChyKSA9PiB7XG4gICAgICAgIGlmIChyLmlkID09PSBpZCkge1xuICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAuLi5yLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0OiAnTScsXG4gICAgICAgICAgICB0ZXh0RWRpdDogdHJ1ZSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH0pLFxuICAgIF0pXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZShlLCBpZCkge1xuICAgIC8vIHNldE1vdXNlRG93bigocHJldikgPT4gJ21vdXNlIGRvd24nKVxuICAgIGhhbmRsZU9uTW91c2VNb3ZlKGUsIGlkKVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2VNb3ZlKGUsIGlkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIG1vdXNlRG93biA9PT0gJ21vdXNlIGRvd24nICYmXG4gICAgICB0b29sID09ICdtb3ZlJyAmJlxuICAgICAgc2V0UmVjdHMoW1xuICAgICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgICBpZiAoci5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICB4OiBlLmNsaWVudFggLSBkaWZmWCxcbiAgICAgICAgICAgICAgeTogZS5jbGllbnRZIC0gZGlmZlksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByXG4gICAgICAgIH0pLFxuICAgICAgXSlcblxuICAgIG1vdXNlRG93biA9PT0gJ21vdXNlIGRvd24nICYmXG4gICAgICB0b29sID09ICdhZGRMaW5rJyAmJlxuICAgICAgc2V0TGluayhbXG4gICAgICAgIC4uLkxpbmtzLFxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICB4MTogMTAwLFxuICAgICAgICAgIHkxOiA0MDAsXG4gICAgICAgICAgeDI6IDEwMCxcbiAgICAgICAgICB5MjogMTAwLFxuICAgICAgICAgIHRleHQ6ICcnLFxuXG4gICAgICAgICAgY29sb3I6IGByZ2JhKCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KX0sICR7TWF0aC5mbG9vcihcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcbiAgICAgICAgICApfSwgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpfSlgLFxuICAgICAgICB9LFxuICAgICAgXSlcblxuICAgIG1vdXNlRG93biA9PT0gJ21vdXNlIGRvd24nICYmXG4gICAgICBzZXRTY3JlZW5Nb3VzZVBvc2l0aW9uKChwcmV2KSA9PiAoe1xuICAgICAgICB4OiBlLnNjcmVlblgsXG4gICAgICAgIHk6IGUuc2NyZWVuWSxcbiAgICAgIH0pKVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2Vtb3ZlT25DYW52YXMoZSkge1xuICAgIHNldE1vdXNlUG9zaXRpb25vbk9uQ2FudmFzKChwcmV2KSA9PiAoe1xuICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgeTogZS5jbGllbnRZLFxuICAgIH0pKVxuXG4gICAgc2V0U2NyZWVuTW91c2VQb3NpdGlvbk9uQ2FudmFzKChwcmV2KSA9PiAoe1xuICAgICAgeDogZS5zY3JlZW5YLFxuICAgICAgeTogZS5zY3JlZW5ZLFxuICAgIH0pKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRG93bihlLCBpKSB7XG4gICAgc2V0TW91c2VEb3duKChwcmV2KSA9PiAnbW91c2UgZG93bicpXG4gICAgZGlmZlggPSBlLmNsaWVudFggLSBlLnRhcmdldC54LmJhc2VWYWwudmFsdWVcbiAgICBkaWZmWSA9IGUuY2xpZW50WSAtIGUudGFyZ2V0LnkuYmFzZVZhbC52YWx1ZVxuICAgIC8vIGNvbnNvbGUubG9nKCctLS0tbW91c2UgZG93bicsIGUpXG4gICAgLy8gbG9nTW91c2UoKVxuICAgIC8vIHNoYXBlUG9zZTAgPSB7IHg6IGUudGFyZ2V0LnguYmFzZVZhbC52YWx1ZSwgeTogZS50YXJnZXQueC5iYXNlVmFsLnZhbHVlIH1cbiAgICAvLyBtb3VzZVBvc2UwID0geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9XG4gICAgc2V0U2VsZWN0ZWQoKHByZXYpID0+ICFwcmV2KVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZVVwKGUpIHtcbiAgICBzZXRNb3VzZURvd24oKHByZXYpID0+ICdtb3VzZSB1cCcpXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS1tb3VzZSB1cCcpXG4gICAgLy8gbG9nTW91c2UoKVxuICAgIHNldFNlbGVjdGVkKChwcmV2KSA9PiAhcHJldilcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9uQ2xpY2tPbkNhbnZhcyhcbiAgICBlOiBNb3VzZUV2ZW50PFNWR1NWR0VsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICk6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIC8vIHN0YXJ0RHJhd2luZyAmJlxuICAgIHNldFJlY3RzKFtcbiAgICAgIC4uLlJlY3RzLFxuICAgICAge1xuICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIHg6IFdJTkRPV19XSURUSCAvIDQsXG4gICAgICAgIHk6IFdJTkRPV19IRUlHSFQgLyA0LFxuICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICBoZWlndGg6IDEwMCxcbiAgICAgICAgY29sb3I6IGByZ2JhKDI1NSwgMCwgMClgLFxuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgdGV4dEVkaXQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdKVxuXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS1tb3VzZSBjbGljaycsIGUpXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMubWFwKChyKSA9PiB7XG4gICAgICAgIGlmIChyLnNlbGVjdGVkKSB7XG4gICAgICAgICAgci5zZWxlY3RlZCA9IGZhbHNlXG4gICAgICAgICAgci50ZXh0RWRpdCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH0pLFxuICAgIF0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBZGRSZWN0YW5nbGVUb29sQ2xpY2soZSkge1xuICAgIHNldFRvb2woKHApID0+ICdhZGRSZWN0YW5nbGUnKVxuXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMsXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgeDogV0lORE9XX1dJRFRIIC8gNCxcbiAgICAgICAgeTogV0lORE9XX0hFSUdIVCAvIDQsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWd0aDogMTAwLFxuICAgICAgICBjb2xvcjogYHJnYmEoJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpfSwgJHtNYXRoLmZsb29yKFxuICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcbiAgICAgICAgKX0sICR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KX0pYCxcbiAgICAgICAgdGV4dDogJ1InLFxuICAgICAgICB0ZXh0RWRpdDogZmFsc2UsXG4gICAgICB9LFxuICAgIF0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3ZlVG9vbENsaWNrKGUpIHtcbiAgICBzZXRUb29sKChwKSA9PiAnbW92ZScpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQWRkTGlua1Rvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZExpbmsnKVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFRleHRUb29sQ2xpY2soZSkge1xuICAgIHNldFRvb2woKHApID0+ICdhZGRUZXh0JylcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVBZGRPdGhlcnNUb29sQ2xpY2soZSkge1xuICAgIHNldFRvb2woKHApID0+ICdhZGRPaGVycycpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVPblRleHRDaGFuZ2UoXG4gICAgZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgaWQ6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBsb2coUmVjdHMpXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMubWFwKChyKSA9PiB7XG4gICAgICAgIGlmIChyLmlkID09IGlkKSB7XG4gICAgICAgICAgci5zZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICByLnRleHRFZGl0ID0gdHJ1ZVxuICAgICAgICAgIHIudGV4dCA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH0pLFxuICAgIF0pXG4gIH1cbiAgLy8gUkVUVVJOXG4gIC8vIFJFVFVSTlxuICAvLyBSRVRVUk5cbiAgLy8gUkVUVVJOXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZm9udEZhbWlseTogJ3N5c3RlbS11aSwgc2Fucy1zZXJpZicsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxLjQnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxTaG93SGVscGVyc0J1dHRvbiBjbj17J2J1dHRvbiBzaG93SGVscGVycyd9PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgbmFtZT0nc2hvd0hlbHBlcnMnXG4gICAgICAgICAgICB3aWR0aD0nMjQnXG4gICAgICAgICAgICBoZWlnaHQ9JzI0J1xuICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPSdNMTguMzY0IDkuNzc4MThMMjAuNjY0MiAxMi4wNzg0TDE4LjM2MzcgMTQuMzc4OEMxNC44NDkgMTcuODkzNSA5LjE1MDQ5IDE3Ljg5MzUgNS42MzU3NyAxNC4zNzg4TDMuMzM1NTggMTIuMDc4Nkw1LjYzNjA0IDkuNzc4MThDOS4xNTA3NSA2LjI2MzQ2IDE0Ljg0OTIgNi4yNjM0NiAxOC4zNjQgOS43NzgxOFonXG4gICAgICAgICAgICAgIHN0cm9rZT0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzInXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGNpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMycgZmlsbD0nI0Y1RjVGNScgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9TaG93SGVscGVyc0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9wYmFyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Rvb2xiYXInPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnbW92ZScgJiYgJ3NlbGVjdGVkJ31gfVxuICAgICAgICAgICAgaHVuZGxlT25DbGljaz17aGFuZGxlTW92ZVRvb2xDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBuYW1lPSdtb3ZlJ1xuICAgICAgICAgICAgICB3aWR0aD0nMjQnXG4gICAgICAgICAgICAgIGhlaWdodD0nMjQnXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J003LjYxMjY5IDQuOTk1N0wxMC4zNTI2IDE5LjMxMzNMMTMuODc2IDE0LjY0MDRMMTkuNTc4IDEzLjMyMjJMNy42MTI2OSA0Ljk5NTdaJ1xuICAgICAgICAgICAgICAgIHN0cm9rZT0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnYWRkUmVjdGFuZ2xlJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVBZGRSZWN0YW5nbGVUb29sQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBuYW1lPSdyZWN0YW5nbGUnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgeD0nMydcbiAgICAgICAgICAgICAgICB5PSc1J1xuICAgICAgICAgICAgICAgIHdpZHRoPScxOCdcbiAgICAgICAgICAgICAgICBoZWlnaHQ9JzE0J1xuICAgICAgICAgICAgICAgIHJ4PScyJ1xuICAgICAgICAgICAgICAgIHN0cm9rZT0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnYWRkTGluaycgJiYgJ3NlbGVjdGVkJ31gfVxuICAgICAgICAgICAgaHVuZGxlT25DbGljaz17aGFuZGxlQWRkTGlua1Rvb2xDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J2xpbmsnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTIxIDQuMDAwNEM4IDQuMDAwNSAxNiAyMC4wMDA0IDMgMjAuMDAwNCdcbiAgICAgICAgICAgICAgICBzdHJva2U9JyNGNUY1RjUnXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzInXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbj17YCAke3Rvb2wgPT0gJ2FkZFRleHQnICYmICdzZWxlY3RlZCd9YH1cbiAgICAgICAgICAgIGh1bmRsZU9uQ2xpY2s9e2hhbmRsZUFkZFRleHRUb29sQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBuYW1lPSd0ZXh0J1xuICAgICAgICAgICAgICB3aWR0aD0nMjQnXG4gICAgICAgICAgICAgIGhlaWdodD0nMjQnXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J00xMyAzQzEzIDIuNDQ3NzIgMTIuNTUyMyAyIDEyIDJDMTEuNDQ3NyAyIDExIDIuNDQ3NzIgMTEgM0gxM1pNMTEgMjBDMTEgMjAuNTUyMyAxMS40NDc3IDIxIDEyIDIxQzEyLjU1MjMgMjEgMTMgMjAuNTUyMyAxMyAyMEgxMVpNMTEgM1YyMEgxM1YzSDExWidcbiAgICAgICAgICAgICAgICBmaWxsPScjRjVGNUY1J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J002IDNDNi4wMDAwMSAyLjQ0NzcyIDUuNTUyMjkgMiA1LjAwMDAxIDJDNC40NDc3MiAyIDQuMDAwMDEgMi40NDc3MSA0IDNMNiAzWk00IDMuOTk5OTlDNCA0LjU1MjI4IDQuNDQ3NzEgNC45OTk5OSA1IDVDNS41NTIyOCA1IDYgNC41NTIyOCA2IDRMNCAzLjk5OTk5Wk00IDNMNCAzLjk5OTk5TDYgNEw2IDNMNCAzWidcbiAgICAgICAgICAgICAgICBmaWxsPScjRjVGNUY1J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J00yMCAzQzIwIDIuNDQ3NzIgMTkuNTUyMyAyIDE5IDJDMTguNDQ3NyAyIDE4IDIuNDQ3NzEgMTggM0wyMCAzWk0xOCAzLjk5OTk5QzE4IDQuNTUyMjggMTguNDQ3NyA0Ljk5OTk5IDE5IDVDMTkuNTUyMyA1IDIwIDQuNTUyMjggMjAgNEwxOCAzLjk5OTk5Wk0xOCAzTDE4IDMuOTk5OTlMMjAgNEwyMCAzTDE4IDNaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTUgMkM0LjQ0NzcyIDIgNCAyLjQ0NzcyIDQgM0M0IDMuNTUyMjggNC40NDc3MiA0IDUgNEw1IDJaTTE5IDRDMTkuNTUyMyA0IDIwIDMuNTUyMjkgMjAgM0MyMCAyLjQ0NzcyIDE5LjU1MjMgMiAxOSAyTDE5IDRaTTUgNEwxOSA0TDE5IDJMNSAyTDUgNFonXG4gICAgICAgICAgICAgICAgZmlsbD0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPSdNMTAgMjBDOS40NDc3MiAyMCA5IDIwLjQ0NzcgOSAyMUM5IDIxLjU1MjMgOS40NDc3MiAyMiAxMCAyMkwxMCAyMFpNMTQgMjJDMTQuNTUyMyAyMiAxNSAyMS41NTIzIDE1IDIxQzE1IDIwLjQ0NzcgMTQuNTUyMyAyMCAxNCAyMEwxNCAyMlpNMTAgMjJMMTQgMjJMMTQgMjBMMTAgMjBMMTAgMjJaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbj17YCAke3Rvb2wgPT0gJ2FkZE90aGVycycgJiYgJ3NlbGVjdGVkJ31gfVxuICAgICAgICAgICAgaHVuZGxlT25DbGljaz17aGFuZGxlQWRkT3RoZXJzVG9vbENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgbmFtZT0nb3RoZXJzJ1xuICAgICAgICAgICAgICB3aWR0aD0nMjQnXG4gICAgICAgICAgICAgIGhlaWdodD0nMjQnXG4gICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J00xNS43MDcxIDExLjcwNzFDMTYuMDk3NiAxMS4zMTY2IDE2LjA5NzYgMTAuNjgzNCAxNS43MDcxIDEwLjI5MjlDMTUuMzE2NiA5LjkwMjM3IDE0LjY4MzQgOS45MDIzNyAxNC4yOTI5IDEwLjI5MjlMMTUuNzA3MSAxMS43MDcxWk0xMiAxNEwxMS4yOTI5IDE0LjcwNzFMMTIgMTUuNDE0MkwxMi43MDcxIDE0LjcwNzFMMTIgMTRaTTkuNzA3MSAxMC4yOTI5QzkuMzE2NTggOS45MDIzNyA4LjY4MzQxIDkuOTAyMzcgOC4yOTI4OSAxMC4yOTI5QzcuOTAyMzcgMTAuNjgzNCA3LjkwMjM3IDExLjMxNjYgOC4yOTI5IDExLjcwNzFMOS43MDcxIDEwLjI5MjlaTTE0LjI5MjkgMTAuMjkyOUwxMS4yOTI5IDEzLjI5MjlMMTIuNzA3MSAxNC43MDcxTDE1LjcwNzEgMTEuNzA3MUwxNC4yOTI5IDEwLjI5MjlaTTEyLjcwNzEgMTMuMjkyOUw5LjcwNzEgMTAuMjkyOUw4LjI5MjkgMTEuNzA3MUwxMS4yOTI5IDE0LjcwNzFMMTIuNzA3MSAxMy4yOTI5WidcbiAgICAgICAgICAgICAgICBmaWxsPScjRjVGNUY1J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdmdcbiAgICAgICAgbmFtZT0nZ3JpZCdcbiAgICAgICAgb25Nb3VzZU1vdmU9eyhlKSA9PiBoYW5kbGVPbk1vdXNlbW92ZU9uQ2FudmFzKGUpfVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT25DbGlja09uQ2FudmFzKGUpfVxuICAgICAgICB6LWluZGV4PScxJ1xuICAgICAgICB3aWR0aD17V0lORE9XX1dJRFRIfVxuICAgICAgICBoZWlnaHQ9e1dJTkRPV19IRUlHSFR9XG4gICAgICAgIHZpZXdCb3g9e2AwIDAgJHtXSU5ET1dfV0lEVEh9ICR7V0lORE9XX0hFSUdIVH1gfVxuICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICA+XG4gICAgICAgIDxmaWx0ZXIgaWQ9J2ZpbHRlcic+XG4gICAgICAgICAgey8qIDxmZU1vcnBob2xvZ3kgb3BlcmF0b3I9J2Vyb2RlJyByYWRpdXM9JzMwJyAvPiAqL31cbiAgICAgICAgICB7LyogPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nNScgLz4gKi99XG4gICAgICAgIDwvZmlsdGVyPlxuICAgICAgICA8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjMTgxODFCJyAvPlxuXG4gICAgICAgIHsvKiA8cmVjdFxuICAgICAgICAgIC8vIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgkezI5OX0gJHsyMDB9KWB9XG4gICAgICAgICAgeD0nMTIwMCdcbiAgICAgICAgICB5PSc3MCdcbiAgICAgICAgICB3aWR0aD0nODAnXG4gICAgICAgICAgaGVpZ2h0PSc4MCdcbiAgICAgICAgICBmaWxsPScjMDAwMGZmJ1xuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgLz4gKi99XG5cbiAgICAgICAgPGcgbmFtZT0nUmVjdHMnPlxuICAgICAgICAgIHtSZWN0cy5tYXAoKHJlYywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGcga2V5PXsncmVjdGFuZ2xlJyArIHJlYy5pZH0+XG4gICAgICAgICAgICAgICAge3JlYy5zZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICB4PXtyZWMueCAtIDR9XG4gICAgICAgICAgICAgICAgICAgIHk9e3JlYy55IC0gNH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3JlYy53aWR0aCArIDh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17cmVjLmhlaWd0aCArIDh9XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbGw9JyMwRUE1RTknXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nIzBFQTVFOSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAvLyB6LWluZGV4PScxMDAwJ1xuICAgICAgICAgICAgICAgICAgLy8gZmlsdGVyPSd1cmwoI2Vyb2RlKSdcbiAgICAgICAgICAgICAgICAgIHJ4PScxNSdcbiAgICAgICAgICAgICAgICAgIC8vIG9uTW91c2VNb3ZlPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU1vdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIC8vIG9uVG91Y2hNb3ZlPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU1vdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIC8vIG9uRHJhZz17KGUpID0+IGhhbmRsZU9ubW91c2Vtb3ZlKGUpfVxuICAgICAgICAgICAgICAgICAgeD17cmVjLnh9XG4gICAgICAgICAgICAgICAgICB5PXtyZWMueX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtyZWMud2lkdGh9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e3JlYy5oZWlndGh9XG4gICAgICAgICAgICAgICAgICBmaWxsPXtyZWMuY29sb3J9XG4gICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlUmVjdENsaWNrKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICAvLyBvbk1vdXNlRG93bj17KGUpID0+IGhhbmRsZURvd24oZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIC8vIG9uVG91Y2hTdGFydD17KGUpID0+IGhhbmRsZURvd24oZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIC8vIG9uTW91c2VVcD17KGUpID0+IGhhbmRsZVVwKGUpfVxuICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZUxlYXZlPXsoZSkgPT4gaGFuZGxlTW91c2VMZWF2ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgLy8gb25Ub3VjaEVuZD17KGUpID0+IGhhbmRsZU1vdXNlTGVhdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgey8qIDx0ZXh0IHg9e3JlYy54ICsgNTB9IHk9e3JlYy55ICsgNTB9IGZpbGw9JyNkY2QyZmYnPlxuICAgICAgICAgICAgICAgIHtyZWMudGV4dH1cbiAgICAgICAgICAgICAgPC90ZXh0PiAqL31cblxuICAgICAgICAgICAgICAgIDxmb3JlaWduT2JqZWN0XG4gICAgICAgICAgICAgICAgICBpZD0ndGV4dCdcbiAgICAgICAgICAgICAgICAgIHg9e3JlYy54fVxuICAgICAgICAgICAgICAgICAgeT17cmVjLnl9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17cmVjLndpZHRoICsgOH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17cmVjLndpZHRoICsgOH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtQ29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlT25UZXh0Q2hhbmdlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+XG5cbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgLy8gei1pbmRleD0nMTAwMCdcbiAgICAgICAgICAgICAgICAgIC8vUHJpbWFyeSBMYXllclxuXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17KGUpID0+IGhhbmRsZU9uTW91c2VNb3ZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICBvblRvdWNoTW92ZT17KGUpID0+IGhhbmRsZU9uTW91c2VNb3ZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICAvLyBvbkRyYWc9eyhlKSA9PiBoYW5kbGVPbm1vdXNlbW92ZShlKX1cbiAgICAgICAgICAgICAgICAgIHg9e3JlYy54IC0gNH1cbiAgICAgICAgICAgICAgICAgIHk9e3JlYy55IC0gNH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtyZWMud2lkdGggKyA4fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtyZWMuaGVpZ3RoICsgOH1cbiAgICAgICAgICAgICAgICAgIGZpbGw9JyMwMDAwMDAwMCdcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVSZWN0Q2xpY2soZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gaGFuZGxlRG93bihlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXsoZSkgPT4gaGFuZGxlRG93bihlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwPXsoZSkgPT4gaGFuZGxlVXAoZSl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXsoZSkgPT4gaGFuZGxlTW91c2VMZWF2ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17KGUpID0+IGhhbmRsZU9uRG91YmxlQ2xpY2soZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZz5cblxuICAgICAgICA8ZyBuYW1lPSdMaW5rcyc+XG4gICAgICAgICAge0xpbmtzLm1hcCgobCwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGcga2V5PXsnTGlua3MnICsgbC5pZH0+XG4gICAgICAgICAgICAgICAge2wuc2VsZWN0ZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgICAgeD0nNTAwJ1xuICAgICAgICAgICAgICAgICAgICB5PSc1MDAnXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPScyMDAnXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMjAwJ1xuICAgICAgICAgICAgICAgICAgICBmaWxsPScjMEVBNUU5J1xuICAgICAgICAgICAgICAgICAgICBzdHJva2U9JyMwRUE1RTknXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9nPlxuXG4gICAgICAgIHtzaG93SGVscGVycyAmJiAoXG4gICAgICAgICAgLy8gU2hvdyBIZWxwZXJzIGFuZCBTdGF0c1xuICAgICAgICAgIDxnPlxuICAgICAgICAgICAge21vdXNlRG93biA9PT0gJ21vdXNlIGRvd24nICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm90dG9tOiAwIH19XG4gICAgICAgICAgICAgICAgICB4PScwJ1xuICAgICAgICAgICAgICAgICAgLy8geT0nNzAwJ1xuICAgICAgICAgICAgICAgICAgd2lkdGg9JzE2MDAnXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEnXG4gICAgICAgICAgICAgICAgICBmaWxsPScjMDBlZWZmMTEnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8dGV4dCB4PScxMjAwJyB5PSc1MCcgZmlsbD0nIzAwZWVmZic+XG4gICAgICAgICAgICAgICAgICB7LyogbW91c2VQb3NpdGlvbjoge21vdXNlUG9zaXRpb24ueH0se21vdXNlUG9zaXRpb24ueX0gKi99XG4gICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9JzEyMDAnIHk9JzcwJyBmaWxsPScjZmY1MTAwJz5cbiAgICAgICAgICAgICAgICAgIHsvKiBzY3JlZW5Nb3VzZVBvc2l0aW9uOiB7c2NyZWVuTW91c2VQb3NpdGlvbi54fSwgKi99XG4gICAgICAgICAgICAgICAgICB7Lyoge3NjcmVlbk1vdXNlUG9zaXRpb24ueX0gKi99XG4gICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKiA8Zm9yZWlnbk9iamVjdCB4PScyMCcgeT0nMjAnIHdpZHRoPScxNjAnIGhlaWdodD0nMTYwJz5cbiAgICAgICAgICAgICAgPGRpdj5Ub29sIENob29zZWQ6IHt0b29sfTwvZGl2PlxuICAgICAgICAgICAgPC9mb3JlaWduT2JqZWN0PiAqL31cblxuICAgICAgICAgICAgPHRleHQgeD0nMTInIHk9JzIwJyBmaWxsPScjMmJmZjAwJz5cbiAgICAgICAgICAgICAgVG9vbCBDaG9vc2VkOiB7dG9vbH1cbiAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgIDx0ZXh0IHg9JzEyJyB5PSc1MCcgZmlsbD0nIzAwZWVmZic+XG4gICAgICAgICAgICAgIG1vdXNlUG9zaXRpb246IHttb3VzZVBvc2l0aW9ub25PbkNhbnZhcy54fSxcbiAgICAgICAgICAgICAge21vdXNlUG9zaXRpb25vbk9uQ2FudmFzLnl9XG4gICAgICAgICAgICA8L3RleHQ+XG5cbiAgICAgICAgICAgIDx0ZXh0IHg9JzEyJyB5PSc3MCcgZmlsbD0nIzAwZWVmZic+XG4gICAgICAgICAgICAgIGRpZmY6IHtkaWZmWH0se2RpZmZZfVxuICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgey8qIDx0ZXh0IHg9JzEyJyB5PSc3MCcgZmlsbD0nI2ZmNTEwMCc+XG4gICAgICAgICAgICAgIHNjcmVlbk1vdXNlUG9zaXRpb246IHtzY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMueH0sXG4gICAgICAgICAgICAgIHtzY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMueX1cbiAgICAgICAgICAgIDwvdGV4dD4gKi99XG4gICAgICAgICAgPC9nPlxuICAgICAgICApfVxuICAgICAgPC9zdmc+XG5cbiAgICAgIHtzaG93SGVscGVycyAmJiAoXG4gICAgICAgIC8vIFNob3cgSGVscGVycyBhbmQgU3RhdHNcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mby1wYW5uZWwnPlxuICAgICAgICAgIHtSZWN0cy5tYXAoKHIsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvLWl0ZW0nIGtleT17ci5pZH0+XG4gICAgICAgICAgICAgIHsnXHUyNUJBICAnIC8qIFJlY3RJZDp7ci5pZH0gICovfSB7aX0ge3IudGV4dH0gLS0ge3IueH0se3IueX1cbiAgICAgICAgICAgICAge3Iuc2VsZWN0ZWQgPyAnIFx1RDgzRFx1REUwMScgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7IGNuID0gJ2J1dHRvbicsIGh1bmRsZU9uQ2xpY2ssIGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW1JlY3RzLCBzZXRSZWN0c10gPSB1c2VBdG9tKE9iamVjdExpc3QpXG4gIGNvbnN0IFtzdGFydERyYXdpbmcsIHNldFN0YXJ0RHJhd2luZ10gPSB1c2VBdG9tKERyYXdpbmcpXG5cbiAgLy8gZnVuY3Rpb24gaHVuZGxlVG9vbENsaWNrKGUpIHtcbiAgLy8gICBzZXRTdGFydERyYXdpbmcodHJ1ZSlcbiAgLy8gICAvLyBlLnN0b3BQcm9wcGFnYXRpb24oKVxuICAvLyAgIC8vIGNvbnNvbGUubG9nKFJlY3RzKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2VPdmVyKGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgIC8vIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9ICcjMEYwJ1xuICAgIC8vIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnI2YwZSdcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVPbk1vdXNlb3V0KGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgIC8vIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9ICcjMEYwJ1xuICAgIC8vIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSAnIzAwMDAwMDAwJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBvbk1vdXNlT3Zlcj17KGUpID0+IGhhbmRsZU9uTW91c2VPdmVyKGUpfVxuICAgICAgb25Nb3VzZU91dD17KGUpID0+IGhhbmRsZU9uTW91c2VvdXQoZSl9XG4gICAgICAvLyBvbk1vdXNlT3V0PXsoZSkgPT4gKHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDBGJyl9XG4gICAgICBjbGFzc05hbWU9e2NufVxuICAgICAgb25DbGljaz17aHVuZGxlT25DbGlja31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbjI0Jz57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNob3dIZWxwZXJzQnV0dG9uKHsgY24gPSAnYnV0dG9uJywgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbc2hvd0hlbHBlcnMsIHNldFNob3dIZWxwZXJzXSA9IHVzZUF0b20oU2hvd0hlbHBlcnNBdG9tKVxuXG4gIGZ1bmN0aW9uIGh1bmRsZVRvb2xDbGljayhlKSB7XG4gICAgLy8gZS5zdG9wUHJvcHBhZ2F0aW9uKClcbiAgICBzZXRTaG93SGVscGVycygocHJldikgPT4gIXByZXYpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZU92ZXIoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwRjAnXG4gICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjBlJ1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2VvdXQoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwRjAnXG4gICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDAwMDAwMDAnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU92ZXIoZSl9XG4gICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gaGFuZGxlT25Nb3VzZW91dChlKX1cbiAgICAgIC8vIG9uTW91c2VPdXQ9eyhlKSA9PiAodGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEYnKX1cbiAgICAgIGNsYXNzTmFtZT17Y259XG4gICAgICBvbkNsaWNrPXsoZSkgPT4gaHVuZGxlVG9vbENsaWNrKGUpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uMjQnPntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUmVjdGFuZ2xlKCkge1xuICBjb25zdCBbUmVjdHMsIHNldFJlY3RzXSA9IHVzZUF0b20oT2JqZWN0TGlzdClcbiAgc2V0UmVjdHMoW1xuICAgIC4uLlJlY3RzLFxuICAgIHtcbiAgICAgIHRleHQ6ICcnLFxuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgIHg6IFdJTkRPV19XSURUSCAvIDQsXG4gICAgICB5OiBXSU5ET1dfSEVJR0hUIC8gNCxcbiAgICAgIHdpZHRoOiAxMDAsXG4gICAgICBoZWlndGg6IDEwMCxcbiAgICAgIGNvbG9yOiBgcmdiYSgke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSl9LCAke01hdGguZmxvb3IoXG4gICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTVcbiAgICAgICl9LCAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSl9KWAsXG5cbiAgICAgIHRleHRFZGl0OiBmYWxzZSxcbiAgICB9LFxuICBdKVxufVxuXG5mdW5jdGlvbiBzaWRlKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmc+XG4gICAgICA8Zm9yZWlnbk9iamVjdFxuICAgICAgICB4PScxMidcbiAgICAgICAgeT17OTB9XG4gICAgICAgIGZpbGw9JyNmZjAwYjcnXG4gICAgICAgIHdpZHRoPSczMDAnXG4gICAgICAgIC8vIGhlaWdodD17OTAgKyAxNiAqIFJlY3RzLmxlbmd0aH1cbiAgICAgICAgaGVpZ2h0PSc1NTAnXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvLXBhbm5lbCc+XG4gICAgICAgICAge1JlY3RzLm1hcCgociwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8taXRlbScga2V5PXtyLmlkfT5cbiAgICAgICAgICAgICAgey8qIFJlY3RJZDp7ci5pZH0gICovfVxuICAgICAgICAgICAgICBpOiB7aX0ge3IudGV4dH1cbiAgICAgICAgICAgICAgUG9zOiB7ci54fSx7ci55fVxuICAgICAgICAgICAgICB7ci5zZWxlY3RlZCA/ICctLS0nIDogJyd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZvcmVpZ25PYmplY3Q+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBhdG9tLCB1c2VBdG9tIH0gZnJvbSAnam90YWknXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCdcblxuLy8gbGV0IFdJTkRPV19XSURUSCA9IGF0b20od2luZG93LmlubmVyV2lkdGgpXG4vLyBsZXQgV0lORE9XX0hFSUdIVCA9IGF0b20od2luZG93LmlubmVySGVpZ2h0KVxuXG5sZXQgV0lORE9XX1dJRFRIID0gMTYwMFxubGV0IFdJTkRPV19IRUlHSFQgPSAxMjAwXG5cbmxldCBkaWZmWCA9IDBcbmxldCBkaWZmWSA9IDBcblxuZnVuY3Rpb24gbG9nKHg6IGFueSkge1xuICBjb25zb2xlLmxvZyh4KVxufVxuXG5jb25zdCBTY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMgPSBhdG9tKHt9KVxuY29uc3QgTW91c2VQb3NpdGlvbk9uQ2FudmFzID0gYXRvbSh7fSlcbmNvbnN0IFNjcmVlbk1vdXNlUG9zaXRpb24gPSBhdG9tKHsgeDogNjAwLCB5OiA0MDAgfSlcblxuY29uc3QgU2hvd0hlbHBlcnNBdG9tID0gYXRvbSh0cnVlKVxuY29uc3QgT2JqZWN0U2VsZWN0ZWQgPSBhdG9tKGZhbHNlKVxuY29uc3QgRHJhd2luZyA9IGF0b20oZmFsc2UpXG5jb25zdCBNb3VzZURvd25BdG9tID0gYXRvbSgnJylcbmNvbnN0IFRvb2xDaG9vc2VkID0gYXRvbSgnJylcbmNvbnN0IE1vdXNlUG9zaXRpb24gPSBhdG9tKHsgeDogNjAwLCB5OiA0MDAgfSlcblxuY29uc3QgT2JqZWN0TGlzdCA9IGF0b208XG4gIHtcbiAgICBpZDogc3RyaW5nXG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWd0aDogbnVtYmVyXG4gICAgY29sb3I6IHN0cmluZ1xuICAgIHNlbGVjdGVkOiBib29sZWFuXG4gICAgdGV4dDogc3RyaW5nXG4gICAgdGV4dEVkaXQ6IGJvb2xlYW5cbiAgfVtdXG4+KFtdKVxuXG5jb25zdCBMaW5rTGlzdCA9IGF0b208XG4gIHtcbiAgICBpZDogc3RyaW5nXG4gICAgeDE6IG51bWJlclxuICAgIHgyOiBudW1iZXJcbiAgICB5MTogbnVtYmVyXG4gICAgeTI6IG51bWJlclxuXG4gICAgY29sb3I6IHN0cmluZ1xuICAgIHNlbGVjdGVkOiBib29sZWFuXG4gICAgdGV4dDogc3RyaW5nXG4gIH1bXVxuPihbXSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIFdJTkRPV19XSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIC8vICAgV0lORE9XX0hFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAvLyB9LCBbXSlcblxuICBjb25zdCBbbW91c2VQb3NpdGlvbm9uT25DYW52YXMsIHNldE1vdXNlUG9zaXRpb25vbk9uQ2FudmFzXSA9IHVzZUF0b20oXG4gICAgTW91c2VQb3NpdGlvbk9uQ2FudmFzXG4gIClcbiAgY29uc3QgW3NjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhcywgc2V0U2NyZWVuTW91c2VQb3NpdGlvbk9uQ2FudmFzXSA9IHVzZUF0b20oXG4gICAgU2NyZWVuTW91c2VQb3NpdGlvbk9uQ2FudmFzXG4gIClcbiAgY29uc3QgW1JlY3RzLCBzZXRSZWN0c10gPSB1c2VBdG9tKE9iamVjdExpc3QpXG4gIGNvbnN0IFtMaW5rcywgc2V0TGlua10gPSB1c2VBdG9tKExpbmtMaXN0KVxuXG4gIGNvbnN0IFtzaG93SGVscGVycywgc2V0U2hvd0hlbHBlcnNdID0gdXNlQXRvbShTaG93SGVscGVyc0F0b20pXG4gIGNvbnN0IFt0b29sLCBzZXRUb29sXSA9IHVzZUF0b20oVG9vbENob29zZWQpXG5cbiAgY29uc3QgW21vdXNlRG93biwgc2V0TW91c2VEb3duXSA9IHVzZUF0b20oTW91c2VEb3duQXRvbSlcbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlQXRvbShNb3VzZVBvc2l0aW9uKVxuICBjb25zdCBbc2NyZWVuTW91c2VQb3NpdGlvbiwgc2V0U2NyZWVuTW91c2VQb3NpdGlvbl0gPVxuICAgIHVzZUF0b20oU2NyZWVuTW91c2VQb3NpdGlvbilcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VBdG9tKE9iamVjdFNlbGVjdGVkKVxuXG4gIGNvbnN0IFtzdGFydERyYXdpbmcsIHNldFN0YXJ0RHJhd2luZ10gPSB1c2VBdG9tKERyYXdpbmcpXG5cbiAgbGV0IG1vdXNlUG9zZTAgPSB7IHg6IDUwLCB5OiA1MCB9XG4gIGxldCBzaGFwZVBvc2UwID0geyB4OiAwLCB5OiAwIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZWN0Q2xpY2soZSwgaWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQua2V5LCBpZClcblxuICAgIHNldFJlY3RzKFtcbiAgICAgIC4uLlJlY3RzLm1hcCgocikgPT4ge1xuICAgICAgICBpZiAoci5pZCA9PT0gaWQpIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIHIuY29sb3IgPSAnIzAwZSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICAvLyByLmNvbG9yID0gci5jb2xvclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByXG4gICAgICB9KSxcbiAgICBdKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25Eb3VibGVDbGljayhlLCBpZCkge1xuICAgIC8vIHNldE1vdXNlRG93bigocHJldikgPT4gJ21vdXNlIGRvd24nKVxuICAgIGxvZyhlKVxuXG4gICAgLy8gbW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiZcbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuaWQgPT09IGlkKSB7XG4gICAgICAgICAgciA9IHtcbiAgICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHQ6ICdNJyxcbiAgICAgICAgICAgIHRleHRFZGl0OiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKGUsIGlkKSB7XG4gICAgLy8gc2V0TW91c2VEb3duKChwcmV2KSA9PiAnbW91c2UgZG93bicpXG4gICAgaGFuZGxlT25Nb3VzZU1vdmUoZSwgaWQpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZU1vdmUoZSwgaWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiZcbiAgICAgIHRvb2wgPT0gJ21vdmUnICYmXG4gICAgICBzZXRSZWN0cyhbXG4gICAgICAgIC4uLlJlY3RzLm1hcCgocikgPT4ge1xuICAgICAgICAgIGlmIChyLmlkID09PSBpZCkge1xuICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgLi4ucixcbiAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICAgIHg6IGUuY2xpZW50WCAtIGRpZmZYLFxuICAgICAgICAgICAgICB5OiBlLmNsaWVudFkgLSBkaWZmWSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJcbiAgICAgICAgfSksXG4gICAgICBdKVxuXG4gICAgbW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiZcbiAgICAgIHRvb2wgPT0gJ2FkZExpbmsnICYmXG4gICAgICBzZXRMaW5rKFtcbiAgICAgICAgLi4uTGlua3MsXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICAgIHgxOiAxMDAsXG4gICAgICAgICAgeTE6IDQwMCxcbiAgICAgICAgICB4MjogMTAwLFxuICAgICAgICAgIHkyOiAxMDAsXG4gICAgICAgICAgdGV4dDogJycsXG5cbiAgICAgICAgICBjb2xvcjogYHJnYmEoJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpfSwgJHtNYXRoLmZsb29yKFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxuICAgICAgICAgICl9LCAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSl9KWAsXG4gICAgICAgIH0sXG4gICAgICBdKVxuXG4gICAgbW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiZcbiAgICAgIHNldFNjcmVlbk1vdXNlUG9zaXRpb24oKHByZXYpID0+ICh7XG4gICAgICAgIHg6IGUuc2NyZWVuWCxcbiAgICAgICAgeTogZS5zY3JlZW5ZLFxuICAgICAgfSkpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZW1vdmVPbkNhbnZhcyhlKSB7XG4gICAgc2V0TW91c2VQb3NpdGlvbm9uT25DYW52YXMoKHByZXYpID0+ICh7XG4gICAgICB4OiBlLmNsaWVudFgsXG4gICAgICB5OiBlLmNsaWVudFksXG4gICAgfSkpXG5cbiAgICBzZXRTY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMoKHByZXYpID0+ICh7XG4gICAgICB4OiBlLnNjcmVlblgsXG4gICAgICB5OiBlLnNjcmVlblksXG4gICAgfSkpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEb3duKGUsIGkpIHtcbiAgICBzZXRNb3VzZURvd24oKHByZXYpID0+ICdtb3VzZSBkb3duJylcbiAgICBkaWZmWCA9IGUuY2xpZW50WCAtIGUudGFyZ2V0LnguYmFzZVZhbC52YWx1ZVxuICAgIGRpZmZZID0gZS5jbGllbnRZIC0gZS50YXJnZXQueS5iYXNlVmFsLnZhbHVlXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS1tb3VzZSBkb3duJywgZSlcbiAgICAvLyBsb2dNb3VzZSgpXG4gICAgLy8gc2hhcGVQb3NlMCA9IHsgeDogZS50YXJnZXQueC5iYXNlVmFsLnZhbHVlLCB5OiBlLnRhcmdldC54LmJhc2VWYWwudmFsdWUgfVxuICAgIC8vIG1vdXNlUG9zZTAgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH1cbiAgICBzZXRTZWxlY3RlZCgocHJldikgPT4gIXByZXYpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlVXAoZSkge1xuICAgIHNldE1vdXNlRG93bigocHJldikgPT4gJ21vdXNlIHVwJylcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLW1vdXNlIHVwJylcbiAgICAvLyBsb2dNb3VzZSgpXG4gICAgc2V0U2VsZWN0ZWQoKHByZXYpID0+ICFwcmV2KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25DbGlja09uQ2FudmFzKFxuICAgIGU6IE1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgLy8gc3RhcnREcmF3aW5nICYmXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMsXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgeDogV0lORE9XX1dJRFRIIC8gNCxcbiAgICAgICAgeTogV0lORE9XX0hFSUdIVCAvIDQsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWd0aDogMTAwLFxuICAgICAgICBjb2xvcjogYHJnYmEoMjU1LCAwLCAwKWAsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICB0ZXh0RWRpdDogZmFsc2UsXG4gICAgICB9LFxuICAgIF0pXG5cbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLW1vdXNlIGNsaWNrJywgZSlcbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuc2VsZWN0ZWQpIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICByLnRleHRFZGl0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFJlY3RhbmdsZVRvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZFJlY3RhbmdsZScpXG5cbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cyxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICB4OiBXSU5ET1dfV0lEVEggLyA0LFxuICAgICAgICB5OiBXSU5ET1dfSEVJR0hUIC8gNCxcbiAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgaGVpZ3RoOiAxMDAsXG4gICAgICAgIGNvbG9yOiBgcmdiYSgke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSl9LCAke01hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxuICAgICAgICApfSwgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpfSlgLFxuICAgICAgICB0ZXh0OiAnUicsXG4gICAgICAgIHRleHRFZGl0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdmVUb29sQ2xpY2soZSkge1xuICAgIHNldFRvb2woKHApID0+ICdtb3ZlJylcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVBZGRMaW5rVG9vbENsaWNrKGUpIHtcbiAgICBzZXRUb29sKChwKSA9PiAnYWRkTGluaycpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQWRkVGV4dFRvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZFRleHQnKVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUFkZE90aGVyc1Rvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZE9oZXJzJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9uVGV4dENoYW5nZShcbiAgICBlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBpZDogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIGxvZyhSZWN0cylcbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuaWQgPT0gaWQpIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgIHIudGV4dEVkaXQgPSB0cnVlXG4gICAgICAgICAgci50ZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuICAvLyBSRVRVUk5cbiAgLy8gUkVUVVJOXG4gIC8vIFJFVFVSTlxuICAvLyBSRVRVUk5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNob3dIZWxwZXJzQnV0dG9uIGNuPXsnYnV0dG9uIHNob3dIZWxwZXJzJ30+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBuYW1lPSdzaG93SGVscGVycydcbiAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgIGhlaWdodD0nMjQnXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00xOC4zNjQgOS43NzgxOEwyMC42NjQyIDEyLjA3ODRMMTguMzYzNyAxNC4zNzg4QzE0Ljg0OSAxNy44OTM1IDkuMTUwNDkgMTcuODkzNSA1LjYzNTc3IDE0LjM3ODhMMy4zMzU1OCAxMi4wNzg2TDUuNjM2MDQgOS43NzgxOEM5LjE1MDc1IDYuMjYzNDYgMTQuODQ5MiA2LjI2MzQ2IDE4LjM2NCA5Ljc3ODE4WidcbiAgICAgICAgICAgICAgc3Ryb2tlPScjRjVGNUY1J1xuICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PScxMicgY3k9JzEyJyByPSczJyBmaWxsPScjRjVGNUY1JyAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L1Nob3dIZWxwZXJzQnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3BiYXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9vbGJhcic+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY249e2AgJHt0b29sID09ICdtb3ZlJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVNb3ZlVG9vbENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J21vdmUnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTcuNjEyNjkgNC45OTU3TDEwLjM1MjYgMTkuMzEzM0wxMy44NzYgMTQuNjQwNEwxOS41NzggMTMuMzIyMkw3LjYxMjY5IDQuOTk1N1onXG4gICAgICAgICAgICAgICAgc3Ryb2tlPScjRjVGNUY1J1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY249e2AgJHt0b29sID09ICdhZGRSZWN0YW5nbGUnICYmICdzZWxlY3RlZCd9YH1cbiAgICAgICAgICAgIGh1bmRsZU9uQ2xpY2s9e2hhbmRsZUFkZFJlY3RhbmdsZVRvb2xDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J3JlY3RhbmdsZSdcbiAgICAgICAgICAgICAgd2lkdGg9JzI0J1xuICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICB4PSczJ1xuICAgICAgICAgICAgICAgIHk9JzUnXG4gICAgICAgICAgICAgICAgd2lkdGg9JzE4J1xuICAgICAgICAgICAgICAgIGhlaWdodD0nMTQnXG4gICAgICAgICAgICAgICAgcng9JzInXG4gICAgICAgICAgICAgICAgc3Ryb2tlPScjRjVGNUY1J1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY249e2AgJHt0b29sID09ICdhZGRMaW5rJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVBZGRMaW5rVG9vbENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgbmFtZT0nbGluaydcbiAgICAgICAgICAgICAgd2lkdGg9JzI0J1xuICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPSdNMjEgNC4wMDA0QzggNC4wMDA1IDE2IDIwLjAwMDQgMyAyMC4wMDA0J1xuICAgICAgICAgICAgICAgIHN0cm9rZT0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnYWRkVGV4dCcgJiYgJ3NlbGVjdGVkJ31gfVxuICAgICAgICAgICAgaHVuZGxlT25DbGljaz17aGFuZGxlQWRkVGV4dFRvb2xDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J3RleHQnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTEzIDNDMTMgMi40NDc3MiAxMi41NTIzIDIgMTIgMkMxMS40NDc3IDIgMTEgMi40NDc3MiAxMSAzSDEzWk0xMSAyMEMxMSAyMC41NTIzIDExLjQ0NzcgMjEgMTIgMjFDMTIuNTUyMyAyMSAxMyAyMC41NTIzIDEzIDIwSDExWk0xMSAzVjIwSDEzVjNIMTFaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTYgM0M2LjAwMDAxIDIuNDQ3NzIgNS41NTIyOSAyIDUuMDAwMDEgMkM0LjQ0NzcyIDIgNC4wMDAwMSAyLjQ0NzcxIDQgM0w2IDNaTTQgMy45OTk5OUM0IDQuNTUyMjggNC40NDc3MSA0Ljk5OTk5IDUgNUM1LjU1MjI4IDUgNiA0LjU1MjI4IDYgNEw0IDMuOTk5OTlaTTQgM0w0IDMuOTk5OTlMNiA0TDYgM0w0IDNaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTIwIDNDMjAgMi40NDc3MiAxOS41NTIzIDIgMTkgMkMxOC40NDc3IDIgMTggMi40NDc3MSAxOCAzTDIwIDNaTTE4IDMuOTk5OTlDMTggNC41NTIyOCAxOC40NDc3IDQuOTk5OTkgMTkgNUMxOS41NTIzIDUgMjAgNC41NTIyOCAyMCA0TDE4IDMuOTk5OTlaTTE4IDNMMTggMy45OTk5OUwyMCA0TDIwIDNMMTggM1onXG4gICAgICAgICAgICAgICAgZmlsbD0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPSdNNSAyQzQuNDQ3NzIgMiA0IDIuNDQ3NzIgNCAzQzQgMy41NTIyOCA0LjQ0NzcyIDQgNSA0TDUgMlpNMTkgNEMxOS41NTIzIDQgMjAgMy41NTIyOSAyMCAzQzIwIDIuNDQ3NzIgMTkuNTUyMyAyIDE5IDJMMTkgNFpNNSA0TDE5IDRMMTkgMkw1IDJMNSA0WidcbiAgICAgICAgICAgICAgICBmaWxsPScjRjVGNUY1J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J00xMCAyMEM5LjQ0NzcyIDIwIDkgMjAuNDQ3NyA5IDIxQzkgMjEuNTUyMyA5LjQ0NzcyIDIyIDEwIDIyTDEwIDIwWk0xNCAyMkMxNC41NTIzIDIyIDE1IDIxLjU1MjMgMTUgMjFDMTUgMjAuNDQ3NyAxNC41NTIzIDIwIDE0IDIwTDE0IDIyWk0xMCAyMkwxNCAyMkwxNCAyMEwxMCAyMEwxMCAyMlonXG4gICAgICAgICAgICAgICAgZmlsbD0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnYWRkT3RoZXJzJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVBZGRPdGhlcnNUb29sQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBuYW1lPSdvdGhlcnMnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTE1LjcwNzEgMTEuNzA3MUMxNi4wOTc2IDExLjMxNjYgMTYuMDk3NiAxMC42ODM0IDE1LjcwNzEgMTAuMjkyOUMxNS4zMTY2IDkuOTAyMzcgMTQuNjgzNCA5LjkwMjM3IDE0LjI5MjkgMTAuMjkyOUwxNS43MDcxIDExLjcwNzFaTTEyIDE0TDExLjI5MjkgMTQuNzA3MUwxMiAxNS40MTQyTDEyLjcwNzEgMTQuNzA3MUwxMiAxNFpNOS43MDcxIDEwLjI5MjlDOS4zMTY1OCA5LjkwMjM3IDguNjgzNDEgOS45MDIzNyA4LjI5Mjg5IDEwLjI5MjlDNy45MDIzNyAxMC42ODM0IDcuOTAyMzcgMTEuMzE2NiA4LjI5MjkgMTEuNzA3MUw5LjcwNzEgMTAuMjkyOVpNMTQuMjkyOSAxMC4yOTI5TDExLjI5MjkgMTMuMjkyOUwxMi43MDcxIDE0LjcwNzFMMTUuNzA3MSAxMS43MDcxTDE0LjI5MjkgMTAuMjkyOVpNMTIuNzA3MSAxMy4yOTI5TDkuNzA3MSAxMC4yOTI5TDguMjkyOSAxMS43MDcxTDExLjI5MjkgMTQuNzA3MUwxMi43MDcxIDEzLjI5MjlaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN2Z1xuICAgICAgICBuYW1lPSdncmlkJ1xuICAgICAgICBvbk1vdXNlTW92ZT17KGUpID0+IGhhbmRsZU9uTW91c2Vtb3ZlT25DYW52YXMoZSl9XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPbkNsaWNrT25DYW52YXMoZSl9XG4gICAgICAgIHotaW5kZXg9JzEnXG4gICAgICAgIHdpZHRoPXtXSU5ET1dfV0lEVEh9XG4gICAgICAgIGhlaWdodD17V0lORE9XX0hFSUdIVH1cbiAgICAgICAgdmlld0JveD17YDAgMCAke1dJTkRPV19XSURUSH0gJHtXSU5ET1dfSEVJR0hUfWB9XG4gICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgID5cbiAgICAgICAgPGZpbHRlciBpZD0nZmlsdGVyJz5cbiAgICAgICAgICB7LyogPGZlTW9ycGhvbG9neSBvcGVyYXRvcj0nZXJvZGUnIHJhZGl1cz0nMzAnIC8+ICovfVxuICAgICAgICAgIHsvKiA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSc1JyAvPiAqL31cbiAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9JyMxODE4MUInIC8+XG5cbiAgICAgICAgey8qIDxyZWN0XG4gICAgICAgICAgLy8gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Mjk5fSAkezIwMH0pYH1cbiAgICAgICAgICB4PScxMjAwJ1xuICAgICAgICAgIHk9JzcwJ1xuICAgICAgICAgIHdpZHRoPSc4MCdcbiAgICAgICAgICBoZWlnaHQ9JzgwJ1xuICAgICAgICAgIGZpbGw9JyMwMDAwZmYnXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfVxuICAgICAgICAvPiAqL31cblxuICAgICAgICA8ZyBuYW1lPSdSZWN0cyc+XG4gICAgICAgICAge1JlY3RzLm1hcCgocmVjLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZyBrZXk9eydyZWN0YW5nbGUnICsgcmVjLmlkfT5cbiAgICAgICAgICAgICAgICB7cmVjLnNlbGVjdGVkICYmIChcbiAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgIHg9e3JlYy54IC0gNH1cbiAgICAgICAgICAgICAgICAgICAgeT17cmVjLnkgLSA0fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17cmVjLndpZHRoICsgOH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtyZWMuaGVpZ3RoICsgOH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmlsbD0nIzBFQTVFOSdcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPScjMEVBNUU5J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgIC8vIHotaW5kZXg9JzEwMDAnXG4gICAgICAgICAgICAgICAgICAvLyBmaWx0ZXI9J3VybCgjZXJvZGUpJ1xuICAgICAgICAgICAgICAgICAgcng9JzE1J1xuICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZU1vdmU9eyhlKSA9PiBoYW5kbGVPbk1vdXNlTW92ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgLy8gb25Ub3VjaE1vdmU9eyhlKSA9PiBoYW5kbGVPbk1vdXNlTW92ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgLy8gb25EcmFnPXsoZSkgPT4gaGFuZGxlT25tb3VzZW1vdmUoZSl9XG4gICAgICAgICAgICAgICAgICB4PXtyZWMueH1cbiAgICAgICAgICAgICAgICAgIHk9e3JlYy55fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e3JlYy53aWR0aH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17cmVjLmhlaWd0aH1cbiAgICAgICAgICAgICAgICAgIGZpbGw9e3JlYy5jb2xvcn1cbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVSZWN0Q2xpY2soZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIC8vIG9uTW91c2VEb3duPXsoZSkgPT4gaGFuZGxlRG93bihlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgLy8gb25Ub3VjaFN0YXJ0PXsoZSkgPT4gaGFuZGxlRG93bihlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZVVwPXsoZSkgPT4gaGFuZGxlVXAoZSl9XG4gICAgICAgICAgICAgICAgICAvLyBvbk1vdXNlTGVhdmU9eyhlKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICAvLyBvblRvdWNoRW5kPXsoZSkgPT4gaGFuZGxlTW91c2VMZWF2ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7LyogPHRleHQgeD17cmVjLnggKyA1MH0geT17cmVjLnkgKyA1MH0gZmlsbD0nI2RjZDJmZic+XG4gICAgICAgICAgICAgICAge3JlYy50ZXh0fVxuICAgICAgICAgICAgICA8L3RleHQ+ICovfVxuXG4gICAgICAgICAgICAgICAgPGZvcmVpZ25PYmplY3RcbiAgICAgICAgICAgICAgICAgIGlkPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgeD17cmVjLnh9XG4gICAgICAgICAgICAgICAgICB5PXtyZWMueX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtyZWMud2lkdGggKyA4fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtyZWMud2lkdGggKyA4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1Db250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e319XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVPblRleHRDaGFuZ2UoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9yZWlnbk9iamVjdD5cblxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAvLyB6LWluZGV4PScxMDAwJ1xuICAgICAgICAgICAgICAgICAgLy9QcmltYXJ5IExheWVyXG5cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU1vdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU1vdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIC8vIG9uRHJhZz17KGUpID0+IGhhbmRsZU9ubW91c2Vtb3ZlKGUpfVxuICAgICAgICAgICAgICAgICAgeD17cmVjLnggLSA0fVxuICAgICAgICAgICAgICAgICAgeT17cmVjLnkgLSA0fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e3JlYy53aWR0aCArIDh9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e3JlYy5oZWlndGggKyA4fVxuICAgICAgICAgICAgICAgICAgZmlsbD0nIzAwMDAwMDAwJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVJlY3RDbGljayhlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiBoYW5kbGVEb3duKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9eyhlKSA9PiBoYW5kbGVEb3duKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eyhlKSA9PiBoYW5kbGVVcChlKX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IGhhbmRsZU1vdXNlTGVhdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9eyhlKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoZSkgPT4gaGFuZGxlT25Eb3VibGVDbGljayhlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9nPlxuXG4gICAgICAgIDxnIG5hbWU9J0xpbmtzJz5cbiAgICAgICAgICB7TGlua3MubWFwKChsLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZyBrZXk9eydMaW5rcycgKyBsLmlkfT5cbiAgICAgICAgICAgICAgICB7bC5zZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICB4PSc1MDAnXG4gICAgICAgICAgICAgICAgICAgIHk9JzUwMCdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzIwMCdcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScyMDAnXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9JyMwRUE1RTknXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nIzBFQTVFOSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2c+XG5cbiAgICAgICAge3Nob3dIZWxwZXJzICYmIChcbiAgICAgICAgICAvLyBTaG93IEhlbHBlcnMgYW5kIFN0YXRzXG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICB7bW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3R0b206IDAgfX1cbiAgICAgICAgICAgICAgICAgIHg9JzAnXG4gICAgICAgICAgICAgICAgICAvLyB5PSc3MDAnXG4gICAgICAgICAgICAgICAgICB3aWR0aD0nMTYwMCdcbiAgICAgICAgICAgICAgICAgIGhlaWdodD0nMSdcbiAgICAgICAgICAgICAgICAgIGZpbGw9JyMwMGVlZmYxMSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9JzEyMDAnIHk9JzUwJyBmaWxsPScjMDBlZWZmJz5cbiAgICAgICAgICAgICAgICAgIHsvKiBtb3VzZVBvc2l0aW9uOiB7bW91c2VQb3NpdGlvbi54fSx7bW91c2VQb3NpdGlvbi55fSAqL31cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgPHRleHQgeD0nMTIwMCcgeT0nNzAnIGZpbGw9JyNmZjUxMDAnPlxuICAgICAgICAgICAgICAgICAgey8qIHNjcmVlbk1vdXNlUG9zaXRpb246IHtzY3JlZW5Nb3VzZVBvc2l0aW9uLnh9LCAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiB7c2NyZWVuTW91c2VQb3NpdGlvbi55fSAqL31cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIDxmb3JlaWduT2JqZWN0IHg9JzIwJyB5PScyMCcgd2lkdGg9JzE2MCcgaGVpZ2h0PScxNjAnPlxuICAgICAgICAgICAgICA8ZGl2PlRvb2wgQ2hvb3NlZDoge3Rvb2x9PC9kaXY+XG4gICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+ICovfVxuXG4gICAgICAgICAgICA8dGV4dCB4PScxMicgeT0nMjAnIGZpbGw9JyMyYmZmMDAnPlxuICAgICAgICAgICAgICBUb29sIENob29zZWQ6IHt0b29sfVxuICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgeD0nMTInIHk9JzUwJyBmaWxsPScjMDBlZWZmJz5cbiAgICAgICAgICAgICAgbW91c2VQb3NpdGlvbjoge21vdXNlUG9zaXRpb25vbk9uQ2FudmFzLnh9LFxuICAgICAgICAgICAgICB7bW91c2VQb3NpdGlvbm9uT25DYW52YXMueX1cbiAgICAgICAgICAgIDwvdGV4dD5cblxuICAgICAgICAgICAgPHRleHQgeD0nMTInIHk9JzcwJyBmaWxsPScjMDBlZWZmJz5cbiAgICAgICAgICAgICAgZGlmZjoge2RpZmZYfSx7ZGlmZll9XG4gICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICB7LyogPHRleHQgeD0nMTInIHk9JzcwJyBmaWxsPScjZmY1MTAwJz5cbiAgICAgICAgICAgICAgc2NyZWVuTW91c2VQb3NpdGlvbjoge3NjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhcy54fSxcbiAgICAgICAgICAgICAge3NjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhcy55fVxuICAgICAgICAgICAgPC90ZXh0PiAqL31cbiAgICAgICAgICA8L2c+XG4gICAgICAgICl9XG4gICAgICA8L3N2Zz5cblxuICAgICAge3Nob3dIZWxwZXJzICYmIChcbiAgICAgICAgLy8gU2hvdyBIZWxwZXJzIGFuZCBTdGF0c1xuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvLXBhbm5lbCc+XG4gICAgICAgICAge1JlY3RzLm1hcCgociwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8taXRlbScga2V5PXtyLmlkfT5cbiAgICAgICAgICAgICAgeydcdTI1QkEgICcgLyogUmVjdElkOntyLmlkfSAgKi99IHtpfSB7ci50ZXh0fSAtLSB7ci54fSx7ci55fVxuICAgICAgICAgICAgICB7ci5zZWxlY3RlZCA/ICcgXHVEODNEXHVERTAxJyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHsgY24gPSAnYnV0dG9uJywgaHVuZGxlT25DbGljaywgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbUmVjdHMsIHNldFJlY3RzXSA9IHVzZUF0b20oT2JqZWN0TGlzdClcbiAgY29uc3QgW3N0YXJ0RHJhd2luZywgc2V0U3RhcnREcmF3aW5nXSA9IHVzZUF0b20oRHJhd2luZylcblxuICAvLyBmdW5jdGlvbiBodW5kbGVUb29sQ2xpY2soZSkge1xuICAvLyAgIHNldFN0YXJ0RHJhd2luZyh0cnVlKVxuICAvLyAgIC8vIGUuc3RvcFByb3BwYWdhdGlvbigpXG4gIC8vICAgLy8gY29uc29sZS5sb2coUmVjdHMpXG5cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZU92ZXIoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwRjAnXG4gICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjBlJ1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2VvdXQoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwRjAnXG4gICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDAwMDAwMDAnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU92ZXIoZSl9XG4gICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gaGFuZGxlT25Nb3VzZW91dChlKX1cbiAgICAgIC8vIG9uTW91c2VPdXQ9eyhlKSA9PiAodGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEYnKX1cbiAgICAgIGNsYXNzTmFtZT17Y259XG4gICAgICBvbkNsaWNrPXtodW5kbGVPbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uMjQnPntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2hvd0hlbHBlcnNCdXR0b24oeyBjbiA9ICdidXR0b24nLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzaG93SGVscGVycywgc2V0U2hvd0hlbHBlcnNdID0gdXNlQXRvbShTaG93SGVscGVyc0F0b20pXG5cbiAgZnVuY3Rpb24gaHVuZGxlVG9vbENsaWNrKGUpIHtcbiAgICAvLyBlLnN0b3BQcm9wcGFnYXRpb24oKVxuICAgIHNldFNob3dIZWxwZXJzKChwcmV2KSA9PiAhcHJldilcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVPbk1vdXNlT3ZlcihlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAvLyB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnIzBGMCdcbiAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmMGUnXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZW91dChlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAvLyB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnIzBGMCdcbiAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMDAwMDAwMCdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25Nb3VzZU92ZXI9eyhlKSA9PiBoYW5kbGVPbk1vdXNlT3ZlcihlKX1cbiAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBoYW5kbGVPbk1vdXNlb3V0KGUpfVxuICAgICAgLy8gb25Nb3VzZU91dD17KGUpID0+ICh0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwRicpfVxuICAgICAgY2xhc3NOYW1lPXtjbn1cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiBodW5kbGVUb29sQ2xpY2soZSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24yNCc+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZWN0YW5nbGUoKSB7XG4gIGNvbnN0IFtSZWN0cywgc2V0UmVjdHNdID0gdXNlQXRvbShPYmplY3RMaXN0KVxuICBzZXRSZWN0cyhbXG4gICAgLi4uUmVjdHMsXG4gICAge1xuICAgICAgdGV4dDogJycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICBpZDogdXVpZCgpLFxuICAgICAgeDogV0lORE9XX1dJRFRIIC8gNCxcbiAgICAgIHk6IFdJTkRPV19IRUlHSFQgLyA0LFxuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIGhlaWd0aDogMTAwLFxuICAgICAgY29sb3I6IGByZ2JhKCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KX0sICR7TWF0aC5mbG9vcihcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxuICAgICAgKX0sICR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KX0pYCxcblxuICAgICAgdGV4dEVkaXQ6IGZhbHNlLFxuICAgIH0sXG4gIF0pXG59XG5cbmZ1bmN0aW9uIHNpZGUoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Zz5cbiAgICAgIDxmb3JlaWduT2JqZWN0XG4gICAgICAgIHg9JzEyJ1xuICAgICAgICB5PXs5MH1cbiAgICAgICAgZmlsbD0nI2ZmMDBiNydcbiAgICAgICAgd2lkdGg9JzMwMCdcbiAgICAgICAgLy8gaGVpZ2h0PXs5MCArIDE2ICogUmVjdHMubGVuZ3RofVxuICAgICAgICBoZWlnaHQ9JzU1MCdcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8tcGFubmVsJz5cbiAgICAgICAgICB7UmVjdHMubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mby1pdGVtJyBrZXk9e3IuaWR9PlxuICAgICAgICAgICAgICB7LyogUmVjdElkOntyLmlkfSAgKi99XG4gICAgICAgICAgICAgIGk6IHtpfSB7ci50ZXh0fVxuICAgICAgICAgICAgICBQb3M6IHtyLnh9LHtyLnl9XG4gICAgICAgICAgICAgIHtyLnNlbGVjdGVkID8gJy0tLScgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9yZWlnbk9iamVjdD5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmssIE91dGxldCB9IGZyb20gJ3JlbWl4J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxMaW5rIHRvPScvZHJhd2V0dGUnPiBHbyB0byBkcmF3ZXR0ZSA8L0xpbms+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBhdG9tLCB1c2VBdG9tIH0gZnJvbSAnam90YWknXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCdcblxuLy8gbGV0IFdJTkRPV19XSURUSCA9IGF0b20od2luZG93LmlubmVyV2lkdGgpXG4vLyBsZXQgV0lORE9XX0hFSUdIVCA9IGF0b20od2luZG93LmlubmVySGVpZ2h0KVxuXG5sZXQgV0lORE9XX1dJRFRIID0gMTYwMFxubGV0IFdJTkRPV19IRUlHSFQgPSAxMjAwXG5cbmxldCBkaWZmWCA9IDBcbmxldCBkaWZmWSA9IDBcblxuZnVuY3Rpb24gbG9nKHg6IGFueSkge1xuICBjb25zb2xlLmxvZyh4KVxufVxuXG5jb25zdCBTY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMgPSBhdG9tKHt9KVxuY29uc3QgTW91c2VQb3NpdGlvbk9uQ2FudmFzID0gYXRvbSh7fSlcbmNvbnN0IFNjcmVlbk1vdXNlUG9zaXRpb24gPSBhdG9tKHsgeDogNjAwLCB5OiA0MDAgfSlcblxuY29uc3QgU2hvd0hlbHBlcnNBdG9tID0gYXRvbSh0cnVlKVxuY29uc3QgT2JqZWN0U2VsZWN0ZWQgPSBhdG9tKGZhbHNlKVxuY29uc3QgRHJhd2luZyA9IGF0b20oZmFsc2UpXG5jb25zdCBNb3VzZURvd25BdG9tID0gYXRvbSgnJylcbmNvbnN0IFRvb2xDaG9vc2VkID0gYXRvbSgnJylcbmNvbnN0IE1vdXNlUG9zaXRpb24gPSBhdG9tKHsgeDogNjAwLCB5OiA0MDAgfSlcblxuY29uc3QgT2JqZWN0TGlzdCA9IGF0b208XG4gIHtcbiAgICBpZDogc3RyaW5nXG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgd2lkdGg6IG51bWJlclxuICAgIGhlaWd0aDogbnVtYmVyXG4gICAgY29sb3I6IHN0cmluZ1xuICAgIHNlbGVjdGVkOiBib29sZWFuXG4gICAgdGV4dDogc3RyaW5nXG4gICAgdGV4dEVkaXQ6IGJvb2xlYW5cbiAgfVtdXG4+KFtdKVxuXG5jb25zdCBMaW5rTGlzdCA9IGF0b208XG4gIHtcbiAgICBpZDogc3RyaW5nXG4gICAgeDE6IG51bWJlclxuICAgIHgyOiBudW1iZXJcbiAgICB5MTogbnVtYmVyXG4gICAgeTI6IG51bWJlclxuXG4gICAgY29sb3I6IHN0cmluZ1xuICAgIHNlbGVjdGVkOiBib29sZWFuXG4gICAgdGV4dDogc3RyaW5nXG4gIH1bXVxuPihbXSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIFdJTkRPV19XSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gIC8vICAgV0lORE9XX0hFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAvLyB9LCBbXSlcblxuICBjb25zdCBbbW91c2VQb3NpdGlvbm9uT25DYW52YXMsIHNldE1vdXNlUG9zaXRpb25vbk9uQ2FudmFzXSA9IHVzZUF0b20oXG4gICAgTW91c2VQb3NpdGlvbk9uQ2FudmFzXG4gIClcbiAgY29uc3QgW3NjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhcywgc2V0U2NyZWVuTW91c2VQb3NpdGlvbk9uQ2FudmFzXSA9IHVzZUF0b20oXG4gICAgU2NyZWVuTW91c2VQb3NpdGlvbk9uQ2FudmFzXG4gIClcbiAgY29uc3QgW1JlY3RzLCBzZXRSZWN0c10gPSB1c2VBdG9tKE9iamVjdExpc3QpXG4gIGNvbnN0IFtMaW5rcywgc2V0TGlua10gPSB1c2VBdG9tKExpbmtMaXN0KVxuXG4gIGNvbnN0IFtzaG93SGVscGVycywgc2V0U2hvd0hlbHBlcnNdID0gdXNlQXRvbShTaG93SGVscGVyc0F0b20pXG4gIGNvbnN0IFt0b29sLCBzZXRUb29sXSA9IHVzZUF0b20oVG9vbENob29zZWQpXG5cbiAgY29uc3QgW21vdXNlRG93biwgc2V0TW91c2VEb3duXSA9IHVzZUF0b20oTW91c2VEb3duQXRvbSlcbiAgY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlQXRvbShNb3VzZVBvc2l0aW9uKVxuICBjb25zdCBbc2NyZWVuTW91c2VQb3NpdGlvbiwgc2V0U2NyZWVuTW91c2VQb3NpdGlvbl0gPVxuICAgIHVzZUF0b20oU2NyZWVuTW91c2VQb3NpdGlvbilcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VBdG9tKE9iamVjdFNlbGVjdGVkKVxuXG4gIGNvbnN0IFtzdGFydERyYXdpbmcsIHNldFN0YXJ0RHJhd2luZ10gPSB1c2VBdG9tKERyYXdpbmcpXG5cbiAgbGV0IG1vdXNlUG9zZTAgPSB7IHg6IDUwLCB5OiA1MCB9XG4gIGxldCBzaGFwZVBvc2UwID0geyB4OiAwLCB5OiAwIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZWN0Q2xpY2soZSwgaWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQua2V5LCBpZClcblxuICAgIHNldFJlY3RzKFtcbiAgICAgIC4uLlJlY3RzLm1hcCgocikgPT4ge1xuICAgICAgICBpZiAoci5pZCA9PT0gaWQpIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIHIuY29sb3IgPSAnIzAwZSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICAvLyByLmNvbG9yID0gci5jb2xvclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByXG4gICAgICB9KSxcbiAgICBdKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25Eb3VibGVDbGljayhlLCBpZCkge1xuICAgIC8vIHNldE1vdXNlRG93bigocHJldikgPT4gJ21vdXNlIGRvd24nKVxuICAgIGxvZyhlKVxuXG4gICAgLy8gbW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiZcbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuaWQgPT09IGlkKSB7XG4gICAgICAgICAgciA9IHtcbiAgICAgICAgICAgIC4uLnIsXG4gICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHQ6ICdNJyxcbiAgICAgICAgICAgIHRleHRFZGl0OiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZUxlYXZlKGUsIGlkKSB7XG4gICAgLy8gc2V0TW91c2VEb3duKChwcmV2KSA9PiAnbW91c2UgZG93bicpXG4gICAgaGFuZGxlT25Nb3VzZU1vdmUoZSwgaWQpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZU1vdmUoZSwgaWQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiZcbiAgICAgIHRvb2wgPT0gJ21vdmUnICYmXG4gICAgICBzZXRSZWN0cyhbXG4gICAgICAgIC4uLlJlY3RzLm1hcCgocikgPT4ge1xuICAgICAgICAgIGlmIChyLmlkID09PSBpZCkge1xuICAgICAgICAgICAgciA9IHtcbiAgICAgICAgICAgICAgLi4ucixcbiAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICAgIHg6IGUuY2xpZW50WCAtIGRpZmZYLFxuICAgICAgICAgICAgICB5OiBlLmNsaWVudFkgLSBkaWZmWSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJcbiAgICAgICAgfSksXG4gICAgICBdKVxuXG4gICAgbW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiZcbiAgICAgIHRvb2wgPT0gJ2FkZExpbmsnICYmXG4gICAgICBzZXRMaW5rKFtcbiAgICAgICAgLi4uTGlua3MsXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICAgIHgxOiAxMDAsXG4gICAgICAgICAgeTE6IDQwMCxcbiAgICAgICAgICB4MjogMTAwLFxuICAgICAgICAgIHkyOiAxMDAsXG4gICAgICAgICAgdGV4dDogJycsXG5cbiAgICAgICAgICBjb2xvcjogYHJnYmEoJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpfSwgJHtNYXRoLmZsb29yKFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxuICAgICAgICAgICl9LCAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSl9KWAsXG4gICAgICAgIH0sXG4gICAgICBdKVxuXG4gICAgbW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiZcbiAgICAgIHNldFNjcmVlbk1vdXNlUG9zaXRpb24oKHByZXYpID0+ICh7XG4gICAgICAgIHg6IGUuc2NyZWVuWCxcbiAgICAgICAgeTogZS5zY3JlZW5ZLFxuICAgICAgfSkpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZW1vdmVPbkNhbnZhcyhlKSB7XG4gICAgc2V0TW91c2VQb3NpdGlvbm9uT25DYW52YXMoKHByZXYpID0+ICh7XG4gICAgICB4OiBlLmNsaWVudFgsXG4gICAgICB5OiBlLmNsaWVudFksXG4gICAgfSkpXG5cbiAgICBzZXRTY3JlZW5Nb3VzZVBvc2l0aW9uT25DYW52YXMoKHByZXYpID0+ICh7XG4gICAgICB4OiBlLnNjcmVlblgsXG4gICAgICB5OiBlLnNjcmVlblksXG4gICAgfSkpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEb3duKGUsIGkpIHtcbiAgICBzZXRNb3VzZURvd24oKHByZXYpID0+ICdtb3VzZSBkb3duJylcbiAgICBkaWZmWCA9IGUuY2xpZW50WCAtIGUudGFyZ2V0LnguYmFzZVZhbC52YWx1ZVxuICAgIGRpZmZZID0gZS5jbGllbnRZIC0gZS50YXJnZXQueS5iYXNlVmFsLnZhbHVlXG4gICAgLy8gY29uc29sZS5sb2coJy0tLS1tb3VzZSBkb3duJywgZSlcbiAgICAvLyBsb2dNb3VzZSgpXG4gICAgLy8gc2hhcGVQb3NlMCA9IHsgeDogZS50YXJnZXQueC5iYXNlVmFsLnZhbHVlLCB5OiBlLnRhcmdldC54LmJhc2VWYWwudmFsdWUgfVxuICAgIC8vIG1vdXNlUG9zZTAgPSB7IHg6IGUuY2xpZW50WCwgeTogZS5jbGllbnRZIH1cbiAgICBzZXRTZWxlY3RlZCgocHJldikgPT4gIXByZXYpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlVXAoZSkge1xuICAgIHNldE1vdXNlRG93bigocHJldikgPT4gJ21vdXNlIHVwJylcbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLW1vdXNlIHVwJylcbiAgICAvLyBsb2dNb3VzZSgpXG4gICAgc2V0U2VsZWN0ZWQoKHByZXYpID0+ICFwcmV2KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlT25DbGlja09uQ2FudmFzKFxuICAgIGU6IE1vdXNlRXZlbnQ8U1ZHU1ZHRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgLy8gc3RhcnREcmF3aW5nICYmXG4gICAgc2V0UmVjdHMoW1xuICAgICAgLi4uUmVjdHMsXG4gICAgICB7XG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgeDogV0lORE9XX1dJRFRIIC8gNCxcbiAgICAgICAgeTogV0lORE9XX0hFSUdIVCAvIDQsXG4gICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgIGhlaWd0aDogMTAwLFxuICAgICAgICBjb2xvcjogYHJnYmEoMjU1LCAwLCAwKWAsXG4gICAgICAgIHRleHQ6ICcnLFxuICAgICAgICB0ZXh0RWRpdDogZmFsc2UsXG4gICAgICB9LFxuICAgIF0pXG5cbiAgICAvLyBjb25zb2xlLmxvZygnLS0tLW1vdXNlIGNsaWNrJywgZSlcbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuc2VsZWN0ZWQpIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICByLnRleHRFZGl0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZFJlY3RhbmdsZVRvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZFJlY3RhbmdsZScpXG5cbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cyxcbiAgICAgIHtcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICB4OiBXSU5ET1dfV0lEVEggLyA0LFxuICAgICAgICB5OiBXSU5ET1dfSEVJR0hUIC8gNCxcbiAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgaGVpZ3RoOiAxMDAsXG4gICAgICAgIGNvbG9yOiBgcmdiYSgke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSl9LCAke01hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxuICAgICAgICApfSwgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpfSlgLFxuICAgICAgICB0ZXh0OiAnUicsXG4gICAgICAgIHRleHRFZGl0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdmVUb29sQ2xpY2soZSkge1xuICAgIHNldFRvb2woKHApID0+ICdtb3ZlJylcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVBZGRMaW5rVG9vbENsaWNrKGUpIHtcbiAgICBzZXRUb29sKChwKSA9PiAnYWRkTGluaycpXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQWRkVGV4dFRvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZFRleHQnKVxuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUFkZE90aGVyc1Rvb2xDbGljayhlKSB7XG4gICAgc2V0VG9vbCgocCkgPT4gJ2FkZE9oZXJzJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9uVGV4dENoYW5nZShcbiAgICBlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcbiAgICBpZDogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIGxvZyhSZWN0cylcbiAgICBzZXRSZWN0cyhbXG4gICAgICAuLi5SZWN0cy5tYXAoKHIpID0+IHtcbiAgICAgICAgaWYgKHIuaWQgPT0gaWQpIHtcbiAgICAgICAgICByLnNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgIHIudGV4dEVkaXQgPSB0cnVlXG4gICAgICAgICAgci50ZXh0ID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gclxuICAgICAgfSksXG4gICAgXSlcbiAgfVxuICAvLyBSRVRVUk5cbiAgLy8gUkVUVVJOXG4gIC8vIFJFVFVSTlxuICAvLyBSRVRVUk5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgbGluZUhlaWdodDogJzEuNCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFNob3dIZWxwZXJzQnV0dG9uIGNuPXsnYnV0dG9uIHNob3dIZWxwZXJzJ30+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBuYW1lPSdzaG93SGVscGVycydcbiAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgIGhlaWdodD0nMjQnXG4gICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9J00xOC4zNjQgOS43NzgxOEwyMC42NjQyIDEyLjA3ODRMMTguMzYzNyAxNC4zNzg4QzE0Ljg0OSAxNy44OTM1IDkuMTUwNDkgMTcuODkzNSA1LjYzNTc3IDE0LjM3ODhMMy4zMzU1OCAxMi4wNzg2TDUuNjM2MDQgOS43NzgxOEM5LjE1MDc1IDYuMjYzNDYgMTQuODQ5MiA2LjI2MzQ2IDE4LjM2NCA5Ljc3ODE4WidcbiAgICAgICAgICAgICAgc3Ryb2tlPScjRjVGNUY1J1xuICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PScxMicgY3k9JzEyJyByPSczJyBmaWxsPScjRjVGNUY1JyAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L1Nob3dIZWxwZXJzQnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b3BiYXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9vbGJhcic+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY249e2AgJHt0b29sID09ICdtb3ZlJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVNb3ZlVG9vbENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J21vdmUnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTcuNjEyNjkgNC45OTU3TDEwLjM1MjYgMTkuMzEzM0wxMy44NzYgMTQuNjQwNEwxOS41NzggMTMuMzIyMkw3LjYxMjY5IDQuOTk1N1onXG4gICAgICAgICAgICAgICAgc3Ryb2tlPScjRjVGNUY1J1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY249e2AgJHt0b29sID09ICdhZGRSZWN0YW5nbGUnICYmICdzZWxlY3RlZCd9YH1cbiAgICAgICAgICAgIGh1bmRsZU9uQ2xpY2s9e2hhbmRsZUFkZFJlY3RhbmdsZVRvb2xDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J3JlY3RhbmdsZSdcbiAgICAgICAgICAgICAgd2lkdGg9JzI0J1xuICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICB4PSczJ1xuICAgICAgICAgICAgICAgIHk9JzUnXG4gICAgICAgICAgICAgICAgd2lkdGg9JzE4J1xuICAgICAgICAgICAgICAgIGhlaWdodD0nMTQnXG4gICAgICAgICAgICAgICAgcng9JzInXG4gICAgICAgICAgICAgICAgc3Ryb2tlPScjRjVGNUY1J1xuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPScyJ1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY249e2AgJHt0b29sID09ICdhZGRMaW5rJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVBZGRMaW5rVG9vbENsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgbmFtZT0nbGluaydcbiAgICAgICAgICAgICAgd2lkdGg9JzI0J1xuICAgICAgICAgICAgICBoZWlnaHQ9JzI0J1xuICAgICAgICAgICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXG4gICAgICAgICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPSdNMjEgNC4wMDA0QzggNC4wMDA1IDE2IDIwLjAwMDQgMyAyMC4wMDA0J1xuICAgICAgICAgICAgICAgIHN0cm9rZT0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD0nMidcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSdyb3VuZCdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnYWRkVGV4dCcgJiYgJ3NlbGVjdGVkJ31gfVxuICAgICAgICAgICAgaHVuZGxlT25DbGljaz17aGFuZGxlQWRkVGV4dFRvb2xDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIG5hbWU9J3RleHQnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTEzIDNDMTMgMi40NDc3MiAxMi41NTIzIDIgMTIgMkMxMS40NDc3IDIgMTEgMi40NDc3MiAxMSAzSDEzWk0xMSAyMEMxMSAyMC41NTIzIDExLjQ0NzcgMjEgMTIgMjFDMTIuNTUyMyAyMSAxMyAyMC41NTIzIDEzIDIwSDExWk0xMSAzVjIwSDEzVjNIMTFaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTYgM0M2LjAwMDAxIDIuNDQ3NzIgNS41NTIyOSAyIDUuMDAwMDEgMkM0LjQ0NzcyIDIgNC4wMDAwMSAyLjQ0NzcxIDQgM0w2IDNaTTQgMy45OTk5OUM0IDQuNTUyMjggNC40NDc3MSA0Ljk5OTk5IDUgNUM1LjU1MjI4IDUgNiA0LjU1MjI4IDYgNEw0IDMuOTk5OTlaTTQgM0w0IDMuOTk5OTlMNiA0TDYgM0w0IDNaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTIwIDNDMjAgMi40NDc3MiAxOS41NTIzIDIgMTkgMkMxOC40NDc3IDIgMTggMi40NDc3MSAxOCAzTDIwIDNaTTE4IDMuOTk5OTlDMTggNC41NTIyOCAxOC40NDc3IDQuOTk5OTkgMTkgNUMxOS41NTIzIDUgMjAgNC41NTIyOCAyMCA0TDE4IDMuOTk5OTlaTTE4IDNMMTggMy45OTk5OUwyMCA0TDIwIDNMMTggM1onXG4gICAgICAgICAgICAgICAgZmlsbD0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPSdNNSAyQzQuNDQ3NzIgMiA0IDIuNDQ3NzIgNCAzQzQgMy41NTIyOCA0LjQ0NzcyIDQgNSA0TDUgMlpNMTkgNEMxOS41NTIzIDQgMjAgMy41NTIyOSAyMCAzQzIwIDIuNDQ3NzIgMTkuNTUyMyAyIDE5IDJMMTkgNFpNNSA0TDE5IDRMMTkgMkw1IDJMNSA0WidcbiAgICAgICAgICAgICAgICBmaWxsPScjRjVGNUY1J1xuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9J00xMCAyMEM5LjQ0NzcyIDIwIDkgMjAuNDQ3NyA5IDIxQzkgMjEuNTUyMyA5LjQ0NzcyIDIyIDEwIDIyTDEwIDIwWk0xNCAyMkMxNC41NTIzIDIyIDE1IDIxLjU1MjMgMTUgMjFDMTUgMjAuNDQ3NyAxNC41NTIzIDIwIDE0IDIwTDE0IDIyWk0xMCAyMkwxNCAyMkwxNCAyMEwxMCAyMEwxMCAyMlonXG4gICAgICAgICAgICAgICAgZmlsbD0nI0Y1RjVGNSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNuPXtgICR7dG9vbCA9PSAnYWRkT3RoZXJzJyAmJiAnc2VsZWN0ZWQnfWB9XG4gICAgICAgICAgICBodW5kbGVPbkNsaWNrPXtoYW5kbGVBZGRPdGhlcnNUb29sQ2xpY2t9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBuYW1lPSdvdGhlcnMnXG4gICAgICAgICAgICAgIHdpZHRoPScyNCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScyNCdcbiAgICAgICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgICAgICBmaWxsPSdub25lJ1xuICAgICAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD0nTTE1LjcwNzEgMTEuNzA3MUMxNi4wOTc2IDExLjMxNjYgMTYuMDk3NiAxMC42ODM0IDE1LjcwNzEgMTAuMjkyOUMxNS4zMTY2IDkuOTAyMzcgMTQuNjgzNCA5LjkwMjM3IDE0LjI5MjkgMTAuMjkyOUwxNS43MDcxIDExLjcwNzFaTTEyIDE0TDExLjI5MjkgMTQuNzA3MUwxMiAxNS40MTQyTDEyLjcwNzEgMTQuNzA3MUwxMiAxNFpNOS43MDcxIDEwLjI5MjlDOS4zMTY1OCA5LjkwMjM3IDguNjgzNDEgOS45MDIzNyA4LjI5Mjg5IDEwLjI5MjlDNy45MDIzNyAxMC42ODM0IDcuOTAyMzcgMTEuMzE2NiA4LjI5MjkgMTEuNzA3MUw5LjcwNzEgMTAuMjkyOVpNMTQuMjkyOSAxMC4yOTI5TDExLjI5MjkgMTMuMjkyOUwxMi43MDcxIDE0LjcwNzFMMTUuNzA3MSAxMS43MDcxTDE0LjI5MjkgMTAuMjkyOVpNMTIuNzA3MSAxMy4yOTI5TDkuNzA3MSAxMC4yOTI5TDguMjkyOSAxMS43MDcxTDExLjI5MjkgMTQuNzA3MUwxMi43MDcxIDEzLjI5MjlaJ1xuICAgICAgICAgICAgICAgIGZpbGw9JyNGNUY1RjUnXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN2Z1xuICAgICAgICBuYW1lPSdncmlkJ1xuICAgICAgICBvbk1vdXNlTW92ZT17KGUpID0+IGhhbmRsZU9uTW91c2Vtb3ZlT25DYW52YXMoZSl9XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPbkNsaWNrT25DYW52YXMoZSl9XG4gICAgICAgIHotaW5kZXg9JzEnXG4gICAgICAgIHdpZHRoPXtXSU5ET1dfV0lEVEh9XG4gICAgICAgIGhlaWdodD17V0lORE9XX0hFSUdIVH1cbiAgICAgICAgdmlld0JveD17YDAgMCAke1dJTkRPV19XSURUSH0gJHtXSU5ET1dfSEVJR0hUfWB9XG4gICAgICAgIGZpbGw9J25vbmUnXG4gICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgID5cbiAgICAgICAgPGZpbHRlciBpZD0nZmlsdGVyJz5cbiAgICAgICAgICB7LyogPGZlTW9ycGhvbG9neSBvcGVyYXRvcj0nZXJvZGUnIHJhZGl1cz0nMzAnIC8+ICovfVxuICAgICAgICAgIHsvKiA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSc1JyAvPiAqL31cbiAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgIDxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9JyMxODE4MUInIC8+XG5cbiAgICAgICAgey8qIDxyZWN0XG4gICAgICAgICAgLy8gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Mjk5fSAkezIwMH0pYH1cbiAgICAgICAgICB4PScxMjAwJ1xuICAgICAgICAgIHk9JzcwJ1xuICAgICAgICAgIHdpZHRoPSc4MCdcbiAgICAgICAgICBoZWlnaHQ9JzgwJ1xuICAgICAgICAgIGZpbGw9JyMwMDAwZmYnXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfVxuICAgICAgICAvPiAqL31cblxuICAgICAgICA8ZyBuYW1lPSdSZWN0cyc+XG4gICAgICAgICAge1JlY3RzLm1hcCgocmVjLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZyBrZXk9eydyZWN0YW5nbGUnICsgcmVjLmlkfT5cbiAgICAgICAgICAgICAgICB7cmVjLnNlbGVjdGVkICYmIChcbiAgICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgIHg9e3JlYy54IC0gNH1cbiAgICAgICAgICAgICAgICAgICAgeT17cmVjLnkgLSA0fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17cmVjLndpZHRoICsgOH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtyZWMuaGVpZ3RoICsgOH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmlsbD0nIzBFQTVFOSdcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPScjMEVBNUU5J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgIC8vIHotaW5kZXg9JzEwMDAnXG4gICAgICAgICAgICAgICAgICAvLyBmaWx0ZXI9J3VybCgjZXJvZGUpJ1xuICAgICAgICAgICAgICAgICAgcng9JzE1J1xuICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZU1vdmU9eyhlKSA9PiBoYW5kbGVPbk1vdXNlTW92ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgLy8gb25Ub3VjaE1vdmU9eyhlKSA9PiBoYW5kbGVPbk1vdXNlTW92ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgLy8gb25EcmFnPXsoZSkgPT4gaGFuZGxlT25tb3VzZW1vdmUoZSl9XG4gICAgICAgICAgICAgICAgICB4PXtyZWMueH1cbiAgICAgICAgICAgICAgICAgIHk9e3JlYy55fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e3JlYy53aWR0aH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17cmVjLmhlaWd0aH1cbiAgICAgICAgICAgICAgICAgIGZpbGw9e3JlYy5jb2xvcn1cbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVSZWN0Q2xpY2soZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIC8vIG9uTW91c2VEb3duPXsoZSkgPT4gaGFuZGxlRG93bihlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgLy8gb25Ub3VjaFN0YXJ0PXsoZSkgPT4gaGFuZGxlRG93bihlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgLy8gb25Nb3VzZVVwPXsoZSkgPT4gaGFuZGxlVXAoZSl9XG4gICAgICAgICAgICAgICAgICAvLyBvbk1vdXNlTGVhdmU9eyhlKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICAvLyBvblRvdWNoRW5kPXsoZSkgPT4gaGFuZGxlTW91c2VMZWF2ZShlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7LyogPHRleHQgeD17cmVjLnggKyA1MH0geT17cmVjLnkgKyA1MH0gZmlsbD0nI2RjZDJmZic+XG4gICAgICAgICAgICAgICAge3JlYy50ZXh0fVxuICAgICAgICAgICAgICA8L3RleHQ+ICovfVxuXG4gICAgICAgICAgICAgICAgPGZvcmVpZ25PYmplY3RcbiAgICAgICAgICAgICAgICAgIGlkPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgeD17cmVjLnh9XG4gICAgICAgICAgICAgICAgICB5PXtyZWMueX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtyZWMud2lkdGggKyA4fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtyZWMud2lkdGggKyA4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1Db250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e319XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVPblRleHRDaGFuZ2UoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9yZWlnbk9iamVjdD5cblxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAvLyB6LWluZGV4PScxMDAwJ1xuICAgICAgICAgICAgICAgICAgLy9QcmltYXJ5IExheWVyXG5cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU1vdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIG9uVG91Y2hNb3ZlPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU1vdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIC8vIG9uRHJhZz17KGUpID0+IGhhbmRsZU9ubW91c2Vtb3ZlKGUpfVxuICAgICAgICAgICAgICAgICAgeD17cmVjLnggLSA0fVxuICAgICAgICAgICAgICAgICAgeT17cmVjLnkgLSA0fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e3JlYy53aWR0aCArIDh9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e3JlYy5oZWlndGggKyA4fVxuICAgICAgICAgICAgICAgICAgZmlsbD0nIzAwMDAwMDAwJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVJlY3RDbGljayhlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiBoYW5kbGVEb3duKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9eyhlKSA9PiBoYW5kbGVEb3duKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eyhlKSA9PiBoYW5kbGVVcChlKX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IGhhbmRsZU1vdXNlTGVhdmUoZSwgcmVjLmlkKX1cbiAgICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ9eyhlKSA9PiBoYW5kbGVNb3VzZUxlYXZlKGUsIHJlYy5pZCl9XG4gICAgICAgICAgICAgICAgICBvbkRvdWJsZUNsaWNrPXsoZSkgPT4gaGFuZGxlT25Eb3VibGVDbGljayhlLCByZWMuaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9nPlxuXG4gICAgICAgIDxnIG5hbWU9J0xpbmtzJz5cbiAgICAgICAgICB7TGlua3MubWFwKChsLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZyBrZXk9eydMaW5rcycgKyBsLmlkfT5cbiAgICAgICAgICAgICAgICB7bC5zZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICB4PSc1MDAnXG4gICAgICAgICAgICAgICAgICAgIHk9JzUwMCdcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzIwMCdcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScyMDAnXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9JyMwRUE1RTknXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT0nIzBFQTVFOSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2c+XG5cbiAgICAgICAge3Nob3dIZWxwZXJzICYmIChcbiAgICAgICAgICAvLyBTaG93IEhlbHBlcnMgYW5kIFN0YXRzXG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICB7bW91c2VEb3duID09PSAnbW91c2UgZG93bicgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3R0b206IDAgfX1cbiAgICAgICAgICAgICAgICAgIHg9JzAnXG4gICAgICAgICAgICAgICAgICAvLyB5PSc3MDAnXG4gICAgICAgICAgICAgICAgICB3aWR0aD0nMTYwMCdcbiAgICAgICAgICAgICAgICAgIGhlaWdodD0nMSdcbiAgICAgICAgICAgICAgICAgIGZpbGw9JyMwMGVlZmYxMSdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDx0ZXh0IHg9JzEyMDAnIHk9JzUwJyBmaWxsPScjMDBlZWZmJz5cbiAgICAgICAgICAgICAgICAgIHsvKiBtb3VzZVBvc2l0aW9uOiB7bW91c2VQb3NpdGlvbi54fSx7bW91c2VQb3NpdGlvbi55fSAqL31cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgPHRleHQgeD0nMTIwMCcgeT0nNzAnIGZpbGw9JyNmZjUxMDAnPlxuICAgICAgICAgICAgICAgICAgey8qIHNjcmVlbk1vdXNlUG9zaXRpb246IHtzY3JlZW5Nb3VzZVBvc2l0aW9uLnh9LCAqL31cbiAgICAgICAgICAgICAgICAgIHsvKiB7c2NyZWVuTW91c2VQb3NpdGlvbi55fSAqL31cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgey8qIDxmb3JlaWduT2JqZWN0IHg9JzIwJyB5PScyMCcgd2lkdGg9JzE2MCcgaGVpZ2h0PScxNjAnPlxuICAgICAgICAgICAgICA8ZGl2PlRvb2wgQ2hvb3NlZDoge3Rvb2x9PC9kaXY+XG4gICAgICAgICAgICA8L2ZvcmVpZ25PYmplY3Q+ICovfVxuXG4gICAgICAgICAgICA8dGV4dCB4PScxMicgeT0nMjAnIGZpbGw9JyMyYmZmMDAnPlxuICAgICAgICAgICAgICBUb29sIENob29zZWQ6IHt0b29sfVxuICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgPHRleHQgeD0nMTInIHk9JzUwJyBmaWxsPScjMDBlZWZmJz5cbiAgICAgICAgICAgICAgbW91c2VQb3NpdGlvbjoge21vdXNlUG9zaXRpb25vbk9uQ2FudmFzLnh9LFxuICAgICAgICAgICAgICB7bW91c2VQb3NpdGlvbm9uT25DYW52YXMueX1cbiAgICAgICAgICAgIDwvdGV4dD5cblxuICAgICAgICAgICAgPHRleHQgeD0nMTInIHk9JzcwJyBmaWxsPScjMDBlZWZmJz5cbiAgICAgICAgICAgICAgZGlmZjoge2RpZmZYfSx7ZGlmZll9XG4gICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICB7LyogPHRleHQgeD0nMTInIHk9JzcwJyBmaWxsPScjZmY1MTAwJz5cbiAgICAgICAgICAgICAgc2NyZWVuTW91c2VQb3NpdGlvbjoge3NjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhcy54fSxcbiAgICAgICAgICAgICAge3NjcmVlbk1vdXNlUG9zaXRpb25PbkNhbnZhcy55fVxuICAgICAgICAgICAgPC90ZXh0PiAqL31cbiAgICAgICAgICA8L2c+XG4gICAgICAgICl9XG4gICAgICA8L3N2Zz5cblxuICAgICAge3Nob3dIZWxwZXJzICYmIChcbiAgICAgICAgLy8gU2hvdyBIZWxwZXJzIGFuZCBTdGF0c1xuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvLXBhbm5lbCc+XG4gICAgICAgICAge1JlY3RzLm1hcCgociwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8taXRlbScga2V5PXtyLmlkfT5cbiAgICAgICAgICAgICAgeydcdTI1QkEgICcgLyogUmVjdElkOntyLmlkfSAgKi99IHtpfSB7ci50ZXh0fSAtLSB7ci54fSx7ci55fVxuICAgICAgICAgICAgICB7ci5zZWxlY3RlZCA/ICcgXHVEODNEXHVERTAxJyA6ICcnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHsgY24gPSAnYnV0dG9uJywgaHVuZGxlT25DbGljaywgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbUmVjdHMsIHNldFJlY3RzXSA9IHVzZUF0b20oT2JqZWN0TGlzdClcbiAgY29uc3QgW3N0YXJ0RHJhd2luZywgc2V0U3RhcnREcmF3aW5nXSA9IHVzZUF0b20oRHJhd2luZylcblxuICAvLyBmdW5jdGlvbiBodW5kbGVUb29sQ2xpY2soZSkge1xuICAvLyAgIHNldFN0YXJ0RHJhd2luZyh0cnVlKVxuICAvLyAgIC8vIGUuc3RvcFByb3BwYWdhdGlvbigpXG4gIC8vICAgLy8gY29uc29sZS5sb2coUmVjdHMpXG5cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZU92ZXIoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwRjAnXG4gICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjZjBlJ1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZU9uTW91c2VvdXQoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgLy8gdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwRjAnXG4gICAgLy8gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDAwMDAwMDAnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gaGFuZGxlT25Nb3VzZU92ZXIoZSl9XG4gICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gaGFuZGxlT25Nb3VzZW91dChlKX1cbiAgICAgIC8vIG9uTW91c2VPdXQ9eyhlKSA9PiAodGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMEYnKX1cbiAgICAgIGNsYXNzTmFtZT17Y259XG4gICAgICBvbkNsaWNrPXtodW5kbGVPbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uMjQnPntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2hvd0hlbHBlcnNCdXR0b24oeyBjbiA9ICdidXR0b24nLCBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtzaG93SGVscGVycywgc2V0U2hvd0hlbHBlcnNdID0gdXNlQXRvbShTaG93SGVscGVyc0F0b20pXG5cbiAgZnVuY3Rpb24gaHVuZGxlVG9vbENsaWNrKGUpIHtcbiAgICAvLyBlLnN0b3BQcm9wcGFnYXRpb24oKVxuICAgIHNldFNob3dIZWxwZXJzKChwcmV2KSA9PiAhcHJldilcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVPbk1vdXNlT3ZlcihlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAvLyB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnIzBGMCdcbiAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmMGUnXG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlT25Nb3VzZW91dChlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZSlcbiAgICAvLyB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnIzBGMCdcbiAgICAvLyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMwMDAwMDAwMCdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25Nb3VzZU92ZXI9eyhlKSA9PiBoYW5kbGVPbk1vdXNlT3ZlcihlKX1cbiAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBoYW5kbGVPbk1vdXNlb3V0KGUpfVxuICAgICAgLy8gb25Nb3VzZU91dD17KGUpID0+ICh0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwRicpfVxuICAgICAgY2xhc3NOYW1lPXtjbn1cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiBodW5kbGVUb29sQ2xpY2soZSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24yNCc+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZWN0YW5nbGUoKSB7XG4gIGNvbnN0IFtSZWN0cywgc2V0UmVjdHNdID0gdXNlQXRvbShPYmplY3RMaXN0KVxuICBzZXRSZWN0cyhbXG4gICAgLi4uUmVjdHMsXG4gICAge1xuICAgICAgdGV4dDogJycsXG4gICAgICBzZWxlY3RlZDogZmFsc2UsXG4gICAgICBpZDogdXVpZCgpLFxuICAgICAgeDogV0lORE9XX1dJRFRIIC8gNCxcbiAgICAgIHk6IFdJTkRPV19IRUlHSFQgLyA0LFxuICAgICAgd2lkdGg6IDEwMCxcbiAgICAgIGhlaWd0aDogMTAwLFxuICAgICAgY29sb3I6IGByZ2JhKCR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KX0sICR7TWF0aC5mbG9vcihcbiAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NVxuICAgICAgKX0sICR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KX0pYCxcblxuICAgICAgdGV4dEVkaXQ6IGZhbHNlLFxuICAgIH0sXG4gIF0pXG59XG5cbmZ1bmN0aW9uIHNpZGUoKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Zz5cbiAgICAgIDxmb3JlaWduT2JqZWN0XG4gICAgICAgIHg9JzEyJ1xuICAgICAgICB5PXs5MH1cbiAgICAgICAgZmlsbD0nI2ZmMDBiNydcbiAgICAgICAgd2lkdGg9JzMwMCdcbiAgICAgICAgLy8gaGVpZ2h0PXs5MCArIDE2ICogUmVjdHMubGVuZ3RofVxuICAgICAgICBoZWlnaHQ9JzU1MCdcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8tcGFubmVsJz5cbiAgICAgICAgICB7UmVjdHMubWFwKChyLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mby1pdGVtJyBrZXk9e3IuaWR9PlxuICAgICAgICAgICAgICB7LyogUmVjdElkOntyLmlkfSAgKi99XG4gICAgICAgICAgICAgIGk6IHtpfSB7ci50ZXh0fVxuICAgICAgICAgICAgICBQb3M6IHtyLnh9LHtyLnl9XG4gICAgICAgICAgICAgIHtyLnNlbGVjdGVkID8gJy0tLScgOiAnJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9yZWlnbk9iamVjdD5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzczZTkzMjI5JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC0yRVZCWlpGUi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNzVRWTY1U1IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ZWlZMUjZFUi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtT1Q3UFZNVDcuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9BcHAnOnsnaWQnOidyb3V0ZXMvQXBwJywncGFyZW50SWQnOidyb290JywncGF0aCc6J0FwcCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9BcHAtVVJPWDNQQTIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUpUV1dCMlhILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSTI3SkRRNlQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RyYXdldHRlJzp7J2lkJzoncm91dGVzL2RyYXdldHRlJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2RyYXdldHRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2RyYXdldHRlLVhNUUFGRkNYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JMjdKRFE2VC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZHJhd2V0dGUvQXBwJzp7J2lkJzoncm91dGVzL2RyYXdldHRlL0FwcCcsJ3BhcmVudElkJzoncm91dGVzL2RyYXdldHRlJywncGF0aCc6J0FwcCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kcmF3ZXR0ZS9BcHAtNkk3WFk3TFIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUNVVUtaTjZTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlRXV0IyWEguanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2RyYXdldHRlL2luZGV4Jzp7J2lkJzoncm91dGVzL2RyYXdldHRlL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZHJhd2V0dGUnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZHJhd2V0dGUvaW5kZXgtNTZVSzVNWEEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUNVVUtaTjZTLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSlRXV0IyWEguanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUVEQUhTNEVFLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTczRTkzMjI5LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9B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
