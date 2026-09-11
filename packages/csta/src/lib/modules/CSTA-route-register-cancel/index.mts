/**
 * @description
 *
 * Route Register Cancel (ECMA-269 §20.1.3 / ECMA-285 §18.1.3).
 * CF unregisters as routeing server. After the positive ack, no
 * further routeing requests arrive for that registration.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./routeRegisterCancel.oa.mjs";
export * from "./RouteRegisterCancelArgument.ta.mjs";
export * from "./RouteRegisterCancelResult.ta.mjs";
