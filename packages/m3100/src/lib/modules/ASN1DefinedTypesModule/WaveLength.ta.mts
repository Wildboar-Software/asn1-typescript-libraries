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

/* START_OF_SYMBOL_DEFINITION WaveLength */
/**
 * @summary WaveLength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WaveLength  ::=  INTEGER
 * ```
 */
export type WaveLength = INTEGER;
/* END_OF_SYMBOL_DEFINITION WaveLength */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WaveLength */
let _cached_decoder_for_WaveLength: $.ASN1Decoder<WaveLength> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WaveLength */

/* START_OF_SYMBOL_DEFINITION _decode_WaveLength */
/**
 * @summary Decodes an ASN.1 element into a(n) WaveLength
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WaveLength} The decoded data structure.
 */
export function _decode_WaveLength(el: _Element) {
    if (!_cached_decoder_for_WaveLength) {
        _cached_decoder_for_WaveLength = $._decodeInteger;
    }
    return _cached_decoder_for_WaveLength(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WaveLength */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WaveLength */
let _cached_encoder_for_WaveLength: $.ASN1Encoder<WaveLength> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WaveLength */

/* START_OF_SYMBOL_DEFINITION _encode_WaveLength */
/**
 * @summary Encodes a(n) WaveLength into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WaveLength, encoded as an ASN.1 Element.
 */
export function _encode_WaveLength(
    value: WaveLength,
    elGetter: $.ASN1Encoder<WaveLength>
) {
    if (!_cached_encoder_for_WaveLength) {
        _cached_encoder_for_WaveLength = $._encodeInteger;
    }
    return _cached_encoder_for_WaveLength(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WaveLength */

/* eslint-enable */
