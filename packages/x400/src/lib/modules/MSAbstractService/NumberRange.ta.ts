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

/* START_OF_SYMBOL_DEFINITION NumberRange */
/**
 * @summary NumberRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberRange ::= SEQUENCE {
 *   from  [0]  SequenceNumber OPTIONAL -- omitted means no lower bound--,
 *   to    [1]  SequenceNumber OPTIONAL -- omitted means no upper bound--
 * }
 * ```
 *
 * @class
 */
export class NumberRange {
    constructor(
        /**
         * @summary `from_`.
         * @public
         * @readonly
         */
        readonly from_: OPTIONAL<SequenceNumber>,
        /**
         * @summary `to`.
         * @public
         * @readonly
         */
        readonly to: OPTIONAL<SequenceNumber>
    ) {}

    /**
     * @summary Restructures an object into a NumberRange
     * @description
     *
     * This takes an `object` and converts it to a `NumberRange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NumberRange`.
     * @returns {NumberRange}
     */
    public static _from_object(
        _o: { [_K in keyof NumberRange]: NumberRange[_K] }
    ): NumberRange {
        return new NumberRange(_o.from_, _o.to);
    }
}
/* END_OF_SYMBOL_DEFINITION NumberRange */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NumberRange */
/**
 * @summary The Leading Root Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NumberRange: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'from',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'to',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NumberRange */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NumberRange */
/**
 * @summary The Trailing Root Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NumberRange: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NumberRange */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NumberRange */
/**
 * @summary The Extension Addition Component Types of NumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NumberRange: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NumberRange */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberRange */
let _cached_decoder_for_NumberRange: $.ASN1Decoder<NumberRange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberRange */

/* START_OF_SYMBOL_DEFINITION _decode_NumberRange */
/**
 * @summary Decodes an ASN.1 element into a(n) NumberRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumberRange} The decoded data structure.
 */
export function _decode_NumberRange(el: _Element) {
    if (!_cached_decoder_for_NumberRange) {
        _cached_decoder_for_NumberRange = function (el: _Element): NumberRange {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let from_: OPTIONAL<SequenceNumber>;
            let to: OPTIONAL<SequenceNumber>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                from: (_el: _Element): void => {
                    from_ = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
                to: (_el: _Element): void => {
                    to = $._decode_explicit<SequenceNumber>(
                        () => _decode_SequenceNumber
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NumberRange,
                _extension_additions_list_spec_for_NumberRange,
                _root_component_type_list_2_spec_for_NumberRange,
                undefined
            );
            return new NumberRange /* SEQUENCE_CONSTRUCTOR_CALL */(from_, to);
        };
    }
    return _cached_decoder_for_NumberRange(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NumberRange */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberRange */
let _cached_encoder_for_NumberRange: $.ASN1Encoder<NumberRange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberRange */

/* START_OF_SYMBOL_DEFINITION _encode_NumberRange */
/**
 * @summary Encodes a(n) NumberRange into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberRange, encoded as an ASN.1 Element.
 */
export function _encode_NumberRange(
    value: NumberRange,
    elGetter: $.ASN1Encoder<NumberRange>
) {
    if (!_cached_encoder_for_NumberRange) {
        _cached_encoder_for_NumberRange = function (
            value: NumberRange,
            elGetter: $.ASN1Encoder<NumberRange>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.from_ === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SequenceNumber,
                                  $.BER
                              )(value.from_, $.BER),
                        /* IF_ABSENT  */ value.to === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_SequenceNumber,
                                  $.BER
                              )(value.to, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NumberRange(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NumberRange */

/* eslint-enable */
