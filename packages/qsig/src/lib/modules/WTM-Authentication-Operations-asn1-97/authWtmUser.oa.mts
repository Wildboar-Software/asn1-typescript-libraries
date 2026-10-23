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
 * SS-WTAT from the Home PINX to the Visitor PINX (ECMA-306 §6.1, §6.5.1).
 * Call-independent signalling connection (ECMA-165 §7.3). Local code 72.
 * Include `calcWtatInfo` when challenge and expected-response values are
 * supplied; omit it when the Visitor PINX must obtain parameters itself
 * (§6.5.1.1). The result says whether the response from the WTM user matched
 * (§6.5.5.1). Timer T1 at the Home PINX, in state WtatHomeInitiating, shall be
 * at least 15 s (§6.9.1).
 *
 * If parameters cannot be obtained, the Visitor PINX returns an error
 * (§6.5.5.2). If the WTM user does not answer, the error is
 * `temporarilyUnavailable`. §6.5.5 does not name the error used when the
 * parameter fetch fails. §6.3.1 also lists `invalidServedUserNr`,
 * `notAuthorized`, `paramNotAvailable`, and `unspecified`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
