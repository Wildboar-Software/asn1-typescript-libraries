/**
 * @description
 *
 * Logical Device Feature event (ECMA-269 §22.2.3 / ECMA-285 §20.2.3): Agent
 * logged on to an ACD device or group and is ready to contribute; does not
 * imply Ready for ACD calls. Telephone, Set Agent State, or auto log-on at
 * start-up. May be reported for a monitor on the ACD device, ACD group, or
 * agent device (§6.1.1.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./AgentLoggedOnEvent.ta.mjs";
