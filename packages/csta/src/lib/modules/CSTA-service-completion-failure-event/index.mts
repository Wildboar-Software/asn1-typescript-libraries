/**
 * @description
 *
 * Service Completion Failure (ECMA-269 §18.2.5 / ECMA-285
 * §16.2.5). A previous multi-step CF-initiated service failed
 * before its successful completion conditions. Which services are
 * multi-step is advertised in capability exchange.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./OtherCall.ta.mjs";
export * from "./PrimaryOrSecondaryCall.ta.mjs";
export * from "./ServiceCompletionFailureEvent.ta.mjs";
