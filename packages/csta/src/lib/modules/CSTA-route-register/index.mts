/**
 * @description
 *
 * Route Register (ECMA-269 §20.1.1 / ECMA-285 §18.1.1).
 * CF registers as routeing server for one routeing device or, if
 * supported, all routeing devices. Required before Route Request
 * when the SF supports registration (Table 6-11).
 * Route Mode (Get/Set Routeing Mode, Routeing Mode event) is a
 * logical-device attribute: enabling/disabling it does not affect
 * registration, and registration does not affect Route Mode
 * (ECMA-269 §6.7.8.1 Table 6-11).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./routeRegister.oa.mjs";
export * from "./RouteRegisterArgument.ta.mjs";
export * from "./RouteRegisterResult.ta.mjs";
