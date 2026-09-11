/**
 * @description
 *
 * Logical Device Feature event (ECMA-269 §22.2.4 / ECMA-285 §20.2.4): Agent
 * logged on but not prepared to handle ACD-distributed calls; may receive
 * non-ACD calls. May be reported for a monitor on the ACD device, ACD group, or
 * agent device (§6.1.1.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./AgentNotReadyEvent.ta.mjs";
