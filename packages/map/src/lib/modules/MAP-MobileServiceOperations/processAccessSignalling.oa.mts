/* eslint-disable */
import { ProcessAccessSignalling_Arg, _decode_ProcessAccessSignalling_Arg, _encode_ProcessAccessSignalling_Arg } from "../MAP-MS-DataTypes/ProcessAccessSignalling-Arg.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary processAccessSignalling
 * @description
 *
 * MAP_PROCESS_ACCESS_SIGNALLING: MSC-B passes information received on the
 * A-interface or Iu-interface to MSC-A (E-interface). Non-confirmed (argument
 * only). Typical path: MSC-B→MSC-A. Local opcode 33. Timer class `s` (3 s to 10
 * s). (3GPP TS 29.002 V19.1.0 clauses 8.4.3.1, 17.1.2, 17.3.2.12 and 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * processAccessSignalling  OPERATION ::= {    --Timer s
 *     ARGUMENT
 *     ProcessAccessSignalling-Arg
 *     CODE    local:33 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ProcessAccessSignalling_Arg>}
 * @implements {OPERATION<ProcessAccessSignalling_Arg>}
 */
export
const processAccessSignalling: OPERATION<ProcessAccessSignalling_Arg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ProcessAccessSignalling_Arg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ProcessAccessSignalling_Arg,
        "&ResultType": undefined,
    },
    "&operationCode": { local: 33 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
