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

/* START_OF_SYMBOL_DEFINITION _enum_for_TypeOfAddress */
/**
 * @summary TypeOfAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfAddress  ::=  ENUMERATED {national(0), international(1), private(2)}
 * ```@enum {number}
 */
export enum _enum_for_TypeOfAddress {
    national = 0,
    international = 1,
    private_ = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION TypeOfAddress */
/**
 * @summary TypeOfAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfAddress  ::=  ENUMERATED {national(0), international(1), private(2)}
 * ```@enum {number}
 */
export type TypeOfAddress = _enum_for_TypeOfAddress;
/* END_OF_SYMBOL_DEFINITION TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION TypeOfAddress */
/**
 * @summary TypeOfAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfAddress  ::=  ENUMERATED {national(0), international(1), private(2)}
 * ```@enum {number}
 */
export const TypeOfAddress = _enum_for_TypeOfAddress;
/* END_OF_SYMBOL_DEFINITION TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION TypeOfAddress_national */
/**
 * @summary TypeOfAddress_national
 * @constant
 * @type {number}
 */
export const TypeOfAddress_national: TypeOfAddress =
    TypeOfAddress.national; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfAddress_national */

/* START_OF_SYMBOL_DEFINITION national */
/**
 * @summary national
 * @constant
 * @type {number}
 */
export const national: TypeOfAddress =
    TypeOfAddress.national; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION national */

/* START_OF_SYMBOL_DEFINITION TypeOfAddress_international */
/**
 * @summary TypeOfAddress_international
 * @constant
 * @type {number}
 */
export const TypeOfAddress_international: TypeOfAddress =
    TypeOfAddress.international; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfAddress_international */

/* START_OF_SYMBOL_DEFINITION international */
/**
 * @summary international
 * @constant
 * @type {number}
 */
export const international: TypeOfAddress =
    TypeOfAddress.international; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION international */

/* START_OF_SYMBOL_DEFINITION TypeOfAddress_private_ */
/**
 * @summary TypeOfAddress_private_
 * @constant
 * @type {number}
 */
export const TypeOfAddress_private_: TypeOfAddress =
    TypeOfAddress.private_; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfAddress_private_ */

/* START_OF_SYMBOL_DEFINITION private_ */
/**
 * @summary private_
 * @constant
 * @type {number}
 */
export const private_: TypeOfAddress =
    TypeOfAddress.private_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION private_ */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfAddress */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION _decode_TypeOfAddress */
export const _decode_TypeOfAddress = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfAddress */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION _encode_TypeOfAddress */
export const _encode_TypeOfAddress = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_TypeOfAddress */

/* eslint-enable */
