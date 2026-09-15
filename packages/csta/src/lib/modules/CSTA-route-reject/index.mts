/**
 * @description
 *
 * Route Reject (ECMA-269 §20.2.3 / ECMA-285 §18.2.3). CF tells
 * the SF to return the call to the originating network for
 * alternate routeing. SF typically follows with Route End.
 * `routeRegisterReqID` identifies a routeing *registration*
 * (device or all devices). `routeingCrossRefID` identifies a
 * per-call routeing *dialogue* and is unique within the
 * registration (ECMA-269 §6.7.8.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./RejectCause.ta.mjs";
export * from "./routeReject.oa.mjs";
export * from "./RouteRejectArgument.ta.mjs";
