/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.23 / ECMA-285 §19.1.23):
 * speaker volume for one apparatus. Generates Speaker Volume. If already at the
 * requested value: positive ack and no event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setSpeakerVolume.oa.mjs";
export * from "./SetSpeakerVolumeArgument.ta.mjs";
export * from "./SetSpeakerVolumeResult.ta.mjs";
