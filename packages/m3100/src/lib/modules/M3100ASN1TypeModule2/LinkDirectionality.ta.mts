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

/* START_OF_SYMBOL_DEFINITION _enum_for_LinkDirectionality */
/**
 * @summary LinkDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkDirectionality  ::=  ENUMERATED {
 *   unidirectional(0), bidirectional(1), undefined(2)}
 * ```@enum {number}
 */
export enum _enum_for_LinkDirectionality {
    unidirectional = 0,
    bidirectional = 1,
    undefined = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION LinkDirectionality */
/**
 * @summary LinkDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkDirectionality  ::=  ENUMERATED {
 *   unidirectional(0), bidirectional(1), undefined(2)}
 * ```@enum {number}
 */
export type LinkDirectionality = _enum_for_LinkDirectionality;
/* END_OF_SYMBOL_DEFINITION LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION LinkDirectionality */
/**
 * @summary LinkDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkDirectionality  ::=  ENUMERATED {
 *   unidirectional(0), bidirectional(1), undefined(2)}
 * ```@enum {number}
 */
export const LinkDirectionality = _enum_for_LinkDirectionality;
/* END_OF_SYMBOL_DEFINITION LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION LinkDirectionality_unidirectional */
/**
 * @summary LinkDirectionality_unidirectional
 * @constant
 * @type {number}
 */
export const LinkDirectionality_unidirectional: LinkDirectionality =
    LinkDirectionality.unidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LinkDirectionality_unidirectional */

/* START_OF_SYMBOL_DEFINITION unidirectional */
/**
 * @summary unidirectional
 * @constant
 * @type {number}
 */
export const unidirectional: LinkDirectionality =
    LinkDirectionality.unidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unidirectional */

/* START_OF_SYMBOL_DEFINITION LinkDirectionality_bidirectional */
/**
 * @summary LinkDirectionality_bidirectional
 * @constant
 * @type {number}
 */
export const LinkDirectionality_bidirectional: LinkDirectionality =
    LinkDirectionality.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LinkDirectionality_bidirectional */

/* START_OF_SYMBOL_DEFINITION bidirectional */
/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: LinkDirectionality =
    LinkDirectionality.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectional */

/* START_OF_SYMBOL_DEFINITION LinkDirectionality_undefined */
/**
 * @summary LinkDirectionality_undefined
 * @constant
 * @type {number}
 */
export const LinkDirectionality_undefined: LinkDirectionality =
    LinkDirectionality.undefined; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LinkDirectionality_undefined */

/* START_OF_SYMBOL_DEFINITION undefined */
/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: LinkDirectionality =
    LinkDirectionality.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION undefined */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkDirectionality */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION _decode_LinkDirectionality */
export const _decode_LinkDirectionality = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkDirectionality */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkDirectionality */

/* START_OF_SYMBOL_DEFINITION _encode_LinkDirectionality */
export const _encode_LinkDirectionality = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_LinkDirectionality */

/* eslint-enable */
