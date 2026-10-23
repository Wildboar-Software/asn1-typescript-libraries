/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SmsSubmitArg, _decode_SmsSubmitArg, _encode_SmsSubmitArg } from "../Short-Message-Service-Operations-asn1-97/SmsSubmitArg.ta.mjs";
import { SmsSubmitRes, _decode_SmsSubmitRes, _encode_SmsSubmitRes } from "../Short-Message-Service-Operations-asn1-97/SmsSubmitRes.ta.mjs";
import { smsSubmitError } from "../Short-Message-Service-Operations-asn1-97/smsSubmitError.oa.mjs";
import { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary smsSubmit
 * @description
 *
 * Submit a Short Message (ECMA-325 §6.5.1.1.1). Direction: Sending User PINX
 * or Sending User Message Centre to the Service Centre. ROSE local CODE 107.
 * The Message Centre follows the same procedures as the PINX (§6.5.2).
 *
 * Sent in SMS-Send-Idle when the Sending User is permitted to use SMS. The
 * invoke includes the Receiving User party number (`destinationAddress`), the
 * Sending User party number (`originatingAddress`), a new `messageReference`,
 * `smSubmitParameter`, and `userData`. The sender starts timer T1 (4 to 6
 * seconds, §6.9.1) and enters SMS-Send-Submit-Wait. §6.9.1 names the Sending
 * User PINX as the timer's home.
 *
 * Return result means the Service Centre accepted the Short Message. The
 * sender stops T1, indicates success, and returns to SMS-Send-Idle. The
 * Service Centre stores the Short Message, or replaces a stored one when
 * `protocolIdentifier` is a replace code, assigns `serviceCentreTimeStamp` and
 * priority, and sends `smsDeliver` (§6.5.3.1.1).
 *
 * Errors: `smsSubmitError` and `unspecified`. A reject or return error stops
 * T1 and is indicated to the Sending User (§6.5.1.2.1). On T1 expiry the
 * sender may repeat the invoke. How many times is an implementation matter
 * (NOTE 3).
 *
 * The Service Centre returns `smsSubmit` error `smRejectedDuplicateSM` when
 * `rejectDuplicates` is TRUE and the same `messageReference` and
 * `destinationAddress` were already received from the same
 * `originatingAddress`, or when `messageReference` matches an earlier Short
 * Message from the same Sending User but the destination differs (§6.5.3.2.1).
 * Annex E.1.2.5 describes the first case as an `smsDeliver` return error; the
 * procedure returns `smsSubmit` error. Unsupported telematic interworking
 * returns `telematicInterworkingNotSupported`.
 *
 * Carried on a call-independent signalling connection. The entity that sends
 * the invoke sets that connection up and clears it. NFE `destinationEntity` is
 * `endPINX`. Interpretation is omitted or `rejectAnyUnrecognizedInvokeAPDU`
 * (0) (ECMA-325 §6.3.2.1). The Sending User side sets up this connection
 * (§6.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsSubmit OPERATION ::= {
 *     -- sent from the Sending User PINX/ Sending User Message Centre to the Service Centre
 *     ARGUMENT SmsSubmitArg
 *     RESULT SmsSubmitRes
 *     ERRORS { smsSubmitError | unspecified }
 *     CODE local: 107
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SmsSubmitArg, SmsSubmitRes>}
 * @implements {OPERATION<SmsSubmitArg, SmsSubmitRes>}
 */
export
const smsSubmit: OPERATION<SmsSubmitArg, SmsSubmitRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SmsSubmitArg,
        "&ResultType": _decode_SmsSubmitRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SmsSubmitArg,
        "&ResultType": _encode_SmsSubmitRes,
    },
    "&Errors": [ smsSubmitError, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 107 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
