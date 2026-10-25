/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary FNPDAUBasicCodeField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FNPDAUBasicCodeField  ::=  INTEGER {
 *   unspecified(0), forwarded-for-physical-rendition-and-delivery(1)
 * }(0..ub-reason-code)
 * ```
 */
export type FNPDAUBasicCodeField = INTEGER;

/**
 * @summary FNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const FNPDAUBasicCodeField_unspecified: 0 = 0 satisfies FNPDAUBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: 0 = FNPDAUBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery
 * @constant
 * @type {number}
 */
export const FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery: 1 = 1 satisfies FNPDAUBasicCodeField; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery
 * @constant
 * @type {number}
 */
export const forwarded_for_physical_rendition_and_delivery: 1 = FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_FNPDAUBasicCodeField: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_FNPDAUBasicCodeField: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
