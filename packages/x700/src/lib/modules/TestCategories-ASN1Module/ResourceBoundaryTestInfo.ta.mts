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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ResultReportIndicator,
    _enum_for_ResultReportIndicator,
    _decode_ResultReportIndicator,
    _encode_ResultReportIndicator,
} from '../TestCategories-ASN1Module/ResultReportIndicator.ta.mjs';
import {
    SequenceOfEvents,
    _decode_SequenceOfEvents,
    _encode_SequenceOfEvents,
} from '../TestCategories-ASN1Module/SequenceOfEvents.ta.mjs';
/**
 * @summary ResourceBoundaryTestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourceBoundaryTestInfo ::= SEQUENCE {
 *   resultReportIndicator  [0] IMPLICIT ResultReportIndicator OPTIONAL,
 *   sequenceOfEvents       [1] IMPLICIT SequenceOfEvents OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ResourceBoundaryTestInfo {
    constructor(
        /**
         * @summary `resultReportIndicator`.
         * @public
         * @readonly
         */
        readonly resultReportIndicator: OPTIONAL<ResultReportIndicator>,
        /**
         * @summary `sequenceOfEvents`.
         * @public
         * @readonly
         */
        readonly sequenceOfEvents: OPTIONAL<SequenceOfEvents>
    ) {}

    /**
     * @summary Restructures an object into a ResourceBoundaryTestInfo
     * @description
     *
     * This takes an `object` and converts it to a `ResourceBoundaryTestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceBoundaryTestInfo`.
     * @returns {ResourceBoundaryTestInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof ResourceBoundaryTestInfo]: ResourceBoundaryTestInfo[_K];
        }
    ): ResourceBoundaryTestInfo {
        return new ResourceBoundaryTestInfo(
            _o.resultReportIndicator,
            _o.sequenceOfEvents
        );
    }

    /**
     * @summary The enum used as the type of the component `resultReportIndicator`
     * @public
     * @static
     */

    public static _enum_for_resultReportIndicator = _enum_for_ResultReportIndicator;
}

/**
 * @summary The Leading Root Component Types of ResourceBoundaryTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResourceBoundaryTestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'resultReportIndicator',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'sequenceOfEvents',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of ResourceBoundaryTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResourceBoundaryTestInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ResourceBoundaryTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResourceBoundaryTestInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_ResourceBoundaryTestInfo: $.ASN1Decoder<ResourceBoundaryTestInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceBoundaryTestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourceBoundaryTestInfo} The decoded data structure.
 */
export function _decode_ResourceBoundaryTestInfo(el: _Element) {
    if (!_cached_decoder_for_ResourceBoundaryTestInfo) {
        _cached_decoder_for_ResourceBoundaryTestInfo = function (
            el: _Element
        ): ResourceBoundaryTestInfo {
            let resultReportIndicator: OPTIONAL<ResultReportIndicator>;
            let sequenceOfEvents: OPTIONAL<SequenceOfEvents>;
            const callbacks: $.DecodingMap = {
                resultReportIndicator: (_el: _Element): void => {
                    resultReportIndicator = $._decode_implicit<ResultReportIndicator>(
                        () => _decode_ResultReportIndicator
                    )(_el);
                },
                sequenceOfEvents: (_el: _Element): void => {
                    sequenceOfEvents = $._decode_implicit<SequenceOfEvents>(
                        () => _decode_SequenceOfEvents
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResourceBoundaryTestInfo,
                _extension_additions_list_spec_for_ResourceBoundaryTestInfo,
                _root_component_type_list_2_spec_for_ResourceBoundaryTestInfo,
                undefined
            );
            return new ResourceBoundaryTestInfo (
                resultReportIndicator,
                sequenceOfEvents
            );
        };
    }
    return _cached_decoder_for_ResourceBoundaryTestInfo(el);
}

let _cached_encoder_for_ResourceBoundaryTestInfo: $.ASN1Encoder<ResourceBoundaryTestInfo> | null = null;

/**
 * @summary Encodes a(n) ResourceBoundaryTestInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceBoundaryTestInfo, encoded as an ASN.1 Element.
 */
export function _encode_ResourceBoundaryTestInfo(
    value: ResourceBoundaryTestInfo,
    elGetter: $.ASN1Encoder<ResourceBoundaryTestInfo>
) {
    if (!_cached_encoder_for_ResourceBoundaryTestInfo) {
        _cached_encoder_for_ResourceBoundaryTestInfo = function (
            value: ResourceBoundaryTestInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.resultReportIndicator ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_ResultReportIndicator,
                                  $.BER
                              )(value.resultReportIndicator, $.BER),
                        /* IF_ABSENT  */ value.sequenceOfEvents === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SequenceOfEvents,
                                  $.BER
                              )(value.sequenceOfEvents, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ResourceBoundaryTestInfo(value, elGetter);
}


/* eslint-enable */
