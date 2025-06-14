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

/* START_OF_SYMBOL_DEFINITION DataSize */
/**
 * @summary DataSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataSize  ::=  INTEGER
 * ```
 */
export type DataSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION DataSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataSize */
let _cached_decoder_for_DataSize: $.ASN1Decoder<DataSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataSize */

/* START_OF_SYMBOL_DEFINITION _decode_DataSize */
/**
 * @summary Decodes an ASN.1 element into a(n) DataSize
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataSize} The decoded data structure.
 */
export function _decode_DataSize(el: _Element) {
    if (!_cached_decoder_for_DataSize) {
        _cached_decoder_for_DataSize = $._decodeInteger;
    }
    return _cached_decoder_for_DataSize(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataSize */
let _cached_encoder_for_DataSize: $.ASN1Encoder<DataSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataSize */

/* START_OF_SYMBOL_DEFINITION _encode_DataSize */
/**
 * @summary Encodes a(n) DataSize into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataSize, encoded as an ASN.1 Element.
 */
export function _encode_DataSize(
    value: DataSize,
    elGetter: $.ASN1Encoder<DataSize>
) {
    if (!_cached_encoder_for_DataSize) {
        _cached_encoder_for_DataSize = $._encodeInteger;
    }
    return _cached_encoder_for_DataSize(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataSize */

/* eslint-enable */
