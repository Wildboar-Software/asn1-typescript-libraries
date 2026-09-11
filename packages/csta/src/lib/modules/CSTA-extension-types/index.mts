/**
 * @description
 *
 * Common CSTA PDU extensions (ECMA-285 §9.8). `CSTACommonArguments`
 * (`APPLICATION 30`) is the envelope for `CSTASecurityData` and
 * vendor `CSTAPrivateData`. Unrecognised private data is discarded;
 * the rest of the message is still processed (ECMA-285 §5.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./CSTACommonArguments.ta.mjs";
export * from "./CSTAPrivateData.ta.mjs";
