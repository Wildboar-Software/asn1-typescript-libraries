/**
 * @description
 *
 * Device Maintenance event (ECMA-269 §23.1.3 / ECMA-285 §21.1.3; overview
 * §6.7.9): Device entered maintenance: cannot accept calls and some CSTA
 * services (e.g. call control). Existing monitors remain; new Monitor Start may
 * fail (Device Out Of Service); event flow may stop except Back In Service.
 * Logical and physical elements may each generate this event. Does not imply
 * capabilities changed if Device Capabilities Changed is supported.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./OutOfServiceEvent.ta.mjs";
