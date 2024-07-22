import { Voyager } from "graphql-voyager";
import { sdlToSchema } from "./utils/sdl-to-introspection";

import "graphql-voyager/dist/voyager.css";
import "./App.scss";

import schema from "./assets/schema.graphql?raw";

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
