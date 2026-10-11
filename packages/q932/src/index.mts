/**
 * @packageDocumentation
 *
 * ITU-T Recommendation Q.932 (05/1998) facility and addressing types.
 * Import from `@wildboar/q932`. Per-module subpaths are also available,
 * for example `@wildboar/q932/Addressing-Data-Elements`.
 *
 * `unknown` and `abbreviatedNumber` collide between `PublicTypeOfNumber`
 * and `PrivateTypeOfNumber`. `unrecognizedInvocation` collides between
 * `ReturnResultProblem` and `ReturnErrorProblem`. Use the long forms.
 *
 * `OPERATION`, `ERROR`, and `Code` are re-exported from `@wildboar/rose`.
 */
export * from "./lib/modules/Addressing-Data-Elements/index.mjs";
export * from "./lib/modules/Facility-Information-Element-Components/index.mjs";
export * from "./lib/modules/Network-Facility-Extension/index.mjs";
export * from "./lib/modules/Network-Protocol-Profile-component/index.mjs";
export * from "./lib/modules/Remote-Operations-Information-Objects/index.mjs";
