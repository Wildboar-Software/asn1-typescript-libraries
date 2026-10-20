/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { GetRRCInfArg, _decode_GetRRCInfArg, _encode_GetRRCInfArg } from "../WTM-Location-Registration-Operations-asn1-97/GetRRCInfArg.ta.mjs";
// export { GetRRCInfArg, _decode_GetRRCInfArg, _encode_GetRRCInfArg } from "../WTM-Location-Registration-Operations-asn1-97/GetRRCInfArg.ta.mjs";
import { GetRRCInfRes, _decode_GetRRCInfRes, _encode_GetRRCInfRes } from "../WTM-Location-Registration-Operations-asn1-97/GetRRCInfRes.ta.mjs";
// export { GetRRCInfRes, _decode_GetRRCInfRes, _encode_GetRRCInfRes } from "../WTM-Location-Registration-Operations-asn1-97/GetRRCInfRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary getRRCInf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getRRCInf OPERATION ::= {
 *     -- Sent from the Visitor PINX to the Home PINX.
 *     ARGUMENT GetRRCInfArg
 *     RESULT GetRRCInfRes
 *     ERRORS { notAvailable | unspecified }
 *     CODE local: 97
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<GetRRCInfArg, GetRRCInfRes>}
 * @implements {OPERATION<GetRRCInfArg, GetRRCInfRes>}
 */
export
const getRRCInf: OPERATION<GetRRCInfArg, GetRRCInfRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_GetRRCInfArg,
        "&ResultType": _decode_GetRRCInfRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_GetRRCInfArg,
        "&ResultType": _encode_GetRRCInfRes,
    },
    "&Errors": [ notAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 97 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
