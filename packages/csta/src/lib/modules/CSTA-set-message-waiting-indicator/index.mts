/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.18 / ECMA-285 §19.1.18):
 * message-waiting indicator, typically a dedicated lamp. Generates a Message
 * Waiting event. If already at the requested value: positive ack and no event
 * (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./setMessageWaitingIndicator.oa.mjs";
export * from "./SetMessageWaitingIndicatorArgument.ta.mjs";
export * from "./SetMessageWaitingIndicatorResult.ta.mjs";
