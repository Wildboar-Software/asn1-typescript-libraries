/**
 * @description
 *
 * Physical Device Feature event (ECMA-269 §21.2.11 / ECMA-285 §19.2.11):
 * Speaker volume changed (telephone or Set Speaker Volume). Not generated when
 * a Set request leaves the feature unchanged (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./SpeakerVolumeEvent.ta.mjs";
