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
import { Characteristic_two, _decode_Characteristic_two, _encode_Characteristic_two } from "../SEC1-v1-9/Characteristic-two.ta.js";
export { Characteristic_two, _decode_Characteristic_two, _encode_Characteristic_two } from "../SEC1-v1-9/Characteristic-two.ta.js";
import { characteristic_two_field } from "../SEC1-v1-9/characteristic-two-field.va.js";
export { characteristic_two_field } from "../SEC1-v1-9/characteristic-two-field.va.js";
import { FIELD_ID } from "../SEC1-v1-9/FIELD-ID.oca.js";
export { FIELD_ID } from "../SEC1-v1-9/FIELD-ID.oca.js";


/* START_OF_SYMBOL_DEFINITION FieldTypes_Union1_Intersection0_Element */
/**
 * @summary FieldTypes_Union1_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldTypes-Union1-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {FIELD_ID<Characteristic_two>}
 * @implements {FIELD_ID<Characteristic_two>}
 */
export
const FieldTypes_Union1_Intersection0_Element: FIELD_ID<Characteristic_two> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Characteristic_two,
    },
    encoderFor: {
        "&Type": _encode_Characteristic_two,
    },
    "&id": characteristic_two_field /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION FieldTypes_Union1_Intersection0_Element */

/* eslint-enable */
