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
import { AbandonArgument, _decode_AbandonArgument, _encode_AbandonArgument } from "../DFRAbstractService/AbandonArgument.ta.mjs";
// export { AbandonArgument, _decode_AbandonArgument, _encode_AbandonArgument } from "../DFRAbstractService/AbandonArgument.ta.mjs";
import { AbandonResult, _decode_AbandonResult, _encode_AbandonResult } from "../DFRAbstractService/AbandonResult.ta.mjs";
// export { AbandonResult, _decode_AbandonResult, _encode_AbandonResult } from "../DFRAbstractService/AbandonResult.ta.mjs";
import { abandonFailed } from "../DFRAbstractService/abandonFailed.oa.mjs";
// export { abandonFailed } from "../DFRAbstractService/abandonFailed.oa.mjs";
import { id_opcode_abandon } from "../DFRAbstractService/id-opcode-abandon.va.mjs";
// export { id_opcode_abandon } from "../DFRAbstractService/id-opcode-abandon.va.mjs";


/**
 * @summary abandon
 * @description
 *
 * Stop an outstanding operation or discard List/Search continuation state. On
 * success the abandoned operation reports `abandoned` rather than a result.
 * ISO/IEC 10166-1:1991 §8.2.10. Local opcode 10 (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * abandon OPERATION ::= {
 *     ARGUMENT    AbandonArgument
 *     RESULT      AbandonResult
 *     ERRORS      {abandonFailed}
 *     CODE        id-opcode-abandon
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION<AbandonArgument, AbandonResult>}
 * @implements {OPERATION<AbandonArgument, AbandonResult>}
 */
export
const abandon: OPERATION<AbandonArgument, AbandonResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AbandonArgument,
        "&ResultType": _decode_AbandonResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AbandonArgument,
        "&ResultType": _encode_AbandonResult,
    },
    "&Errors": [ abandonFailed, ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_abandon /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
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
