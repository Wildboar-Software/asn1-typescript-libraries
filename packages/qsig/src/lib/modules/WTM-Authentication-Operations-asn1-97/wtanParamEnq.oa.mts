/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { WtanParamArg, _decode_WtanParamArg, _encode_WtanParamArg } from "../WTM-Authentication-Operations-asn1-97/WtanParamArg.ta.mjs";
import { WtanParamRes, _decode_WtanParamRes, _encode_WtanParamRes } from "../WTM-Authentication-Operations-asn1-97/WtanParamRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { paramNotAvailable } from "../WTM-Authentication-Operations-asn1-97/paramNotAvailable.oa.mjs";
import { unspecified } from "../WTM-Authentication-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary wtanParamEnq
 * @description
 *
 * SS-WTAN parameter enquiry from the Home PINX to the Authentication Server
 * PINX (ECMA-306 §7.5.2, §7.5.3). Local code 76. Carries the challenge received
 * from the WTM user. If `canCompute` is absent, or the application requires a
 * computed response, the result choice is `calcWtanInfo`; otherwise it may be
 * `authSessionKeyInfo` (§7.5.3.1). Timer T5 at the Home PINX, in state
 * WtanHomeFetching, shall be at least 15 s (§7.9.2).
 *
 * Errors (§7.5.3.2): `invalidServedUserNr` when the identity is invalid;
 * `paramNotAvailable` when authentication parameters are not available.
 * `unspecified` is listed in §6.3.1, which does not say when it is returned.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * wtanParamEnq OPERATION ::= {
 *     -- from Home PINX to Authentication Server PINX--
 *     ARGUMENT WtanParamArg
 *     RESULT WtanParamRes
 *     ERRORS {
 *         invalidServedUserNr
 *         | paramNotAvailable
 *         | unspecified
 *     }
 *     CODE local: 76
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<WtanParamArg, WtanParamRes>}
 * @implements {OPERATION<WtanParamArg, WtanParamRes>}
 */
export
const wtanParamEnq: OPERATION<WtanParamArg, WtanParamRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_WtanParamArg,
        "&ResultType": _decode_WtanParamRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_WtanParamArg,
        "&ResultType": _encode_WtanParamRes,
    },
    "&Errors": [ invalidServedUserNr, paramNotAvailable, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 76 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
