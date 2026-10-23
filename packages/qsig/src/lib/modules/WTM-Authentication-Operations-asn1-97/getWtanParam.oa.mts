/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { WtanParamArg, _decode_WtanParamArg, _encode_WtanParamArg } from "../WTM-Authentication-Operations-asn1-97/WtanParamArg.ta.mjs";
import { WtanParamRes, _decode_WtanParamRes, _encode_WtanParamRes } from "../WTM-Authentication-Operations-asn1-97/WtanParamRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../WTM-Authentication-Operations-asn1-97/notAuthorized.oa.mjs";
import { paramNotAvailable } from "../WTM-Authentication-Operations-asn1-97/paramNotAvailable.oa.mjs";
import { temporarilyUnavailable } from "../WTM-Authentication-Operations-asn1-97/temporarilyUnavailable.oa.mjs";
import { unspecified } from "../WTM-Authentication-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary getWtanParam
 * @description
 *
 * SS-WTAN parameter request from the Visitor PINX to the Home PINX (ECMA-306
 * §7.1, §7.5.1). Local code 75. Used when the Visitor PINX does not already
 * hold SS-WTAN parameters. §7.5.1.1 requires the challenge received from the
 * WTM user; the argument also carries `authAlgorithm` (§6.3.1). A session-key
 * result is used, with that challenge, to compute the response; a
 * calculated-response result is sent to the WTM user as acceptance. Timer T4 at
 * the Visitor PINX, in state WtanVisitRequesting, shall be at least 15 s
 * (§7.9.1).
 *
 * Home PINX errors (§7.5.2.2): `invalidServedUserNr` when the identity is
 * invalid; `notAuthorized` when the user is not authorized for SS-WTAN; the
 * error received from the Authentication Server PINX; `paramNotAvailable` when
 * that PINX rejects; `temporarilyUnavailable` when timer T5 expires.
 * `unspecified` is listed in §6.3.1, which does not say when it is returned.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getWtanParam OPERATION ::= {
 *     -- from Visitor PINX to Home PINX --
 *     ARGUMENT WtanParamArg
 *     RESULT WtanParamRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | notAuthorized
 *         | paramNotAvailable
 *         | temporarilyUnavailable
 *         | unspecified
 *     }
 *     CODE local: 75
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<WtanParamArg, WtanParamRes>}
 * @implements {OPERATION<WtanParamArg, WtanParamRes>}
 */
export
const getWtanParam: OPERATION<WtanParamArg, WtanParamRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_WtanParamArg,
        "&ResultType": _decode_WtanParamRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_WtanParamArg,
        "&ResultType": _encode_WtanParamRes,
    },
    "&Errors": [ invalidServedUserNr, notAuthorized, paramNotAvailable, temporarilyUnavailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 75 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
