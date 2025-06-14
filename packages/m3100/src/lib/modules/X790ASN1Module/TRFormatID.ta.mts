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

/* START_OF_SYMBOL_DEFINITION TRFormatID */
/**
 * @summary TRFormatID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TRFormatID  ::=  INTEGER
 * ```
 */
export type TRFormatID = INTEGER;
/* END_OF_SYMBOL_DEFINITION TRFormatID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TRFormatID */
let _cached_decoder_for_TRFormatID: $.ASN1Decoder<TRFormatID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TRFormatID */

/* START_OF_SYMBOL_DEFINITION _decode_TRFormatID */
/**
 * @summary Decodes an ASN.1 element into a(n) TRFormatID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TRFormatID} The decoded data structure.
 */
export function _decode_TRFormatID(el: _Element) {
    if (!_cached_decoder_for_TRFormatID) {
        _cached_decoder_for_TRFormatID = $._decodeInteger;
    }
    return _cached_decoder_for_TRFormatID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TRFormatID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TRFormatID */
let _cached_encoder_for_TRFormatID: $.ASN1Encoder<TRFormatID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TRFormatID */

/* START_OF_SYMBOL_DEFINITION _encode_TRFormatID */
/**
 * @summary Encodes a(n) TRFormatID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TRFormatID, encoded as an ASN.1 Element.
 */
export function _encode_TRFormatID(
    value: TRFormatID,
    elGetter: $.ASN1Encoder<TRFormatID>
) {
    if (!_cached_encoder_for_TRFormatID) {
        _cached_encoder_for_TRFormatID = $._encodeInteger;
    }
    return _cached_encoder_for_TRFormatID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TRFormatID */

/* eslint-enable */
