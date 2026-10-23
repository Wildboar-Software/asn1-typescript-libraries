/* eslint-disable */
import type { OPERATION } from "@wildboar/rose";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CtatParamArg, _decode_CtatParamArg, _encode_CtatParamArg } from "../CT-Authentication-Operations/CtatParamArg.ta.mjs";
// export { CtatParamArg, _decode_CtatParamArg, _encode_CtatParamArg } from "../CT-Authentication-Operations/CtatParamArg.ta.mjs";
import { CtatParamRes, _decode_CtatParamRes, _encode_CtatParamRes } from "../CT-Authentication-Operations/CtatParamRes.ta.mjs";
// export { CtatParamRes, _decode_CtatParamRes, _encode_CtatParamRes } from "../CT-Authentication-Operations/CtatParamRes.ta.mjs";
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
 * @summary getCtatParam
 * @description
 *
 * SS-CTAT parameter request from the Visitor PINX to the Home PINX (ECMA-243
 * §6.5.6). Local code 73. The Home PINX checks the PISN number and that the CTM
 * user is authorised for SS-CTAT, then fetches parameters from the
 * Authentication Server PINX (§6.5.2). If the result carries a session key, the
 * Visitor PINX calculates the challenge and the expected response; otherwise it
 * uses the received challenge and response (§6.5.6.1). Timer T3 at the Visitor
 * PINX, in state CtatVisitRequesting, shall be at least 15 s (§6.9.3).
 *
 * Home PINX errors (§6.5.2.2): `invalidServedUserNr` when the PISN number is
 * invalid; `notAuthorized` when the user is not authorised for SS-CTAT;
 * `temporarilyUnavailable` when the fetch times out; `paramNotAvailable` when
 * the fetch fails for another reason. `unspecified` is listed in §6.3.1, which
 * does not say when it is returned.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * getCtatParam OPERATION ::= {
 *     -- from Visitor PINX to Home PINX --
 *     ARGUMENT CtatParamArg
 *     RESULT CtatParamRes
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
 * @type {OPERATION<CtatParamArg, CtatParamRes>}
 * @implements {OPERATION<CtatParamArg, CtatParamRes>}
 */
export
const getCtatParam: OPERATION<CtatParamArg, CtatParamRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CtatParamArg,
        "&ResultType": _decode_CtatParamRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CtatParamArg,
        "&ResultType": _encode_CtatParamRes,
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
