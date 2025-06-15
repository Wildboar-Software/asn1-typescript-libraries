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

/* START_OF_SYMBOL_DEFINITION _enum_for_PointDirectionality */
/**
 * @summary PointDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointDirectionality  ::=  ENUMERATED {sink(1), source(2), bidirectional(3)}
 * ```@enum {number}
 */
export enum _enum_for_PointDirectionality {
    sink = 1,
    source = 2,
    bidirectional = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PointDirectionality */

/* START_OF_SYMBOL_DEFINITION PointDirectionality */
/**
 * @summary PointDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointDirectionality  ::=  ENUMERATED {sink(1), source(2), bidirectional(3)}
 * ```@enum {number}
 */
export type PointDirectionality = _enum_for_PointDirectionality;
/* END_OF_SYMBOL_DEFINITION PointDirectionality */

/* START_OF_SYMBOL_DEFINITION PointDirectionality */
/**
 * @summary PointDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PointDirectionality  ::=  ENUMERATED {sink(1), source(2), bidirectional(3)}
 * ```@enum {number}
 */
export const PointDirectionality = _enum_for_PointDirectionality;
/* END_OF_SYMBOL_DEFINITION PointDirectionality */

/* START_OF_SYMBOL_DEFINITION PointDirectionality_sink */
/**
 * @summary PointDirectionality_sink
 * @constant
 * @type {number}
 */
export const PointDirectionality_sink: PointDirectionality =
    PointDirectionality.sink; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PointDirectionality_sink */

/* START_OF_SYMBOL_DEFINITION sink */
/**
 * @summary sink
 * @constant
 * @type {number}
 */
export const sink: PointDirectionality =
    PointDirectionality.sink; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sink */

/* START_OF_SYMBOL_DEFINITION PointDirectionality_source */
/**
 * @summary PointDirectionality_source
 * @constant
 * @type {number}
 */
export const PointDirectionality_source: PointDirectionality =
    PointDirectionality.source; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PointDirectionality_source */

/* START_OF_SYMBOL_DEFINITION source */
/**
 * @summary source
 * @constant
 * @type {number}
 */
export const source: PointDirectionality =
    PointDirectionality.source; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION source */

/* START_OF_SYMBOL_DEFINITION PointDirectionality_bidirectional */
/**
 * @summary PointDirectionality_bidirectional
 * @constant
 * @type {number}
 */
export const PointDirectionality_bidirectional: PointDirectionality =
    PointDirectionality.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PointDirectionality_bidirectional */

/* START_OF_SYMBOL_DEFINITION bidirectional */
/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: PointDirectionality =
    PointDirectionality.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectional */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PointDirectionality */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PointDirectionality */

/* START_OF_SYMBOL_DEFINITION _decode_PointDirectionality */
export const _decode_PointDirectionality = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_PointDirectionality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PointDirectionality */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PointDirectionality */

/* START_OF_SYMBOL_DEFINITION _encode_PointDirectionality */
export const _encode_PointDirectionality = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_PointDirectionality */

/* eslint-enable */
