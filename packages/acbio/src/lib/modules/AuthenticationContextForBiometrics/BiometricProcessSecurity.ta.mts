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

/* START_OF_SYMBOL_DEFINITION BiometricProcessSecurity */
/**
 * @summary BiometricProcessSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricProcessSecurity  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export type BiometricProcessSecurity = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BiometricProcessSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricProcessSecurity */
let _cached_decoder_for_BiometricProcessSecurity: $.ASN1Decoder<BiometricProcessSecurity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BiometricProcessSecurity */

/* START_OF_SYMBOL_DEFINITION _decode_BiometricProcessSecurity */
/**
 * @summary Decodes an ASN.1 element into a(n) BiometricProcessSecurity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricProcessSecurity} The decoded data structure.
 */
export function _decode_BiometricProcessSecurity(el: _Element) {
    if (!_cached_decoder_for_BiometricProcessSecurity) {
        _cached_decoder_for_BiometricProcessSecurity = $._decodeOctetString;
    }
    return _cached_decoder_for_BiometricProcessSecurity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BiometricProcessSecurity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricProcessSecurity */
let _cached_encoder_for_BiometricProcessSecurity: $.ASN1Encoder<BiometricProcessSecurity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BiometricProcessSecurity */

/* START_OF_SYMBOL_DEFINITION _encode_BiometricProcessSecurity */
/**
 * @summary Encodes a(n) BiometricProcessSecurity into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricProcessSecurity, encoded as an ASN.1 Element.
 */
export function _encode_BiometricProcessSecurity(
    value: BiometricProcessSecurity,
    elGetter: $.ASN1Encoder<BiometricProcessSecurity>
) {
    if (!_cached_encoder_for_BiometricProcessSecurity) {
        _cached_encoder_for_BiometricProcessSecurity = $._encodeOctetString;
    }
    return _cached_encoder_for_BiometricProcessSecurity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BiometricProcessSecurity */

/* eslint-enable */
