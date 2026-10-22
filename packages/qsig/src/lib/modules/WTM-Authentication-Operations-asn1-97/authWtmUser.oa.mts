/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { AuthWtmArg, _decode_AuthWtmArg, _encode_AuthWtmArg } from "../WTM-Authentication-Operations-asn1-97/AuthWtmArg.ta.mjs";
import { AuthWtmRes, _decode_AuthWtmRes, _encode_AuthWtmRes } from "../WTM-Authentication-Operations-asn1-97/AuthWtmRes.ta.mjs";
import { temporarilyUnavailable } from "../WTM-Authentication-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../WTM-Authentication-Operations-asn1-97/notAuthorized.oa.mjs";
import { paramNotAvailable } from "../WTM-Authentication-Operations-asn1-97/paramNotAvailable.oa.mjs";
import { unspecified } from "../WTM-Authentication-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary authWtmUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authWtmUser OPERATION ::= {
 *     -- from Home PINX to Visitor PINX--
 *     ARGUMENT AuthWtmArg
 *     RESULT AuthWtmRes
 *     ERRORS {
 *         temporarilyUnavailable
 *         | invalidServedUserNr
 *         | notAuthorized
 *         | paramNotAvailable
 *         | unspecified
 *     }
 *     CODE local: 72
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AuthWtmArg, AuthWtmRes>}
 * @implements {OPERATION<AuthWtmArg, AuthWtmRes>}
 */
export
const authWtmUser: OPERATION<AuthWtmArg, AuthWtmRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AuthWtmArg,
        "&ResultType": _decode_AuthWtmRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_AuthWtmArg,
        "&ResultType": _encode_AuthWtmRes,
    },
    "&Errors": [ temporarilyUnavailable, invalidServedUserNr, notAuthorized, paramNotAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 72 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
