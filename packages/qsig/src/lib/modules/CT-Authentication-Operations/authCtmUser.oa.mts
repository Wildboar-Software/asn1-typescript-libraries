/* eslint-disable */
import { type OPERATION } from "@wildboar/rose";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { AuthCtmArg, _decode_AuthCtmArg, _encode_AuthCtmArg } from "../CT-Authentication-Operations/AuthCtmArg.ta.mjs";
// export { AuthCtmArg, _decode_AuthCtmArg, _encode_AuthCtmArg } from "../CT-Authentication-Operations/AuthCtmArg.ta.mjs";
import { AuthCtmRes, _decode_AuthCtmRes, _encode_AuthCtmRes } from "../CT-Authentication-Operations/AuthCtmRes.ta.mjs";
// export { AuthCtmRes, _decode_AuthCtmRes, _encode_AuthCtmRes } from "../CT-Authentication-Operations/AuthCtmRes.ta.mjs";
import { temporarilyUnavailable } from "../CT-Authentication-Operations/temporarilyUnavailable.oa.mjs";
// export { temporarilyUnavailable } from "../CT-Authentication-Operations/temporarilyUnavailable.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
// export { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { notAuthorized } from "../CT-Authentication-Operations/notAuthorized.oa.mjs";
// export { notAuthorized } from "../CT-Authentication-Operations/notAuthorized.oa.mjs";
import { paramNotAvailable } from "../CT-Authentication-Operations/paramNotAvailable.oa.mjs";
// export { paramNotAvailable } from "../CT-Authentication-Operations/paramNotAvailable.oa.mjs";
import { unspecified } from "../CT-Authentication-Operations/unspecified.oa.mjs";
// export { unspecified } from "../CT-Authentication-Operations/unspecified.oa.mjs";


/**
 * @summary authCtmUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authCtmUser OPERATION ::= {
 *     -- from Home PINX to Visitor PINX --
 *     ARGUMENT AuthCtmArg
 *     RESULT AuthCtmRes
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
 * @type {OPERATION<AuthCtmArg, AuthCtmRes>}
 * @implements {OPERATION<AuthCtmArg, AuthCtmRes>}
 */
export
const authCtmUser: OPERATION<AuthCtmArg, AuthCtmRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AuthCtmArg,
        "&ResultType": _decode_AuthCtmRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_AuthCtmArg,
        "&ResultType": _encode_AuthCtmRes,
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
