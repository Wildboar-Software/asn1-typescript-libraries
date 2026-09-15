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
import { OR_NotAllowedParam, _decode_OR_NotAllowedParam, _encode_OR_NotAllowedParam } from "../MAP-ER-DataTypes/OR-NotAllowedParam.ta.mjs";
import { type ERROR } from "../Remote-Operations-Information-Objects/ERROR.oca.mjs";


/**
 * @summary or_NotAllowed
 * @description
 * 
 * Returned when the entity which sends the error does not support optimal
 * routeing, or the HLR will not accept an optimal routeing interrogation from
 * the GMSC, or the call cannot be optimally routed because it would contravene
 * optimal routeing constraints (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * Local code 48. Optional parameter `OR-NotAllowedParam` (3GPP TS 29.002
 * V19.1.0 clause 17.6.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * or-NotAllowed  ERROR ::= {
 *     PARAMETER
 *     OR-NotAllowedParam
 *     -- optional
 *     CODE    local:48 }
 * ```
 * 
 * @constant
 * @type {ERROR<OR_NotAllowedParam>}
 * @implements {ERROR<OR_NotAllowedParam>}
 */
export
const or_NotAllowed: ERROR<OR_NotAllowedParam> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _decode_OR_NotAllowedParam,
    },
    encoderFor: {
        "&ParameterType": _encode_OR_NotAllowedParam,
    },
    "&errorCode": { local: 48 } /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ErrorPriority": 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
