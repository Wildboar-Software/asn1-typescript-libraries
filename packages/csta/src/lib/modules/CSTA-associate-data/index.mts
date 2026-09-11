/**
 * @description
 *
 * Associate Data (ECMA-269 §18.1.1 / ECMA-285 §16.1.1). CF
 * associates correlator data, account/auth codes, call qualifying
 * data, language preference, etc. with a call. Commonly causes a
 * Call Information event.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./associateData.oa.mjs";
export * from "./AssociateDataArgument.ta.mjs";
export * from "./AssociateDataResult.ta.mjs";
