/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCMNoNewMsgArg, _decode_MCMNoNewMsgArg, _encode_MCMNoNewMsgArg } from "../SS-MCM-Operations-asn1-97/MCMNoNewMsgArg.ta.mjs";
import { type MCMDummyRes, _decode_MCMDummyRes, _encode_MCMDummyRes } from "../SS-MCM-Operations-asn1-97/MCMDummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mCMNoNewMsg
 * @description
 *
 * No-new-messages indication (ECMA-347 §6.5.1.1.3). The
 * Message Centre PINX sends this when the Message Centre
 * reports that no New Messages of a Message Type remain in
 * the Served User's mailbox. Local code 81, the same code as
 * `mWIDeactivate` (§6.3.1).
 *
 * The Served User PINX returns `MCMDummyRes`, may tell the
 * user, and stays in MCM-SU-idle. A Message Waiting Signal
 * for that Message Type, if set, is cancelled (§6.5.2.1.3).
 *
 * The Message Centre PINX starts timer T1 (15-30 s, §6.9.1).
 * A return error or T1 expiry returns it to MCM-MC-idle
 * (§6.5.1.2.3).
 *
 * Errors: `userNotSubscribed`, `invalidServedUserNr`,
 * `basicServiceNotProvided`, `unspecified`. §6.5.2.2.3 does
 * not assign a code to a failure.
 *
 * §6.5.1.1.3 says the argument carries the Message Type(s)
 * that no longer have New Messages. The argument has one
 * `specificMessageType`.
 *
 * NFE destination `endPINX`. Interpretation APDU omitted or
 * `rejectAnyUnrecognisedInvokePdu` (§6.3.2.1). Same SS-MWI
 * optional-element caution as `mCMNewMsg` (§6.8.24).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCMNoNewMsg OPERATION ::= {
 *     ARGUMENT MCMNoNewMsgArg
 *     RESULT MCMDummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | unspecified
 *     }
 *     CODE local: 81
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCMNoNewMsgArg, MCMDummyRes>}
 * @implements {OPERATION<MCMNoNewMsgArg, MCMDummyRes>}
 */
export
const mCMNoNewMsg: OPERATION<MCMNoNewMsgArg, MCMDummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCMNoNewMsgArg,
        "&ResultType": _decode_MCMDummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCMNoNewMsgArg,
        "&ResultType": _encode_MCMDummyRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 81 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
