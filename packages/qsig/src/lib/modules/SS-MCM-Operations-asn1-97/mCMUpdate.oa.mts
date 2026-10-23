/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCMUpdateArg, _decode_MCMUpdateArg, _encode_MCMUpdateArg } from "../SS-MCM-Operations-asn1-97/MCMUpdateArg.ta.mjs";
import { MCMDummyRes, _decode_MCMDummyRes, _encode_MCMDummyRes } from "../SS-MCM-Operations-asn1-97/MCMDummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mCMUpdate
 * @description
 *
 * Mailbox update (ECMA-347 §6.5.1.1.4). The Message Centre
 * PINX sends this from MCM-MC-idle when a Served User action
 * has changed how many new or retrieved messages of one
 * Message Type are stored. Each type is updated on its own,
 * and in order. Local code 115.
 *
 * `updateInfo` is compressed or complete information, for new
 * messages, retrieved messages, or both. If that information
 * is split, `moreInfoFollows` is TRUE on every invoke except
 * the last. After each invoke the Message Centre PINX starts
 * or restarts timer T1 (15-30 s) and waits in MCM-MC-wait.
 * The next fragment is sent only after the return result.
 *
 * The Served User PINX returns `MCMDummyRes`. While
 * `moreInfoFollows` is TRUE it runs timer T3 (at least 35 s,
 * §6.9.3) in MCM-SU-update; otherwise it returns to
 * MCM-SU-idle (§6.5.2.1.4). On T3 expiry it may send
 * `mCMUpdateReq` to restart the update (§6.5.2.2.4).
 *
 * Errors: `userNotSubscribed`, `invalidServedUserNr`,
 * `unspecified`. There is no `basicServiceNotProvided`. A
 * return error, reject, or T1 expiry stops further fragments
 * (§6.5.1.2.4).
 *
 * Also started after a successful activation or reset on
 * `mCMService`, and after `mCMUpdateReq` (§6.5.1.1.1,
 * §6.5.1.1.5). Not started after deactivation.
 *
 * NFE destination `endPINX`. Interpretation APDU omitted or
 * `rejectAnyUnrecognisedInvokePdu` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCMUpdate OPERATION ::= {
 *     ARGUMENT MCMUpdateArg
 *     RESULT MCMDummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | unspecified
 *     }
 *     CODE local: 115
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCMUpdateArg, MCMDummyRes>}
 * @implements {OPERATION<MCMUpdateArg, MCMDummyRes>}
 */
export
const mCMUpdate: OPERATION<MCMUpdateArg, MCMDummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCMUpdateArg,
        "&ResultType": _decode_MCMDummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCMUpdateArg,
        "&ResultType": _encode_MCMDummyRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 115 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
