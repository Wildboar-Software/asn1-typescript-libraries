/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CtanParamArg, _decode_CtanParamArg, _encode_CtanParamArg } from "../CT-Authentication-Operations/CtanParamArg.ta.mjs";
// export { CtanParamArg, _decode_CtanParamArg, _encode_CtanParamArg } from "../CT-Authentication-Operations/CtanParamArg.ta.mjs";
import { CtanParamRes, _decode_CtanParamRes, _encode_CtanParamRes } from "../CT-Authentication-Operations/CtanParamRes.ta.mjs";
// export { CtanParamRes, _decode_CtanParamRes, _encode_CtanParamRes } from "../CT-Authentication-Operations/CtanParamRes.ta.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { paramNotAvailable } from "../CT-Authentication-Operations/paramNotAvailable.oa.mjs";
// export { paramNotAvailable } from "../CT-Authentication-Operations/paramNotAvailable.oa.mjs";
import { unspecified } from "../CT-Authentication-Operations/unspecified.oa.mjs";
// export { unspecified } from "../CT-Authentication-Operations/unspecified.oa.mjs";


/**
 * @summary ctanParamEnq
 * @description
 *
 * SS-CTAN parameter enquiry from the Home PINX to the Authentication Server
 * PINX (ECMA-243 §7.5.2, §7.5.3). Local code 76. Carries the challenge received
 * from the CTM user. If `canCompute` is absent, or the application requires a
 * computed response, the result choice is `calcCtanInfo`; otherwise it may be
 * `authSessionKeyInfo` (§7.5.3.1). Timer T5 at the Home PINX, in state
 * CtanHomeFetching, shall be at least 15 s (§7.9.2).
 *
 * Errors (§7.5.3.2): `invalidServedUserNr` when the PISN number is invalid;
 * `paramNotAvailable` when authentication parameters are not available.
 * `unspecified` is listed in §6.3.1, which does not say when it is returned.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ctanParamEnq OPERATION ::= {
 *     -- from Home PINX to Authentication Server PINX --
 *     ARGUMENT CtanParamArg
 *     RESULT CtanParamRes
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
 * @type {OPERATION<CtanParamArg, CtanParamRes>}
 * @implements {OPERATION<CtanParamArg, CtanParamRes>}
 */
export
const ctanParamEnq: OPERATION<CtanParamArg, CtanParamRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CtanParamArg,
        "&ResultType": _decode_CtanParamRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_CtanParamArg,
        "&ResultType": _encode_CtanParamRes,
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
