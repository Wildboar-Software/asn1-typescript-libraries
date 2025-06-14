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

/* START_OF_SYMBOL_DEFINITION CryptoModuleSecurity */
/**
 * @summary CryptoModuleSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CryptoModuleSecurity  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type CryptoModuleSecurity = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CryptoModuleSecurity */
let _cached_decoder_for_CryptoModuleSecurity: $.ASN1Decoder<CryptoModuleSecurity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _decode_CryptoModuleSecurity */
/**
 * @summary Decodes an ASN.1 element into a(n) CryptoModuleSecurity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CryptoModuleSecurity} The decoded data structure.
 */
export function _decode_CryptoModuleSecurity(el: _Element) {
    if (!_cached_decoder_for_CryptoModuleSecurity) {
        _cached_decoder_for_CryptoModuleSecurity = $._decodeOctetString;
    }
    return _cached_decoder_for_CryptoModuleSecurity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CryptoModuleSecurity */
let _cached_encoder_for_CryptoModuleSecurity: $.ASN1Encoder<CryptoModuleSecurity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CryptoModuleSecurity */

/* START_OF_SYMBOL_DEFINITION _encode_CryptoModuleSecurity */
/**
 * @summary Encodes a(n) CryptoModuleSecurity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CryptoModuleSecurity, encoded as an ASN.1 Element.
 */
export function _encode_CryptoModuleSecurity(
    value: CryptoModuleSecurity,
    elGetter: $.ASN1Encoder<CryptoModuleSecurity>
) {
    if (!_cached_encoder_for_CryptoModuleSecurity) {
        _cached_encoder_for_CryptoModuleSecurity = $._encodeOctetString;
    }
    return _cached_encoder_for_CryptoModuleSecurity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CryptoModuleSecurity */

/* eslint-enable */
