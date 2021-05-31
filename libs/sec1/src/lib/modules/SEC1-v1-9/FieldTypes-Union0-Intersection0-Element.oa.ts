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
import * as $ from "asn1-ts/dist/node/functional";
import { Prime_p, _decode_Prime_p, _encode_Prime_p } from "../SEC1-v1-9/Prime-p.ta";
export { Prime_p, _decode_Prime_p, _encode_Prime_p } from "../SEC1-v1-9/Prime-p.ta";
import { prime_field } from "../SEC1-v1-9/prime-field.va";
export { prime_field } from "../SEC1-v1-9/prime-field.va";
import { FIELD_ID } from "../SEC1-v1-9/FIELD-ID.oca";
export { FIELD_ID } from "../SEC1-v1-9/FIELD-ID.oca";


/* START_OF_SYMBOL_DEFINITION FieldTypes_Union0_Intersection0_Element */
/**
 * @summary FieldTypes_Union0_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldTypes-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {FIELD_ID<Prime_p>}
 * @implements {FIELD_ID<Prime_p>}
 */
export
const FieldTypes_Union0_Intersection0_Element: FIELD_ID<Prime_p> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Prime_p,
    },
    encoderFor: {
        "&Type": _encode_Prime_p,
    },
    "&id": prime_field /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION FieldTypes_Union0_Intersection0_Element */

/* eslint-enable */
