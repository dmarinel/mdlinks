// import fetchMock from "fetch-mock"

const nodeFetch = jest.requireActual("node-fetch");
const fetchMock = require("fetch-mock").sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});

export default fetchMock
  .mock("https://es.wikipedia.org/wiki/Markdown", 200)
  .mock("https://nodejs.org/", 200)
  .mock("http://www.abab.com.pe/aldo-bruno", 404);

  nodeFetch.default = fetchMock;