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

/* START_OF_SYMBOL_DEFINITION RegistrationIdentifier */
/**
 * @summary RegistrationIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationIdentifier  ::=
 *   PrintableString(SIZE (1..ub-ua-registration-identifier-length))
 * ```
 */
export type RegistrationIdentifier = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION RegistrationIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationIdentifier */
let _cached_decoder_for_RegistrationIdentifier: $.ASN1Decoder<RegistrationIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrationIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationIdentifier} The decoded data structure.
 */
export function _decode_RegistrationIdentifier(el: _Element) {
    if (!_cached_decoder_for_RegistrationIdentifier) {
        _cached_decoder_for_RegistrationIdentifier = $._decodePrintableString;
    }
    return _cached_decoder_for_RegistrationIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RegistrationIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationIdentifier */
let _cached_encoder_for_RegistrationIdentifier: $.ASN1Encoder<RegistrationIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrationIdentifier */
/**
 * @summary Encodes a(n) RegistrationIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationIdentifier(
    value: RegistrationIdentifier,
    elGetter: $.ASN1Encoder<RegistrationIdentifier>
) {
    if (!_cached_encoder_for_RegistrationIdentifier) {
        _cached_encoder_for_RegistrationIdentifier = $._encodePrintableString;
    }
    return _cached_encoder_for_RegistrationIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RegistrationIdentifier */

/* eslint-enable */
