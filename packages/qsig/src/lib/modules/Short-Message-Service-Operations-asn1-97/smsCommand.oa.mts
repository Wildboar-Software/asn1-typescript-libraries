/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { SmsCommandArg, _decode_SmsCommandArg, _encode_SmsCommandArg } from "../Short-Message-Service-Operations-asn1-97/SmsCommandArg.ta.mjs";
import { SmsCommandRes, _decode_SmsCommandRes, _encode_SmsCommandRes } from "../Short-Message-Service-Operations-asn1-97/SmsCommandRes.ta.mjs";
import { smsCommandError } from "../Short-Message-Service-Operations-asn1-97/smsCommandError.oa.mjs";
import { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary smsCommand
 * @description
 *
 * Command on a previously submitted Short Message (ECMA-325 §6.5.1.1.2,
 * §6.5.3.1.2). Direction: Sending User PINX or Sending User Message Centre to
 * the Service Centre. ROSE local CODE 110.
 *
 * Sent in SMS-Send-Idle when the Sending User is permitted to use SMS. The
 * invoke includes `destinationAddress` of the Receiving User of the Short
 * Message, a new `messageReference` for the Command, `messageNumber` (the
 * Short Message's reference), `protocolIdentifier`, `commandType`, and the
 * optional elements in Annex E.10. The sender starts timer T2 (4 to 6 seconds,
 * §6.9.2) and enters SMS-Send-Command-Wait.
 *
 * The Service Centre finds the stored Short Message by `originatingAddress`
 * and `messageNumber` (§6.5.3.1.2). `SmsCommandArg` has no
 * `originatingAddress`; the standard does not say where that address is taken
 * from. Normal execution is specified for every state except SMS-SC-Idle. The
 * unidentified-message error is specified for any state (§6.5.3.2.2).
 *
 * `enquiry` requests a Status Report regardless of the stored Status Report
 * flags. `cancelSRR` clears those flags.
 * `enableSRRrelatingToPreviouslySubmittedSM` sets them.
 * `deletePreviouslySubmittedSM` deletes the Short Message and may request
 * status `smDeletedByOriginatingSME`. The Service Centre then returns a result
 * and stays in its current state.
 *
 * Return result: the sender stops T2, indicates success, and returns to
 * SMS-Send-Idle. Errors: `smsCommandError` and `unspecified`. If no Short
 * Message is identified the cause is `commandCannotBeActioned` and a Status
 * Report `smDoesNotExist` may be requested (§6.5.3.2.2). A reject or return
 * error stops T2. On T2 expiry the sender may repeat the invoke; how many
 * times is an implementation matter (NOTE 4).
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
 * smsCommand OPERATION ::= {
 *     -- sent from the Sending User PINX or the Sending User Message Centre to the Service Centre
 *     ARGUMENT SmsCommandArg
 *     RESULT SmsCommandRes
 *     ERRORS { smsCommandError | unspecified }
 *     CODE local: 110
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SmsCommandArg, SmsCommandRes>}
 * @implements {OPERATION<SmsCommandArg, SmsCommandRes>}
 */
export
const smsCommand: OPERATION<SmsCommandArg, SmsCommandRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SmsCommandArg,
        "&ResultType": _decode_SmsCommandRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_SmsCommandArg,
        "&ResultType": _encode_SmsCommandRes,
    },
    "&Errors": [ smsCommandError, unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 110 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
