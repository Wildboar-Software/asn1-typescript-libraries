/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CallIdentificationUpdateArg, _decode_CallIdentificationUpdateArg, _encode_CallIdentificationUpdateArg } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/CallIdentificationUpdateArg.ta.mjs";

/**
 * @summary callIdentificationUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIdentificationUpdate OPERATION ::= {
 *     ARGUMENT CallIdentificationUpdateArg
 *     RETURN RESULT FALSE
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 106
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<CallIdentificationUpdateArg>}
 * @implements {OPERATION<CallIdentificationUpdateArg>}
 */
export
const callIdentificationUpdate: OPERATION<CallIdentificationUpdateArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallIdentificationUpdateArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallIdentificationUpdateArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 106 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
