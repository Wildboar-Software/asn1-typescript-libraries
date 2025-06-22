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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *     reference(1),
 *     sample(2) }
 * ```
 * @enum {number}
 */
export enum _enum_for_Purpose {
    reference = 1,
    sample = 2,
}


/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *     reference(1),
 *     sample(2) }
 * ```
 *
 * @enum {number}
 */
export type Purpose = _enum_for_Purpose;


/**
 * @summary Purpose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Purpose  ::=  ENUMERATED {
 *     reference(1),
 *     sample(2) }
 * ```
 *
 * @enum {number}
 */
export const Purpose = _enum_for_Purpose;


/**
 * @summary Purpose_reference
 * @constant
 * @type {number}
 */
export const Purpose_reference: Purpose =
    Purpose.reference; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary reference
 * @constant
 * @type {number}
 */
export const reference: Purpose =
    Purpose.reference; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Purpose_sample
 * @constant
 * @type {number}
 */
export const Purpose_sample: Purpose =
    Purpose.sample; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sample
 * @constant
 * @type {number}
 */
export const sample: Purpose =
    Purpose.sample; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Purpose = $._decodeEnumerated;




export const _encode_Purpose = $._encodeEnumerated;


/* eslint-enable */
