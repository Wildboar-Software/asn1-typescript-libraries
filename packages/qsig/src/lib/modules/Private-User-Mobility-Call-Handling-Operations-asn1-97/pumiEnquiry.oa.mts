/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { EnquiryArg, _decode_EnquiryArg, _encode_EnquiryArg } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/EnquiryArg.ta.mjs";
import { EnquiryRes, _decode_EnquiryRes, _encode_EnquiryRes } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/EnquiryRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { locationNotKnown } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/locationNotKnown.oa.mjs";
import { notAvailable } from "../General-Error-List/notAvailable.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { unspecified } from "../Private-User-Mobility-Call-Handling-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary pumiEnquiry
 * @description
 *
 * Ask the Home PINX where the called PUM user is (ECMA-284 §6.5.2, §6.5.3). The
 * PUMI-detect PINX sends it on a call-independent signalling connection. ROSE
 * local CODE 93. Timer T1, at least 15 s, runs in state PUMI-Detected (§6.9.1).
 * `currLocation` is followed by `pumiDivert`. `cfuActivated` means SS-CFU is
 * active (§6.5.3.3). A PUMI-detect PINX that supports §6.8.6.1 then acts as the
 * SS-CFU Served User PINX in ECMA-174 §6.5.4; otherwise what it does with
 * `cfuActivated` is an implementation matter (§6.5.2.1). Errors and the
 * basic-call cause the PUMI-detect PINX applies (§6.5.2.2, §6.5.3.2):
 * `invalidServedUserNr` (user not in the HDB, cause #1), `locationNotKnown`
 * (cause #3), `notAvailable` (user has deregistered, cause #20),
 * `basicServiceNotProvided` (cause #88), `unspecified`. A reject, or T1 expiry,
 * leaves the PUMI-detect PINX to continue basic call or, on T1 expiry, to
 * release with cause #41. Clause 6 is silent on when to return `unspecified`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
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
