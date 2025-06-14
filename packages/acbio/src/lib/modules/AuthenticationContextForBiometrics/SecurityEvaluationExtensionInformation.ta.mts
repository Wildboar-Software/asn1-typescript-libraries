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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    SecurityEvaluationExtension,
    _decode_SecurityEvaluationExtension,
    _encode_SecurityEvaluationExtension,
} from '../AuthenticationContextForBiometrics/SecurityEvaluationExtension.ta.mjs';
import {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SecurityEvaluationExtensionInformation */
/**
 * @summary SecurityEvaluationExtensionInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityEvaluationExtensionInformation  ::=  CHOICE {
 * securityEvaluationExtension             SecurityEvaluationExtension,
 * securityEvaluationExtensionReferrer     URI}
 * ```
 */
export type SecurityEvaluationExtensionInformation =
    | {
          securityEvaluationExtension: SecurityEvaluationExtension;
      } /* CHOICE_ALT_ROOT */
    | { securityEvaluationExtensionReferrer: URI } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SecurityEvaluationExtensionInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityEvaluationExtensionInformation */
let _cached_decoder_for_SecurityEvaluationExtensionInformation: $.ASN1Decoder<SecurityEvaluationExtensionInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityEvaluationExtensionInformation */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityEvaluationExtensionInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityEvaluationExtensionInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityEvaluationExtensionInformation} The decoded data structure.
 */
export function _decode_SecurityEvaluationExtensionInformation(el: _Element) {
    if (!_cached_decoder_for_SecurityEvaluationExtensionInformation) {
        _cached_decoder_for_SecurityEvaluationExtensionInformation = $._decode_inextensible_choice<SecurityEvaluationExtensionInformation>(
            {
                'CONTEXT 0': [
                    'securityEvaluationExtension',
                    _decode_SecurityEvaluationExtension,
                ],
                'CONTEXT 1': [
                    'securityEvaluationExtensionReferrer',
                    _decode_URI,
                ],
            }
        );
    }
    return _cached_decoder_for_SecurityEvaluationExtensionInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityEvaluationExtensionInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityEvaluationExtensionInformation */
let _cached_encoder_for_SecurityEvaluationExtensionInformation: $.ASN1Encoder<SecurityEvaluationExtensionInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityEvaluationExtensionInformation */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityEvaluationExtensionInformation */
/**
 * @summary Encodes a(n) SecurityEvaluationExtensionInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityEvaluationExtensionInformation, encoded as an ASN.1 Element.
 */
export function _encode_SecurityEvaluationExtensionInformation(
    value: SecurityEvaluationExtensionInformation,
    elGetter: $.ASN1Encoder<SecurityEvaluationExtensionInformation>
) {
    if (!_cached_encoder_for_SecurityEvaluationExtensionInformation) {
        _cached_encoder_for_SecurityEvaluationExtensionInformation = $._encode_choice<SecurityEvaluationExtensionInformation>(
            {
                securityEvaluationExtension: _encode_SecurityEvaluationExtension,
                securityEvaluationExtensionReferrer: _encode_URI,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SecurityEvaluationExtensionInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityEvaluationExtensionInformation */

/* eslint-enable */
