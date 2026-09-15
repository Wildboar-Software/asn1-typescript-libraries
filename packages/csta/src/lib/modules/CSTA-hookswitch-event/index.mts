/**
 * @description
 *
 * Physical Device Feature event (ECMA-269 §21.2.4 / ECMA-285 §19.2.4):
 * On-hook/off-hook changed (Set Hookswitch Status, manual, or a call-control
 * service that affected the hookswitch). Not generated when a Set request
 * leaves the feature unchanged (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./HookswitchEvent.ta.mjs";
