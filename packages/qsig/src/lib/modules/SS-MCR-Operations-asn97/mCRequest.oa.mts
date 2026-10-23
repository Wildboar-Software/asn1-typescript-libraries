/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { MCRequestArg, _decode_MCRequestArg, _encode_MCRequestArg } from "../SS-MCR-Operations-asn97/MCRequestArg.ta.mjs";
import { MCRequestResult, _decode_MCRequestResult, _encode_MCRequestResult } from "../SS-MCR-Operations-asn97/MCRequestResult.ta.mjs";
import { userNotSubscribed } from "../General-Error-List/userNotSubscribed.oa.mjs";
import { basicServiceNotProvided } from "../General-Error-List/basicServiceNotProvided.oa.mjs";
import { supplementaryServiceInteractionNotAllowed } from "../General-Error-List/supplementaryServiceInteractionNotAllowed.oa.mjs";
import { invalidDestinationNumber } from "../SS-MCR-Operations-asn97/invalidDestinationNumber.oa.mjs";
import { invalidCooperationNumber } from "../SS-MCR-Operations-asn97/invalidCooperationNumber.oa.mjs";
import { mCRequestNotAllowed } from "../SS-MCR-Operations-asn97/mCRequestNotAllowed.oa.mjs";
import { mCExecutionNotAllowed } from "../SS-MCR-Operations-asn97/mCExecutionNotAllowed.oa.mjs";
import { mCDestUserBusy } from "../SS-MCR-Operations-asn97/mCDestUserBusy.oa.mjs";
import { mCCoopUserBusy } from "../SS-MCR-Operations-asn97/mCCoopUserBusy.oa.mjs";
import { mCCoopUserRejected } from "../SS-MCR-Operations-asn97/mCCoopUserRejected.oa.mjs";
import { establishmentFailure } from "../Path-Replacement-Operations-asn1-97/establishmentFailure.oa.mjs";
import { unspecified } from "../SS-MCR-Operations-asn97/unspecified.oa.mjs";

/**
 * @summary mCRequest
 * @description
 *
 * Make Call Request (ECMA-344 §6.5.1.1.2). Direction: Requesting PINX to
 * Co-operating PINX. ROSE local CODE 112.
 *
 * Sent in state MCR-Idle on a request from the Requesting User. Transport is an
 * existing basic call, an existing call-independent signalling connection, or
 * a new call-independent signalling connection (ECMA-165 §7.3). The Requesting
 * PINX clears a connection it created. Elements `callType`, `retainOrigCall`,
 * `destinationAddress`, `requestingAddress`, `cooperatingAddress`, and
 * `correlation` come from the Requesting User. `cooperatingAddress` is
 * required when a new call-independent signalling connection is set up. On an
 * existing call reference the Co-operating User is the user served on that
 * reference. The Requesting PINX starts timer T1 and enters MCR-Active. T1 is
 * at least 50 seconds (§6.9.1). When choosing it, consider basic-call timer
 * T310.
 *
 * In MCR-Active, `mCAlerting` may be indicated to the Requesting User; the
 * PINX stays in MCR-Active. A return result stops T1, may be indicated to the
 * Requesting User, and returns the PINX to MCR-Idle. The Co-operating PINX
 * sends that result when the Destination PINX sends CONNECT (§6.5.2.1.2).
 *
 * Errors: `userNotSubscribed`, `basicServiceNotProvided`,
 * `supplementaryServiceInteractionNotAllowed`, `invalidDestinationNumber`,
 * `invalidCooperationNumber`, `mCRequestNotAllowed`, `mCExecutionNotAllowed`,
 * `mCDestUserBusy`, `mCCoopUserBusy`, `mCCoopUserRejected`,
 * `establishmentFailure`, `unspecified`. The first three are imported from the
 * Q.950 general error list and `establishmentFailure` from path replacement;
 * ECMA-344 does not define them. A reject, a return error, or T1 expiry may be
 * indicated to the Requesting User and returns the PINX to MCR-Idle
 * (§6.5.1.2.2). T1 expiry is equivalent to a reject (§6.9.1). The Co-operating
 * PINX chooses an appropriate error; the text does not bind these codes to
 * conditions (§6.5.2.2.2).
 *
 * If the Co-operating User has activated call forwarding unconditional, call
 * forwarding on no reply, or call deflection, the request to set up the new
 * call is not forwarded. The Co-operating PINX either overrides that service
 * and prompts the user, or returns an error (§6.8.10, §6.8.12, §6.8.13). Call
 * forwarding busy is not overridden: the PINX returns an error (§6.8.11).
 * Do-not-disturb at the Co-operating User is an implementation option; if it
 * wins, the PINX returns an error (§6.8.17). Forwarding and deflection at the
 * Destination User still apply to the Requested Call.
 *
 * Together with ANF-CIDL, a `callIdentificationAssign` invoke received with
 * `mCRequest` is sent on toward the Destination PINX with `mCInform`, using
 * the same `threadID` (§6.8.37).
 *
 * Invoke interpretation is `rejectAnyUnrecognisedInvokePdu` or omitted. The
 * NFE destination entity is `endPINX` (§6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-344/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mCRequest OPERATION ::= {
 *     ARGUMENT MCRequestArg
 *     RESULT MCRequestResult
 *     ERRORS {
 *         userNotSubscribed
 *         | basicServiceNotProvided
 *         | supplementaryServiceInteractionNotAllowed
 *         | invalidDestinationNumber
 *         | invalidCooperationNumber
 *         | mCRequestNotAllowed
 *         | mCExecutionNotAllowed
 *         | mCDestUserBusy
 *         | mCCoopUserBusy
 *         | mCCoopUserRejected
 *         | establishmentFailure
 *         | unspecified
 *     }
 *     CODE local: 112
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<MCRequestArg, MCRequestResult>}
 * @implements {OPERATION<MCRequestArg, MCRequestResult>}
 */
export
const mCRequest: OPERATION<MCRequestArg, MCRequestResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_MCRequestArg,
        "&ResultType": _decode_MCRequestResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_MCRequestArg,
        "&ResultType": _encode_MCRequestResult,
    },
    "&Errors": [ userNotSubscribed, basicServiceNotProvided, supplementaryServiceInteractionNotAllowed, invalidDestinationNumber, invalidCooperationNumber, mCRequestNotAllowed, mCExecutionNotAllowed, mCDestUserBusy, mCCoopUserBusy, mCCoopUserRejected, establishmentFailure, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 112 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
