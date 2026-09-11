/**
 * @description
 *
 * Physical Device Feature event (ECMA-269 §21.2.9 / ECMA-285 §19.2.9): Ringer
 * status changed (Set Ringer Status or the switching function). Reports ringer
 * status only — use call-control events (e.g. Delivered) for call activity. At
 * least one of `ringMode`, `ringCount`, `ringPattern`, `ringVolume`,
 * `ringDuration`. Not generated when a Set request leaves the feature unchanged
 * (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./RingerStatusEvent.ta.mjs";
