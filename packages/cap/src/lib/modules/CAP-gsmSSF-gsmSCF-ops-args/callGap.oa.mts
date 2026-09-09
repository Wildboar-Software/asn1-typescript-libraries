import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { CallGapArg, _decode_CallGapArg, _encode_CallGapArg } from "../CAP-gsmSSF-gsmSCF-ops-args/CallGapArg.ta.mjs";
import { opcode_callGap } from "../CAP-operationcodes/opcode-callGap.va.mjs";

/**
 * @summary callGap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * callGap OPERATION ::= {
 * 	ARGUMENT	CallGapArg {bound}
 * 	RETURN RESULT	FALSE
 * 	ALWAYS RESPONDS FALSE
 * 	CODE		opcode-callGap}
 * ```
 *
 * @constant
 * @type {OPERATION<CallGapArg>}
 * @implements {OPERATION<CallGapArg>}
 */
export
const callGap: OPERATION<CallGapArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CallGapArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_CallGapArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_callGap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
