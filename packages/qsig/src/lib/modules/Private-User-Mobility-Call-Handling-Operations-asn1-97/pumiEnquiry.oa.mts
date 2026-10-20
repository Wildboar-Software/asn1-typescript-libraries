/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { EnquiryArg, _decode_EnquiryArg, _encode_EnquiryArg } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/EnquiryArg.ta.mjs";
// export { EnquiryArg, _decode_EnquiryArg, _encode_EnquiryArg } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/EnquiryArg.ta.mjs";
import { EnquiryRes, _decode_EnquiryRes, _encode_EnquiryRes } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/EnquiryRes.ta.mjs";
// export { EnquiryRes, _decode_EnquiryRes, _encode_EnquiryRes } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/EnquiryRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { locationNotKnown } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/locationNotKnown.oa.mjs";
// export { locationNotKnown } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/locationNotKnown.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
// export { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
// export { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { unspecified } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/unspecified.oa.mjs";
// export { unspecified } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/unspecified.oa.mjs";


/**
 * @summary pumiEnquiry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pumiEnquiry OPERATION ::= {
 *     -- Sent from the PUMI-detect PINX to the Home PINX.
 *     ARGUMENT EnquiryArg
 *     RESULT EnquiryRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | locationNotKnown
 *         | notAvailable
 *         | basicServiceNotProvided
 *         | unspecified
 *     }
 *     CODE local: 93
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<EnquiryArg, EnquiryRes>}
 * @implements {OPERATION<EnquiryArg, EnquiryRes>}
 */
export
const pumiEnquiry: OPERATION<EnquiryArg, EnquiryRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EnquiryArg,
        "&ResultType": _decode_EnquiryRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_EnquiryArg,
        "&ResultType": _encode_EnquiryRes,
    },
    "&Errors": [ invalidServedUserNr, locationNotKnown, notAvailable, basicServiceNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 93 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
