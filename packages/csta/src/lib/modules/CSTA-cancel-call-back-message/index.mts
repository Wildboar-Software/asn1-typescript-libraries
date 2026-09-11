/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.4 / ECMA-285 §20.1.4): cancel
 * a previous (or all) Call Back Message features, call-related or not. Same
 * empty-target rule as Cancel Call Back. Generates Call Back Message.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./cancelCallBackMessage.oa.mjs";
export * from "./CancelCallBackMessageArgument.ta.mjs";
export * from "./CancelCallBackMessageResult.ta.mjs";
