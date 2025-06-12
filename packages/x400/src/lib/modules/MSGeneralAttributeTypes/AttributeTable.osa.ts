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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";
import { GeneralAttributes } from '../MSGeneralAttributeTypes/GeneralAttributes.osa.js';
export { GeneralAttributes } from '../MSGeneralAttributeTypes/GeneralAttributes.osa.js';
import { ContentSpecificAttributes } from '../MSGeneralAttributeTypes/ContentSpecificAttributes.osa.js';
export { ContentSpecificAttributes } from '../MSGeneralAttributeTypes/ContentSpecificAttributes.osa.js';

/* START_OF_SYMBOL_DEFINITION AttributeTable */
/**
 * @summary AttributeTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTable X413ATTRIBUTE ::= {GeneralAttributes | ContentSpecificAttributes}
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE[]}
 *
 */
export const AttributeTable: X413ATTRIBUTE[] = [
    ...GeneralAttributes,
    ...ContentSpecificAttributes,
];
/* END_OF_SYMBOL_DEFINITION AttributeTable */

/* eslint-enable */
