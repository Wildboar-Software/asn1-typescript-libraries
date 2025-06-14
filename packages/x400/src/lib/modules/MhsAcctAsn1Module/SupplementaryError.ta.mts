/* eslint-disable */
import {
    UniversalString,
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

/* START_OF_SYMBOL_DEFINITION SupplementaryError */
/**
 * @summary SupplementaryError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplementaryError  ::=  UniversalString
 * ```
 */
export type SupplementaryError = UniversalString; // UniversalString
/* END_OF_SYMBOL_DEFINITION SupplementaryError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupplementaryError */
let _cached_decoder_for_SupplementaryError: $.ASN1Decoder<SupplementaryError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupplementaryError */

/* START_OF_SYMBOL_DEFINITION _decode_SupplementaryError */
/**
 * @summary Decodes an ASN.1 element into a(n) SupplementaryError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplementaryError} The decoded data structure.
 */
export function _decode_SupplementaryError(el: _Element) {
    if (!_cached_decoder_for_SupplementaryError) {
        _cached_decoder_for_SupplementaryError = $._decodeUniversalString;
    }
    return _cached_decoder_for_SupplementaryError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupplementaryError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupplementaryError */
let _cached_encoder_for_SupplementaryError: $.ASN1Encoder<SupplementaryError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupplementaryError */

/* START_OF_SYMBOL_DEFINITION _encode_SupplementaryError */
/**
 * @summary Encodes a(n) SupplementaryError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplementaryError, encoded as an ASN.1 Element.
 */
export function _encode_SupplementaryError(
    value: SupplementaryError,
    elGetter: $.ASN1Encoder<SupplementaryError>
) {
    if (!_cached_encoder_for_SupplementaryError) {
        _cached_encoder_for_SupplementaryError = $._encodeUniversalString;
    }
    return _cached_encoder_for_SupplementaryError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupplementaryError */

/* eslint-enable */
