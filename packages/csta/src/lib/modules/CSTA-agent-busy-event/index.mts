/**
 * @description
 *
 * Logical Device Feature event (ECMA-269 §22.2.1 / ECMA-285 §20.2.1): Agent
 * entered Busy: involved with an ACD call (even if held). May still accept
 * non-ACD calls. Agent/supervisor/private calls may or may not cause this. May
 * be reported for a monitor on the ACD device, ACD group, or agent device
 * (§6.1.1.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./AgentBusyEvent.ta.mjs";
