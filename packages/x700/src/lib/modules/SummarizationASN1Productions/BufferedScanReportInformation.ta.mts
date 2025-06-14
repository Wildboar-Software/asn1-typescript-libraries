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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    TimePeriod,
    _decode_TimePeriod,
    _encode_TimePeriod,
} from '../MetricModule/TimePeriod.ta.mjs';
import {
    SuspectIntervals,
    _decode_SuspectIntervals,
    _encode_SuspectIntervals,
} from '../SummarizationASN1Productions/SuspectIntervals.ta.mjs';
import {
    BufferedObservationList,
    _decode_BufferedObservationList,
    _encode_BufferedObservationList,
} from '../SummarizationASN1Productions/BufferedObservationList.ta.mjs';
import {
    IncompleteScan,
    _decode_IncompleteScan,
    _encode_IncompleteScan,
} from '../SummarizationASN1Productions/IncompleteScan.ta.mjs';
import {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta.mjs';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BufferedScanReportInformation */
/**
 * @summary BufferedScanReportInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BufferedScanReportInformation ::= SEQUENCE {
 *   granularityPeriod        TimePeriod,
 *   firstScanInitiationTime  [1]  GeneralizedTime OPTIONAL,
 *   -- time of first scan initiation. Required if timeStampReportMode attribute
 *   -- is present with non-zero value.
 *   suspectIntervals         [4]  SuspectIntervals DEFAULT 0,
 *   -- count of number of scheduled scans which have data missing or suspect for any attribute
 *   bufferedObservationList  [6]  BufferedObservationList,
 *   incompleteScan           [7]  IncompleteScan OPTIONAL,
 *   -- presence indicates that the scan was incomplete.
 *   additionalText           [8]  AdditionalText OPTIONAL,
 *   additionalInformation    [9]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class BufferedScanReportInformation {
    constructor(
        /**
         * @summary `granularityPeriod`.
         * @public
         * @readonly
         */
        readonly granularityPeriod: TimePeriod,
        /**
         * @summary `firstScanInitiationTime`.
         * @public
         * @readonly
         */
        readonly firstScanInitiationTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `suspectIntervals`.
         * @public
         * @readonly
         */
        readonly suspectIntervals: OPTIONAL<SuspectIntervals>,
        /**
         * @summary `bufferedObservationList`.
         * @public
         * @readonly
         */
        readonly bufferedObservationList: BufferedObservationList,
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
     * @summary Restructures an object into a BufferedScanReportInformation
     * @description
     *
     * This takes an `object` and converts it to a `BufferedScanReportInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BufferedScanReportInformation`.
     * @returns {BufferedScanReportInformation}
     */
    public static _from_object(
        _o: {
            [_K in keyof BufferedScanReportInformation]: BufferedScanReportInformation[_K];
        }
    ): BufferedScanReportInformation {
        return new BufferedScanReportInformation(
            _o.granularityPeriod,
            _o.firstScanInitiationTime,
            _o.suspectIntervals,
            _o.bufferedObservationList,
            _o.incompleteScan,
            _o.additionalText,
            _o.additionalInformation
        );
    }

    /**
     * @summary Getter that returns the default value for `suspectIntervals`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_suspectIntervals() {
        return 0;
    }
}
/* END_OF_SYMBOL_DEFINITION BufferedScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BufferedScanReportInformation */
/**
 * @summary The Leading Root Component Types of BufferedScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BufferedScanReportInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'granularityPeriod',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'firstScanInitiationTime',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'suspectIntervals',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'bufferedObservationList',
        false,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'incompleteScan',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BufferedScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BufferedScanReportInformation */
/**
 * @summary The Trailing Root Component Types of BufferedScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BufferedScanReportInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BufferedScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BufferedScanReportInformation */
/**
 * @summary The Extension Addition Component Types of BufferedScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BufferedScanReportInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BufferedScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BufferedScanReportInformation */
let _cached_decoder_for_BufferedScanReportInformation: $.ASN1Decoder<BufferedScanReportInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BufferedScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _decode_BufferedScanReportInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) BufferedScanReportInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BufferedScanReportInformation} The decoded data structure.
 */
export function _decode_BufferedScanReportInformation(el: _Element) {
    if (!_cached_decoder_for_BufferedScanReportInformation) {
        _cached_decoder_for_BufferedScanReportInformation = function (
            el: _Element
        ): BufferedScanReportInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let granularityPeriod!: TimePeriod;
            let firstScanInitiationTime: OPTIONAL<GeneralizedTime>;
            let suspectIntervals: OPTIONAL<SuspectIntervals> =
                BufferedScanReportInformation._default_value_for_suspectIntervals;
            let bufferedObservationList!: BufferedObservationList;
            let incompleteScan: OPTIONAL<IncompleteScan>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                granularityPeriod: (_el: _Element): void => {
                    granularityPeriod = _decode_TimePeriod(_el);
                },
                firstScanInitiationTime: (_el: _Element): void => {
                    firstScanInitiationTime = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                suspectIntervals: (_el: _Element): void => {
                    suspectIntervals = $._decode_implicit<SuspectIntervals>(
                        () => _decode_SuspectIntervals
                    )(_el);
                },
                bufferedObservationList: (_el: _Element): void => {
                    bufferedObservationList = $._decode_implicit<BufferedObservationList>(
                        () => _decode_BufferedObservationList
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
                _root_component_type_list_1_spec_for_BufferedScanReportInformation,
                _extension_additions_list_spec_for_BufferedScanReportInformation,
                _root_component_type_list_2_spec_for_BufferedScanReportInformation,
                undefined
            );
            return new BufferedScanReportInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                granularityPeriod,
                firstScanInitiationTime,
                suspectIntervals,
                bufferedObservationList,
                incompleteScan,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_BufferedScanReportInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BufferedScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BufferedScanReportInformation */
let _cached_encoder_for_BufferedScanReportInformation: $.ASN1Encoder<BufferedScanReportInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BufferedScanReportInformation */

/* START_OF_SYMBOL_DEFINITION _encode_BufferedScanReportInformation */
/**
 * @summary Encodes a(n) BufferedScanReportInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BufferedScanReportInformation, encoded as an ASN.1 Element.
 */
export function _encode_BufferedScanReportInformation(
    value: BufferedScanReportInformation,
    elGetter: $.ASN1Encoder<BufferedScanReportInformation>
) {
    if (!_cached_encoder_for_BufferedScanReportInformation) {
        _cached_encoder_for_BufferedScanReportInformation = function (
            value: BufferedScanReportInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TimePeriod(
                            value.granularityPeriod,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.firstScanInitiationTime ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeGeneralizedTime,
                                  $.BER
                              )(value.firstScanInitiationTime, $.BER),
                        /* IF_DEFAULT */ value.suspectIntervals === undefined ||
                        $.deepEq(
                            value.suspectIntervals,
                            BufferedScanReportInformation._default_value_for_suspectIntervals
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_SuspectIntervals,
                                  $.BER
                              )(value.suspectIntervals, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            6,
                            () => _encode_BufferedObservationList,
                            $.BER
                        )(value.bufferedObservationList, $.BER),
                        /* IF_ABSENT  */ value.incompleteScan === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_IncompleteScan,
                                  $.BER
                              )(value.incompleteScan, $.BER),
                        /* IF_ABSENT  */ value.additionalText === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_AdditionalText,
                                  $.BER
                              )(value.additionalText, $.BER),
                        /* IF_ABSENT  */ value.additionalInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additionalInformation, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_BufferedScanReportInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BufferedScanReportInformation */

/* eslint-enable */
