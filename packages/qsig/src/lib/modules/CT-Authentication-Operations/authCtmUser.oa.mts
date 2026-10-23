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
 * SS-CTAT from the Home PINX to the Visitor PINX (ECMA-243 §6.1, §6.5.1).
 * Call-independent signalling connection (ECMA-165 §7.3). Local code 72.
 * Include `calcCtatInfo` when challenge and expected-response values are
 * supplied; omit it when the Visitor PINX must obtain parameters itself
 * (§6.5.1.1). The result says whether the response from the CTM user matched
 * (§6.5.5.1). Timer T1 at the Home PINX, in state CtatHomeInitiating, shall be
 * at least 15 s (§6.9.1).
 *
 * If parameters cannot be obtained, the Visitor PINX returns an error;
 * §6.5.5.2 does not name which one. If the CTM user does not answer, the
 * error is `temporarilyUnavailable`. That sentence then says the error value
 * shall follow §6.5.2.2. §6.3.1 also lists `invalidServedUserNr`,
 * `notAuthorized`, and `unspecified`; §6.5.5 gives them no separate
 * condition.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-243/
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
