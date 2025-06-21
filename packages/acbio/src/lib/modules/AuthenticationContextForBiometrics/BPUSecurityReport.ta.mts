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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    CryptoModuleSecurityInformation,
    _decode_CryptoModuleSecurityInformation,
    _encode_CryptoModuleSecurityInformation,
} from '../AuthenticationContextForBiometrics/CryptoModuleSecurityInformation.ta.mjs';
import {
    BiometricProcessSecurityInformation,
    _decode_BiometricProcessSecurityInformation,
    _encode_BiometricProcessSecurityInformation,
} from '../AuthenticationContextForBiometrics/BiometricProcessSecurityInformation.ta.mjs';
import {
    SecurityEvaluationExtensionInformation,
    _decode_SecurityEvaluationExtensionInformation,
    _encode_SecurityEvaluationExtensionInformation,
} from '../AuthenticationContextForBiometrics/SecurityEvaluationExtensionInformation.ta.mjs';

/**
 * @summary BPUSecurityReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUSecurityReport ::= SEQUENCE {
 *     cryptoModuleSecurityInformation         CryptoModuleSecurityInformation OPTIONAL,
 *     biometricProcessSecurityInformation     BiometricProcessSecurityInformation OPTIONAL,
 *     securityEvaluationExtensionInformation  SecurityEvaluationExtensionInformation OPTIONAL }
 * ```
 *
 * @class
 */
export class BPUSecurityReport {
    constructor(
        /**
         * @summary `cryptoModuleSecurityInformation`.
         * @public
         * @readonly
         */
        readonly cryptoModuleSecurityInformation: OPTIONAL<CryptoModuleSecurityInformation>,
        /**
         * @summary `biometricProcessSecurityInformation`.
         * @public
         * @readonly
         */
        readonly biometricProcessSecurityInformation: OPTIONAL<BiometricProcessSecurityInformation>,
        /**
         * @summary `securityEvaluationExtensionInformation`.
         * @public
         * @readonly
         */
        readonly securityEvaluationExtensionInformation: OPTIONAL<SecurityEvaluationExtensionInformation>
    ) {}

    /**
     * @summary Restructures an object into a BPUSecurityReport
     * @description
     *
     * This takes an `object` and converts it to a `BPUSecurityReport`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BPUSecurityReport`.
     * @returns {BPUSecurityReport}
     */
    public static _from_object(
        _o: { [_K in keyof BPUSecurityReport]: BPUSecurityReport[_K] }
    ): BPUSecurityReport {
        return new BPUSecurityReport(
            _o.cryptoModuleSecurityInformation,
            _o.biometricProcessSecurityInformation,
            _o.securityEvaluationExtensionInformation
        );
    }
}


/**
 * @summary The Leading Root Component Types of BPUSecurityReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BPUSecurityReport: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'cryptoModuleSecurityInformation',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'biometricProcessSecurityInformation',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'securityEvaluationExtensionInformation',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of BPUSecurityReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUSecurityReport: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BPUSecurityReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUSecurityReport: $.ComponentSpec[] = [];


let _cached_decoder_for_BPUSecurityReport: $.ASN1Decoder<BPUSecurityReport> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BPUSecurityReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUSecurityReport} The decoded data structure.
 */
export function _decode_BPUSecurityReport(el: _Element) {
    if (!_cached_decoder_for_BPUSecurityReport) {
        _cached_decoder_for_BPUSecurityReport = function (
            el: _Element
        ): BPUSecurityReport {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let cryptoModuleSecurityInformation: OPTIONAL<CryptoModuleSecurityInformation>;
            let biometricProcessSecurityInformation: OPTIONAL<BiometricProcessSecurityInformation>;
            let securityEvaluationExtensionInformation: OPTIONAL<SecurityEvaluationExtensionInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                cryptoModuleSecurityInformation: (_el: _Element): void => {
                    cryptoModuleSecurityInformation = _decode_CryptoModuleSecurityInformation(
                        _el
                    );
                },
                biometricProcessSecurityInformation: (_el: _Element): void => {
                    biometricProcessSecurityInformation = _decode_BiometricProcessSecurityInformation(
                        _el
                    );
                },
                securityEvaluationExtensionInformation: (
                    _el: _Element
                ): void => {
                    securityEvaluationExtensionInformation = _decode_SecurityEvaluationExtensionInformation(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BPUSecurityReport,
                _extension_additions_list_spec_for_BPUSecurityReport,
                _root_component_type_list_2_spec_for_BPUSecurityReport,
                undefined
            );
            return new BPUSecurityReport /* SEQUENCE_CONSTRUCTOR_CALL */(
                cryptoModuleSecurityInformation,
                biometricProcessSecurityInformation,
                securityEvaluationExtensionInformation
            );
        };
    }
    return _cached_decoder_for_BPUSecurityReport(el);
}


let _cached_encoder_for_BPUSecurityReport: $.ASN1Encoder<BPUSecurityReport> | null = null;


/**
 * @summary Encodes a(n) BPUSecurityReport into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUSecurityReport, encoded as an ASN.1 Element.
 */
export function _encode_BPUSecurityReport(
    value: BPUSecurityReport,
    elGetter: $.ASN1Encoder<BPUSecurityReport>
) {
    if (!_cached_encoder_for_BPUSecurityReport) {
        _cached_encoder_for_BPUSecurityReport = function (
            value: BPUSecurityReport        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.cryptoModuleSecurityInformation ===
                        undefined
                            ? undefined
                            : _encode_CryptoModuleSecurityInformation(
                                  value.cryptoModuleSecurityInformation,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.biometricProcessSecurityInformation ===
                        undefined
                            ? undefined
                            : _encode_BiometricProcessSecurityInformation(
                                  value.biometricProcessSecurityInformation,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.securityEvaluationExtensionInformation ===
                        undefined
                            ? undefined
                            : _encode_SecurityEvaluationExtensionInformation(
                                  value.securityEvaluationExtensionInformation,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BPUSecurityReport(value, elGetter);
}


/* eslint-enable */
