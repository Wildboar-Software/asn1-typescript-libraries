/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.21 / ECMA-285 §19.1.21):
 * start/stop ringing and optionally set pattern and volume for this ringing
 * cycle only (not permanent programming). At least one of `ringMode`,
 * `ringPattern`, `ringVolume`. Generates Ringer Status. Some switches do not
 * allow CF to ring a device. If already at the requested value: positive ack
 * and no event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setRingerStatus.oa.mjs";
export * from "./SetRingerStatusArgument.ta.mjs";
export * from "./SetRingerStatusResult.ta.mjs";
