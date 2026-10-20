/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { PisnEnqArg, _decode_PisnEnqArg, _encode_PisnEnqArg } from "../WTM-Location-Registration-Operations-asn1-97/PisnEnqArg.ta.mjs";
// export { PisnEnqArg, _decode_PisnEnqArg, _encode_PisnEnqArg } from "../WTM-Location-Registration-Operations-asn1-97/PisnEnqArg.ta.mjs";
import { PisnEnqRes, _decode_PisnEnqRes, _encode_PisnEnqRes } from "../WTM-Location-Registration-Operations-asn1-97/PisnEnqRes.ta.mjs";
// export { PisnEnqRes, _decode_PisnEnqRes, _encode_PisnEnqRes } from "../WTM-Location-Registration-Operations-asn1-97/PisnEnqRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../WTM-Location-Registration-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary pisnEnquiry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pisnEnquiry OPERATION ::= {
 *     -- Sent from the Visitor PINX to the previous Visitor PINX or a Directory PINX.
 *     ARGUMENT PisnEnqArg
 *     RESULT PisnEnqRes
 *     ERRORS { invalidServedUserNr | unspecified }
 *     CODE local: 53
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<PisnEnqArg, PisnEnqRes>}
 * @implements {OPERATION<PisnEnqArg, PisnEnqRes>}
 */
export
const pisnEnquiry: OPERATION<PisnEnqArg, PisnEnqRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_PisnEnqArg,
        "&ResultType": _decode_PisnEnqRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_PisnEnqArg,
        "&ResultType": _encode_PisnEnqRes,
    },
    "&Errors": [ invalidServedUserNr, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 53 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
