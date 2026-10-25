/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCMNewMsgArg, _decode_MCMNewMsgArg, _encode_MCMNewMsgArg } from "../SS-MCM-Operations-asn1-97/MCMNewMsgArg.ta.mjs";
import { type MCMDummyRes, _decode_MCMDummyRes, _encode_MCMDummyRes } from "../SS-MCM-Operations-asn1-97/MCMDummyRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mCMNewMsg
 * @description
 *
 * New-message indication (ECMA-347 §6.5.1.1.2). The Message
 * Centre PINX sends this when the Message Centre reports that
 * a new message has arrived. Local code 80, the same code as
 * `mWIActivate` in SS-MWI (§6.3.1). The Served User PINX
 * returns `MCMDummyRes`, may tell the user, and stays in
 * MCM-SU-idle. A Message Waiting Signal may be set for that
 * Message Type (§6.5.2.1.2).
 *
 * The Message Centre PINX starts timer T1 (15-30 s, §6.9.1)
 * and waits in MCM-MC-wait. A return error or T1 expiry
 * returns it to MCM-MC-idle; further action is left to the
 * Message Centre (§6.5.1.2.2).
 *
 * Errors: `userNotSubscribed`, `invalidServedUserNr`,
 * `basicServiceNotProvided`, `unspecified`. §6.5.2.2.2 gives
 * examples (Message Type not supported, user not subscribed)
 * and does not assign those examples to these codes.
 *
 * NFE destination entity `endPINX`. Interpretation APDU
 * omitted or `rejectAnyUnrecognisedInvokePdu` (§6.3.2.1).
 * Call-independent signalling connection (§6.5). Optional
 * elements are defined more strictly here than in SS-MWI, so
 * interworking may not give the full SS-MCM result (§6.8.24).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCMNewMsg OPERATION ::= {
 *     ARGUMENT MCMNewMsgArg
 *     RESULT MCMDummyRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | unspecified
 *     }
 *     CODE local: 80
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCMNewMsgArg, MCMDummyRes>}
 * @implements {OPERATION<MCMNewMsgArg, MCMDummyRes>}
 */
export
const mCMNewMsg: OPERATION<MCMNewMsgArg, MCMDummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCMNewMsgArg,
        "&ResultType": _decode_MCMDummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCMNewMsgArg,
        "&ResultType": _encode_MCMDummyRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 80 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
