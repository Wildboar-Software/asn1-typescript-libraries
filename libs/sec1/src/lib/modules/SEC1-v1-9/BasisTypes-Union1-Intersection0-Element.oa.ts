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
import { Trinomial, _decode_Trinomial, _encode_Trinomial } from "../SEC1-v1-9/Trinomial.ta";
export { Trinomial, _decode_Trinomial, _encode_Trinomial } from "../SEC1-v1-9/Trinomial.ta";
import { tpBasis } from "../SEC1-v1-9/tpBasis.va";
export { tpBasis } from "../SEC1-v1-9/tpBasis.va";
import { CHARACTERISTIC_TWO } from "../SEC1-v1-9/CHARACTERISTIC-TWO.oca";
export { CHARACTERISTIC_TWO } from "../SEC1-v1-9/CHARACTERISTIC-TWO.oca";


/* START_OF_SYMBOL_DEFINITION BasisTypes_Union1_Intersection0_Element */
/**
 * @summary BasisTypes_Union1_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasisTypes-Union1-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {CHARACTERISTIC_TWO<Trinomial>}
 * @implements {CHARACTERISTIC_TWO<Trinomial>}
 */
export
const BasisTypes_Union1_Intersection0_Element: CHARACTERISTIC_TWO<Trinomial> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Trinomial,
    },
    encoderFor: {
        "&Type": _encode_Trinomial,
    },
    "&id": tpBasis /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION BasisTypes_Union1_Intersection0_Element */

/* eslint-enable */
