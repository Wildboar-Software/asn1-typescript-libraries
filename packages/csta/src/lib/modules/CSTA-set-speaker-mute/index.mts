/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.22 / ECMA-285 §19.1.22):
 * speaker mute. While muted, no audio is transmitted over the speaker.
 * Generates Speaker Mute. If already at the requested value: positive ack and
 * no event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setSpeakerMute.oa.mjs";
export * from "./SetSpeakerMuteArgument.ta.mjs";
export * from "./SetSpeakerMuteResult.ta.mjs";
