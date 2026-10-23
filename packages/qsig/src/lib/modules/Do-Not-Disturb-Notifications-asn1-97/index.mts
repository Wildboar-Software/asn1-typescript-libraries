/**
 * @module
 * @description
 *
 * Notification that an incoming call was rejected because SS-DND is
 * active (ECMA-194 4th ed., Dec 2001, §6.3.2). Carried in the
 * Notification indicator, not in a Facility APDU. Service behaviour
 * is specified in ECMA-193.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 */
export * from "./Do-Not-Disturb-Notifications.osa.mjs";
export * from "./doNotDisturb.oa.mjs";
