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
    ResultReportIndicator,
    _enum_for_ResultReportIndicator,
    ResultReportIndicator_resultReportForPassedSequences /* IMPORTED_LONG_ENUMERATION_ITEM */,
    resultReportForPassedSequences /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ResultReportIndicator_noResultReportForPassedSequences /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noResultReportForPassedSequences /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ResultReportIndicator,
    _encode_ResultReportIndicator,
} from '../TestCategories-ASN1Module/ResultReportIndicator.ta.mjs';
export {
    ResultReportIndicator,
    _enum_for_ResultReportIndicator,
    ResultReportIndicator_resultReportForPassedSequences /* IMPORTED_LONG_ENUMERATION_ITEM */,
    resultReportForPassedSequences /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ResultReportIndicator_noResultReportForPassedSequences /* IMPORTED_LONG_ENUMERATION_ITEM */,
    noResultReportForPassedSequences /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ResultReportIndicator,
    _encode_ResultReportIndicator,
} from '../TestCategories-ASN1Module/ResultReportIndicator.ta.mjs';
import {
    SequenceOfEvents,
    _decode_SequenceOfEvents,
    _encode_SequenceOfEvents,
} from '../TestCategories-ASN1Module/SequenceOfEvents.ta.mjs';
export {
    SequenceOfEvents,
    _decode_SequenceOfEvents,
    _encode_SequenceOfEvents,
} from '../TestCategories-ASN1Module/SequenceOfEvents.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ResourceBoundaryTestInfo */
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
/* END_OF_SYMBOL_DEFINITION ResourceBoundaryTestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResourceBoundaryTestInfo */
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
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'sequenceOfEvents',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResourceBoundaryTestInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResourceBoundaryTestInfo */
/**
 * @summary The Trailing Root Component Types of ResourceBoundaryTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResourceBoundaryTestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResourceBoundaryTestInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResourceBoundaryTestInfo */
/**
 * @summary The Extension Addition Component Types of ResourceBoundaryTestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResourceBoundaryTestInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResourceBoundaryTestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceBoundaryTestInfo */
let _cached_decoder_for_ResourceBoundaryTestInfo: $.ASN1Decoder<ResourceBoundaryTestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResourceBoundaryTestInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ResourceBoundaryTestInfo */
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
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let resultReportIndicator: OPTIONAL<ResultReportIndicator>;
            let sequenceOfEvents: OPTIONAL<SequenceOfEvents>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResourceBoundaryTestInfo,
                _extension_additions_list_spec_for_ResourceBoundaryTestInfo,
                _root_component_type_list_2_spec_for_ResourceBoundaryTestInfo,
                undefined
            );
            return new ResourceBoundaryTestInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                resultReportIndicator,
                sequenceOfEvents
            );
        };
    }
    return _cached_decoder_for_ResourceBoundaryTestInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResourceBoundaryTestInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceBoundaryTestInfo */
let _cached_encoder_for_ResourceBoundaryTestInfo: $.ASN1Encoder<ResourceBoundaryTestInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResourceBoundaryTestInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ResourceBoundaryTestInfo */
/**
 * @summary Encodes a(n) ResourceBoundaryTestInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceBoundaryTestInfo, encoded as an ASN.1 Element.
 */
export function _encode_ResourceBoundaryTestInfo(
    value: ResourceBoundaryTestInfo,
    elGetter: $.ASN1Encoder<ResourceBoundaryTestInfo>
) {
    if (!_cached_encoder_for_ResourceBoundaryTestInfo) {
        _cached_encoder_for_ResourceBoundaryTestInfo = function (
            value: ResourceBoundaryTestInfo,
            elGetter: $.ASN1Encoder<ResourceBoundaryTestInfo>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_ResourceBoundaryTestInfo */

/* eslint-enable */
