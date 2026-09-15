/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.7 / ECMA-285 §20.1.7):
 * auto-work mode — Busy→WorkingAfterCall after a call, then optionally to Ready
 * after a timer. DeviceID may be ACD device, ACD group, or agent. Does not
 * generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getAutoWorkMode.oa.mjs";
export * from "./GetAutoWorkModeArgument.ta.mjs";
export * from "./GetAutoWorkModeResult.ta.mjs";
