/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Call-Intrusion-Operations-asn1-97/DummyArg.ta.mjs";
import { CIGetCIPLRes, _decode_CIGetCIPLRes, _encode_CIGetCIPLRes } from "../Call-Intrusion-Operations-asn1-97/CIGetCIPLRes.ta.mjs";

/**
 * @summary callIntrusionGetCIPL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callIntrusionGetCIPL OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RESULT CIGetCIPLRes
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 44
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg, CIGetCIPLRes>}
 * @implements {OPERATION<DummyArg, CIGetCIPLRes>}
 */
export
const callIntrusionGetCIPL: OPERATION<DummyArg, CIGetCIPLRes> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": _decode_CIGetCIPLRes,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": _encode_CIGetCIPLRes,
    },
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 44 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
