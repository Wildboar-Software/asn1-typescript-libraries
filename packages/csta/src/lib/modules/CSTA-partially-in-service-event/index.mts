/**
 * @description
 *
 * Device Maintenance event (ECMA-269 §23.1.4 / ECMA-285 §21.1.4; overview
 * §6.7.9): Part of the device cannot accept calls or some CSTA services (e.g. a
 * group with mixed in-/out-of-service members). Monitors remain; event flow may
 * shrink. Recovery: Back In Service. Further failure: Out Of Service. Causes:
 * Forced Transition, Maintenance, Normal.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./PartiallyInServiceEvent.ta.mjs";
