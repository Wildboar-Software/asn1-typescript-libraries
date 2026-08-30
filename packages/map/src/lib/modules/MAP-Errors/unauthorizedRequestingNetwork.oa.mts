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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { UnauthorizedRequestingNetwork_Param, _decode_UnauthorizedRequestingNetwork_Param, _encode_UnauthorizedRequestingNetwork_Param } from "../MAP-ER-DataTypes/UnauthorizedRequestingNetwork-Param.ta.mjs";
// export { UnauthorizedRequestingNetwork_Param, _decode_UnauthorizedRequestingNetwork_Param, _encode_UnauthorizedRequestingNetwork_Param } from "../MAP-ER-DataTypes/UnauthorizedRequestingNetwork-Param.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary unauthorizedRequestingNetwork
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * unauthorizedRequestingNetwork  ERROR ::= {
 *     PARAMETER
 *     UnauthorizedRequestingNetwork-Param
 *     -- optional
 *     CODE    local:52 }
 * ```
 * 
 * @constant
 * @type {ERROR<UnauthorizedRequestingNetwork_Param>}
 * @implements {ERROR<UnauthorizedRequestingNetwork_Param>}
 */
export
const unauthorizedRequestingNetwork: ERROR<UnauthorizedRequestingNetwork_Param> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_UnauthorizedRequestingNetwork_Param,
    },
    encoderFor: {
        "&ParameterType": _encode_UnauthorizedRequestingNetwork_Param,
    },
    "&errorCode": { local: 52 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
