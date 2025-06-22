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
    QualityEvaluationExtension,
    _decode_QualityEvaluationExtension,
    _encode_QualityEvaluationExtension,
} from '../AuthenticationContextForBiometrics/QualityEvaluationExtension.ta.mjs';
import {
    URI,
    _decode_URI,
    _encode_URI,
} from '../AuthenticationContextForBiometrics/URI.ta.mjs';

/**
 * @summary QualityEvaluationExtensionInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QualityEvaluationExtensionInformation  ::=  CHOICE {
 *     qualityEvaluationExtension          QualityEvaluationExtension,
 *     qualityEvaluationExtensionReferrer  URI }
 * ```
 */
export type QualityEvaluationExtensionInformation =
    | {
          qualityEvaluationExtension: QualityEvaluationExtension;
      } /* CHOICE_ALT_ROOT */
    | { qualityEvaluationExtensionReferrer: URI } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_QualityEvaluationExtensionInformation: $.ASN1Decoder<QualityEvaluationExtensionInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) QualityEvaluationExtensionInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QualityEvaluationExtensionInformation} The decoded data structure.
 */
export function _decode_QualityEvaluationExtensionInformation(el: _Element) {
    if (!_cached_decoder_for_QualityEvaluationExtensionInformation) {
        _cached_decoder_for_QualityEvaluationExtensionInformation = $._decode_inextensible_choice<QualityEvaluationExtensionInformation>(
            {
                'CONTEXT 0': [
                    'qualityEvaluationExtension',
                    _decode_QualityEvaluationExtension,
                ],
                'CONTEXT 1': [
                    'qualityEvaluationExtensionReferrer',
                    _decode_URI,
                ],
            }
        );
    }
    return _cached_decoder_for_QualityEvaluationExtensionInformation(el);
}


let _cached_encoder_for_QualityEvaluationExtensionInformation: $.ASN1Encoder<QualityEvaluationExtensionInformation> | null = null;


/**
 * @summary Encodes a(n) QualityEvaluationExtensionInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualityEvaluationExtensionInformation, encoded as an ASN.1 Element.
 */
export function _encode_QualityEvaluationExtensionInformation(
    value: QualityEvaluationExtensionInformation,
    elGetter: $.ASN1Encoder<QualityEvaluationExtensionInformation>
) {
    if (!_cached_encoder_for_QualityEvaluationExtensionInformation) {
        _cached_encoder_for_QualityEvaluationExtensionInformation = $._encode_choice<QualityEvaluationExtensionInformation>(
            {
                qualityEvaluationExtension: _encode_QualityEvaluationExtension,
                qualityEvaluationExtensionReferrer: _encode_URI,
            },
            $.BER
        );
    }
    return _cached_encoder_for_QualityEvaluationExtensionInformation(
        value,
        elGetter
    );
}


/* eslint-enable */
