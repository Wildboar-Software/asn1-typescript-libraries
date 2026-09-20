/* eslint-disable */
import { ForwardAccessSignalling_Arg, _decode_ForwardAccessSignalling_Arg, _encode_ForwardAccessSignalling_Arg } from "../MAP-MS-DataTypes/ForwardAccessSignalling-Arg.ta.mjs";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";


/**
 * @summary forwardAccessSignalling
 * @description
 *
 * MAP_FORWARD_ACCESS_SIGNALLING: MSC-A passes information to be forwarded to
 * the A-interface or Iu-interface of MSC-B (E-interface). Non-confirmed
 * (argument only). Typical path: MSC-A→MSC-B. Local opcode 34. Timer class `s`
 * (3 s to 10 s). (3GPP TS 29.002 V19.1.0 clauses 8.4.4.1, 17.1.2, 17.3.2.12 and
 * 17.6.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * forwardAccessSignalling  OPERATION ::= {    --Timer s
 *     ARGUMENT
 *     ForwardAccessSignalling-Arg
 *     CODE    local:34 }
 * ```
 * 
 * @constant
 * @type {OPERATION<ForwardAccessSignalling_Arg>}
 * @implements {OPERATION<ForwardAccessSignalling_Arg>}
 */
export
const forwardAccessSignalling: OPERATION<ForwardAccessSignalling_Arg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ForwardAccessSignalling_Arg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_ForwardAccessSignalling_Arg,
        "&ResultType": undefined,
    },
    "&operationCode": { local: 34 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
