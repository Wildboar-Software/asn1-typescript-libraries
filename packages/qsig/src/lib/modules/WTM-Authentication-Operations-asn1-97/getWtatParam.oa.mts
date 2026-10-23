/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { WtatParamArg, _decode_WtatParamArg, _encode_WtatParamArg } from "../WTM-Authentication-Operations-asn1-97/WtatParamArg.ta.mjs";
import { WtatParamRes, _decode_WtatParamRes, _encode_WtatParamRes } from "../WTM-Authentication-Operations-asn1-97/WtatParamRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../WTM-Authentication-Operations-asn1-97/notAuthorized.oa.mjs";
import { paramNotAvailable } from "../WTM-Authentication-Operations-asn1-97/paramNotAvailable.oa.mjs";
import { temporarilyUnavailable } from "../WTM-Authentication-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { unspecified } from "../WTM-Authentication-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary getWtatParam
 * @description
 *
 * SS-WTAT parameter request from the Visitor PINX to the Home PINX (ECMA-306
 * §6.5.6). Local code 73. The Home PINX checks the WTM user's identity and that
 * the user is authorized for SS-WTAT, then fetches parameters from the
 * Authentication Server PINX (§6.5.2). The Visitor PINX may include a challenge
 * it has calculated, and shall include `canCompute` when it can calculate
 * challenge and response (§6.5.4.1, §6.5.5.1). If the result carries a session
 * key, the Visitor PINX calculates the challenge and the expected response. If
 * it carries `calcWtatInfo`, no calculation is required (§6.5.6.1). Timer T3 at
 * the Visitor PINX, in state WtatVisitRequesting, shall be at least 15 s
 * (§6.9.3).
 *
 * Home PINX errors (§6.5.2.2): `invalidServedUserNr` when the identity is
 * invalid; `notAuthorized` when the user is not authorized for SS-WTAT;
 * `temporarilyUnavailable` when the fetch times out; `paramNotAvailable` when
 * the fetch fails for another reason. `unspecified` is listed in §6.3.1, which
 * does not say when it is returned.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getWtatParam OPERATION ::= {
 *     -- from Visitor PINX to Home PINX --
 *     ARGUMENT WtatParamArg
 *     RESULT WtatParamRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | notAuthorized
 *         | paramNotAvailable
 *         | temporarilyUnavailable
 *         | unspecified
 *     }
 *     CODE local: 73
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<WtatParamArg, WtatParamRes>}
 * @implements {OPERATION<WtatParamArg, WtatParamRes>}
 */
export
const getWtatParam: OPERATION<WtatParamArg, WtatParamRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_WtatParamArg,
        "&ResultType": _decode_WtatParamRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_WtatParamArg,
        "&ResultType": _encode_WtatParamRes,
    },
    "&Errors": [ invalidServedUserNr, notAuthorized, paramNotAvailable, temporarilyUnavailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 73 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
