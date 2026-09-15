/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.13 / ECMA-285 §20.1.13):
 * presence at a logical device. Presence values (ECMA-269 §12.2.24): available,
 * away, busy, calling, dnd, meeting, offline, unknown (default), vacation,
 * applicationSpecified0–10. 9th-edition feature. `dnd` does not activate Do Not
 * Disturb (§22.1.21.3.4 FR 1). Does not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getPresenceState.oa.mjs";
export * from "./GetPresenceStateArgument.ta.mjs";
export * from "./GetPresenceStateResult.ta.mjs";
