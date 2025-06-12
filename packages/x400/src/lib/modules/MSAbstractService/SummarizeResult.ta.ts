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
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.js';
export {
    SequenceNumber,
    _decode_SequenceNumber,
    _encode_SequenceNumber,
} from '../MSAbstractService/SequenceNumber.ta.js';
import { Span, _decode_Span, _encode_Span } from '../MSAbstractService/Span.ta.js';
export { Span, _decode_Span, _encode_Span } from '../MSAbstractService/Span.ta.js';
import {
    Summary,
    _decode_Summary,
    _encode_Summary,
} from '../MSAbstractService/Summary.ta.js';
export {
    Summary,
    _decode_Summary,
    _encode_Summary,
} from '../MSAbstractService/Summary.ta.js';
import {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.js';
export {
    MSExtensions,
    _decode_MSExtensions,
    _encode_MSExtensions,
} from '../MSAbstractService/MSExtensions.ta.js';

/* START_OF_SYMBOL_DEFINITION SummarizeResult */
/**
 * @summary SummarizeResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SummarizeResult ::= SET {
 *   next                         [0]  SequenceNumber OPTIONAL,
 *   count
 *     [1]  INTEGER(0..ub-messages)-- of the entries selected-- ,
 *   span                         [2]  Span OPTIONAL -- of the entries selected,---- omitted if count is zero --,
 *   summaries
 *     [3]  SEQUENCE SIZE (1..ub-summaries) OF Summary OPTIONAL,
 *   -- 1994 extension
 *   summarize-result-extensions  [4]  MSExtensions OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SummarizeResult {
    constructor(
        /**
         * @summary `next`.
         * @public
         * @readonly
         */
        readonly next: OPTIONAL<SequenceNumber>,
        /**
         * @summary `count`.
         * @public
         * @readonly
         */
        readonly count: INTEGER,
        /**
         * @summary `span`.
         * @public
         * @readonly
         */
        readonly span: OPTIONAL<Span>,
        /**
         * @summary `summaries`.
         * @public
         * @readonly
         */
        readonly summaries: OPTIONAL<Summary[]>,
        /**
         * @summary `summarize_result_extensions`.
         * @public
         * @readonly
         */
        readonly summarize_result_extensions: OPTIONAL<MSExtensions>
    ) {}

    /**
     * @summary Restructures an object into a SummarizeResult
     * @description
     *
     * This takes an `object` and converts it to a `SummarizeResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SummarizeResult`.
     * @returns {SummarizeResult}
     */
    public static _from_object(
        _o: { [_K in keyof SummarizeResult]: SummarizeResult[_K] }
    ): SummarizeResult {
        return new SummarizeResult(
            _o.next,
            _o.count,
            _o.span,
            _o.summaries,
            _o.summarize_result_extensions
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SummarizeResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SummarizeResult */
/**
 * @summary The Leading Root Component Types of SummarizeResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SummarizeResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'next',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'count',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'span',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'summaries',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'summarize-result-extensions',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SummarizeResult */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SummarizeResult */
/**
 * @summary The Trailing Root Component Types of SummarizeResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SummarizeResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SummarizeResult */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SummarizeResult */
/**
 * @summary The Extension Addition Component Types of SummarizeResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SummarizeResult: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SummarizeResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SummarizeResult */
let _cached_decoder_for_SummarizeResult: $.ASN1Decoder<SummarizeResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SummarizeResult */

/* START_OF_SYMBOL_DEFINITION _decode_SummarizeResult */
/**
 * @summary Decodes an ASN.1 element into a(n) SummarizeResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SummarizeResult} The decoded data structure.
 */
export function _decode_SummarizeResult(el: _Element) {
    if (!_cached_decoder_for_SummarizeResult) {
        _cached_decoder_for_SummarizeResult = function (
            el: _Element
        ): SummarizeResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let next: OPTIONAL<SequenceNumber>;
            let count!: INTEGER;
            let span: OPTIONAL<Span>;
            let summaries: OPTIONAL<Summary[]>;
            let summarize_result_extensions: OPTIONAL<MSExtensions>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                next: (_el: _Element): void => {
                    next = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
                count: (_el: _Element): void => {
                    count = $._decode_explicit<INTEGER>(() => $._decodeInteger)(
                        _el
                    );
                },
                span: (_el: _Element): void => {
                    span = $._decode_explicit<Span>(() => _decode_Span)(_el);
                },
                summaries: (_el: _Element): void => {
                    summaries = $._decode_explicit<Summary[]>(() =>
                        $._decodeSequenceOf<Summary>(() => _decode_Summary)
                    )(_el);
                },
                'summarize-result-extensions': (_el: _Element): void => {
                    summarize_result_extensions = $._decode_explicit<MSExtensions>(
                        () => _decode_MSExtensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SummarizeResult,
                _extension_additions_list_spec_for_SummarizeResult,
                _root_component_type_list_2_spec_for_SummarizeResult,
                undefined
            );
            return new SummarizeResult /* SET_CONSTRUCTOR_CALL */(
                next,
                count,
                span,
                summaries,
                summarize_result_extensions
            );
        };
    }
    return _cached_decoder_for_SummarizeResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SummarizeResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SummarizeResult */
let _cached_encoder_for_SummarizeResult: $.ASN1Encoder<SummarizeResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SummarizeResult */

/* START_OF_SYMBOL_DEFINITION _encode_SummarizeResult */
/**
 * @summary Encodes a(n) SummarizeResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SummarizeResult, encoded as an ASN.1 Element.
 */
export function _encode_SummarizeResult(
    value: SummarizeResult,
    elGetter: $.ASN1Encoder<SummarizeResult>
) {
    if (!_cached_encoder_for_SummarizeResult) {
        _cached_encoder_for_SummarizeResult = function (
            value: SummarizeResult,
            elGetter: $.ASN1Encoder<SummarizeResult>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.next === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SequenceNumber,
                                  $.BER
                              )(value.next, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => $._encodeInteger,
                            $.BER
                        )(value.count, $.BER),
                        /* IF_ABSENT  */ value.span === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Span,
                                  $.BER
                              )(value.span, $.BER),
                        /* IF_ABSENT  */ value.summaries === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () =>
                                      $._encodeSequenceOf<Summary>(
                                          () => _encode_Summary,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.summaries, $.BER),
                        /* IF_ABSENT  */ value.summarize_result_extensions ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_MSExtensions,
                                  $.BER
                              )(value.summarize_result_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SummarizeResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SummarizeResult */

/* eslint-enable */
