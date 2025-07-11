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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    BiometricProcessSecurity,
    _decode_BiometricProcessSecurity,
    _encode_BiometricProcessSecurity,
} from '../AuthenticationContextForBiometrics/BiometricProcessSecurity.ta.mjs';
import {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';

/**
 * @summary BiometricProcessSecurityInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricProcessSecurityInformation  ::=  CHOICE {
 *     biometricProcessSecurity            BiometricProcessSecurity,
 *     biometricProcessSecurityReferrer    URI }
 * ```
 */
export type BiometricProcessSecurityInformation =
    | {
          biometricProcessSecurity: BiometricProcessSecurity;
      } /* CHOICE_ALT_ROOT */
    | { biometricProcessSecurityReferrer: URI } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_BiometricProcessSecurityInformation: $.ASN1Decoder<BiometricProcessSecurityInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BiometricProcessSecurityInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricProcessSecurityInformation} The decoded data structure.
 */
export function _decode_BiometricProcessSecurityInformation(el: _Element): BiometricProcessSecurityInformation {
    if (!_cached_decoder_for_BiometricProcessSecurityInformation) {
        _cached_decoder_for_BiometricProcessSecurityInformation = $._decode_inextensible_choice<BiometricProcessSecurityInformation>(
            {
                'CONTEXT 0': [
                    'biometricProcessSecurity',
                    _decode_BiometricProcessSecurity,
                ],
                'CONTEXT 1': ['biometricProcessSecurityReferrer', _decode_URI],
            }
        );
    }
    return _cached_decoder_for_BiometricProcessSecurityInformation(el);
}


let _cached_encoder_for_BiometricProcessSecurityInformation: $.ASN1Encoder<BiometricProcessSecurityInformation> | null = null;


/**
 * @summary Encodes a(n) BiometricProcessSecurityInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricProcessSecurityInformation, encoded as an ASN.1 Element.
 */
export function _encode_BiometricProcessSecurityInformation(
    value: BiometricProcessSecurityInformation,
    elGetter: $.ASN1Encoder<BiometricProcessSecurityInformation>
): _Element {
    if (!_cached_encoder_for_BiometricProcessSecurityInformation) {
        _cached_encoder_for_BiometricProcessSecurityInformation = $._encode_choice<BiometricProcessSecurityInformation>(
            {
                biometricProcessSecurity: _encode_BiometricProcessSecurity,
                biometricProcessSecurityReferrer: _encode_URI,
            },
            $.BER
        );
    }
    return _cached_encoder_for_BiometricProcessSecurityInformation(
        value,
        elGetter
    );
}


/* eslint-enable */
