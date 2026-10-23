/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SmsDeliverArg, _decode_SmsDeliverArg, _encode_SmsDeliverArg } from "../Short-Message-Service-Operations-asn1-97/SmsDeliverArg.ta.mjs";
import { SmsDeliverRes, _decode_SmsDeliverRes, _encode_SmsDeliverRes } from "../Short-Message-Service-Operations-asn1-97/SmsDeliverRes.ta.mjs";
import { smsDeliverError } from "../Short-Message-Service-Operations-asn1-97/smsDeliverError.oa.mjs";
import { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary smsDeliver
 * @description
 *
 * Deliver a Short Message (ECMA-325 §6.5.3.1.1, §6.5.4, §6.5.5). Direction:
 * Service Centre to the Receiving User PINX. In the Message Centre case the
 * PINX forwards the invoke to the Receiving User Message Centre and forwards
 * the result, error, or reject back. ROSE local CODE 108.
 *
 * The Service Centre sends it from SMS-SC-Idle after accepting `smsSubmit`,
 * starts timer T3 (4 to 6 seconds, §6.9.3), and enters SMS-SC-Deliver-Wait. It
 * includes the submit elements, optional `originatingName` when the name is
 * available and not restricted, `serviceCentreTimeStamp`, Service Centre
 * priority, `moreMessagesToSend`, `statusReportIndication`, and `replyPath`.
 *
 * Return result means the Receiving User side delivered or saved the Short
 * Message. The Service Centre stops T3. If a Status Report was requested for
 * this condition it asks for status `smReceivedBySME` and returns to
 * SMS-SC-Idle (§6.5.3.1.1). A Message Centre that saves the Short Message also
 * sends `mwiActivate` with basic service `shortMessageService` (§6.8.24).
 *
 * Errors: `smsDeliverError` and `unspecified`. `memoryCapacityExceeded` or
 * `simSmsStorageFull`, or an extra Cause information element, makes the
 * Service Centre enter SMS-SC-Await-Alert and, when `scAddressSaved` is FALSE,
 * start implementation-dependent timer T4 (§6.9.4, §6.5.3.2.1). Any other
 * `failureCause` deletes the Short Message. A reject deletes it and may
 * request status `connectionRejectedBySME`. On T3 expiry the Service Centre
 * may resend `smsDeliver` or delete the Short Message.
 *
 * `protocolIdentifier` `shortMessageType0` still gets a return result; the
 * receiver may discard the contents (§6.5.4.2, §6.5.5.2). While the receiver
 * is in an alert-wait state, `priority` TRUE is attempted anyway (§6.5.4.2,
 * §6.5.5.2). §6.5.5.1 says a successful Message Centre save returns the result
 * to the Sending User PINX; §6.5.4.1 and §6.5.5.2 say the Receiving User PINX.
 *
 * Carried on a call-independent signalling connection. The entity that sends
 * the invoke sets that connection up and clears it. NFE `destinationEntity` is
 * `endPINX`. Interpretation is omitted or `rejectAnyUnrecognizedInvokeAPDU`
 * (0) (ECMA-325 §6.3.2.1). Who sets up the connection depends on the sender
 * (§6.5.3, §6.5.4, §6.5.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * smsDeliver OPERATION ::= {
 *     -- sent from the Service Centre to the Receiving User PINX or to the Receiving User Message Centre
 *     ARGUMENT SmsDeliverArg
 *     RESULT SmsDeliverRes
 *     ERRORS { smsDeliverError | unspecified }
 *     CODE local: 108
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SmsDeliverArg, SmsDeliverRes>}
 * @implements {OPERATION<SmsDeliverArg, SmsDeliverRes>}
 */
export
const smsDeliver: OPERATION<SmsDeliverArg, SmsDeliverRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SmsDeliverArg,
        "&ResultType": _decode_SmsDeliverRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SmsDeliverArg,
        "&ResultType": _encode_SmsDeliverRes,
    },
    "&Errors": [ smsDeliverError, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 108 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
