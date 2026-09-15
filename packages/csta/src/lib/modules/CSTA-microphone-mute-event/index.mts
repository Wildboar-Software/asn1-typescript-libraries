/**
 * @description
 *
 * Physical Device Feature event (ECMA-269 §21.2.8 / ECMA-285 §19.2.8):
 * Microphone mute changed (telephone or Set Microphone Mute). Not generated
 * when a Set request leaves the feature unchanged (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./MicrophoneMuteEvent.ta.mjs";
