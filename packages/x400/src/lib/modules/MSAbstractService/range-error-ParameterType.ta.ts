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
    RangeProblem,
    RangeProblem_reversed /* IMPORTED_LONG_NAMED_INTEGER */,
    reversed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RangeProblem,
    _encode_RangeProblem,
} from '../MSAbstractService/RangeProblem.ta.js';
export {
    RangeProblem,
    RangeProblem_reversed /* IMPORTED_LONG_NAMED_INTEGER */,
    reversed /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_RangeProblem,
    _encode_RangeProblem,
} from '../MSAbstractService/RangeProblem.ta.js';

/* START_OF_SYMBOL_DEFINITION range_error_ParameterType */
/**
 * @summary range_error_ParameterType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * range-error-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class range_error_ParameterType {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: RangeProblem
    ) {}

    /**
     * @summary Restructures an object into a range_error_ParameterType
     * @description
     *
     * This takes an `object` and converts it to a `range_error_ParameterType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `range_error_ParameterType`.
     * @returns {range_error_ParameterType}
     */
    public static _from_object(
        _o: {
            [_K in keyof range_error_ParameterType]: range_error_ParameterType[_K];
        }
    ): range_error_ParameterType {
        return new range_error_ParameterType(_o.problem);
    }
}
/* END_OF_SYMBOL_DEFINITION range_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_range_error_ParameterType */
/**
 * @summary The Leading Root Component Types of range_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_range_error_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'problem',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_range_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_range_error_ParameterType */
/**
 * @summary The Trailing Root Component Types of range_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_range_error_ParameterType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_range_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_range_error_ParameterType */
/**
 * @summary The Extension Addition Component Types of range_error_ParameterType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_range_error_ParameterType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_range_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_range_error_ParameterType */
let _cached_decoder_for_range_error_ParameterType: $.ASN1Decoder<range_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_range_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _decode_range_error_ParameterType */
/**
 * @summary Decodes an ASN.1 element into a(n) range_error_ParameterType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {range_error_ParameterType} The decoded data structure.
 */
export function _decode_range_error_ParameterType(el: _Element) {
    if (!_cached_decoder_for_range_error_ParameterType) {
        _cached_decoder_for_range_error_ParameterType = function (
            el: _Element
        ): range_error_ParameterType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: RangeProblem;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<RangeProblem>(
                        () => _decode_RangeProblem
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_range_error_ParameterType,
                _extension_additions_list_spec_for_range_error_ParameterType,
                _root_component_type_list_2_spec_for_range_error_ParameterType,
                undefined
            );
            return new range_error_ParameterType /* SET_CONSTRUCTOR_CALL */(
                problem
            );
        };
    }
    return _cached_decoder_for_range_error_ParameterType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_range_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_range_error_ParameterType */
let _cached_encoder_for_range_error_ParameterType: $.ASN1Encoder<range_error_ParameterType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_range_error_ParameterType */

/* START_OF_SYMBOL_DEFINITION _encode_range_error_ParameterType */
/**
 * @summary Encodes a(n) range_error_ParameterType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The range_error_ParameterType, encoded as an ASN.1 Element.
 */
export function _encode_range_error_ParameterType(
    value: range_error_ParameterType,
    elGetter: $.ASN1Encoder<range_error_ParameterType>
) {
    if (!_cached_encoder_for_range_error_ParameterType) {
        _cached_encoder_for_range_error_ParameterType = function (
            value: range_error_ParameterType,
            elGetter: $.ASN1Encoder<range_error_ParameterType>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_RangeProblem,
                            $.BER
                        )(value.problem, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_range_error_ParameterType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_range_error_ParameterType */

/* eslint-enable */
