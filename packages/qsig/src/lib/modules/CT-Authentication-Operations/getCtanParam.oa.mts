/* eslint-disable */
import type { OPERATION } from "@wildboar/rose";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CtanParamArg, _decode_CtanParamArg, _encode_CtanParamArg } from "../CT-Authentication-Operations/CtanParamArg.ta.mjs";
// export { CtanParamArg, _decode_CtanParamArg, _encode_CtanParamArg } from "../CT-Authentication-Operations/CtanParamArg.ta.mjs";
import { CtanParamRes, _decode_CtanParamRes, _encode_CtanParamRes } from "../CT-Authentication-Operations/CtanParamRes.ta.mjs";
// export { CtanParamRes, _decode_CtanParamRes, _encode_CtanParamRes } from "../CT-Authentication-Operations/CtanParamRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../CT-Authentication-Operations/notAuthorized.oa.mjs";
// export { notAuthorized } from "../CT-Authentication-Operations/notAuthorized.oa.mjs";
import { paramNotAvailable } from "../CT-Authentication-Operations/paramNotAvailable.oa.mjs";
// export { paramNotAvailable } from "../CT-Authentication-Operations/paramNotAvailable.oa.mjs";
import { temporarilyUnavailable } from "../CT-Authentication-Operations/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../CT-Authentication-Operations/temporarilyUnavailable.oa.mjs";
import { unspecified } from "../CT-Authentication-Operations/unspecified.oa.mjs";
// export { unspecified } from "../CT-Authentication-Operations/unspecified.oa.mjs";


/**
 * @summary getCtanParam
 * @description
 *
 * SS-CTAN parameter request from the Visitor PINX to the Home PINX (ECMA-243
 * §7.1, §7.5.1). Local code 75. Used when the Visitor PINX does not already
 * hold SS-CTAN parameters. The argument carries the challenge and the
 * authentication algorithm received from the CTM user. A session-key result is
 * used, with that challenge, to compute the response; a calculated-response
 * result is sent to the CTM user as acceptance (§7.5.1.1). Timer T4 at the
 * Visitor PINX, in state CtanVisitRequesting, shall be at least 15 s (§7.9.1).
 *
 * Home PINX errors (§7.5.2.2): `invalidServedUserNr` when the PISN number is
 * invalid; `notAuthorized` when the user is not authorised for SS-CTAN; the
 * error received from the Authentication Server PINX; `paramNotAvailable` when
 * that PINX rejects; `temporarilyUnavailable` when timer T5 expires.
 * `unspecified` is listed in §6.3.1, which does not say when it is returned.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getCtanParam OPERATION ::= {
 *     -- from Visitor PINX to Home PINX --
 *     ARGUMENT CtanParamArg
 *     RESULT CtanParamRes
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
 * @type {OPERATION<CtanParamArg, CtanParamRes>}
 * @implements {OPERATION<CtanParamArg, CtanParamRes>}
 */
export
const getCtanParam: OPERATION<CtanParamArg, CtanParamRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CtanParamArg,
        "&ResultType": _decode_CtanParamRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CtanParamArg,
        "&ResultType": _encode_CtanParamRes,
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
