import { Voyager } from "graphql-voyager";
import { sdlToSchema } from "./utils/sdl-to-introspection";
import schema from "@caido/schema-proxy/graphql?raw";

import "graphql-voyager/dist/voyager.css";
import "./App.scss";

export default function App() {
  return (
    <Voyager
      introspection={sdlToSchema(schema)}
      displayOptions={{
        skipRelay: false,
        showLeafFields: true,
        skipDeprecated: true,
        sortByAlphabet: true,
      }}
      hideVoyagerLogo={true}
    />
  );
}
