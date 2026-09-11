/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.2 / ECMA-285 §20.1.2): leave a
 * switching-function-defined message asking the target to call the originator.
 * Unlike Call Back, the originator is not called back. Message content and
 * notification method are SF-defined. Generates Call Back Message.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./callBackMessageNonCallRelated.oa.mjs";
export * from "./CallBackMessageNonCallRelatedArgument.ta.mjs";
export * from "./CallBackMessageNonCallRelatedResult.ta.mjs";
