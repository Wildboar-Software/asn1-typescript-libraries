/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { ReAlertingArg, _decode_ReAlertingArg, _encode_ReAlertingArg } from "../Recall-Operations-asn1-97/ReAlertingArg.ta.mjs";

/**
 * @summary recallAlerting
 * @description
 *
 * Recall has reached alerting. The Served User PINX sends it to the Primary
 * PINX in a FACILITY when alerting of user A starts (ECMA-214 §6.5.1.1).
 * Unconfirmed. ROSE local code 57. No errors. SS-CT has already succeeded and
 * user C has not answered. Recall applies if user C does not answer while
 * alerting, or stays busy, for a specified time (§6.1). §6.8 defines no timer.
 *
 * `alertedNumber` and `alertedName` may be included only when it is known that
 * presentation restriction does not apply (ECMA-214 §6.5.1.1). The Primary PINX
 * stays in RE-Idle-P and gives user B an alerting notification. It may pass on
 * a number subject to number presentation restriction, and a name subject to
 * name presentation restriction (§6.5.2.1).
 *
 * If CFU or CFB diverts the recall, the argument describes the diverted-to user
 * instead of user A, and no `divertingLegInformation1` or
 * `divertingLegInformation3` is sent to the Primary PINX (ECMA-214 §6.9.3.1,
 * §6.9.4). During CFNR those diversion notifications are relayed to the Primary
 * PINX (§6.9.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-214/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * recallAlerting OPERATION ::= {
 *     -- Sent from the Served User PINX to the Primary PINX
 *     ARGUMENT ReAlertingArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 57
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<ReAlertingArg>}
 * @implements {OPERATION<ReAlertingArg>}
 */
export
const recallAlerting: OPERATION<ReAlertingArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReAlertingArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReAlertingArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 57 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
