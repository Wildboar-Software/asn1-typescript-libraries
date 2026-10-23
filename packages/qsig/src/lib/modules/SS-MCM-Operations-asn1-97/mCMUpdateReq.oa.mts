/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCMUpdateReqArg, _decode_MCMUpdateReqArg, _encode_MCMUpdateReqArg } from "../SS-MCM-Operations-asn1-97/MCMUpdateReqArg.ta.mjs";
import { MCMUpdateReqRes, _decode_MCMUpdateReqRes, _encode_MCMUpdateReqRes } from "../SS-MCM-Operations-asn1-97/MCMUpdateReqRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mCMUpdateReq
 * @description
 *
 * Served User request for an update (ECMA-347 §6.5.2.1.5).
 * The Served User PINX sends this from MCM-SU-idle and enters
 * MCM-SU-wait. Local code 82, the same code as
 * `mWIInterrogate` (§6.3.1).
 *
 * The Message Centre PINX stays in MCM-MC-idle and returns
 * information about New Messages of the requested Message
 * Type, in the mode configured for those New Messages
 * (§6.5.1.1.5). It then starts the update procedure of
 * §6.5.1.1.4, which can also cover retrieved messages.
 *
 * The return result stops timer T2 (§6.5.2.1.5). §6.5.2.1.5
 * does not say that T2 is started when the invoke is sent.
 * T2 is at least 10 s (§6.9.2). §6.5.2.2.5 places receipt of
 * a return error in MCM-SU-idle, although the invoke enters
 * MCM-SU-wait, and it does not mention T2.
 *
 * Errors: `userNotSubscribed`, `invalidServedUserNr`,
 * `basicServiceNotProvided`, `unspecified`. An invalid
 * request is a return error; the code is not stated
 * (§6.5.1.2.5).
 *
 * On a `mIDMailboxAuth` return error or reject, this invoke
 * shall not be sent (§6.8.40).
 *
 * NFE destination `endPINX`. Interpretation APDU omitted or
 * `rejectAnyUnrecognisedInvokePdu` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCMUpdateReq OPERATION ::= {
 *     ARGUMENT MCMUpdateReqArg
 *     RESULT MCMUpdateReqRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | unspecified
 *     }
 *     CODE local: 82
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCMUpdateReqArg, MCMUpdateReqRes>}
 * @implements {OPERATION<MCMUpdateReqArg, MCMUpdateReqRes>}
 */
export
const mCMUpdateReq: OPERATION<MCMUpdateReqArg, MCMUpdateReqRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCMUpdateReqArg,
        "&ResultType": _decode_MCMUpdateReqRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCMUpdateReqArg,
        "&ResultType": _encode_MCMUpdateReqRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 82 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
