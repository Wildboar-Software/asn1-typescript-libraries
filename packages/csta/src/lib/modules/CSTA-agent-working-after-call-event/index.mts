/**
 * @description
 *
 * Logical Device Feature event (ECMA-269 §22.2.6 / ECMA-285 §20.2.6): agent
 * entered Working After Call — no longer connected to an ACD call but occupied
 * with related work; cannot receive ACD calls. May be reported for a monitor on
 * the ACD device, ACD group, or agent device (§6.1.1.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./AgentWorkingAfterCallEvent-pendingAgentState.ta.mjs";
export * from "./AgentWorkingAfterCallEvent.ta.mjs";
