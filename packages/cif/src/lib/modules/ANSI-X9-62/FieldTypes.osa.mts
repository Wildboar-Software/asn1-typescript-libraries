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
import { FIELD_ID } from "../ANSI-X9-62/FIELD-ID.oca.mjs";
// export { FIELD_ID } from "../ANSI-X9-62/FIELD-ID.oca.mjs";
import { FieldTypes_Union0_Intersection0_Element } from "../ANSI-X9-62/FieldTypes-Union0-Intersection0-Element.oa.mjs";
// export { FieldTypes_Union0_Intersection0_Element } from "../ANSI-X9-62/FieldTypes-Union0-Intersection0-Element.oa.mjs";
import { FieldTypes_Union1_Intersection0_Element } from "../ANSI-X9-62/FieldTypes-Union1-Intersection0-Element.oa.mjs";
// export { FieldTypes_Union1_Intersection0_Element } from "../ANSI-X9-62/FieldTypes-Union1-Intersection0-Element.oa.mjs";


/**
 * @summary FieldTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldTypes FIELD-ID ::= {
 *     { Prime-p IDENTIFIED BY prime-field } |
 *     { Characteristic-two IDENTIFIED BY characteristic-two-field },
 *     ...
 * }
 * ```
 * 
 * @constant
 * @type {FIELD_ID[]}
 * 
 */
export
const FieldTypes: (FIELD_ID)[] = [ ...FieldTypes_Union0_Intersection0_Element, ...FieldTypes_Union1_Intersection0_Element, ];

/* eslint-enable */
