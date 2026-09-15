/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.6 / ECMA-285 §20.1.6):
 * auto-answer (hands-free connect when a call arrives) and rings before answer.
 * Distinct from auto-originate on Make Call etc.: auto-originate connects only
 * the originating device for that call; auto-answer is a persistent mode for
 * calls arriving at the device. Does not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getAutoAnswer.oa.mjs";
export * from "./GetAutoAnswerArgument.ta.mjs";
export * from "./GetAutoAnswerResult.ta.mjs";
