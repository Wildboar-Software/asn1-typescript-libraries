/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.16 / ECMA-285 §20.1.16):
 * auto-answer (hands-free). Distinct from auto-originate on Make Call:
 * auto-originate connects only the originating device for that call;
 * auto-answer is a persistent mode for arriving calls. Generates Auto Answer.
 * If already at the requested value: positive ack and no event (ECMA-269 §9.5.1
 * FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setAutoAnswer.oa.mjs";
export * from "./SetAutoAnswerArgument.ta.mjs";
export * from "./SetAutoAnswerResult.ta.mjs";
