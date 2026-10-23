/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ScAlertArg, _decode_ScAlertArg, _encode_ScAlertArg } from "../Short-Message-Service-Operations-asn1-97/ScAlertArg.ta.mjs";
import { DummyRes, _decode_DummyRes, _encode_DummyRes } from "../Short-Message-Service-Operations-asn1-97/DummyRes.ta.mjs";
import { unspecified } from "../Short-Message-Service-Operations-asn1-97/unspecified.oa.mjs";

/**
 * @summary scAlert
 * @description
 *
 * The Receiving User can take Short Messages again (ECMA-325 §6.5.4.2,
 * §6.5.5.2). Direction: Receiving User PINX or Receiving User Message Centre
 * to the Service Centre. In the Message Centre case the Message Centre sends
 * it to the Receiving User PINX, which forwards it (§6.5.4.1). ROSE local CODE
 * 111. Result is `DummyRes`. The only error is `unspecified`.
 *
 * Sent, for every Service Centre stored in Short Message Waiting Data, when
 * the user is reachable again or memory is free, and also after a priority
 * Short Message is delivered during alert-wait. `originatingAddress` is the
 * Receiving User's party number. The PINX starts timer T6 per alert (4 to 6
 * seconds, §6.9.6) and enters SMS-Rec-User-case-AlertResp. The Message Centre
 * uses timer T7 the same way (§6.9.7, state SMS-Rec-MC-AlertResp). How many
 * repeats is an implementation matter (NOTE 7, NOTE 8).
 *
 * A valid alert stops Service Centre timer T4 if it is running. The Service
 * Centre sends `smsDeliver` again and enters SMS-SC-Deliver-Wait (§6.5.3.2.1).
 * The standard does not define what makes an alert invalid, nor the contents
 * of `DummyRes`. A return result at the PINX deletes that Service Centre from
 * Short Message Waiting Data. A return error, reject, or timer expiry either
 * deletes it or the alert is sent again.
 *
 * Carried on a call-independent signalling connection. The entity that sends
 * the invoke sets that connection up and clears it. NFE `destinationEntity` is
 * `endPINX`. Interpretation is omitted or `rejectAnyUnrecognizedInvokeAPDU`
 * (0) (ECMA-325 §6.3.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scAlert OPERATION ::= {
 *     -- sent from the Receiving User PINX or the Receiving User Message Centre to the Service Centre
 *     ARGUMENT ScAlertArg
 *     RESULT DummyRes
 *     ERRORS {unspecified}
 *     CODE local: 111
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ScAlertArg, DummyRes>}
 * @implements {OPERATION<ScAlertArg, DummyRes>}
 */
export
const scAlert: OPERATION<ScAlertArg, DummyRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ScAlertArg,
        "&ResultType": _decode_DummyRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_ScAlertArg,
        "&ResultType": _encode_DummyRes,
    },
    "&Errors": [ unspecified, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 111 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
