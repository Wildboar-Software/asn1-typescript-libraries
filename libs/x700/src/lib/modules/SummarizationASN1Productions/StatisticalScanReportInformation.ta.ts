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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    NonStatisticalReportInformation,
    _decode_NonStatisticalReportInformation,
    _encode_NonStatisticalReportInformation,
} from '../SummarizationASN1Productions/NonStatisticalReportInformation.ta';
export {
    NonStatisticalReportInformation,
    _decode_NonStatisticalReportInformation,
    _encode_NonStatisticalReportInformation,
} from '../SummarizationASN1Productions/NonStatisticalReportInformation.ta';
import {
    AlgorithmOutputBuffer,
    _decode_AlgorithmOutputBuffer,
    _encode_AlgorithmOutputBuffer,
} from '../SummarizationASN1Productions/AlgorithmOutputBuffer.ta';
export {
    AlgorithmOutputBuffer,
    _decode_AlgorithmOutputBuffer,
    _encode_AlgorithmOutputBuffer,
} from '../SummarizationASN1Productions/AlgorithmOutputBuffer.ta';
import {
    AlgorithmParameters,
    _decode_AlgorithmParameters,
    _encode_AlgorithmParameters,
} from '../SummarizationASN1Productions/AlgorithmParameters.ta';
export {
    AlgorithmParameters,
    _decode_AlgorithmParameters,
    _encode_AlgorithmParameters,
} from '../SummarizationASN1Productions/AlgorithmParameters.ta';
import {
    IncompleteScan,
    IncompleteScan_sizeExceeded /* IMPORTED_LONG_NAMED_INTEGER */,
    sizeExceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    IncompleteScan_timeExceeded /* IMPORTED_LONG_NAMED_INTEGER */,
    timeExceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    IncompleteScan_other /* IMPORTED_LONG_NAMED_INTEGER */,
    other /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_IncompleteScan,
    _encode_IncompleteScan,
} from '../SummarizationASN1Productions/IncompleteScan.ta';
export {
    IncompleteScan,
    IncompleteScan_sizeExceeded /* IMPORTED_LONG_NAMED_INTEGER */,
    sizeExceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    IncompleteScan_timeExceeded /* IMPORTED_LONG_NAMED_INTEGER */,
    timeExceeded /* IMPORTED_SHORT_NAMED_INTEGER */,
    IncompleteScan_other /* IMPORTED_LONG_NAMED_INTEGER */,
    other /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_IncompleteScan,
    _encode_IncompleteScan,
} from '../SummarizationASN1Productions/IncompleteScan.ta';
import {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta';
export {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta';
export {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta';

/* START_OF_SYMBOL_DEFINITION StatisticalScanReportInformation */
/**
 * @summary StatisticalScanReportInformation
 * @description
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
 * @class
 */
export class StatisticalScanReportInformation {
    constructor(
        /**
         * @summary `scanInitiationTime`.
         * @public
         * @readonly
         */
        readonly scanInitiationTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `observationReportList`.
         * @public
         * @readonly
         */
        readonly observationReportList: OPTIONAL<NonStatisticalReportInformation>,
        /**
         * @summary `algorithmOutputs`.
         * @public
         * @readonly
         */
        readonly algorithmOutputs: AlgorithmOutputBuffer,
        /**
         * @summary `algorithmParameters`.
         * @public
         * @readonly
         */
        readonly algorithmParameters: OPTIONAL<AlgorithmParameters>,
        /**
         * @summary `incompleteScan`.
         * @public
         * @readonly
         */
        readonly incompleteScan: OPTIONAL<IncompleteScan>,
        /**
         * @summary `additionalText`.
         * @public
         * @readonly
         */
        readonly additionalText: OPTIONAL<AdditionalText>,
        /**
         * @summary `additionalInformation`.
         * @public
         * @readonly
         */
        readonly additionalInformation: OPTIONAL<AdditionalInformation>
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
/* END_OF_SYMBOL_DEFINITION StatisticalScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_StatisticalScanReportInformation */
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
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'observationReportList',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'algorithmOutputs',
        false,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'algorithmParameters',
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'incompleteScan',
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_StatisticalScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_StatisticalScanReportInformation */
/**
 * @summary The Trailing Root Component Types of StatisticalScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_StatisticalScanReportInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_StatisticalScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_StatisticalScanReportInformation */
/**
 * @summary The Extension Addition Component Types of StatisticalScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_StatisticalScanReportInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_StatisticalScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StatisticalScanReportInformation */
let _cached_decoder_for_StatisticalScanReportInformation: $.ASN1Decoder<StatisticalScanReportInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StatisticalScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _decode_StatisticalScanReportInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) StatisticalScanReportInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StatisticalScanReportInformation} The decoded data structure.
 */
export function _decode_StatisticalScanReportInformation(el: _Element) {
    if (!_cached_decoder_for_StatisticalScanReportInformation) {
        _cached_decoder_for_StatisticalScanReportInformation = function (
            el: _Element
        ): StatisticalScanReportInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scanInitiationTime: OPTIONAL<GeneralizedTime>;
            let observationReportList: OPTIONAL<NonStatisticalReportInformation>;
            let algorithmOutputs!: AlgorithmOutputBuffer;
            let algorithmParameters: OPTIONAL<AlgorithmParameters>;
            let incompleteScan: OPTIONAL<IncompleteScan>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_StatisticalScanReportInformation,
                _extension_additions_list_spec_for_StatisticalScanReportInformation,
                _root_component_type_list_2_spec_for_StatisticalScanReportInformation,
                undefined
            );
            return new StatisticalScanReportInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
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
/* END_OF_SYMBOL_DEFINITION _decode_StatisticalScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StatisticalScanReportInformation */
let _cached_encoder_for_StatisticalScanReportInformation: $.ASN1Encoder<StatisticalScanReportInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StatisticalScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _encode_StatisticalScanReportInformation */
/**
 * @summary Encodes a(n) StatisticalScanReportInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatisticalScanReportInformation, encoded as an ASN.1 Element.
 */
export function _encode_StatisticalScanReportInformation(
    value: StatisticalScanReportInformation,
    elGetter: $.ASN1Encoder<StatisticalScanReportInformation>
) {
    if (!_cached_encoder_for_StatisticalScanReportInformation) {
        _cached_encoder_for_StatisticalScanReportInformation = function (
            value: StatisticalScanReportInformation,
            elGetter: $.ASN1Encoder<StatisticalScanReportInformation>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_StatisticalScanReportInformation */

/* eslint-enable */
