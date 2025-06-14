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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ResultInterval */
/**
 * @summary ResultInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultInterval  ::=  INTEGER
 * ```
 */
export type ResultInterval = INTEGER;
/* END_OF_SYMBOL_DEFINITION ResultInterval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultInterval */
let _cached_decoder_for_ResultInterval: $.ASN1Decoder<ResultInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResultInterval */

/* START_OF_SYMBOL_DEFINITION _decode_ResultInterval */
/**
 * @summary Decodes an ASN.1 element into a(n) ResultInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultInterval} The decoded data structure.
 */
export function _decode_ResultInterval(el: _Element) {
    if (!_cached_decoder_for_ResultInterval) {
        _cached_decoder_for_ResultInterval = $._decodeInteger;
    }
    return _cached_decoder_for_ResultInterval(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResultInterval */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultInterval */
let _cached_encoder_for_ResultInterval: $.ASN1Encoder<ResultInterval> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResultInterval */

/* START_OF_SYMBOL_DEFINITION _encode_ResultInterval */
/**
 * @summary Encodes a(n) ResultInterval into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultInterval, encoded as an ASN.1 Element.
 */
export function _encode_ResultInterval(
    value: ResultInterval,
    elGetter: $.ASN1Encoder<ResultInterval>
) {
    if (!_cached_encoder_for_ResultInterval) {
        _cached_encoder_for_ResultInterval = $._encodeInteger;
    }
    return _cached_encoder_for_ResultInterval(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResultInterval */

/* eslint-enable */
