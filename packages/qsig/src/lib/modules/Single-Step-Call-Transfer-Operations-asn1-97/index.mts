/**
 * @module
 * @description
 *
 * QSIG Single Step Call Transfer (SS-SSCT), ECMA-300 2nd edition
 * (December 2001). User A replaces a call with User B by a new call
 * between User B and User C, without already having a call to User C.
 * The Rerouting PINX may be the Transferring PINX, the Transferred
 * PINX, or a Transit PINX on the original call (ECMA-300 §4.2.2).
 * Annex E assigns bit 17, `ssSSCTreRoutingSupported`, of `FeatureIdList`
 * in Common-Information-Operations (ECMA-251 §6.3.1). That bit is
 * meaningful in both directions during call establishment. Provision
 * follows ECMA-299 §6.2.1 (ECMA-300 §6.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-300/
 */
export * from "./AwaitConnect.ta.mjs";
export * from "./DummyArg.ta.mjs";
export * from "./DummyRes.ta.mjs";
export * from "./SSCTDigitInfoArg-argumentExtension.ta.mjs";
export * from "./SSCTDigitInfoArg.ta.mjs";
export * from "./SSCTExtSet.osa.mjs";
export * from "./SSCTInitiateArg-argumentExtension.ta.mjs";
export * from "./SSCTInitiateArg.ta.mjs";
export * from "./SSCTSetupArg-argumentExtension.ta.mjs";
export * from "./SSCTSetupArg.ta.mjs";
export * from "./Single-Step-Call-Transfer-Operations.osa.mjs";
export * from "./ssctDigitInfo.oa.mjs";
export * from "./ssctInitiate.oa.mjs";
export * from "./ssctPostDial.oa.mjs";
export * from "./ssctSetup.oa.mjs";
export * from "./unspecified.oa.mjs";
