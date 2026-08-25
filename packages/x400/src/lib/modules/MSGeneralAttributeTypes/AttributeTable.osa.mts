/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { GeneralAttributes } from '../MSGeneralAttributeTypes/GeneralAttributes.osa.mjs';
import { ContentSpecificAttributes } from '../MSGeneralAttributeTypes/ContentSpecificAttributes.osa.mjs';
/**
 * @summary AttributeTable
 * @description
 *
 * The Attribute-table information object set is used as a constraining set in this Service
 * Definition where related fields of the ATTRIBUTE information object class are referenced
 * in the MS abstract-syntax. See ITU-T X.413 (1999), §11.
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

/* eslint-enable */
