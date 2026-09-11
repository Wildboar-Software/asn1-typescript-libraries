/**
 * @description
 *
 * Route Request (ECMA-269 §20.2.4 / ECMA-285 §18.2.4). SF
 * starts a per-call routeing dialogue: CF should provide a
 * destination. Allocates `routeingCrossRefID`. Conditions for
 * sending this vs requiring registration/Route Mode: Table 6-11.
 * `routeRegisterReqID` identifies a routeing *registration*
 * (device or all devices). `routeingCrossRefID` identifies a
 * per-call routeing *dialogue* and is unique within the
 * registration (ECMA-269 §6.7.8.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./routeRequest.oa.mjs";
export * from "./RouteRequestArgument.ta.mjs";
