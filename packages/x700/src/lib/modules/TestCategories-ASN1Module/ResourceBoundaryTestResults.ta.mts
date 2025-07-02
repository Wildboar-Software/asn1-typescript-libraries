/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
    SignalReceived,
    _decode_SignalReceived,
    _encode_SignalReceived,
} from '../TestCategories-ASN1Module/SignalReceived.ta.mjs';
import {
    IntermediateResourceBoundaryTestOutcome,
    _enum_for_IntermediateResourceBoundaryTestOutcome,
    _decode_IntermediateResourceBoundaryTestOutcome,
    _encode_IntermediateResourceBoundaryTestOutcome,
} from '../TestCategories-ASN1Module/IntermediateResourceBoundaryTestOutcome.ta.mjs';
/**
 * @summary ResourceBoundaryTestResults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResourceBoundaryTestResults ::= SEQUENCE {
 *   signalReceived                           [0] IMPLICIT SignalReceived OPTIONAL,
 *   intermediateResourceBoundaryTestOutcome
 *     [1] IMPLICIT IntermediateResourceBoundaryTestOutcome OPTIONAL,
 *   eventId                                  [2] IMPLICIT INTEGER OPTIONAL
 * }
 * ```
 *
 */
export class ResourceBoundaryTestResults {
    constructor(
        /**
         * @summary `signalReceived`.
         * @public
         * @readonly
         */
        readonly signalReceived: OPTIONAL<SignalReceived>,
        /**
         * @summary `intermediateResourceBoundaryTestOutcome`.
         * @public
         * @readonly
         */
        readonly intermediateResourceBoundaryTestOutcome: OPTIONAL<IntermediateResourceBoundaryTestOutcome>,
        /**
         * @summary `eventId`.
         * @public
         * @readonly
         */
        readonly eventId: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a ResourceBoundaryTestResults
     * @description
     *
     * This takes an `object` and converts it to a `ResourceBoundaryTestResults`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceBoundaryTestResults`.
     * @returns {ResourceBoundaryTestResults}
     */
    public static _from_object(
        _o: {
            [_K in keyof ResourceBoundaryTestResults]: ResourceBoundaryTestResults[_K];
        }
    ): ResourceBoundaryTestResults {
        return new ResourceBoundaryTestResults(
            _o.signalReceived,
            _o.intermediateResourceBoundaryTestOutcome,
            _o.eventId
        );
    }

    /**
     * @summary The enum used as the type of the component `intermediateResourceBoundaryTestOutcome`
     * @public
     * @static
     */

    public static _enum_for_intermediateResourceBoundaryTestOutcome = _enum_for_IntermediateResourceBoundaryTestOutcome;
}

/**
 * @summary The Leading Root Component Types of ResourceBoundaryTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResourceBoundaryTestResults: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'signalReceived',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'intermediateResourceBoundaryTestOutcome',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'eventId',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ResourceBoundaryTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResourceBoundaryTestResults: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ResourceBoundaryTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResourceBoundaryTestResults: $.ComponentSpec[] = [];

let _cached_decoder_for_ResourceBoundaryTestResults: $.ASN1Decoder<ResourceBoundaryTestResults> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceBoundaryTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourceBoundaryTestResults} The decoded data structure.
 */
export function _decode_ResourceBoundaryTestResults(el: _Element): ResourceBoundaryTestResults {
    if (!_cached_decoder_for_ResourceBoundaryTestResults) {
        _cached_decoder_for_ResourceBoundaryTestResults = function (
            el: _Element
        ): ResourceBoundaryTestResults {
            let signalReceived: OPTIONAL<SignalReceived>;
            let intermediateResourceBoundaryTestOutcome: OPTIONAL<IntermediateResourceBoundaryTestOutcome>;
            let eventId: OPTIONAL<INTEGER>;
            const callbacks: $.DecodingMap = {
                signalReceived: (_el: _Element): void => {
                    signalReceived = $._decode_implicit<SignalReceived>(
                        () => _decode_SignalReceived
                    )(_el);
                },
                intermediateResourceBoundaryTestOutcome: (
                    _el: _Element
                ): void => {
                    intermediateResourceBoundaryTestOutcome = $._decode_implicit<IntermediateResourceBoundaryTestOutcome>(
                        () => _decode_IntermediateResourceBoundaryTestOutcome
                    )(_el);
                },
                eventId: (_el: _Element): void => {
                    eventId = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResourceBoundaryTestResults,
                _extension_additions_list_spec_for_ResourceBoundaryTestResults,
                _root_component_type_list_2_spec_for_ResourceBoundaryTestResults,
                undefined
            );
            return new ResourceBoundaryTestResults (
                signalReceived,
                intermediateResourceBoundaryTestOutcome,
                eventId
            );
        };
    }
    return _cached_decoder_for_ResourceBoundaryTestResults(el);
}

let _cached_encoder_for_ResourceBoundaryTestResults: $.ASN1Encoder<ResourceBoundaryTestResults> | null = null;

/**
 * @summary Encodes a(n) ResourceBoundaryTestResults into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceBoundaryTestResults, encoded as an ASN.1 Element.
 */
export function _encode_ResourceBoundaryTestResults(
    value: ResourceBoundaryTestResults,
    elGetter: $.ASN1Encoder<ResourceBoundaryTestResults>
): _Element {
    if (!_cached_encoder_for_ResourceBoundaryTestResults) {
        _cached_encoder_for_ResourceBoundaryTestResults = function (
            value: ResourceBoundaryTestResults        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.signalReceived === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SignalReceived,
                                  $.BER
                              )(value.signalReceived, $.BER),
                        /* IF_ABSENT  */ value.intermediateResourceBoundaryTestOutcome ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      _encode_IntermediateResourceBoundaryTestOutcome,
                                  $.BER
                              )(
                                  value.intermediateResourceBoundaryTestOutcome,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.eventId === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.eventId, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ResourceBoundaryTestResults(value, elGetter);
}


/* eslint-enable */
