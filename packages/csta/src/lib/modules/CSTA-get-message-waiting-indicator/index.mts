/**
 * @description
 *
 * Physical Device Feature service (ECMA-269 §21.1.8 / ECMA-285 §19.1.8):
 * message-waiting status, typically a dedicated lamp. Does not generate events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getMessageWaitingIndicator.oa.mjs";
export * from "./GetMessageWaitingIndicatorArgument.ta.mjs";
export * from "./GetMessageWaitingIndicatorResult.ta.mjs";
