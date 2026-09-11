/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.16 / ECMA-285 §19.1.16):
 * on-hook/off-hook for an auditory apparatus (speakerphone, handset, headset).
 * Generates a Hookswitch event. If already at the requested value: positive ack
 * and no event (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setHookswitchStatus.oa.mjs";
export * from "./SetHookswitchStatusArgument.ta.mjs";
export * from "./SetHookswitchStatusResult.ta.mjs";
