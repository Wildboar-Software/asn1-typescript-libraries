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
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION DaysOfMonth */
/**
 * @summary DaysOfMonth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DaysOfMonth ::= SEQUENCE {
 *   daysFromFirst  [0]  BIT STRING(SIZE (31)),
 *   daysFromLast   [1]  BIT STRING(SIZE (31))
 * }
 * ```
 *
 * @class
 */
export class DaysOfMonth {
    constructor(
        /**
         * @summary `daysFromFirst`.
         * @public
         * @readonly
         */
        readonly daysFromFirst: BIT_STRING,
        /**
         * @summary `daysFromLast`.
         * @public
         * @readonly
         */
        readonly daysFromLast: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a DaysOfMonth
     * @description
     *
     * This takes an `object` and converts it to a `DaysOfMonth`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DaysOfMonth`.
     * @returns {DaysOfMonth}
     */
    public static _from_object(
        _o: { [_K in keyof DaysOfMonth]: DaysOfMonth[_K] }
    ): DaysOfMonth {
        return new DaysOfMonth(_o.daysFromFirst, _o.daysFromLast);
    }
}
/* END_OF_SYMBOL_DEFINITION DaysOfMonth */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DaysOfMonth */
/**
 * @summary The Leading Root Component Types of DaysOfMonth
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DaysOfMonth: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'daysFromFirst',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'daysFromLast',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DaysOfMonth */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DaysOfMonth */
/**
 * @summary The Trailing Root Component Types of DaysOfMonth
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DaysOfMonth: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DaysOfMonth */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DaysOfMonth */
/**
 * @summary The Extension Addition Component Types of DaysOfMonth
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DaysOfMonth: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DaysOfMonth */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DaysOfMonth */
let _cached_decoder_for_DaysOfMonth: $.ASN1Decoder<DaysOfMonth> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DaysOfMonth */

/* START_OF_SYMBOL_DEFINITION _decode_DaysOfMonth */
/**
 * @summary Decodes an ASN.1 element into a(n) DaysOfMonth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DaysOfMonth} The decoded data structure.
 */
export function _decode_DaysOfMonth(el: _Element) {
    if (!_cached_decoder_for_DaysOfMonth) {
        _cached_decoder_for_DaysOfMonth = function (el: _Element): DaysOfMonth {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'DaysOfMonth contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'daysFromFirst';
            sequence[1].name = 'daysFromLast';
            let daysFromFirst!: BIT_STRING;
            let daysFromLast!: BIT_STRING;
            daysFromFirst = $._decode_implicit<BIT_STRING>(
                () => $._decodeBitString
            )(sequence[0]);
            daysFromLast = $._decode_implicit<BIT_STRING>(
                () => $._decodeBitString
            )(sequence[1]);
            return new DaysOfMonth(daysFromFirst, daysFromLast);
        };
    }
    return _cached_decoder_for_DaysOfMonth(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DaysOfMonth */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DaysOfMonth */
let _cached_encoder_for_DaysOfMonth: $.ASN1Encoder<DaysOfMonth> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DaysOfMonth */

/* START_OF_SYMBOL_DEFINITION _encode_DaysOfMonth */
/**
 * @summary Encodes a(n) DaysOfMonth into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DaysOfMonth, encoded as an ASN.1 Element.
 */
export function _encode_DaysOfMonth(
    value: DaysOfMonth,
    elGetter: $.ASN1Encoder<DaysOfMonth>
) {
    if (!_cached_encoder_for_DaysOfMonth) {
        _cached_encoder_for_DaysOfMonth = function (
            value: DaysOfMonth,
            elGetter: $.ASN1Encoder<DaysOfMonth>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeBitString,
                            $.BER
                        )(value.daysFromFirst, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => $._encodeBitString,
                            $.BER
                        )(value.daysFromLast, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DaysOfMonth(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DaysOfMonth */

/* eslint-enable */
