/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.4 / ECMA-285 §19.1.4):
 * snapshot of one or all displays. Display count via capabilities exchange.
 * Does not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./DisplayList-Item.ta.mjs";
export * from "./DisplayList.ta.mjs";
export * from "./getDisplay.oa.mjs";
export * from "./GetDisplayArgument.ta.mjs";
export * from "./GetDisplayResult.ta.mjs";
