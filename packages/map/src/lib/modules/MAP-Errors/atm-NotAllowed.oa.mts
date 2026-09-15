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
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { ATM_NotAllowedParam, _decode_ATM_NotAllowedParam, _encode_ATM_NotAllowedParam } from "../MAP-ER-DataTypes/ATM-NotAllowedParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary atm_NotAllowed
 * @description
 * 
 * Any Time Modification user error. Not listed under clause 7.6.1.4; returned
 * as user error Any Time Modification Not Allowed on MAP-ANY-TIME-MODIFICATION
 * (3GPP TS 29.002 V19.1.0 clauses 8.11.4.3 and 17.6.6).
 *
 * Local code 61. Optional parameter `ATM-NotAllowedParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * atm-NotAllowed  ERROR ::= {
 *     PARAMETER
 *     ATM-NotAllowedParam
 *     -- optional
 *     CODE    local:61 }
 * ```
 * 
 * @constant
 * @type {ERROR<ATM_NotAllowedParam>}
 * @implements {ERROR<ATM_NotAllowedParam>}
 */
export
const atm_NotAllowed: ERROR<ATM_NotAllowedParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_ATM_NotAllowedParam,
    },
    encoderFor: {
        "&ParameterType": _encode_ATM_NotAllowedParam,
    },
    "&errorCode": { local: 61 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
