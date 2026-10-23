/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SRFCallGapArg, _decode_SRFCallGapArg, _encode_SRFCallGapArg } from "../IN-CS3-SCF-SRF-ops-args/SRFCallGapArg.ta.mjs";
// export { SRFCallGapArg, _decode_SRFCallGapArg, _encode_SRFCallGapArg } from "../IN-CS3-SCF-SRF-ops-args/SRFCallGapArg.ta.mjs";
import { opcode_srfCallGap } from "../IN-CS3-operationcodes/opcode-srfCallGap.va.mjs";
// export { opcode_srfCallGap } from "../IN-CS3-operationcodes/opcode-srfCallGap.va.mjs";


/**
 * @summary sRFCallGap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sRFCallGap OPERATION ::= {
 *   ARGUMENT         SRFCallGapArg
 *   RETURN RESULT    FALSE
 *   ALWAYS RESPONDS  FALSE
 *   CODE             opcode-srfCallGap
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<SRFCallGapArg>}
 * @implements {OPERATION<SRFCallGapArg>}
 */
export
const sRFCallGap: OPERATION<SRFCallGapArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SRFCallGapArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SRFCallGapArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_srfCallGap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
