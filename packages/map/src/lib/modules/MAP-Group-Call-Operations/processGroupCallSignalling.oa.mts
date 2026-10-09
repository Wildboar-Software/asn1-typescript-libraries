/* eslint-disable */
import { ProcessGroupCallSignallingArg, _decode_ProcessGroupCallSignallingArg, _encode_ProcessGroupCallSignallingArg } from "../MAP-GR-DataTypes/ProcessGroupCallSignallingArg.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary processGroupCallSignalling
 * @description
 *
 * MAP_PROCESS_GROUP_CALL_SIGNALLING: Relay MSC transmits Group Call
 * notifications to the Anchor MSC. Non-confirmed. Typical path: Relay
 * MSC→Anchor MSC. Local opcode 41. Timer class `s` (3 s to 10 s). (3GPP TS
 * 29.002 V19.1.0 clauses 10.5.1, 17.1.2, 17.3.2.30 and 17.6.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * processGroupCallSignalling  OPERATION ::= {    --Timer s
 *     ARGUMENT
 *     ProcessGroupCallSignallingArg
 *     CODE    local:41 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ProcessGroupCallSignallingArg>}
 * @implements {OPERATION<ProcessGroupCallSignallingArg>}
 */
export
const processGroupCallSignalling: OPERATION<ProcessGroupCallSignallingArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ProcessGroupCallSignallingArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ProcessGroupCallSignallingArg,
        "&ResultType": undefined,
    },
    "&operationCode": { local: 41 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
