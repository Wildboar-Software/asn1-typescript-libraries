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
import { Pentanomial, _decode_Pentanomial, _encode_Pentanomial } from "../SEC1-v1-9/Pentanomial.ta.js";
export { Pentanomial, _decode_Pentanomial, _encode_Pentanomial } from "../SEC1-v1-9/Pentanomial.ta.js";
import { ppBasis } from "../SEC1-v1-9/ppBasis.va.js";
export { ppBasis } from "../SEC1-v1-9/ppBasis.va.js";
import { CHARACTERISTIC_TWO } from "../SEC1-v1-9/CHARACTERISTIC-TWO.oca.js";
export { CHARACTERISTIC_TWO } from "../SEC1-v1-9/CHARACTERISTIC-TWO.oca.js";


/* START_OF_SYMBOL_DEFINITION BasisTypes_Union2_Intersection0_Element */
/**
 * @summary BasisTypes_Union2_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasisTypes-Union2-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {CHARACTERISTIC_TWO<Pentanomial>}
 * @implements {CHARACTERISTIC_TWO<Pentanomial>}
 */
export
const BasisTypes_Union2_Intersection0_Element: CHARACTERISTIC_TWO<Pentanomial> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Pentanomial,
    },
    encoderFor: {
        "&Type": _encode_Pentanomial,
    },
    "&id": ppBasis /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION BasisTypes_Union2_Intersection0_Element */

/* eslint-enable */
