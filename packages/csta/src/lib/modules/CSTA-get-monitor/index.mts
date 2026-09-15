/**
 * @description
 *
 * Get Monitors (ECMA-269 §15.1.4 / ECMA-285 §13.1.4). CF lists
 * monitors on this association (cross-ref and monitor object).
 * Result is either inline `monitorList` or segmented Monitor Info
 * via `serviceCrossRefID` — not both.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./GetMonitorArgument.ta.mjs";
export * from "./GetMonitorResult-crossRefIDorRegistrationData.ta.mjs";
export * from "./GetMonitorResult.ta.mjs";
export * from "./getMonitors.oa.mjs";
