/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { LocInfoCheckArg, _decode_LocInfoCheckArg, _encode_LocInfoCheckArg } from "../WTM-Location-Registration-Operations-asn1-97/LocInfoCheckArg.ta.mjs";
// export { LocInfoCheckArg, _decode_LocInfoCheckArg, _encode_LocInfoCheckArg } from "../WTM-Location-Registration-Operations-asn1-97/LocInfoCheckArg.ta.mjs";
import { LocInfoCheckRes, _decode_LocInfoCheckRes, _encode_LocInfoCheckRes } from "../WTM-Location-Registration-Operations-asn1-97/LocInfoCheckRes.ta.mjs";
// export { LocInfoCheckRes, _decode_LocInfoCheckRes, _encode_LocInfoCheckRes } from "../WTM-Location-Registration-Operations-asn1-97/LocInfoCheckRes.ta.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary locInfoCheck
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locInfoCheck OPERATION ::= {
 *     -- Sent from the Visitor PINX to the Home PINX or vice versa.
 *     ARGUMENT LocInfoCheckArg
 *     RESULT LocInfoCheckRes
 *     ERRORS { notAvailable | unspecified }
 *     CODE local: 98
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<LocInfoCheckArg, LocInfoCheckRes>}
 * @implements {OPERATION<LocInfoCheckArg, LocInfoCheckRes>}
 */
export
const locInfoCheck: OPERATION<LocInfoCheckArg, LocInfoCheckRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_LocInfoCheckArg,
        "&ResultType": _decode_LocInfoCheckRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_LocInfoCheckArg,
        "&ResultType": _encode_LocInfoCheckRes,
    },
    "&Errors": [ notAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 98 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
