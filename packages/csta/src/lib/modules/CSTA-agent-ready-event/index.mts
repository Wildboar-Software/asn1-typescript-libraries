/**
 * @description
 *
 * Logical Device Feature event (ECMA-269 §22.2.5 / ECMA-285 §20.2.5): Agent
 * prepared to handle ACD calls (may still have non-ACD calls). Auto-work timer,
 * telephone, Set Agent State, or supervisor. May be reported for a monitor on
 * the ACD device, ACD group, or agent device (§6.1.1.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./AgentReadyEvent.ta.mjs";
