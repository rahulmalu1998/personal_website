import ReactGA from "react-ga";
ReactGA.initialize("UA-000000-01");
ReactGA.pageview(window.location.pathname + window.location.search);

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => {
        ReactGA.event({
          category: "Web Vitals",
          action: "CLS",
          value: metric.value,
        });
        onPerfEntry(metric);
      });
      getFID((metric) => {
        ReactGA.event({
          category: "Web Vitals",
          action: "FID",
          value: metric.value,
        });
        onPerfEntry(metric);
      });
      getFCP((metric) => {
        ReactGA.event({
          category: "Web Vitals",
          action: "FCP",
          value: metric.value,
        });
        onPerfEntry(metric);
      });
      getLCP((metric) => {
        ReactGA.event({
          category: "Web Vitals",
          action: "LCP",
          value: metric.value,
        });
        onPerfEntry(metric);
      });
      getTTFB((metric) => {
        ReactGA.event({
          category: "Web Vitals",
          action: "TTFB",
          value: metric.value,
        });
        onPerfEntry(metric);
      });
    });
  }
};

export default reportWebVitals;
