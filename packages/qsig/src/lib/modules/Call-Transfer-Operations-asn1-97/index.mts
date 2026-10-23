/**
 * @module
 * @description
 *
 * QSIG Call Transfer (SS-CT), ECMA-178 3rd edition (December 2001).
 * User A transforms two calls into one call between User B and User C.
 * Join is mandatory; rerouteing is optional and falls back to join.
 * Service: ECMA-177 3rd edition (December 2001).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 */
export * from "./CTActiveArg-argumentExtension.ta.mjs";
export * from "./CTActiveArg.ta.mjs";
export * from "./CTCompleteArg-argumentExtension.ta.mjs";
export * from "./CTCompleteArg.ta.mjs";
export * from "./CTExtSet.osa.mjs";
export * from "./CTIdentifyRes-resultExtension.ta.mjs";
export * from "./CTIdentifyRes.ta.mjs";
export * from "./CTInitiateArg-argumentExtension.ta.mjs";
export * from "./CTInitiateArg.ta.mjs";
export * from "./CTSetupArg-argumentExtension.ta.mjs";
export * from "./CTSetupArg.ta.mjs";
export * from "./CTUpdateArg-argumentExtension.ta.mjs";
export * from "./CTUpdateArg.ta.mjs";
export * from "./Call-Transfer-Operations.osa.mjs";
export * from "./CallIdentity.ta.mjs";
export * from "./CallStatus.ta.mjs";
export * from "./DummyArg.ta.mjs";
export * from "./DummyRes.ta.mjs";
export * from "./EndDesignation.ta.mjs";
export * from "./SubaddressTransferArg-argumentExtension.ta.mjs";
export * from "./SubaddressTransferArg.ta.mjs";
export * from "./callTransferAbandon.oa.mjs";
export * from "./callTransferActive.oa.mjs";
export * from "./callTransferComplete.oa.mjs";
export * from "./callTransferIdentify.oa.mjs";
export * from "./callTransferInitiate.oa.mjs";
export * from "./callTransferSetup.oa.mjs";
export * from "./callTransferUpdate.oa.mjs";
export * from "./establishmentFailure.oa.mjs";
export * from "./invalidRerouteingNumber.oa.mjs";
export * from "./subaddressTransfer.oa.mjs";
export * from "./unrecognizedCallIdentity.oa.mjs";
export * from "./unspecified.oa.mjs";
