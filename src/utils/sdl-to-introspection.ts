// COPIED FROM https://github.com/graphql-kit/graphql-voyager/blob/01bd62d7369527f8c50e045601859e78d64d282e/src/utils/sdl-to-introspection.ts

import { parse } from "graphql/language";
import { buildSchema } from "graphql/utilities";
import { KnownDirectivesRule } from "graphql/validation/rules/KnownDirectivesRule";
import { specifiedSDLRules } from "graphql/validation/specifiedRules";
import { validateSDL } from "graphql/validation/validate";

const validationRules = specifiedSDLRules.filter(
  // Many consumes/produces SDL files with custom directives and without defining them.
  // This practice is contradict spec but is very widespread at the same time.
  (rule) => rule !== KnownDirectivesRule,
);

export function sdlToSchema(sdl: string) {
  const documentAST = parse(sdl);
  const errors = validateSDL(documentAST, null, validationRules);
  if (errors.length !== 0) {
    throw new Error(errors.map((error) => error.message).join("\n\n"));
  }

  return buildSchema(sdl, { assumeValidSDL: true });
}
