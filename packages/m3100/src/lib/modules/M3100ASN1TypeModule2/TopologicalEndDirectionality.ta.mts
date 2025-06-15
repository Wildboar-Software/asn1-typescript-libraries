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

/* START_OF_SYMBOL_DEFINITION _enum_for_TopologicalEndDirectionality */
/**
 * @summary TopologicalEndDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TopologicalEndDirectionality  ::=  ENUMERATED {
 *   undefined(0), sink(1), source(2), bidirectional(3)}
 * ```@enum {number}
 */
export enum _enum_for_TopologicalEndDirectionality {
    undefined = 0,
    sink = 1,
    source = 2,
    bidirectional = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TopologicalEndDirectionality */

/* START_OF_SYMBOL_DEFINITION TopologicalEndDirectionality */
/**
 * @summary TopologicalEndDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TopologicalEndDirectionality  ::=  ENUMERATED {
 *   undefined(0), sink(1), source(2), bidirectional(3)}
 * ```@enum {number}
 */
export type TopologicalEndDirectionality = _enum_for_TopologicalEndDirectionality;
/* END_OF_SYMBOL_DEFINITION TopologicalEndDirectionality */

/* START_OF_SYMBOL_DEFINITION TopologicalEndDirectionality */
/**
 * @summary TopologicalEndDirectionality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TopologicalEndDirectionality  ::=  ENUMERATED {
 *   undefined(0), sink(1), source(2), bidirectional(3)}
 * ```@enum {number}
 */
export const TopologicalEndDirectionality = _enum_for_TopologicalEndDirectionality;
/* END_OF_SYMBOL_DEFINITION TopologicalEndDirectionality */

/* START_OF_SYMBOL_DEFINITION TopologicalEndDirectionality_undefined */
/**
 * @summary TopologicalEndDirectionality_undefined
 * @constant
 * @type {number}
 */
export const TopologicalEndDirectionality_undefined: TopologicalEndDirectionality =
    TopologicalEndDirectionality.undefined; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TopologicalEndDirectionality_undefined */

/* START_OF_SYMBOL_DEFINITION undefined */
/**
 * @summary undefined
 * @constant
 * @type {number}
 */
export const undefined: TopologicalEndDirectionality =
    TopologicalEndDirectionality.undefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION undefined */

/* START_OF_SYMBOL_DEFINITION TopologicalEndDirectionality_sink */
/**
 * @summary TopologicalEndDirectionality_sink
 * @constant
 * @type {number}
 */
export const TopologicalEndDirectionality_sink: TopologicalEndDirectionality =
    TopologicalEndDirectionality.sink; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TopologicalEndDirectionality_sink */

/* START_OF_SYMBOL_DEFINITION sink */
/**
 * @summary sink
 * @constant
 * @type {number}
 */
export const sink: TopologicalEndDirectionality =
    TopologicalEndDirectionality.sink; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sink */

/* START_OF_SYMBOL_DEFINITION TopologicalEndDirectionality_source */
/**
 * @summary TopologicalEndDirectionality_source
 * @constant
 * @type {number}
 */
export const TopologicalEndDirectionality_source: TopologicalEndDirectionality =
    TopologicalEndDirectionality.source; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TopologicalEndDirectionality_source */

/* START_OF_SYMBOL_DEFINITION source */
/**
 * @summary source
 * @constant
 * @type {number}
 */
export const source: TopologicalEndDirectionality =
    TopologicalEndDirectionality.source; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION source */

/* START_OF_SYMBOL_DEFINITION TopologicalEndDirectionality_bidirectional */
/**
 * @summary TopologicalEndDirectionality_bidirectional
 * @constant
 * @type {number}
 */
export const TopologicalEndDirectionality_bidirectional: TopologicalEndDirectionality =
    TopologicalEndDirectionality.bidirectional; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TopologicalEndDirectionality_bidirectional */

/* START_OF_SYMBOL_DEFINITION bidirectional */
/**
 * @summary bidirectional
 * @constant
 * @type {number}
 */
export const bidirectional: TopologicalEndDirectionality =
    TopologicalEndDirectionality.bidirectional; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bidirectional */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TopologicalEndDirectionality */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TopologicalEndDirectionality */

/* START_OF_SYMBOL_DEFINITION _decode_TopologicalEndDirectionality */
export const _decode_TopologicalEndDirectionality = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_TopologicalEndDirectionality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TopologicalEndDirectionality */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TopologicalEndDirectionality */

/* START_OF_SYMBOL_DEFINITION _encode_TopologicalEndDirectionality */
export const _encode_TopologicalEndDirectionality = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_TopologicalEndDirectionality */

/* eslint-enable */
