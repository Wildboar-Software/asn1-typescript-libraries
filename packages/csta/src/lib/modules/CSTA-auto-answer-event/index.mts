/**
 * @description
 *
 * Logical Device Feature event (ECMA-269 §22.2.7 / ECMA-285 §20.2.7):
 * Auto-answer on/off changed (telephone or Set Auto Answer). Not generated when
 * a Set request leaves the feature unchanged (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./AutoAnswerEvent.ta.mjs";
