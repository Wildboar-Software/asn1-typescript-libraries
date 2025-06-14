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
let _cached_decoder_for_PointDirectionality: $.ASN1Decoder<PointDirectionality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PointDirectionality */

/* START_OF_SYMBOL_DEFINITION _decode_PointDirectionality */
/**
 * @summary Decodes an ASN.1 element into a(n) PointDirectionality
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PointDirectionality} The decoded data structure.
 */
export function _decode_PointDirectionality(el: _Element) {
    if (!_cached_decoder_for_PointDirectionality) {
        _cached_decoder_for_PointDirectionality = $._decodeEnumerated;
    }
    return _cached_decoder_for_PointDirectionality(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PointDirectionality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PointDirectionality */
let _cached_encoder_for_PointDirectionality: $.ASN1Encoder<PointDirectionality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PointDirectionality */

/* START_OF_SYMBOL_DEFINITION _encode_PointDirectionality */
/**
 * @summary Encodes a(n) PointDirectionality into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PointDirectionality, encoded as an ASN.1 Element.
 */
export function _encode_PointDirectionality(
    value: PointDirectionality,
    elGetter: $.ASN1Encoder<PointDirectionality>
) {
    if (!_cached_encoder_for_PointDirectionality) {
        _cached_encoder_for_PointDirectionality = $._encodeEnumerated;
    }
    return _cached_encoder_for_PointDirectionality(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PointDirectionality */

/* eslint-enable */
