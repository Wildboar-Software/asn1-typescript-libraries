/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CcRequestArg, _decode_CcRequestArg, _encode_CcRequestArg } from "../SS-CC-Operations-asn1-97/CcRequestArg.ta.mjs";
// export { CcRequestArg, _decode_CcRequestArg, _encode_CcRequestArg } from "../SS-CC-Operations-asn1-97/CcRequestArg.ta.mjs";
import { CcRequestRes, _decode_CcRequestRes, _encode_CcRequestRes } from "../SS-CC-Operations-asn1-97/CcRequestRes.ta.mjs";
// export { CcRequestRes, _decode_CcRequestRes, _encode_CcRequestRes } from "../SS-CC-Operations-asn1-97/CcRequestRes.ta.mjs";
import { shortTermRejection } from "../SS-CC-Operations-asn1-97/shortTermRejection.oa.mjs";
// export { shortTermRejection } from "../SS-CC-Operations-asn1-97/shortTermRejection.oa.mjs";
import { longTermRejection } from "../SS-CC-Operations-asn1-97/longTermRejection.oa.mjs";
// export { longTermRejection } from "../SS-CC-Operations-asn1-97/longTermRejection.oa.mjs";
import { unspecified } from "../SS-CC-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../SS-CC-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";


/**
 * @summary ccnrRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ccnrRequest OPERATION ::= {
 *     ARGUMENT CcRequestArg
 *     RESULT CcRequestRes
 *     ERRORS {
 *         shortTermRejection
 *         | longTermRejection
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 27
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CcRequestArg, CcRequestRes>}
 * @implements {OPERATION<CcRequestArg, CcRequestRes>}
 */
export
const ccnrRequest: OPERATION<CcRequestArg, CcRequestRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CcRequestArg,
        "&ResultType": _decode_CcRequestRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CcRequestArg,
        "&ResultType": _encode_CcRequestRes,
    },
    "&Errors": [ shortTermRejection, longTermRejection, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 27 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
