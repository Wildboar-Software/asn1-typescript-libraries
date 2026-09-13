/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { abandonFailed_ParameterType, _decode_abandonFailed_ParameterType, _encode_abandonFailed_ParameterType } from "../DFRAbstractService/abandonFailed-ParameterType.ta.mjs";
// export { abandonFailed_ParameterType, _decode_abandonFailed_ParameterType, _encode_abandonFailed_ParameterType } from "../DFRAbstractService/abandonFailed-ParameterType.ta.mjs";
import { id_errcode_abandon_failed } from "../DFRAbstractService/id-errcode-abandon-failed.va.mjs";
// export { id_errcode_abandon_failed } from "../DFRAbstractService/id-errcode-abandon-failed.va.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary abandonFailed
 * @description
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
