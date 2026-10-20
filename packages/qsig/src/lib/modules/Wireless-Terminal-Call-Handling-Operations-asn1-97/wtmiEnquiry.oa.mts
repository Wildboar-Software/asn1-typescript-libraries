/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { EnquiryArg, _decode_EnquiryArg, _encode_EnquiryArg } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/EnquiryArg.ta.mjs";
import { EnquiryRes, _decode_EnquiryRes, _encode_EnquiryRes } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/EnquiryRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { locationNotKnown } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/locationNotKnown.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { unspecified } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary wtmiEnquiry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wtmiEnquiry OPERATION ::= {
 *     -- Sent from the WTMI-detect PINX to the Home PINX.
 *     ARGUMENT EnquiryArg
 *     RESULT EnquiryRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | locationNotKnown
 *         | notAvailable
 *         | basicServiceNotProvided
 *         | unspecified
 *     }
 *     CODE local: 54
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<EnquiryArg, EnquiryRes>}
 * @implements {OPERATION<EnquiryArg, EnquiryRes>}
 */
export
const wtmiEnquiry: OPERATION<EnquiryArg, EnquiryRes> = {
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
    "&operationCode": { local: 54 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
