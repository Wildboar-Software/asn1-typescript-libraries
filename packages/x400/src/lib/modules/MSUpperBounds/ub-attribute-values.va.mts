/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary ub_attribute_values
 * @description
 *
 * ASN.1 upper-bound INTEGER `ub_attribute_values`. Defining an attribute-type also
 * involves specifying the syntax, and hence data-type to which every value in the
 * attribute shall conform. The data-type of an attribute-value for the attribute-type is
 * indicated by the Object Identifier for the attribute-type. See ITU-T X.413 (1999),
 * §6.3.3.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-attribute-values INTEGER ::= 32767
 * ```
 *
 * @constant
 */
export const ub_attribute_values: INTEGER = 32767;

/* eslint-enable */
