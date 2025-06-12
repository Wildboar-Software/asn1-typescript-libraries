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
    SignalReceived,
    _decode_SignalReceived,
    _encode_SignalReceived,
} from '../TestCategories-ASN1Module/SignalReceived.ta.js';
export {
    SignalReceived,
    _decode_SignalReceived,
    _encode_SignalReceived,
} from '../TestCategories-ASN1Module/SignalReceived.ta.js';
import {
    IntermediateResourceBoundaryTestOutcome,
    _enum_for_IntermediateResourceBoundaryTestOutcome,
    IntermediateResourceBoundaryTestOutcome_passed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    passed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResourceBoundaryTestOutcome_unexpected /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unexpected /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResourceBoundaryTestOutcome_wrongSignalReceived /* IMPORTED_LONG_ENUMERATION_ITEM */,
    wrongSignalReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResourceBoundaryTestOutcome_waitDurationTimerExpired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    waitDurationTimerExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_IntermediateResourceBoundaryTestOutcome,
    _encode_IntermediateResourceBoundaryTestOutcome,
} from '../TestCategories-ASN1Module/IntermediateResourceBoundaryTestOutcome.ta.js';
export {
    IntermediateResourceBoundaryTestOutcome,
    _enum_for_IntermediateResourceBoundaryTestOutcome,
    IntermediateResourceBoundaryTestOutcome_passed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    passed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResourceBoundaryTestOutcome_unexpected /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unexpected /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResourceBoundaryTestOutcome_wrongSignalReceived /* IMPORTED_LONG_ENUMERATION_ITEM */,
    wrongSignalReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    IntermediateResourceBoundaryTestOutcome_waitDurationTimerExpired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    waitDurationTimerExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_IntermediateResourceBoundaryTestOutcome,
    _encode_IntermediateResourceBoundaryTestOutcome,
} from '../TestCategories-ASN1Module/IntermediateResourceBoundaryTestOutcome.ta.js';

/* START_OF_SYMBOL_DEFINITION ResourceBoundaryTestResults */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION ResourceBoundaryTestResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResourceBoundaryTestResults */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'intermediateResourceBoundaryTestOutcome',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'eventId',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResourceBoundaryTestResults */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResourceBoundaryTestResults */
/**
 * @summary The Trailing Root Component Types of ResourceBoundaryTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResourceBoundaryTestResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResourceBoundaryTestResults */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResourceBoundaryTestResults */
/**
 * @summary The Extension Addition Component Types of ResourceBoundaryTestResults
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResourceBoundaryTestResults: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResourceBoundaryTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceBoundaryTestResults */
let _cached_decoder_for_ResourceBoundaryTestResults: $.ASN1Decoder<ResourceBoundaryTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceBoundaryTestResults */

/* START_OF_SYMBOL_DEFINITION _decode_ResourceBoundaryTestResults */
/**
 * @summary Decodes an ASN.1 element into a(n) ResourceBoundaryTestResults
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResourceBoundaryTestResults} The decoded data structure.
 */
export function _decode_ResourceBoundaryTestResults(el: _Element) {
    if (!_cached_decoder_for_ResourceBoundaryTestResults) {
        _cached_decoder_for_ResourceBoundaryTestResults = function (
            el: _Element
        ): ResourceBoundaryTestResults {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let signalReceived: OPTIONAL<SignalReceived>;
            let intermediateResourceBoundaryTestOutcome: OPTIONAL<IntermediateResourceBoundaryTestOutcome>;
            let eventId: OPTIONAL<INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResourceBoundaryTestResults,
                _extension_additions_list_spec_for_ResourceBoundaryTestResults,
                _root_component_type_list_2_spec_for_ResourceBoundaryTestResults,
                undefined
            );
            return new ResourceBoundaryTestResults /* SEQUENCE_CONSTRUCTOR_CALL */(
                signalReceived,
                intermediateResourceBoundaryTestOutcome,
                eventId
            );
        };
    }
    return _cached_decoder_for_ResourceBoundaryTestResults(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResourceBoundaryTestResults */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceBoundaryTestResults */
let _cached_encoder_for_ResourceBoundaryTestResults: $.ASN1Encoder<ResourceBoundaryTestResults> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceBoundaryTestResults */

/* START_OF_SYMBOL_DEFINITION _encode_ResourceBoundaryTestResults */
/**
 * @summary Encodes a(n) ResourceBoundaryTestResults into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceBoundaryTestResults, encoded as an ASN.1 Element.
 */
export function _encode_ResourceBoundaryTestResults(
    value: ResourceBoundaryTestResults,
    elGetter: $.ASN1Encoder<ResourceBoundaryTestResults>
) {
    if (!_cached_encoder_for_ResourceBoundaryTestResults) {
        _cached_encoder_for_ResourceBoundaryTestResults = function (
            value: ResourceBoundaryTestResults,
            elGetter: $.ASN1Encoder<ResourceBoundaryTestResults>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_ResourceBoundaryTestResults */

/* eslint-enable */
