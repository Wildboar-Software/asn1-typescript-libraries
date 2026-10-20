/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CIRequestArg, _decode_CIRequestArg, _encode_CIRequestArg } from "../Call-Intrusion-Operations-asn1-97/CIRequestArg.ta.mjs";
// export { CIRequestArg, _decode_CIRequestArg, _encode_CIRequestArg } from "../Call-Intrusion-Operations-asn1-97/CIRequestArg.ta.mjs";
import { CIRequestRes, _decode_CIRequestRes, _encode_CIRequestRes } from "../Call-Intrusion-Operations-asn1-97/CIRequestRes.ta.mjs";
// export { CIRequestRes, _decode_CIRequestRes, _encode_CIRequestRes } from "../Call-Intrusion-Operations-asn1-97/CIRequestRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { notBusy } from "../Call-Intrusion-Operations-asn1-97/notBusy.oa.mjs";
// export { notBusy } from "../Call-Intrusion-Operations-asn1-97/notBusy.oa.mjs";
import { temporarilyUnavailable } from "../Call-Intrusion-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../Call-Intrusion-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { notAuthorized } from "../Call-Intrusion-Operations-asn1-97/notAuthorized.oa.mjs";
// export { notAuthorized } from "../Call-Intrusion-Operations-asn1-97/notAuthorized.oa.mjs";
import { unspecified } from "../Call-Intrusion-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Call-Intrusion-Operations-asn1-97/unspecified.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
// export { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";


/**
 * @summary callIntrusionRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIntrusionRequest OPERATION ::= {
 *     ARGUMENT CIRequestArg
 *     RESULT CIRequestRes
 *     ERRORS {
 *         notAvailable
 *         | notBusy
 *         | temporarilyUnavailable
 *         | notAuthorized
 *         | unspecified
 *         | supplementaryServiceInteractionNotAllowed
 *     }
 *     CODE local: 43
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CIRequestArg, CIRequestRes>}
 * @implements {OPERATION<CIRequestArg, CIRequestRes>}
 */
export
const callIntrusionRequest: OPERATION<CIRequestArg, CIRequestRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CIRequestArg,
        "&ResultType": _decode_CIRequestRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CIRequestArg,
        "&ResultType": _encode_CIRequestRes,
    },
    "&Errors": [ notAvailable, notBusy, temporarilyUnavailable, notAuthorized, unspecified, supplementaryServiceInteractionNotAllowed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 43 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
