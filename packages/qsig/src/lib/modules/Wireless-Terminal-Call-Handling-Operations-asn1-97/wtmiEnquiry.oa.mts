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
 * ANF-WTMI enquiry from the WTMI-detect PINX to the Home PINX of the called
 * WTMI user (ECMA-304 §6.1, §6.5.2, §6.5.3). Call-independent signalling
 * connection (ECMA-165 §7.3). Local code 54. The argument carries the called
 * PISN number and the embedded bearer capability, plus high-layer and low-layer
 * compatibility when the incoming SETUP contained them. The result is
 * `currLocation`, or `cfuActivated` when SS-CFU is active (§6.5.3.3). Timer T1
 * at the WTMI-detect PINX, in state WTMI-Detected, shall be at least 15 s
 * (§6.9.1).
 *
 * Errors, and the clearing cause applied by the WTMI-detect PINX (§6.5.2.2,
 * §6.5.3.2): `invalidServedUserNr` when the user is not in the HDB (cause 1,
 * unallocated number); `locationNotKnown` when the location is unknown (cause
 * 3, no route to destination); `notAvailable` when the user has deregistered
 * (cause 20, subscriber absent); `basicServiceNotProvided` when that service is
 * not provided (cause 88, incompatible destination). On a reject the
 * WTMI-detect PINX continues basic call. When T1 expires it releases with
 * cause 41 or continues basic call (§6.5.2.2). `unspecified` is listed in
 * §6.3.1, which does not say when it is returned.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
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
