/**
 * @description
 *
 * Private Event: vendor-specific event not defined by CSTA. Computing function
 * receives it via a monitor; there is no mechanism for CF to send Private
 * events to SF. Do not invent private-data layouts (ECMA-269 §29.3.1 /
 * §9.4.2.4, ECMA-285 §27.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./PrivateEvent.ta.mjs";
