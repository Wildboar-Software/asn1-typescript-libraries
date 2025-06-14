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

/* START_OF_SYMBOL_DEFINITION NumberOfAddressedUas */
/**
 * @summary NumberOfAddressedUas
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberOfAddressedUas  ::=  INTEGER
 * ```
 */
export type NumberOfAddressedUas = INTEGER;
/* END_OF_SYMBOL_DEFINITION NumberOfAddressedUas */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberOfAddressedUas */
let _cached_decoder_for_NumberOfAddressedUas: $.ASN1Decoder<NumberOfAddressedUas> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberOfAddressedUas */

/* START_OF_SYMBOL_DEFINITION _decode_NumberOfAddressedUas */
/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfAddressedUas
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumberOfAddressedUas} The decoded data structure.
 */
export function _decode_NumberOfAddressedUas(el: _Element) {
    if (!_cached_decoder_for_NumberOfAddressedUas) {
        _cached_decoder_for_NumberOfAddressedUas = $._decodeInteger;
    }
    return _cached_decoder_for_NumberOfAddressedUas(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NumberOfAddressedUas */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberOfAddressedUas */
let _cached_encoder_for_NumberOfAddressedUas: $.ASN1Encoder<NumberOfAddressedUas> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberOfAddressedUas */

/* START_OF_SYMBOL_DEFINITION _encode_NumberOfAddressedUas */
/**
 * @summary Encodes a(n) NumberOfAddressedUas into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfAddressedUas, encoded as an ASN.1 Element.
 */
export function _encode_NumberOfAddressedUas(
    value: NumberOfAddressedUas,
    elGetter: $.ASN1Encoder<NumberOfAddressedUas>
) {
    if (!_cached_encoder_for_NumberOfAddressedUas) {
        _cached_encoder_for_NumberOfAddressedUas = $._encodeInteger;
    }
    return _cached_encoder_for_NumberOfAddressedUas(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NumberOfAddressedUas */

/* eslint-enable */
