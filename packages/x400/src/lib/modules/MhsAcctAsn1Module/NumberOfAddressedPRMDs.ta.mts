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

/* START_OF_SYMBOL_DEFINITION NumberOfAddressedPRMDs */
/**
 * @summary NumberOfAddressedPRMDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberOfAddressedPRMDs  ::=  INTEGER
 * ```
 */
export type NumberOfAddressedPRMDs = INTEGER;
/* END_OF_SYMBOL_DEFINITION NumberOfAddressedPRMDs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberOfAddressedPRMDs */
let _cached_decoder_for_NumberOfAddressedPRMDs: $.ASN1Decoder<NumberOfAddressedPRMDs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberOfAddressedPRMDs */

/* START_OF_SYMBOL_DEFINITION _decode_NumberOfAddressedPRMDs */
/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfAddressedPRMDs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumberOfAddressedPRMDs} The decoded data structure.
 */
export function _decode_NumberOfAddressedPRMDs(el: _Element) {
    if (!_cached_decoder_for_NumberOfAddressedPRMDs) {
        _cached_decoder_for_NumberOfAddressedPRMDs = $._decodeInteger;
    }
    return _cached_decoder_for_NumberOfAddressedPRMDs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NumberOfAddressedPRMDs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberOfAddressedPRMDs */
let _cached_encoder_for_NumberOfAddressedPRMDs: $.ASN1Encoder<NumberOfAddressedPRMDs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberOfAddressedPRMDs */

/* START_OF_SYMBOL_DEFINITION _encode_NumberOfAddressedPRMDs */
/**
 * @summary Encodes a(n) NumberOfAddressedPRMDs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfAddressedPRMDs, encoded as an ASN.1 Element.
 */
export function _encode_NumberOfAddressedPRMDs(
    value: NumberOfAddressedPRMDs,
    elGetter: $.ASN1Encoder<NumberOfAddressedPRMDs>
) {
    if (!_cached_encoder_for_NumberOfAddressedPRMDs) {
        _cached_encoder_for_NumberOfAddressedPRMDs = $._encodeInteger;
    }
    return _cached_encoder_for_NumberOfAddressedPRMDs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NumberOfAddressedPRMDs */

/* eslint-enable */
