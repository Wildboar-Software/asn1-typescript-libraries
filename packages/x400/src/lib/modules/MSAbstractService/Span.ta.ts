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

/* START_OF_SYMBOL_DEFINITION Span */
/**
 * @summary Span
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Span ::= SEQUENCE {lowest   [0]  SequenceNumber,
 *                    highest  [1]  SequenceNumber
 * }
 * ```
 *
 * @class
 */
export class Span {
    constructor(
        /**
         * @summary `lowest`.
         * @public
         * @readonly
         */
        readonly lowest: SequenceNumber,
        /**
         * @summary `highest`.
         * @public
         * @readonly
         */
        readonly highest: SequenceNumber
    ) {}

    /**
     * @summary Restructures an object into a Span
     * @description
     *
     * This takes an `object` and converts it to a `Span`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Span`.
     * @returns {Span}
     */
    public static _from_object(_o: { [_K in keyof Span]: Span[_K] }): Span {
        return new Span(_o.lowest, _o.highest);
    }
}
/* END_OF_SYMBOL_DEFINITION Span */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Span */
/**
 * @summary The Leading Root Component Types of Span
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Span: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'lowest',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'highest',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Span */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Span */
/**
 * @summary The Trailing Root Component Types of Span
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Span: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Span */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Span */
/**
 * @summary The Extension Addition Component Types of Span
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Span: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Span */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Span */
let _cached_decoder_for_Span: $.ASN1Decoder<Span> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Span */

/* START_OF_SYMBOL_DEFINITION _decode_Span */
/**
 * @summary Decodes an ASN.1 element into a(n) Span
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Span} The decoded data structure.
 */
export function _decode_Span(el: _Element) {
    if (!_cached_decoder_for_Span) {
        _cached_decoder_for_Span = function (el: _Element): Span {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'Span contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'lowest';
            sequence[1].name = 'highest';
            let lowest!: SequenceNumber;
            let highest!: SequenceNumber;
            lowest = $._decode_explicit<SequenceNumber>(
                () => _decode_SequenceNumber
            )(sequence[0]);
            highest = $._decode_explicit<SequenceNumber>(
                () => _decode_SequenceNumber
            )(sequence[1]);
            return new Span(lowest, highest);
        };
    }
    return _cached_decoder_for_Span(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Span */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Span */
let _cached_encoder_for_Span: $.ASN1Encoder<Span> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Span */

/* START_OF_SYMBOL_DEFINITION _encode_Span */
/**
 * @summary Encodes a(n) Span into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Span, encoded as an ASN.1 Element.
 */
export function _encode_Span(value: Span, elGetter: $.ASN1Encoder<Span>) {
    if (!_cached_encoder_for_Span) {
        _cached_encoder_for_Span = function (
            value: Span,
            elGetter: $.ASN1Encoder<Span>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_SequenceNumber,
                            $.BER
                        )(value.lowest, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_SequenceNumber,
                            $.BER
                        )(value.highest, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Span(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Span */

/* eslint-enable */
