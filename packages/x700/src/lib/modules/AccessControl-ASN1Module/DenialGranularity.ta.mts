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
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION _enum_for_DenialGranularity */
/**
 * @summary DenialGranularity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```@enum {number}
 */
export enum _enum_for_DenialGranularity {
    request = 0,
    object = 1,
    attribute = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DenialGranularity */

/* START_OF_SYMBOL_DEFINITION DenialGranularity */
/**
 * @summary DenialGranularity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```@enum {number}
 */
export type DenialGranularity = _enum_for_DenialGranularity;
/* END_OF_SYMBOL_DEFINITION DenialGranularity */

/* START_OF_SYMBOL_DEFINITION DenialGranularity */
/**
 * @summary DenialGranularity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```@enum {number}
 */
export const DenialGranularity = _enum_for_DenialGranularity;
/* END_OF_SYMBOL_DEFINITION DenialGranularity */

/* START_OF_SYMBOL_DEFINITION DenialGranularity_request */
/**
 * @summary DenialGranularity_request
 * @constant
 * @type {number}
 */
export const DenialGranularity_request: DenialGranularity =
    DenialGranularity.request; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DenialGranularity_request */

/* START_OF_SYMBOL_DEFINITION request */
/**
 * @summary request
 * @constant
 * @type {number}
 */
export const request: DenialGranularity =
    DenialGranularity.request; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION request */

/* START_OF_SYMBOL_DEFINITION DenialGranularity_object */
/**
 * @summary DenialGranularity_object
 * @constant
 * @type {number}
 */
export const DenialGranularity_object: DenialGranularity =
    DenialGranularity.object; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DenialGranularity_object */

/* START_OF_SYMBOL_DEFINITION object */
/**
 * @summary object
 * @constant
 * @type {number}
 */
export const object: DenialGranularity =
    DenialGranularity.object; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION object */

/* START_OF_SYMBOL_DEFINITION DenialGranularity_attribute */
/**
 * @summary DenialGranularity_attribute
 * @constant
 * @type {number}
 */
export const DenialGranularity_attribute: DenialGranularity =
    DenialGranularity.attribute; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DenialGranularity_attribute */

/* START_OF_SYMBOL_DEFINITION attribute */
/**
 * @summary attribute
 * @constant
 * @type {number}
 */
export const attribute: DenialGranularity =
    DenialGranularity.attribute; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DenialGranularity */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DenialGranularity */

/* START_OF_SYMBOL_DEFINITION _decode_DenialGranularity */
export const _decode_DenialGranularity = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_DenialGranularity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DenialGranularity */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DenialGranularity */

/* START_OF_SYMBOL_DEFINITION _encode_DenialGranularity */
export const _encode_DenialGranularity = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_DenialGranularity */

/* eslint-enable */
