/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";
// export { CcExtension, _decode_CcExtension, _encode_CcExtension } from "../SS-CC-Operations-asn1-97/CcExtension.ta.mjs";
import { remoteUserBusyAgain } from "../SS-CC-Operations-asn1-97/remoteUserBusyAgain.oa.mjs";
// export { remoteUserBusyAgain } from "../SS-CC-Operations-asn1-97/remoteUserBusyAgain.oa.mjs";
import { failureToMatch } from "../SS-CC-Operations-asn1-97/failureToMatch.oa.mjs";
// export { failureToMatch } from "../SS-CC-Operations-asn1-97/failureToMatch.oa.mjs";
import { failedDueToInterworking } from "../SS-CC-Operations-asn1-97/failedDueToInterworking.oa.mjs";
// export { failedDueToInterworking } from "../SS-CC-Operations-asn1-97/failedDueToInterworking.oa.mjs";
import { unspecified } from "../SS-CC-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../SS-CC-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary ccPathReserve
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccPathReserve OPERATION ::= {
 *     ARGUMENT CcExtension
 *     RESULT CcExtension
 *     ERRORS {
 *         remoteUserBusyAgain
 *         | failureToMatch
 *         | failedDueToInterworking
 *         | unspecified
 *     }
 *     CODE local: 30
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcExtension, CcExtension>}
 * @implements {OPERATION<CcExtension, CcExtension>}
 */
export
const ccPathReserve: OPERATION<CcExtension, CcExtension> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcExtension,
        "&ResultType": _decode_CcExtension,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcExtension,
        "&ResultType": _encode_CcExtension,
    },
    "&Errors": [ remoteUserBusyAgain, failureToMatch, failedDueToInterworking, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 30 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
