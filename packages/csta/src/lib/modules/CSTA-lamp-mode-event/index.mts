/**
 * @description
 *
 * Physical Device Feature event (ECMA-269 §21.2.5 / ECMA-285 §19.2.5): Lamp
 * mode changed (Set Lamp Mode or a feature change from a manual button). At
 * least one of `lampLabel`, `lampBrightness`, `lampColor` in addition to
 * mandatory fields. Not generated when a Set request leaves the feature
 * unchanged (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./LampModeEvent.ta.mjs";
