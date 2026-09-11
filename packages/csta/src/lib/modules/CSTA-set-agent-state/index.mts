/**
 * @description
 *
 * Logical Device Feature service (ECMA-269 §22.1.15 / ECMA-285 §20.1.15):
 * request loggedOn, loggedOff, notReady, ready, or workingAfterCall. Busy is
 * not requested here — it is entered by taking an ACD call. If Busy or
 * WorkingAfterCall, transition may be delayed (`pendingAgentState`). ACD
 * device/group applies to all members if allowed. Generates the matching agent
 * event. If already at the requested value: positive ack and no event (ECMA-269
 * §9.5.1 FR 8).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./ReqAgentState.ta.mjs";
export * from "./setAgentState.oa.mjs";
export * from "./SetAgentStateArgument.ta.mjs";
export * from "./SetAgentStateResult.ta.mjs";
