/* eslint-disable */
import {
    OPTIONAL,
    GeneralizedTime,
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
    NonStatisticalReportInformation,
    _decode_NonStatisticalReportInformation,
    _encode_NonStatisticalReportInformation,
} from '../SummarizationASN1Productions/NonStatisticalReportInformation.ta.mjs';
import {
    AlgorithmOutputBuffer,
    _decode_AlgorithmOutputBuffer,
    _encode_AlgorithmOutputBuffer,
} from '../SummarizationASN1Productions/AlgorithmOutputBuffer.ta.mjs';
import {
    AlgorithmParameters,
    _decode_AlgorithmParameters,
    _encode_AlgorithmParameters,
} from '../SummarizationASN1Productions/AlgorithmParameters.ta.mjs';
import {
    IncompleteScan,
    _decode_IncompleteScan,
    _encode_IncompleteScan,
} from '../SummarizationASN1Productions/IncompleteScan.ta.mjs';
import {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module';
/**
 * @summary StatisticalScanReportInformation
 * @description
 *
 * Event information of `statisticalReport` and reply of
 * `activateStatisticalReport`. Emitted at the end of a
 * scan with ensemble statistics over
 * `numericAttributeIdList`, plus optional per-object
 * scanned values. Multiple linked replies may carry one
 * report. ITU-T Rec. X.738 (11/93)
 * [§8.2.2.2](https://www.itu.int/rec/T-REC-X.738-199311-I),
 * §8.1.3, A.5, A.6, Table 3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StatisticalScanReportInformation ::= SEQUENCE {
 *   scanInitiationTime     GeneralizedTime OPTIONAL,
 *   -- time of scan initiation. Required if the time stamp report mode
 *   -- attribute is present with a non-zero value.
 *   observationReportList  [6]  NonStatisticalReportInformation OPTIONAL,
 *   -- which objects passed filter, with optional attribute values
 *   -- not present if object suppression is on and there are no scan attributes
 *   algorithmOutputs       [7]  AlgorithmOutputBuffer,
 *   -- contents of positions for each attribute depend on algorithm type
 *   algorithmParameters    [8]  AlgorithmParameters OPTIONAL,
 *   -- present only if algorithm has configurable parameters
 *   -- contents of positions for each attribute depend on algorithm type
 *   incompleteScan         [9]  IncompleteScan OPTIONAL,
 *   -- presence indicates that the scan was incomplete.
 *   additionalText         [10]  AdditionalText OPTIONAL,
 *   additionalInformation  [11]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 */
export class StatisticalScanReportInformation {
    constructor(
        /**
         * @summary `scanInitiationTime`.
         * @description
         *
         * Date and time the reported scan was initiated.
         * Required if `timeStampReportMode` is present with a
         * non-zero value. X.738 §8.2.2.2.1, A.9.
         * @public
         * @readonly
         */
        readonly scanInitiationTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `observationReportList`.
         * @description
         *
         * Objects that passed selection, with scan-attribute
         * values. Omitted if object instances are suppressed
         * and there are no scan attributes. If present and
         * `suppressObjectInstance` is false, each entry shall
         * include `objectInstance`. X.738 §8.2.2.2.2,
         * §8.1.3.3, Table 3 note 1.
         * @public
         * @readonly
         */
        readonly observationReportList: OPTIONAL<NonStatisticalReportInformation>,
        /**
         * @summary `algorithmOutputs`.
         * @description
         *
         * Per-attribute ordered results of the statistical
         * algorithm (sample count, mean, variance, etc.).
         * Mandatory. X.738 §8.2.2.2.3, Table 3.
         * @public
         * @readonly
         */
        readonly algorithmOutputs: AlgorithmOutputBuffer,
        /**
         * @summary `algorithmParameters`.
         * @description
         *
         * Configurable algorithm parameters; present only if
         * the algorithm has them. Positions are class-defined
         * (percentile scanner: `j` first). X.738 §8.2.2.2.4,
         * §8.1.6.2.
         * @public
         * @readonly
         */
        readonly algorithmParameters?: OPTIONAL<AlgorithmParameters>,
        /**
         * @summary `incompleteScan`.
         * @description
         *
         * Present if the scan could not be completed. X.738
         * §8.2.2.2.5, Table 3 note 2.
         * @public
         * @readonly
         */
        readonly incompleteScan?: OPTIONAL<IncompleteScan>,
        /**
         * @summary `additionalText`.
         * @description
         *
         * Optional textual extension as in X.733. X.738
         * §8.2.2.2.6.
         * @public
         * @readonly
         */
        readonly additionalText?: OPTIONAL<AdditionalText>,
        /**
         * @summary `additionalInformation`.
         * @description
         *
         * Optional structured extension as in X.733. X.738
         * §8.2.2.2.7.
         * @public
         * @readonly
         */
        readonly additionalInformation?: OPTIONAL<AdditionalInformation>
    ) {}

    /**
     * @summary Restructures an object into a StatisticalScanReportInformation
     * @description
     *
     * This takes an `object` and converts it to a `StatisticalScanReportInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StatisticalScanReportInformation`.
     * @returns {StatisticalScanReportInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof StatisticalScanReportInformation]: StatisticalScanReportInformation[_K];
        }
    ): StatisticalScanReportInformation {
        return new StatisticalScanReportInformation(
            _o.scanInitiationTime,
            _o.observationReportList,
            _o.algorithmOutputs,
            _o.algorithmParameters,
            _o.incompleteScan,
            _o.additionalText,
            _o.additionalInformation
        );
    }
}

/**
 * @summary The Leading Root Component Types of StatisticalScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_StatisticalScanReportInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'scanInitiationTime',
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        'observationReportList',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'algorithmOutputs',
        false,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'algorithmParameters',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'incompleteScan',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.context, 10)
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 11)
    ),
];

/**
 * @summary The Trailing Root Component Types of StatisticalScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_StatisticalScanReportInformation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of StatisticalScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_StatisticalScanReportInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_StatisticalScanReportInformation: $.ASN1Decoder<StatisticalScanReportInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatisticalScanReportInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StatisticalScanReportInformation} The decoded data structure.
 */
export function _decode_StatisticalScanReportInformation(el: _Element): StatisticalScanReportInformation {
    if (!_cached_decoder_for_StatisticalScanReportInformation) {
        _cached_decoder_for_StatisticalScanReportInformation = function (
            el: _Element
        ): StatisticalScanReportInformation {
            let scanInitiationTime: OPTIONAL<GeneralizedTime>;
            let observationReportList: OPTIONAL<NonStatisticalReportInformation>;
            let algorithmOutputs!: AlgorithmOutputBuffer;
            let algorithmParameters: OPTIONAL<AlgorithmParameters>;
            let incompleteScan: OPTIONAL<IncompleteScan>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            const callbacks: $.DecodingMap = {
                scanInitiationTime: (_el: _Element): void => {
                    scanInitiationTime = $._decodeGeneralizedTime(_el);
                },
                observationReportList: (_el: _Element): void => {
                    observationReportList = $._decode_implicit<NonStatisticalReportInformation>(
                        () => _decode_NonStatisticalReportInformation
                    )(_el);
                },
                algorithmOutputs: (_el: _Element): void => {
                    algorithmOutputs = $._decode_implicit<AlgorithmOutputBuffer>(
                        () => _decode_AlgorithmOutputBuffer
                    )(_el);
                },
                algorithmParameters: (_el: _Element): void => {
                    algorithmParameters = $._decode_implicit<AlgorithmParameters>(
                        () => _decode_AlgorithmParameters
                    )(_el);
                },
                incompleteScan: (_el: _Element): void => {
                    incompleteScan = $._decode_implicit<IncompleteScan>(
                        () => _decode_IncompleteScan
                    )(_el);
                },
                additionalText: (_el: _Element): void => {
                    additionalText = $._decode_implicit<AdditionalText>(
                        () => _decode_AdditionalText
                    )(_el);
                },
                additionalInformation: (_el: _Element): void => {
                    additionalInformation = $._decode_implicit<AdditionalInformation>(
                        () => _decode_AdditionalInformation
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_StatisticalScanReportInformation,
                _extension_additions_list_spec_for_StatisticalScanReportInformation,
                _root_component_type_list_2_spec_for_StatisticalScanReportInformation,
                undefined
            );
            return new StatisticalScanReportInformation (
                scanInitiationTime,
                observationReportList,
                algorithmOutputs,
                algorithmParameters,
                incompleteScan,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_StatisticalScanReportInformation(el);
}

let _cached_encoder_for_StatisticalScanReportInformation: $.ASN1Encoder<StatisticalScanReportInformation> | null = null;

/**
 * @summary Encodes a(n) StatisticalScanReportInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatisticalScanReportInformation, encoded as an ASN.1 Element.
 */
export function _encode_StatisticalScanReportInformation(
    value: StatisticalScanReportInformation,
    elGetter: $.ASN1Encoder<StatisticalScanReportInformation>
): _Element {
    if (!_cached_encoder_for_StatisticalScanReportInformation) {
        _cached_encoder_for_StatisticalScanReportInformation = function (
            value: StatisticalScanReportInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.scanInitiationTime === undefined
                            ? undefined
                            : $._encodeGeneralizedTime(
                                  value.scanInitiationTime,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.observationReportList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_NonStatisticalReportInformation,
                                  $.BER
                              )(value.observationReportList, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            7,
                            () => _encode_AlgorithmOutputBuffer,
                            $.BER
                        )(value.algorithmOutputs, $.BER),
                        /* IF_ABSENT  */ value.algorithmParameters === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_AlgorithmParameters,
                                  $.BER
                              )(value.algorithmParameters, $.BER),
                        /* IF_ABSENT  */ value.incompleteScan === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_IncompleteScan,
                                  $.BER
                              )(value.incompleteScan, $.BER),
                        /* IF_ABSENT  */ value.additionalText === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_AdditionalText,
                                  $.BER
                              )(value.additionalText, $.BER),
                        /* IF_ABSENT  */ value.additionalInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  11,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additionalInformation, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_StatisticalScanReportInformation(
        value,
        elGetter
    );
}


/* eslint-enable */
