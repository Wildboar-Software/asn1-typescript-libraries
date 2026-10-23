/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCMServiceArg, _decode_MCMServiceArg, _encode_MCMServiceArg } from "../SS-MCM-Operations-asn1-97/MCMServiceArg.ta.mjs";
import { MCMDummyRes, _decode_MCMDummyRes, _encode_MCMDummyRes } from "../SS-MCM-Operations-asn1-97/MCMDummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { mCMModeNotProvided } from "../SS-MCM-Operations-asn1-97/mCMModeNotProvided.oa.mjs";
import { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mCMService
 * @description
 *
 * Activate, deactivate, or reset monitoring (ECMA-347
 * §6.5.2.1.1). The Served User PINX sends this from
 * MCM-SU-idle, starts timer T2 (at least 10 s, §6.9.2), and
 * waits in MCM-SU-wait. Local code 116.
 *
 * The Message Centre PINX stays in MCM-MC-idle and accepts
 * the request only within the service provider's default
 * configuration (§6.5.1.1.1). Activation is confirmed with
 * `MCMDummyRes`, then the update procedure runs for the
 * activated Message Types. Deactivation is confirmed and
 * does not start an update. Reset to the provider default
 * is confirmed and starts an update for the Message Types
 * the reset affected. Those default parameters are outside
 * this Standard.
 *
 * Errors: `userNotSubscribed`, `invalidServedUserNr`,
 * `basicServiceNotProvided`, `mCMModeNotProvided`,
 * `unspecified`. An invalid request is a return error; the
 * code is not stated (§6.5.1.2.1). On a return error or T2
 * expiry the Served User PINX releases the call-independent
 * connection unless it is still required (§6.5.2.2.1).
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
 * mCMService OPERATION ::= {
 *     ARGUMENT MCMServiceArg
 *     RESULT MCMDummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | mCMModeNotProvided
 *         | unspecified
 *     }
 *     CODE local: 116
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCMServiceArg, MCMDummyRes>}
 * @implements {OPERATION<MCMServiceArg, MCMDummyRes>}
 */
export
const mCMService: OPERATION<MCMServiceArg, MCMDummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCMServiceArg,
        "&ResultType": _decode_MCMDummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCMServiceArg,
        "&ResultType": _encode_MCMDummyRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, mCMModeNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 116 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
