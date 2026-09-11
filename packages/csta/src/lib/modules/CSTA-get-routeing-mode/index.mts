/**
 * @description
 *
 * Get Routeing Mode (ECMA-269 §22.1.14 / ECMA-285 §20.1.14).
 * CF queries whether a device can issue Route Request to the CF.
 * Distinct from Route Register.
 * Route Mode (Get/Set Routeing Mode, Routeing Mode event) is a
 * logical-device attribute: enabling/disabling it does not affect
 * registration, and registration does not affect Route Mode
 * (ECMA-269 §6.7.8.1 Table 6-11).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getRouteingMode.oa.mjs";
export * from "./GetRouteingModeArgument.ta.mjs";
export * from "./GetRouteingModeResult.ta.mjs";
