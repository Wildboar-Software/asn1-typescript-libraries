/**
 * @description
 *
 * Monitor Stop (ECMA-269 §15.1.3 / ECMA-285 §13.1.3).
 * Terminates a monitor. CF→SF to cancel, or SF→CF to signal that
 * the monitor has ended (call gone, object left sub-domain, load).
 * After a positive ack the cross-ref is invalid.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./monitorStop.oa.mjs";
export * from "./MonitorStopArgument.ta.mjs";
export * from "./MonitorStopResult.ta.mjs";
