/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { SpecializedResourceReportArg, _decode_SpecializedResourceReportArg, _encode_SpecializedResourceReportArg } from "../CAP-gsmSCF-gsmSRF-ops-args/SpecializedResourceReportArg.ta.mjs";
// export { SpecializedResourceReportArg, _decode_SpecializedResourceReportArg, _encode_SpecializedResourceReportArg } from "../CAP-gsmSCF-gsmSRF-ops-args/SpecializedResourceReportArg.ta.mjs";
import { opcode_specializedResourceReport } from "../CAP-operationcodes/opcode-specializedResourceReport.va.mjs";
// export { opcode_specializedResourceReport } from "../CAP-operationcodes/opcode-specializedResourceReport.va.mjs";


/**
 * @summary specializedResourceReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * specializedResourceReport OPERATION ::= {
 *     ARGUMENT    SpecializedResourceReportArg
 *     RETURN RESULT    FALSE
 *     ALWAYS RESPONDS    FALSE
 *     CODE        opcode-specializedResourceReport}
 * ```
 * 
 * @constant
 * @type {OPERATION<SpecializedResourceReportArg>}
 * @implements {OPERATION<SpecializedResourceReportArg>}
 */
export
const specializedResourceReport: OPERATION<SpecializedResourceReportArg> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_SpecializedResourceReportArg,
        "&ResultType": undefined,
    },
    encoderFor: {
        "&ArgumentType": _encode_SpecializedResourceReportArg,
        "&ResultType": undefined,
    },
    "&returnResult": false /* OBJECT_FIELD_SETTING */,
    "&alwaysReturns": false /* OBJECT_FIELD_SETTING */,
    "&operationCode": opcode_specializedResourceReport /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&InvokePriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&ResultPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
    "&synchronous": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&idempotent": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
