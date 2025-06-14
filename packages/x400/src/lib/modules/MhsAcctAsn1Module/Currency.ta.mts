/* eslint-disable */
import {
    PrintableString,
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

/* START_OF_SYMBOL_DEFINITION Currency */
/**
 * @summary Currency
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Currency  ::=  PrintableString
 * ```
 */
export type Currency = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION Currency */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Currency */
let _cached_decoder_for_Currency: $.ASN1Decoder<Currency> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Currency */

/* START_OF_SYMBOL_DEFINITION _decode_Currency */
/**
 * @summary Decodes an ASN.1 element into a(n) Currency
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Currency} The decoded data structure.
 */
export function _decode_Currency(el: _Element) {
    if (!_cached_decoder_for_Currency) {
        _cached_decoder_for_Currency = $._decodePrintableString;
    }
    return _cached_decoder_for_Currency(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Currency */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Currency */
let _cached_encoder_for_Currency: $.ASN1Encoder<Currency> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Currency */

/* START_OF_SYMBOL_DEFINITION _encode_Currency */
/**
 * @summary Encodes a(n) Currency into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Currency, encoded as an ASN.1 Element.
 */
export function _encode_Currency(
    value: Currency,
    elGetter: $.ASN1Encoder<Currency>
) {
    if (!_cached_encoder_for_Currency) {
        _cached_encoder_for_Currency = $._encodePrintableString;
    }
    return _cached_encoder_for_Currency(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Currency */

/* eslint-enable */
