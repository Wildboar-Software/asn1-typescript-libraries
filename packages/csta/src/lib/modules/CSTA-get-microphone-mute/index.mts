/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.10 / ECMA-285 §19.1.10):
 * microphone mute. While muted, no audio is transmitted from the microphone.
 * Does not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getMicrophoneMute.oa.mjs";
export * from "./GetMicrophoneMuteArgument.ta.mjs";
export * from "./GetMicrophoneMuteResult.ta.mjs";
export * from "./MicrophoneMuteList-Item.ta.mjs";
export * from "./MicrophoneMuteList.ta.mjs";
