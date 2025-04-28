import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/api/mint": {};
  "/api/hello": {};
  "/:topic": {
    "topic": string;
  };
  "/:topic/:book": {
    "topic": string;
    "book": string;
  };
};