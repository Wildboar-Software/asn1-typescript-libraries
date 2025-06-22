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
import * as $ from '@wildboar/asn1/functional';
import {
    OnceReportAttributeList,
    _decode_OnceReportAttributeList,
    _encode_OnceReportAttributeList,
} from '../SummarizationASN1Productions/OnceReportAttributeList.ta.mjs';
import {
    ObservationScanList,
    _decode_ObservationScanList,
    _encode_ObservationScanList,
} from '../SummarizationASN1Productions/ObservationScanList.ta.mjs';
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
/**
 * @summary ScanReportInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScanReportInformation ::= SEQUENCE {
 *   scanInitiationTime       GeneralizedTime OPTIONAL,
 *   -- time of scan initiation. Required if the time stamp report mode
 *   -- attribute is present with a non-zero value.
 *   onceReportAttributeList  [1]  OnceReportAttributeList OPTIONAL,
 *   observationScanList      ObservationScanList,
 *   incompleteScan           [7]  IncompleteScan OPTIONAL,
 *   -- presence indicates that the scan was incomplete.
 *   additionalText           [8]  AdditionalText OPTIONAL,
 *   additionalInformation    [9]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ScanReportInformation {
    constructor(
        /**
         * @summary `scanInitiationTime`.
         * @public
         * @readonly
         */
        readonly scanInitiationTime: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `onceReportAttributeList`.
         * @public
         * @readonly
         */
        readonly onceReportAttributeList: OPTIONAL<OnceReportAttributeList>,
        /**
         * @summary `observationScanList`.
         * @public
         * @readonly
         */
        readonly observationScanList: ObservationScanList,
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
     * @summary Restructures an object into a ScanReportInformation
     * @description
     *
     * This takes an `object` and converts it to a `ScanReportInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScanReportInformation`.
     * @returns {ScanReportInformation}
     */
    public static _from_object(
        _o: { [_K in keyof ScanReportInformation]: ScanReportInformation[_K] }
    ): ScanReportInformation {
        return new ScanReportInformation(
            _o.scanInitiationTime,
            _o.onceReportAttributeList,
            _o.observationScanList,
            _o.incompleteScan,
            _o.additionalText,
            _o.additionalInformation
        );
    }
}

/**
 * @summary The Leading Root Component Types of ScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ScanReportInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'scanInitiationTime',
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        'onceReportAttributeList',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'observationScanList',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'incompleteScan',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
];

/**
 * @summary The Trailing Root Component Types of ScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ScanReportInformation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ScanReportInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ScanReportInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_ScanReportInformation: $.ASN1Decoder<ScanReportInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScanReportInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScanReportInformation} The decoded data structure.
 */
export function _decode_ScanReportInformation(el: _Element) {
    if (!_cached_decoder_for_ScanReportInformation) {
        _cached_decoder_for_ScanReportInformation = function (
            el: _Element
        ): ScanReportInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let scanInitiationTime: OPTIONAL<GeneralizedTime>;
            let onceReportAttributeList: OPTIONAL<OnceReportAttributeList>;
            let observationScanList!: ObservationScanList;
            let incompleteScan: OPTIONAL<IncompleteScan>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                scanInitiationTime: (_el: _Element): void => {
                    scanInitiationTime = $._decodeGeneralizedTime(_el);
                },
                onceReportAttributeList: (_el: _Element): void => {
                    onceReportAttributeList = $._decode_implicit<OnceReportAttributeList>(
                        () => _decode_OnceReportAttributeList
                    )(_el);
                },
                observationScanList: (_el: _Element): void => {
                    observationScanList = _decode_ObservationScanList(_el);
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
                _root_component_type_list_1_spec_for_ScanReportInformation,
                _extension_additions_list_spec_for_ScanReportInformation,
                _root_component_type_list_2_spec_for_ScanReportInformation,
                undefined
            );
            return new ScanReportInformation /* SEQUENCE_CONSTRUCTOR_CALL */(
                scanInitiationTime,
                onceReportAttributeList,
                observationScanList,
                incompleteScan,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_ScanReportInformation(el);
}

let _cached_encoder_for_ScanReportInformation: $.ASN1Encoder<ScanReportInformation> | null = null;

/**
 * @summary Encodes a(n) ScanReportInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScanReportInformation, encoded as an ASN.1 Element.
 */
export function _encode_ScanReportInformation(
    value: ScanReportInformation,
    elGetter: $.ASN1Encoder<ScanReportInformation>
) {
    if (!_cached_encoder_for_ScanReportInformation) {
        _cached_encoder_for_ScanReportInformation = function (
            value: ScanReportInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.scanInitiationTime === undefined
                            ? undefined
                            : $._encodeGeneralizedTime(
                                  value.scanInitiationTime,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.onceReportAttributeList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_OnceReportAttributeList,
                                  $.BER
                              )(value.onceReportAttributeList, $.BER),
                        /* REQUIRED   */ _encode_ObservationScanList(
                            value.observationScanList,
                            $.BER
                        ),
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
    return _cached_encoder_for_ScanReportInformation(value, elGetter);
}


/* eslint-enable */
