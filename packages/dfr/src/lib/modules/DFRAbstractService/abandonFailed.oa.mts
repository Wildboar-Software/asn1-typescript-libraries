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
import { _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { abandonFailed_ParameterType, _decode_abandonFailed_ParameterType, _encode_abandonFailed_ParameterType } from "../DFRAbstractService/abandonFailed-ParameterType.ta.mjs";
import { id_errcode_abandon_failed } from "../DFRAbstractService/id-errcode-abandon-failed.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary abandonFailed
 * @description
 *
 * Abandon itself failed (unknown operation, too late, or
 * implementation-specific). Named Abandon-failed (ISO/IEC
 * 10166-1:1991/Cor.1:1994 §8.3.11). ISO/IEC 10166-1:1991 §8.3.11. Local error
 * 11 (ISO/IEC 10166-2:1991 §6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * abandonFailed ERROR ::= {
 *     PARAMETER SET {
 *         problem     [0] AbandonProblem,
 *         operation   [1] InvokeId
 *     }
 *     CODE        id-errcode-abandon-failed
 * }
 * ```
 * 
 * @constant
 * @type {ERROR<abandonFailed_ParameterType>}
 * @implements {ERROR<abandonFailed_ParameterType>}
 */
export
const abandonFailed: ERROR<abandonFailed_ParameterType> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_abandonFailed_ParameterType,
    },
    encoderFor: {
        "&ParameterType": _encode_abandonFailed_ParameterType,
    },
    "&errorCode": id_errcode_abandon_failed /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
