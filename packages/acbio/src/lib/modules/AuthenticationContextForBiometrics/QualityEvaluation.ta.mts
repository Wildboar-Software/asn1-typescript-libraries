/* eslint-disable */
import {
    OPTIONAL,
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
    BiometricProcessQualityInformation,
    _decode_BiometricProcessQualityInformation,
    _encode_BiometricProcessQualityInformation,
} from '../AuthenticationContextForBiometrics/BiometricProcessQualityInformation.ta.mjs';
import {
    QualityEvaluationExtensionInformation,
    _decode_QualityEvaluationExtensionInformation,
    _encode_QualityEvaluationExtensionInformation,
} from '../AuthenticationContextForBiometrics/QualityEvaluationExtensionInformation.ta.mjs';

/**
 * @summary QualityEvaluation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QualityEvaluation ::= SEQUENCE {
 *     biometricProcessQualityInformation      BiometricProcessQualityInformation OPTIONAL,
 *     qualityEvaluationExtensionInformation   QualityEvaluationExtensionInformation OPTIONAL }
 * ```
 *
 * @class
 */
export class QualityEvaluation {
    constructor(
        /**
         * @summary `biometricProcessQualityInformation`.
         * @public
         * @readonly
         */
        readonly biometricProcessQualityInformation: OPTIONAL<BiometricProcessQualityInformation>,
        /**
         * @summary `qualityEvaluationExtensionInformation`.
         * @public
         * @readonly
         */
        readonly qualityEvaluationExtensionInformation: OPTIONAL<QualityEvaluationExtensionInformation>
    ) {}

    /**
     * @summary Restructures an object into a QualityEvaluation
     * @description
     *
     * This takes an `object` and converts it to a `QualityEvaluation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QualityEvaluation`.
     * @returns {QualityEvaluation}
     */
    public static _from_object(
        _o: { [_K in keyof QualityEvaluation]: QualityEvaluation[_K] }
    ): QualityEvaluation {
        return new QualityEvaluation(
            _o.biometricProcessQualityInformation,
            _o.qualityEvaluationExtensionInformation
        );
    }
}


/**
 * @summary The Leading Root Component Types of QualityEvaluation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_QualityEvaluation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'biometricProcessQualityInformation',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'qualityEvaluationExtensionInformation',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of QualityEvaluation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_QualityEvaluation: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of QualityEvaluation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_QualityEvaluation: $.ComponentSpec[] = [];


let _cached_decoder_for_QualityEvaluation: $.ASN1Decoder<QualityEvaluation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) QualityEvaluation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {QualityEvaluation} The decoded data structure.
 */
export function _decode_QualityEvaluation(el: _Element) {
    if (!_cached_decoder_for_QualityEvaluation) {
        _cached_decoder_for_QualityEvaluation = function (
            el: _Element
        ): QualityEvaluation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let biometricProcessQualityInformation: OPTIONAL<BiometricProcessQualityInformation>;
            let qualityEvaluationExtensionInformation: OPTIONAL<QualityEvaluationExtensionInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                biometricProcessQualityInformation: (_el: _Element): void => {
                    biometricProcessQualityInformation = _decode_BiometricProcessQualityInformation(
                        _el
                    );
                },
                qualityEvaluationExtensionInformation: (
                    _el: _Element
                ): void => {
                    qualityEvaluationExtensionInformation = _decode_QualityEvaluationExtensionInformation(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_QualityEvaluation,
                _extension_additions_list_spec_for_QualityEvaluation,
                _root_component_type_list_2_spec_for_QualityEvaluation,
                undefined
            );
            return new QualityEvaluation /* SEQUENCE_CONSTRUCTOR_CALL */(
                biometricProcessQualityInformation,
                qualityEvaluationExtensionInformation
            );
        };
    }
    return _cached_decoder_for_QualityEvaluation(el);
}


let _cached_encoder_for_QualityEvaluation: $.ASN1Encoder<QualityEvaluation> | null = null;


/**
 * @summary Encodes a(n) QualityEvaluation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QualityEvaluation, encoded as an ASN.1 Element.
 */
export function _encode_QualityEvaluation(
    value: QualityEvaluation,
    elGetter: $.ASN1Encoder<QualityEvaluation>
) {
    if (!_cached_encoder_for_QualityEvaluation) {
        _cached_encoder_for_QualityEvaluation = function (
            value: QualityEvaluation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.biometricProcessQualityInformation ===
                        undefined
                            ? undefined
                            : _encode_BiometricProcessQualityInformation(
                                  value.biometricProcessQualityInformation,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.qualityEvaluationExtensionInformation ===
                        undefined
                            ? undefined
                            : _encode_QualityEvaluationExtensionInformation(
                                  value.qualityEvaluationExtensionInformation,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_QualityEvaluation(value, elGetter);
}


/* eslint-enable */
