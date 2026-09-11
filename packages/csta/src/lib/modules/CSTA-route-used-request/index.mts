/**
 * @description
 *
 * Route Used (ECMA-269 §20.2.6 / ECMA-285 §18.2.6). SF reports
 * the actual destination after Route Select with `routeUsedReq`.
 * That destination may differ from `routeSelected` (e.g. forwarding).
 * `routeRegisterReqID` identifies a routeing *registration*
 * (device or all devices). `routeingCrossRefID` identifies a
 * per-call routeing *dialogue* and is unique within the
 * registration (ECMA-269 §6.7.8.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./routeUsedRequest.oa.mjs";
export * from "./RouteUsedRequestArgument.ta.mjs";
