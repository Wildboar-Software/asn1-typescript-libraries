/**
 * @description
 *
 * Re-Route (ECMA-269 §20.2.1 / ECMA-285 §18.2.1). SF asks CF
 * for an alternate destination after a previous Route Select, for
 * the same `routeingCrossRefID` dialogue.
 * `routeRegisterReqID` identifies a routeing *registration*
 * (device or all devices). `routeingCrossRefID` identifies a
 * per-call routeing *dialogue* and is unique within the
 * registration (ECMA-269 §6.7.8.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./reRouteRequest.oa.mjs";
export * from "./ReRouteRequestArgument.ta.mjs";
