/**
 * @description
 *
 * Monitor Start (ECMA-269 §15.1.2 / ECMA-285 §13.1.2). CF
 * starts event reports for a call, a device, or calls involving a
 * device. Overview: ECMA-269 §6.6.2. Multiple starts on the same
 * object create distinct monitors.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./monitorStart.oa.mjs";
export * from "./MonitorStartArgument.ta.mjs";
export * from "./MonitorStartResult.ta.mjs";
