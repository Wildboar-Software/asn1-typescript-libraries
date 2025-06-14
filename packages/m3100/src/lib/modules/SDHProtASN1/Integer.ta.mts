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

/* START_OF_SYMBOL_DEFINITION Integer */
/**
 * @summary Integer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Integer  ::=  INTEGER
 * ```
 */
export type Integer = INTEGER;
/* END_OF_SYMBOL_DEFINITION Integer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Integer */
let _cached_decoder_for_Integer: $.ASN1Decoder<Integer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Integer */

/* START_OF_SYMBOL_DEFINITION _decode_Integer */
/**
 * @summary Decodes an ASN.1 element into a(n) Integer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Integer} The decoded data structure.
 */
export function _decode_Integer(el: _Element) {
    if (!_cached_decoder_for_Integer) {
        _cached_decoder_for_Integer = $._decodeInteger;
    }
    return _cached_decoder_for_Integer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Integer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Integer */
let _cached_encoder_for_Integer: $.ASN1Encoder<Integer> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Integer */

/* START_OF_SYMBOL_DEFINITION _encode_Integer */
/**
 * @summary Encodes a(n) Integer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Integer, encoded as an ASN.1 Element.
 */
export function _encode_Integer(
    value: Integer,
    elGetter: $.ASN1Encoder<Integer>
) {
    if (!_cached_encoder_for_Integer) {
        _cached_encoder_for_Integer = $._encodeInteger;
    }
    return _cached_encoder_for_Integer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Integer */

/* eslint-enable */
