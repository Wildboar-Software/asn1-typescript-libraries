/**
 * @description
 *
 * Routeing Mode event (ECMA-269 §22.2.15 / ECMA-285 §20.2.15).
 * Route Mode changed for a device (typically after Set Routeing
 * Mode).
 * Route Mode (Get/Set Routeing Mode, Routeing Mode event) is a
 * logical-device attribute: enabling/disabling it does not affect
 * registration, and registration does not affect Route Mode
 * (ECMA-269 §6.7.8.1 Table 6-11).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./RouteingModeEvent.ta.mjs";
