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

/* START_OF_SYMBOL_DEFINITION CustomerName */
/**
 * @summary CustomerName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CustomerName  ::=  UniversalString
 * ```
 */
export type CustomerName = UniversalString; // UniversalString
/* END_OF_SYMBOL_DEFINITION CustomerName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CustomerName */
let _cached_decoder_for_CustomerName: $.ASN1Decoder<CustomerName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CustomerName */

/* START_OF_SYMBOL_DEFINITION _decode_CustomerName */
/**
 * @summary Decodes an ASN.1 element into a(n) CustomerName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CustomerName} The decoded data structure.
 */
export function _decode_CustomerName(el: _Element) {
    if (!_cached_decoder_for_CustomerName) {
        _cached_decoder_for_CustomerName = $._decodeUniversalString;
    }
    return _cached_decoder_for_CustomerName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CustomerName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CustomerName */
let _cached_encoder_for_CustomerName: $.ASN1Encoder<CustomerName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CustomerName */

/* START_OF_SYMBOL_DEFINITION _encode_CustomerName */
/**
 * @summary Encodes a(n) CustomerName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CustomerName, encoded as an ASN.1 Element.
 */
export function _encode_CustomerName(
    value: CustomerName,
    elGetter: $.ASN1Encoder<CustomerName>
) {
    if (!_cached_encoder_for_CustomerName) {
        _cached_encoder_for_CustomerName = $._encodeUniversalString;
    }
    return _cached_encoder_for_CustomerName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CustomerName */

/* eslint-enable */
