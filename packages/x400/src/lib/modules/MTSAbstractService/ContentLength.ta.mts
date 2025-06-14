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

/* START_OF_SYMBOL_DEFINITION ContentLength */
/**
 * @summary ContentLength
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentLength  ::=  INTEGER(0..ub-content-length)
 * ```
 */
export type ContentLength = INTEGER;
/* END_OF_SYMBOL_DEFINITION ContentLength */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentLength */
let _cached_decoder_for_ContentLength: $.ASN1Decoder<ContentLength> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentLength */

/* START_OF_SYMBOL_DEFINITION _decode_ContentLength */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentLength
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentLength} The decoded data structure.
 */
export function _decode_ContentLength(el: _Element) {
    if (!_cached_decoder_for_ContentLength) {
        _cached_decoder_for_ContentLength = $._decodeInteger;
    }
    return _cached_decoder_for_ContentLength(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentLength */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentLength */
let _cached_encoder_for_ContentLength: $.ASN1Encoder<ContentLength> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentLength */

/* START_OF_SYMBOL_DEFINITION _encode_ContentLength */
/**
 * @summary Encodes a(n) ContentLength into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentLength, encoded as an ASN.1 Element.
 */
export function _encode_ContentLength(
    value: ContentLength,
    elGetter: $.ASN1Encoder<ContentLength>
) {
    if (!_cached_encoder_for_ContentLength) {
        _cached_encoder_for_ContentLength = $._encodeInteger;
    }
    return _cached_encoder_for_ContentLength(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentLength */

/* eslint-enable */
