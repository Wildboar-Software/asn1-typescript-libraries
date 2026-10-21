/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Transfer-Operations-asn1-97/DummyArg.ta.mjs";

/**
 * @summary callTransferAbandon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTransferAbandon OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 8
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg>}
 * @implements {OPERATION<DummyArg>}
 */
export
const callTransferAbandon: OPERATION<DummyArg> = {
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
    "&operationCode": { local: 8 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
