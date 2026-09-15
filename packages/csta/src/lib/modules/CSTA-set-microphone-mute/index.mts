/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.20 / ECMA-285 §19.1.20): mute
 * so other parties cannot hear the microphone. Generates a Microphone Mute
 * event. If already at the requested value: positive ack and no event (ECMA-269
 * §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setMicrophoneMute.oa.mjs";
export * from "./SetMicrophoneMuteArgument.ta.mjs";
export * from "./SetMicrophoneMuteResult.ta.mjs";
