/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { WtatParamArg, _decode_WtatParamArg, _encode_WtatParamArg } from "../WTM-Authentication-Operations-asn1-97/WtatParamArg.ta.mjs";
import { WtatParamRes, _decode_WtatParamRes, _encode_WtatParamRes } from "../WTM-Authentication-Operations-asn1-97/WtatParamRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { paramNotAvailable } from "../WTM-Authentication-Operations-asn1-97/paramNotAvailable.oa.mjs";
import { unspecified } from "../WTM-Authentication-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary wtatParamEnq
 * @description
 *
 * SS-WTAT parameter enquiry from the Home PINX to the Authentication Server
 * PINX (ECMA-306 §6.5.3, §6.5.7). Local code 74. Include `canCompute` only when
 * the Visitor PINX can compute a challenge and the expected response from
 * session-key information. Forward `authChallenge` when the Visitor PINX
 * supplied one (§6.5.3.1). The server generates a challenge unless one was
 * provided. If `canCompute` is absent, or the application requires computed
 * values, the result choice is `calcWtatInfo`; otherwise it may be
 * `authSessionKeyInfo`. Choices `authKey` and `challLen` shall not be used in
 * this result. The result includes the algorithm in use (§6.5.7.1). Timer T2 at
 * the Home PINX, in state WtatHomeFetching, shall be at least 15 s (§6.9.2).
 *
 * Errors (§6.5.7.2): `invalidServedUserNr` when the identity is invalid;
 * `paramNotAvailable` when authentication parameters are not available.
 * `unspecified` is listed in §6.3.1, which does not say when it is returned.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wtatParamEnq OPERATION ::= {
 *     -- from Home PINX to Authentication Server PINX--
 *     ARGUMENT WtatParamArg
 *     RESULT WtatParamRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | paramNotAvailable
 *         | unspecified
 *     }
 *     CODE local: 74
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<WtatParamArg, WtatParamRes>}
 * @implements {OPERATION<WtatParamArg, WtatParamRes>}
 */
export
const wtatParamEnq: OPERATION<WtatParamArg, WtatParamRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_WtatParamArg,
        "&ResultType": _decode_WtatParamRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_WtatParamArg,
        "&ResultType": _encode_WtatParamRes,
    },
    "&Errors": [ invalidServedUserNr, paramNotAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 74 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
