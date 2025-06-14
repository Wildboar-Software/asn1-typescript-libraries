/* eslint-disable */
import {
    OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION Simply_encoded_data */
/**
 * @summary Simply_encoded_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Simply-encoded-data  ::=  OCTET STRING
 * ```
 */
export type Simply_encoded_data = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Simply_encoded_data */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Simply_encoded_data */
let _cached_decoder_for_Simply_encoded_data: $.ASN1Decoder<Simply_encoded_data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Simply_encoded_data */

/* START_OF_SYMBOL_DEFINITION _decode_Simply_encoded_data */
/**
 * @summary Decodes an ASN.1 element into a(n) Simply_encoded_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Simply_encoded_data} The decoded data structure.
 */
export function _decode_Simply_encoded_data(el: _Element) {
    if (!_cached_decoder_for_Simply_encoded_data) {
        _cached_decoder_for_Simply_encoded_data = $._decodeOctetString;
    }
    return _cached_decoder_for_Simply_encoded_data(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Simply_encoded_data */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Simply_encoded_data */
let _cached_encoder_for_Simply_encoded_data: $.ASN1Encoder<Simply_encoded_data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Simply_encoded_data */

/* START_OF_SYMBOL_DEFINITION _encode_Simply_encoded_data */
/**
 * @summary Encodes a(n) Simply_encoded_data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Simply_encoded_data, encoded as an ASN.1 Element.
 */
export function _encode_Simply_encoded_data(
    value: Simply_encoded_data,
    elGetter: $.ASN1Encoder<Simply_encoded_data>
) {
    if (!_cached_encoder_for_Simply_encoded_data) {
        _cached_encoder_for_Simply_encoded_data = $._encodeOctetString;
    }
    return _cached_encoder_for_Simply_encoded_data(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Simply_encoded_data */

/* eslint-enable */
