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
 * @summary DenialGranularity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DenialGranularity {
    request = 0,
    object = 1,
    attribute = 2,
}

/**
 * @summary DenialGranularity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```
 *
 * @enum {number}
 */
export type DenialGranularity = _enum_for_DenialGranularity;

/**
 * @summary DenialGranularity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```
 *
 * @enum {number}
 */
export const DenialGranularity = _enum_for_DenialGranularity;

/**
 * @summary DenialGranularity_request
 * @constant
 * @type {number}
 */
export const DenialGranularity_request: DenialGranularity =
    DenialGranularity.request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @constant
 * @type {number}
 */
export const request: DenialGranularity =
    DenialGranularity.request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DenialGranularity_object
 * @constant
 * @type {number}
 */
export const DenialGranularity_object: DenialGranularity =
    DenialGranularity.object; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary object
 * @constant
 * @type {number}
 */
export const object: DenialGranularity =
    DenialGranularity.object; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DenialGranularity_attribute
 * @constant
 * @type {number}
 */
export const DenialGranularity_attribute: DenialGranularity =
    DenialGranularity.attribute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attribute
 * @constant
 * @type {number}
 */
export const attribute: DenialGranularity =
    DenialGranularity.attribute; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DenialGranularity = $._decodeEnumerated;


export const _encode_DenialGranularity = $._encodeEnumerated;


/* eslint-enable */
