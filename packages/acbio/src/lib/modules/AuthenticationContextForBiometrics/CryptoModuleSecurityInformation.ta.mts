/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    CryptoModuleSecurity,
    _decode_CryptoModuleSecurity,
    _encode_CryptoModuleSecurity,
} from '../AuthenticationContextForBiometrics/CryptoModuleSecurity.ta.mjs';
import {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';

/**
 * @summary CryptoModuleSecurityInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CryptoModuleSecurityInformation  ::=  CHOICE {
 *     cryptoModuleSecurity            CryptoModuleSecurity,
 *     cryptoModuleSecurityReferrer    URI }
 * ```
 */
export type CryptoModuleSecurityInformation =
    | { cryptoModuleSecurity: CryptoModuleSecurity } /* CHOICE_ALT_ROOT */
    | { cryptoModuleSecurityReferrer: URI } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_CryptoModuleSecurityInformation: $.ASN1Decoder<CryptoModuleSecurityInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CryptoModuleSecurityInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CryptoModuleSecurityInformation} The decoded data structure.
 */
export function _decode_CryptoModuleSecurityInformation(el: _Element) {
    if (!_cached_decoder_for_CryptoModuleSecurityInformation) {
        _cached_decoder_for_CryptoModuleSecurityInformation = $._decode_inextensible_choice<CryptoModuleSecurityInformation>(
            {
                'CONTEXT 0': [
                    'cryptoModuleSecurity',
                    _decode_CryptoModuleSecurity,
                ],
                'CONTEXT 1': ['cryptoModuleSecurityReferrer', _decode_URI],
            }
        );
    }
    return _cached_decoder_for_CryptoModuleSecurityInformation(el);
}


let _cached_encoder_for_CryptoModuleSecurityInformation: $.ASN1Encoder<CryptoModuleSecurityInformation> | null = null;


/**
 * @summary Encodes a(n) CryptoModuleSecurityInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CryptoModuleSecurityInformation, encoded as an ASN.1 Element.
 */
export function _encode_CryptoModuleSecurityInformation(
    value: CryptoModuleSecurityInformation,
    elGetter: $.ASN1Encoder<CryptoModuleSecurityInformation>
) {
    if (!_cached_encoder_for_CryptoModuleSecurityInformation) {
        _cached_encoder_for_CryptoModuleSecurityInformation = $._encode_choice<CryptoModuleSecurityInformation>(
            {
                cryptoModuleSecurity: _encode_CryptoModuleSecurity,
                cryptoModuleSecurityReferrer: _encode_URI,
            },
            $.BER
        );
    }
    return _cached_encoder_for_CryptoModuleSecurityInformation(value, elGetter);
}


/* eslint-enable */
