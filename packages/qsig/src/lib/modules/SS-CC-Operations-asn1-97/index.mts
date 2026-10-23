/**
 * @module
 * @description
 *
 * Call Completion signalling operations (ECMA-186 4th ed.,
 * December 2001): Completion of Calls to Busy Subscriber (SS-CCBS)
 * and Completion of Calls on No Reply (SS-CCNR). User A asks the
 * PISN to monitor User B and to complete the call when User B is
 * free (ECMA-185 §6.1.1, §7.1.1; ECMA-186 §6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-186/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-185/
 */
export * from "./CC-Operations.osa.mjs";
export * from "./CCExtSet.osa.mjs";
export * from "./CcExtension.ta.mjs";
export * from "./CcOptionalArg-fullArg.ta.mjs";
export * from "./CcOptionalArg.ta.mjs";
export * from "./CcRequestArg.ta.mjs";
export * from "./CcRequestRes.ta.mjs";
export * from "./ccCancel.oa.mjs";
export * from "./ccExecPossible.oa.mjs";
export * from "./ccPathReserve.oa.mjs";
export * from "./ccResume.oa.mjs";
export * from "./ccRingout.oa.mjs";
export * from "./ccSuspend.oa.mjs";
export * from "./ccbsRequest.oa.mjs";
export * from "./ccnrRequest.oa.mjs";
export * from "./failedDueToInterworking.oa.mjs";
export * from "./failureToMatch.oa.mjs";
export * from "./longTermRejection.oa.mjs";
export * from "./remoteUserBusyAgain.oa.mjs";
export * from "./shortTermRejection.oa.mjs";
export * from "./unspecified.oa.mjs";
