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
    Date,
    _decode_Date,
    _encode_Date,
} from '../Schedulerev1-ASN1Module/Date.ta.mjs';
export {
    Date,
    _decode_Date,
    _encode_Date,
} from '../Schedulerev1-ASN1Module/Date.ta.mjs';
import {
    TypeOfDay,
    TypeOfDay_workday /* IMPORTED_LONG_NAMED_INTEGER */,
    workday /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_weekend /* IMPORTED_LONG_NAMED_INTEGER */,
    weekend /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay1 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay2 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay3 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay4 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay5 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay5 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay6 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay6 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay7 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay7 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay8 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay8 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay9 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay9 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay10 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay10 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay11 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay11 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay12 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay12 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay13 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay13 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay14 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay14 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay15 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay15 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay16 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay16 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TypeOfDay,
    _encode_TypeOfDay,
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta.mjs';
export {
    TypeOfDay,
    TypeOfDay_workday /* IMPORTED_LONG_NAMED_INTEGER */,
    workday /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_weekend /* IMPORTED_LONG_NAMED_INTEGER */,
    weekend /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay1 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay2 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay3 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay4 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay5 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay5 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay6 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay6 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay7 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay7 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay8 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay8 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay9 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay9 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay10 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay10 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay11 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay11 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay12 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay12 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay13 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay13 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay14 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay14 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay15 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay15 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay16 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay16 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TypeOfDay,
    _encode_TypeOfDay,
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DateTranslationList_Item */
/**
 * @summary DateTranslationList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DateTranslationList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class DateTranslationList_Item {
    constructor(
        /**
         * @summary `date`.
         * @public
         * @readonly
         */
        readonly date: Date,
        /**
         * @summary `typeOfDay`.
         * @public
         * @readonly
         */
        readonly typeOfDay: TypeOfDay
    ) {}

    /**
     * @summary Restructures an object into a DateTranslationList_Item
     * @description
     *
     * This takes an `object` and converts it to a `DateTranslationList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DateTranslationList_Item`.
     * @returns {DateTranslationList_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof DateTranslationList_Item]: DateTranslationList_Item[_K];
        }
    ): DateTranslationList_Item {
        return new DateTranslationList_Item(_o.date, _o.typeOfDay);
    }
}
/* END_OF_SYMBOL_DEFINITION DateTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DateTranslationList_Item */
/**
 * @summary The Leading Root Component Types of DateTranslationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DateTranslationList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'date',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'typeOfDay',
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DateTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DateTranslationList_Item */
/**
 * @summary The Trailing Root Component Types of DateTranslationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DateTranslationList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DateTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DateTranslationList_Item */
/**
 * @summary The Extension Addition Component Types of DateTranslationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DateTranslationList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DateTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTranslationList_Item */
let _cached_decoder_for_DateTranslationList_Item: $.ASN1Decoder<DateTranslationList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DateTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _decode_DateTranslationList_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) DateTranslationList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DateTranslationList_Item} The decoded data structure.
 */
export function _decode_DateTranslationList_Item(el: _Element) {
    if (!_cached_decoder_for_DateTranslationList_Item) {
        _cached_decoder_for_DateTranslationList_Item = function (
            el: _Element
        ): DateTranslationList_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'DateTranslationList-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'date';
            sequence[1].name = 'typeOfDay';
            let date!: Date;
            let typeOfDay!: TypeOfDay;
            date = $._decode_implicit<Date>(() => _decode_Date)(sequence[0]);
            typeOfDay = $._decode_implicit<TypeOfDay>(() => _decode_TypeOfDay)(
                sequence[1]
            );
            return new DateTranslationList_Item(date, typeOfDay);
        };
    }
    return _cached_decoder_for_DateTranslationList_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DateTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTranslationList_Item */
let _cached_encoder_for_DateTranslationList_Item: $.ASN1Encoder<DateTranslationList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DateTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _encode_DateTranslationList_Item */
/**
 * @summary Encodes a(n) DateTranslationList_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DateTranslationList_Item, encoded as an ASN.1 Element.
 */
export function _encode_DateTranslationList_Item(
    value: DateTranslationList_Item,
    elGetter: $.ASN1Encoder<DateTranslationList_Item>
) {
    if (!_cached_encoder_for_DateTranslationList_Item) {
        _cached_encoder_for_DateTranslationList_Item = function (
            value: DateTranslationList_Item,
            elGetter: $.ASN1Encoder<DateTranslationList_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_Date,
                            $.BER
                        )(value.date, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_TypeOfDay,
                            $.BER
                        )(value.typeOfDay, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DateTranslationList_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DateTranslationList_Item */

/* eslint-enable */
