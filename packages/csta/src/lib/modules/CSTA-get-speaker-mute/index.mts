/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.12 / ECMA-285 §19.1.12):
 * speaker mute. While muted, no audio is transmitted over the speaker. Does not
 * generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getSpeakerMute.oa.mjs";
export * from "./GetSpeakerMuteArgument.ta.mjs";
export * from "./GetSpeakerMuteResult.ta.mjs";
export * from "./SpeakerMuteList-Item.ta.mjs";
export * from "./SpeakerMuteList.ta.mjs";
