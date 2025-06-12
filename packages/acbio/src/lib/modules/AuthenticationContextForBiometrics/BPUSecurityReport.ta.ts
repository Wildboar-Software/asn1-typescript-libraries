/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
} from '../AuthenticationContextForBiometrics/CryptoModuleSecurityInformation.ta.js';
export {
    CryptoModuleSecurityInformation,
    _decode_CryptoModuleSecurityInformation,
    _encode_CryptoModuleSecurityInformation,
} from '../AuthenticationContextForBiometrics/CryptoModuleSecurityInformation.ta.js';
import {
    BiometricProcessSecurityInformation,
    _decode_BiometricProcessSecurityInformation,
    _encode_BiometricProcessSecurityInformation,
} from '../AuthenticationContextForBiometrics/BiometricProcessSecurityInformation.ta.js';
export {
    BiometricProcessSecurityInformation,
    _decode_BiometricProcessSecurityInformation,
    _encode_BiometricProcessSecurityInformation,
} from '../AuthenticationContextForBiometrics/BiometricProcessSecurityInformation.ta.js';
import {
    SecurityEvaluationExtensionInformation,
    _decode_SecurityEvaluationExtensionInformation,
    _encode_SecurityEvaluationExtensionInformation,
} from '../AuthenticationContextForBiometrics/SecurityEvaluationExtensionInformation.ta.js';
export {
    SecurityEvaluationExtensionInformation,
    _decode_SecurityEvaluationExtensionInformation,
    _encode_SecurityEvaluationExtensionInformation,
} from '../AuthenticationContextForBiometrics/SecurityEvaluationExtensionInformation.ta.js';

/* START_OF_SYMBOL_DEFINITION BPUSecurityReport */
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
/* END_OF_SYMBOL_DEFINITION BPUSecurityReport */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUSecurityReport */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'biometricProcessSecurityInformation',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'securityEvaluationExtensionInformation',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BPUSecurityReport */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUSecurityReport */
/**
 * @summary The Trailing Root Component Types of BPUSecurityReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BPUSecurityReport: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BPUSecurityReport */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUSecurityReport */
/**
 * @summary The Extension Addition Component Types of BPUSecurityReport
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BPUSecurityReport: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BPUSecurityReport */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUSecurityReport */
let _cached_decoder_for_BPUSecurityReport: $.ASN1Decoder<BPUSecurityReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUSecurityReport */

/* START_OF_SYMBOL_DEFINITION _decode_BPUSecurityReport */
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
/* END_OF_SYMBOL_DEFINITION _decode_BPUSecurityReport */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUSecurityReport */
let _cached_encoder_for_BPUSecurityReport: $.ASN1Encoder<BPUSecurityReport> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUSecurityReport */

/* START_OF_SYMBOL_DEFINITION _encode_BPUSecurityReport */
/**
 * @summary Encodes a(n) BPUSecurityReport into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUSecurityReport, encoded as an ASN.1 Element.
 */
export function _encode_BPUSecurityReport(
    value: BPUSecurityReport,
    elGetter: $.ASN1Encoder<BPUSecurityReport>
) {
    if (!_cached_encoder_for_BPUSecurityReport) {
        _cached_encoder_for_BPUSecurityReport = function (
            value: BPUSecurityReport,
            elGetter: $.ASN1Encoder<BPUSecurityReport>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_BPUSecurityReport */

/* eslint-enable */
