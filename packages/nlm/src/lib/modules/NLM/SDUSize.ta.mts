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

/* START_OF_SYMBOL_DEFINITION SDUSize */
/**
 * @summary SDUSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SDUSize  ::=  INTEGER(0..65535)
 * ```
 */
export type SDUSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION SDUSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SDUSize */
let _cached_decoder_for_SDUSize: $.ASN1Decoder<SDUSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SDUSize */

/* START_OF_SYMBOL_DEFINITION _decode_SDUSize */
/**
 * @summary Decodes an ASN.1 element into a(n) SDUSize
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SDUSize} The decoded data structure.
 */
export function _decode_SDUSize(el: _Element) {
    if (!_cached_decoder_for_SDUSize) {
        _cached_decoder_for_SDUSize = $._decodeInteger;
    }
    return _cached_decoder_for_SDUSize(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SDUSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SDUSize */
let _cached_encoder_for_SDUSize: $.ASN1Encoder<SDUSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SDUSize */

/* START_OF_SYMBOL_DEFINITION _encode_SDUSize */
/**
 * @summary Encodes a(n) SDUSize into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDUSize, encoded as an ASN.1 Element.
 */
export function _encode_SDUSize(
    value: SDUSize,
    elGetter: $.ASN1Encoder<SDUSize>
) {
    if (!_cached_encoder_for_SDUSize) {
        _cached_encoder_for_SDUSize = $._encodeInteger;
    }
    return _cached_encoder_for_SDUSize(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SDUSize */

/* eslint-enable */
