/**
 * @description
 *
 * Route Select (ECMA-269 §20.2.5 / ECMA-285 §18.2.5). CF
 * provides the destination requested by Route Request or Re-Route.
 * `routeUsedReq` asks the SF to send Route Used with the actual
 * destination (which may differ after forwarding).
 * `routeRegisterReqID` identifies a routeing *registration*
 * (device or all devices). `routeingCrossRefID` identifies a
 * per-call routeing *dialogue* and is unique within the
 * registration (ECMA-269 §6.7.8.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./routeSelectRequest.oa.mjs";
export * from "./RouteSelectRequestArgument.ta.mjs";
