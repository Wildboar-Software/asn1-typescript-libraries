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
import { CHARACTERISTIC_TWO } from "../SEC1-v1-9/CHARACTERISTIC-TWO.oca";
export { CHARACTERISTIC_TWO } from "../SEC1-v1-9/CHARACTERISTIC-TWO.oca";
import { BasisTypes_Union0_Intersection0_Element } from "../SEC1-v1-9/BasisTypes-Union0-Intersection0-Element.oa";
export { BasisTypes_Union0_Intersection0_Element } from "../SEC1-v1-9/BasisTypes-Union0-Intersection0-Element.oa";
import { BasisTypes_Union1_Intersection0_Element } from "../SEC1-v1-9/BasisTypes-Union1-Intersection0-Element.oa";
export { BasisTypes_Union1_Intersection0_Element } from "../SEC1-v1-9/BasisTypes-Union1-Intersection0-Element.oa";
import { BasisTypes_Union2_Intersection0_Element } from "../SEC1-v1-9/BasisTypes-Union2-Intersection0-Element.oa";
export { BasisTypes_Union2_Intersection0_Element } from "../SEC1-v1-9/BasisTypes-Union2-Intersection0-Element.oa";


/* START_OF_SYMBOL_DEFINITION BasisTypes */
/**
 * @summary BasisTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasisTypes CHARACTERISTIC-TWO ::= {
 *     { NULL IDENTIFIED BY gnBasis } |
 *     { Trinomial IDENTIFIED BY tpBasis } |
 *     { Pentanomial IDENTIFIED BY ppBasis },
 *     ...
 * }
 * ```
 *
 * @constant
 * @type {CHARACTERISTIC_TWO[]}
 *
 */
export
const BasisTypes: (CHARACTERISTIC_TWO<any>)[] = [ BasisTypes_Union0_Intersection0_Element, BasisTypes_Union1_Intersection0_Element, BasisTypes_Union2_Intersection0_Element, ];
/* END_OF_SYMBOL_DEFINITION BasisTypes */

/* eslint-enable */
