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
    BiometricProcessQuality,
    _decode_BiometricProcessQuality,
    _encode_BiometricProcessQuality,
} from '../AuthenticationContextForBiometrics/BiometricProcessQuality.ta.mjs';
import {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';

/**
 * @summary BiometricProcessQualityInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricProcessQualityInformation  ::=  CHOICE {
 *     biometricProcessQuality             BiometricProcessQuality,
 *     biometricProcessQualityReferrer     URI }
 * ```
 */
export type BiometricProcessQualityInformation =
    | { biometricProcessQuality: BiometricProcessQuality } /* CHOICE_ALT_ROOT */
    | { biometricProcessQualityReferrer: URI } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_BiometricProcessQualityInformation: $.ASN1Decoder<BiometricProcessQualityInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BiometricProcessQualityInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricProcessQualityInformation} The decoded data structure.
 */
export function _decode_BiometricProcessQualityInformation(el: _Element): BiometricProcessQualityInformation {
    if (!_cached_decoder_for_BiometricProcessQualityInformation) {
        _cached_decoder_for_BiometricProcessQualityInformation = $._decode_inextensible_choice<BiometricProcessQualityInformation>(
            {
                'CONTEXT 0': [
                    'biometricProcessQuality',
                    _decode_BiometricProcessQuality,
                ],
                'CONTEXT 1': ['biometricProcessQualityReferrer', _decode_URI],
            }
        );
    }
    return _cached_decoder_for_BiometricProcessQualityInformation(el);
}


let _cached_encoder_for_BiometricProcessQualityInformation: $.ASN1Encoder<BiometricProcessQualityInformation> | null = null;


/**
 * @summary Encodes a(n) BiometricProcessQualityInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricProcessQualityInformation, encoded as an ASN.1 Element.
 */
export function _encode_BiometricProcessQualityInformation(
    value: BiometricProcessQualityInformation,
    elGetter: $.ASN1Encoder<BiometricProcessQualityInformation>
): _Element {
    if (!_cached_encoder_for_BiometricProcessQualityInformation) {
        _cached_encoder_for_BiometricProcessQualityInformation = $._encode_choice<BiometricProcessQualityInformation>(
            {
                biometricProcessQuality: _encode_BiometricProcessQuality,
                biometricProcessQualityReferrer: _encode_URI,
            },
            $.BER
        );
    }
    return _cached_encoder_for_BiometricProcessQualityInformation(
        value,
        elGetter
    );
}


/* eslint-enable */
