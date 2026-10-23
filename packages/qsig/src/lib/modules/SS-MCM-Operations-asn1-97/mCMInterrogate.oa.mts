/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCMInterrogateArg, _decode_MCMInterrogateArg, _encode_MCMInterrogateArg } from "../SS-MCM-Operations-asn1-97/MCMInterrogateArg.ta.mjs";
import { MCMInterrogateRes, _decode_MCMInterrogateRes, _encode_MCMInterrogateRes } from "../SS-MCM-Operations-asn1-97/MCMInterrogateRes.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { invalidServedUserNr } from "../General-Error-List/invalidServedUserNr.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { mCMModeNotProvided } from "../SS-MCM-Operations-asn1-97/mCMModeNotProvided.oa.mjs";
import { unspecified } from "../SS-MCM-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary mCMInterrogate
 * @description
 *
 * Read the monitoring configuration (ECMA-347 §6.5.2.1.1).
 * The Served User PINX sends this from MCM-SU-idle for one
 * or more Message Types, starts timer T2 (at least 10 s),
 * and waits in MCM-SU-wait. Local code 117.
 *
 * The Message Centre PINX returns, for each requested
 * Message Type, whether complete or compressed information
 * is provided for new messages, retrieved messages, or both,
 * and stays in MCM-MC-idle (§6.5.1.1.1).
 *
 * Errors: `userNotSubscribed`, `invalidServedUserNr`,
 * `basicServiceNotProvided`, `mCMModeNotProvided`,
 * `unspecified`. An invalid request is a return error; the
 * code is not stated (§6.5.1.2.1).
 *
 * On a `mIDMailboxAuth` return error or reject, this invoke
 * shall not be sent (§6.8.40). §7.8.40 spells this operation
 * `mCInterrogate`.
 *
 * NFE destination `endPINX`. Interpretation APDU omitted or
 * `rejectAnyUnrecognisedInvokePdu` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCMInterrogate OPERATION ::= {
 *     ARGUMENT MCMInterrogateArg
 *     RESULT MCMInterrogateRes
 *     ERRORS {
 *         userNotSubscribed
 *         | invalidServedUserNr
 *         | basicServiceNotProvided
 *         | mCMModeNotProvided
 *         | unspecified
 *     }
 *     CODE local: 117
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCMInterrogateArg, MCMInterrogateRes>}
 * @implements {OPERATION<MCMInterrogateArg, MCMInterrogateRes>}
 */
export
const mCMInterrogate: OPERATION<MCMInterrogateArg, MCMInterrogateRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCMInterrogateArg,
        "&ResultType": _decode_MCMInterrogateRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCMInterrogateArg,
        "&ResultType": _encode_MCMInterrogateRes,
    },
    "&Errors": [ userNotSubscribed, invalidServedUserNr, basicServiceNotProvided, mCMModeNotProvided, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 117 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
