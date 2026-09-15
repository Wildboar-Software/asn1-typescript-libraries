/**
 * @description
 *
 * Set Routeing Mode (ECMA-269 §22.1.22 / ECMA-285 §20.1.22).
 * CF enables or disables Route Mode on a device without cancelling
 * Route Register. Disabled Route Mode suspends Route Request for
 * that device.
 * Route Mode (Get/Set Routeing Mode, Routeing Mode event) is a
 * logical-device attribute: enabling/disabling it does not affect
 * registration, and registration does not affect Route Mode
 * (ECMA-269 §6.7.8.1 Table 6-11).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setRouteingMode.oa.mjs";
export * from "./SetRouteingModeArgument.ta.mjs";
export * from "./SetRouteingModeResult.ta.mjs";
