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
import { unspecified } from "../SS-CC-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../SS-CC-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary ccRingout
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccRingout OPERATION ::= {
 *     ARGUMENT CcExtension
 *     RETURN RESULT FALSE
 *     ERRORS {
 *         remoteUserBusyAgain
 *         | failureToMatch
 *         | unspecified
 *     }
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 31
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcExtension>}
 * @implements {OPERATION<CcExtension>}
 */
export
const ccRingout: OPERATION<CcExtension> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcExtension,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcExtension,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&Errors": [ remoteUserBusyAgain, failureToMatch, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 31 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
