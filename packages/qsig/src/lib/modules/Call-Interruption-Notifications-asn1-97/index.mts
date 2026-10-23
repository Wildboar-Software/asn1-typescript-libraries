/**
 * @module
 * @description
 *
 * Notifications for SS-CPI (ECMA-264 3rd ed., Dec 2001, §6.3.2).
 * Sent in the Notification indicator on the established call, not
 * in a Facility APDU. They mark an impending interruption, its
 * cancellation, or the forced release.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 */
export * from "./Call-Interruption-Notifications.osa.mjs";
export * from "./interruptionForcedRelease.oa.mjs";
export * from "./interruptionIsImpending.oa.mjs";
export * from "./interruptionTerminated.oa.mjs";
