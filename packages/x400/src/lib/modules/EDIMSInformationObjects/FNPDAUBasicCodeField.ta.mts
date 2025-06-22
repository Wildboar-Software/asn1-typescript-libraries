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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary FNPDAUBasicCodeField
 * @description
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
export const FNPDAUBasicCodeField_unspecified: FNPDAUBasicCodeField = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNPDAUBasicCodeField_unspecified
 * @constant
 * @type {number}
 */
export const unspecified: FNPDAUBasicCodeField = FNPDAUBasicCodeField_unspecified; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery
 * @constant
 * @type {number}
 */
export const FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery: FNPDAUBasicCodeField = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery
 * @constant
 * @type {number}
 */
export const forwarded_for_physical_rendition_and_delivery: FNPDAUBasicCodeField = FNPDAUBasicCodeField_forwarded_for_physical_rendition_and_delivery; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_FNPDAUBasicCodeField = $._decodeInteger;


export const _encode_FNPDAUBasicCodeField = $._encodeInteger;


/* eslint-enable */
