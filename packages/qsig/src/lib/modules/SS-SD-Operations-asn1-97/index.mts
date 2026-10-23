/**
 * @module
 * @description
 *
 * QSIG Simple Dialog (ECMA-311, 2nd edition, December 2001). The Server User
 * PINX sends display text to the Client User PINX, and the Client User PINX
 * sends keypad information back. The service is used only for those two kinds
 * of information, on an existing call or on a call-independent connection.
 * ECMA-311 §1 places stage 1 and stage 2 in ECMA-310; this module follows the
 * stage 3 procedures in ECMA-311.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 */
export * from "./BMPStringExtended.ta.mjs";
export * from "./BMPStringNormal.ta.mjs";
export * from "./DisplayArg.ta.mjs";
export * from "./DisplayString.ta.mjs";
export * from "./KeypadArg.ta.mjs";
export * from "./SD-Operations.osa.mjs";
export * from "./SDExtSet.osa.mjs";
export * from "./SDExtension.ta.mjs";
export * from "./display.oa.mjs";
export * from "./displayTemporarilyNotAvailable.oa.mjs";
export * from "./keypad.oa.mjs";
export * from "./noDisplayAvailable.oa.mjs";
export * from "./notPresentable.oa.mjs";
export * from "./unspecified.oa.mjs";
