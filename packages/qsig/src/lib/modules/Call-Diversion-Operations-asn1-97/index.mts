/**
 * @module
 * @description
 *
 * QSIG call diversion (ECMA-174, 3rd edition, December 2001). Call Forwarding
 * Unconditional redirects calls to the served user's PISN number regardless of
 * that user's status. Call Forwarding Busy redirects calls that meet busy. Call
 * Forwarding No Reply redirects calls that are not answered within a predefined
 * time. Call Deflection Immediate uses the CFU protocol and Call Deflection
 * from Alert uses the CFNR protocol (ECMA-174 §6.1; ECMA-173 §6.1.1, §7.1.1,
 * §8.1.1). This module is the X.680 (asn1-97) coding of those operations.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 */
export * from "./BasicService.ta.mjs";
export * from "./Call-Diversion-Operations.osa.mjs";
export * from "./DiversionExtensionSet.osa.mjs";
export {
    _enum_for_DiversionReason,
    DiversionReason,
    DiversionReason_unknown,
    unknown,
    DiversionReason_cfu,
    DiversionReason_cfb,
    DiversionReason_cfnr,
    _decode_DiversionReason,
    _encode_DiversionReason,
} from "./DiversionReason.ta.mjs";
export * from "./IntResult-extension.ta.mjs";
export * from "./IntResult.ta.mjs";
export * from "./IntResultList.ta.mjs";
export {
    _enum_for_Procedure,
    Procedure,
    Procedure_cfu,
    Procedure_cfb,
    Procedure_cfnr,
    _decode_Procedure,
    _encode_Procedure,
} from "./Procedure.ta.mjs";
export * from "./SubscriptionOption.ta.mjs";
export * from "./activateDiversionQ-ArgumentType-extension.ta.mjs";
export * from "./activateDiversionQ-ArgumentType.ta.mjs";
export * from "./activateDiversionQ-ResultType.ta.mjs";
export * from "./activateDiversionQ.oa.mjs";
export * from "./callRerouteing-ArgumentType-extension.ta.mjs";
export * from "./callRerouteing-ArgumentType.ta.mjs";
export * from "./callRerouteing-ResultType.ta.mjs";
export * from "./callRerouteing.oa.mjs";
export * from "./cfnrDivertedLegFailed-ArgumentType.ta.mjs";
export * from "./cfnrDivertedLegFailed.oa.mjs";
export * from "./checkRestriction-ArgumentType-extension.ta.mjs";
export * from "./checkRestriction-ArgumentType.ta.mjs";
export * from "./checkRestriction-ResultType.ta.mjs";
export * from "./checkRestriction.oa.mjs";
export * from "./deactivateDiversionQ-ArgumentType-extension.ta.mjs";
export * from "./deactivateDiversionQ-ArgumentType.ta.mjs";
export * from "./deactivateDiversionQ-ResultType.ta.mjs";
export * from "./deactivateDiversionQ.oa.mjs";
export * from "./diversionToServedUserNr.oa.mjs";
export * from "./divertingLegInformation1-ArgumentType-extension.ta.mjs";
export * from "./divertingLegInformation1-ArgumentType.ta.mjs";
export * from "./divertingLegInformation1.oa.mjs";
export * from "./divertingLegInformation2-ArgumentType-extension.ta.mjs";
export * from "./divertingLegInformation2-ArgumentType.ta.mjs";
export * from "./divertingLegInformation2.oa.mjs";
export * from "./divertingLegInformation3-ArgumentType-extension.ta.mjs";
export * from "./divertingLegInformation3-ArgumentType.ta.mjs";
export * from "./divertingLegInformation3.oa.mjs";
export * from "./interrogateDiversionQ-ArgumentType-extension.ta.mjs";
export * from "./interrogateDiversionQ-ArgumentType.ta.mjs";
export * from "./interrogateDiversionQ.oa.mjs";
export * from "./invalidDivertedToNr.oa.mjs";
export * from "./notAuthorized.oa.mjs";
export * from "./numberOfDiversionsExceeded.oa.mjs";
export * from "./specialServiceNr.oa.mjs";
export * from "./temporarilyUnavailable.oa.mjs";
export * from "./unspecified.oa.mjs";
