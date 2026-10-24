/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { type DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Intrusion-Operations-asn1-97/DummyArg.ta.mjs";

/**
 * @summary callIntrusionCompleted
 * @description
 *
 * SS-CI has finished and the call continues as a basic call
 * (ECMA-203 §6.6.1.6, §6.6.2.6). The Terminating PINX sends the
 * invoke in FACILITY. No result. Local code 48. The Interpretation
 * APDU is `discardAnyUnrecognisedInvokePdu` (§6.3.3.1).
 *
 * Sent from CI-Dest-Invoked or CI-Dest-Isolated when the established
 * call clears, and from CI-Dest-WOB when the called user answers the
 * waiting call. The calling and called users stay connected, or are
 * connected, in basic-call state Active. The Originating PINX, in
 * any SS-CI state except CI-Idle and CI-Wait-Ack, stops its timers
 * and enters CI-Idle. §6.6 does not say which `DummyArg` alternative
 * is sent.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIntrusionCompleted OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 48
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg>}
 * @implements {OPERATION<DummyArg>}
 */
export
const callIntrusionCompleted: OPERATION<DummyArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 48 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
