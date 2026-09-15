/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.21 / ECMA-285 §20.1.21):
 * presence at a logical device. Presence values (ECMA-269 §12.2.24): available,
 * away, busy, calling, dnd, meeting, offline, unknown (default), vacation,
 * applicationSpecified0–10. 9th-edition feature. Changing presence does not
 * affect other services (e.g. `dnd` does not enable Do Not Disturb). Generates
 * Presence State. If already at the requested value: positive ack and no event
 * (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setPresenceState.oa.mjs";
export * from "./SetPresenceStateArgument.ta.mjs";
export * from "./SetPresenceStateResult.ta.mjs";
