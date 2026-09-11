/**
 * @description
 *
 * Route End (ECMA-269 §20.2.2 / ECMA-285 §18.2.2). Ends a
 * routeing dialogue. Bi-directional: CF uses it to stop without
 * providing a destination (SF then uses its default algorithm;
 * the call is not cleared). SF uses it when routing succeeded,
 * the caller abandoned, a timeout expired, or resources failed.
 * `routeRegisterReqID` identifies a routeing *registration*
 * (device or all devices). `routeingCrossRefID` identifies a
 * per-call routeing *dialogue* and is unique within the
 * registration (ECMA-269 §6.7.8.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./routeEndRequest.oa.mjs";
export * from "./RouteEndRequestArgument.ta.mjs";
