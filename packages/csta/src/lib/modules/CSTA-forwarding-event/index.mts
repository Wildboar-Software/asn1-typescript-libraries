/**
 * @description
 *
 * Logical Device Feature event (ECMA-269 §22.2.13 / ECMA-285 §20.2.13):
 * Forwarding setting changed — not when a call is actually forwarded. One
 * `forwardingType` per event; multiple types yield multiple events. Types in
 * §6.7.1. Not generated when a Set request leaves the feature unchanged
 * (ECMA-269 §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./ForwardingEvent.ta.mjs";
