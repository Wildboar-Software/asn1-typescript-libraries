/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Common-Information-Operations-asn1-97/DummyArg.ta.mjs";
// export { DummyArg, _decode_DummyArg, _encode_DummyArg } from "../Common-Information-Operations-asn1-97/DummyArg.ta.mjs";
import { CmnArg, _decode_CmnArg, _encode_CmnArg } from "../Common-Information-Operations-asn1-97/CmnArg.ta.mjs";
// export { CmnArg, _decode_CmnArg, _encode_CmnArg } from "../Common-Information-Operations-asn1-97/CmnArg.ta.mjs";


/**
 * @summary cmnRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cmnRequest OPERATION ::= {
 *     ARGUMENT DummyArg
 *     RESULT CmnArg
 *     ALWAYS RESPONDS FALSE
 *     CODE local: 84
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<DummyArg, CmnArg>}
 * @implements {OPERATION<DummyArg, CmnArg>}
 */
export
const cmnRequest: OPERATION<DummyArg, CmnArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_DummyArg,
        "&ResultType": _decode_CmnArg,
    },
    encoderFor: {
        "&ArgumentType": _encode_DummyArg,
        "&ResultType": _encode_CmnArg,
    },
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": { local: 84 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&returnResult": true /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
