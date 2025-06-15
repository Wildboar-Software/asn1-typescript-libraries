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

/* START_OF_SYMBOL_DEFINITION _enum_for_Directionality */
/**
 * @summary Directionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Directionality  ::=  ENUMERATED {unidirectional(0), bidirectional(1)}
 * ```@enum {number}
 */
export enum _enum_for_Directionality {
    unidirectional = 0,
    bidirectional = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Directionality */

/* START_OF_SYMBOL_DEFINITION Directionality */
/**
 * @summary Directionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Directionality  ::=  ENUMERATED {unidirectional(0), bidirectional(1)}
 * ```@enum {number}
 */
export type Directionality = _enum_for_Directionality;
/* END_OF_SYMBOL_DEFINITION Directionality */

/* START_OF_SYMBOL_DEFINITION Directionality */
/**
 * @summary Directionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Directionality  ::=  ENUMERATED {unidirectional(0), bidirectional(1)}
 * ```@enum {number}
 */
export const Directionality = _enum_for_Directionality;
/* END_OF_SYMBOL_DEFINITION Directionality */

/* START_OF_SYMBOL_DEFINITION Directionality_unidirectional */
/**
 * @summary Directionality_unidirectional
 * @constant
 * @type {number}
 */
export const Directionality_unidirectional: Directionality =
    Directionality.unidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Directionality_unidirectional */

/* START_OF_SYMBOL_DEFINITION unidirectional */
/**
 * @summary unidirectional
 * @constant
 * @type {number}
 */
export const unidirectional: Directionality =
    Directionality.unidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unidirectional */

/* START_OF_SYMBOL_DEFINITION Directionality_bidirectional */
/**
 * @summary Directionality_bidirectional
 * @constant
 * @type {number}
 */
export const Directionality_bidirectional: Directionality =
    Directionality.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Directionality_bidirectional */

/* START_OF_SYMBOL_DEFINITION bidirectional */
/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: Directionality =
    Directionality.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectional */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Directionality */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Directionality */

/* START_OF_SYMBOL_DEFINITION _decode_Directionality */
export const _decode_Directionality = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_Directionality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Directionality */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Directionality */

/* START_OF_SYMBOL_DEFINITION _encode_Directionality */
export const _encode_Directionality = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_Directionality */

/* eslint-enable */
