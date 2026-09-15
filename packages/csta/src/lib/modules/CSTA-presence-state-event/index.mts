/**
 * @description
 *
 * Logical Device Feature event (ECMA-269 §22.2.14 / ECMA-285 §20.2.14):
 * Presence changed (telephone or Set Presence State). Presence values (ECMA-269
 * §12.2.24): available, away, busy, calling, dnd, meeting, offline, unknown
 * (default), vacation, applicationSpecified0–10. 9th-edition feature. Not
 * generated when a Set request leaves the feature unchanged (ECMA-269 §9.5.1 FR
 * 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./PresenceStateEvent.ta.mjs";
