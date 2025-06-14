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

/* START_OF_SYMBOL_DEFINITION FilterSize */
/**
 * @summary FilterSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterSize  ::=  INTEGER(0..32)
 * ```
 */
export type FilterSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION FilterSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterSize */
let _cached_decoder_for_FilterSize: $.ASN1Decoder<FilterSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterSize */

/* START_OF_SYMBOL_DEFINITION _decode_FilterSize */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterSize
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterSize} The decoded data structure.
 */
export function _decode_FilterSize(el: _Element) {
    if (!_cached_decoder_for_FilterSize) {
        _cached_decoder_for_FilterSize = $._decodeInteger;
    }
    return _cached_decoder_for_FilterSize(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterSize */
let _cached_encoder_for_FilterSize: $.ASN1Encoder<FilterSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterSize */

/* START_OF_SYMBOL_DEFINITION _encode_FilterSize */
/**
 * @summary Encodes a(n) FilterSize into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterSize, encoded as an ASN.1 Element.
 */
export function _encode_FilterSize(
    value: FilterSize,
    elGetter: $.ASN1Encoder<FilterSize>
) {
    if (!_cached_encoder_for_FilterSize) {
        _cached_encoder_for_FilterSize = $._encodeInteger;
    }
    return _cached_encoder_for_FilterSize(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterSize */

/* eslint-enable */
