/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.5 / ECMA-285 §20.1.5): agent
 * state at a device. Reported states: Busy, Not Ready, Null, Ready, Working
 * After Call, plus logged-on. `pendingAgentState` when Busy or Working After
 * Call and the SF delays the next state. List size 1..32. Does not generate
 * events.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./AgentInfo.ta.mjs";
export * from "./AgentStateCondition.ta.mjs";
export * from "./AgentStateEntry.ta.mjs";
export * from "./AgentStateList.ta.mjs";
export * from "./getAgentState.oa.mjs";
export * from "./GetAgentStateArgument.ta.mjs";
export * from "./GetAgentStateResult.ta.mjs";
