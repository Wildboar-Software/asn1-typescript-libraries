/* eslint-disable */
import { ForwardGroupCallSignallingArg, _decode_ForwardGroupCallSignallingArg, _encode_ForwardGroupCallSignallingArg } from "../MAP-GR-DataTypes/ForwardGroupCallSignallingArg.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary forwardGroupCallSignalling
 * @description
 *
 * MAP_FORWARD_GROUP_CALL_SIGNALLING: Anchor MSC transmits Group Call
 * notifications to the Relay MSC. Non-confirmed. Typical path: Anchor MSC→Relay
 * MSC. Local opcode 42. Timer class `s` (3 s to 10 s). (3GPP TS 29.002 V19.1.0
 * clauses 10.6.1, 17.1.2, 17.3.2.30 and 17.6.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * forwardGroupCallSignalling  OPERATION ::= {    --Timer s
 *     ARGUMENT
 *     ForwardGroupCallSignallingArg
 *     CODE    local:42 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ForwardGroupCallSignallingArg>}
 * @implements {OPERATION<ForwardGroupCallSignallingArg>}
 */
export
const forwardGroupCallSignalling: OPERATION<ForwardGroupCallSignallingArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ForwardGroupCallSignallingArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ForwardGroupCallSignallingArg,
        "&ResultType": undefined,
    },
    "&operationCode": { local: 42 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
