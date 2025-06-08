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
import {
    WeekDay,
    _enum_for_WeekDay,
    WeekDay_sunday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sunday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_monday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    monday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_tuesday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    tuesday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_wednesday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    wednesday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_thursday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    thursday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_friday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    friday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_saturday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    saturday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_WeekDay,
    _encode_WeekDay,
} from '../Schedulerev1-ASN1Module/WeekDay.ta';
export {
    WeekDay,
    _enum_for_WeekDay,
    WeekDay_sunday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sunday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_monday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    monday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_tuesday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    tuesday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_wednesday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    wednesday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_thursday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    thursday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_friday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    friday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_saturday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    saturday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_WeekDay,
    _encode_WeekDay,
} from '../Schedulerev1-ASN1Module/WeekDay.ta';
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
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta';
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
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta';

/* START_OF_SYMBOL_DEFINITION WeekDayTranslationList_Item */
/**
 * @summary WeekDayTranslationList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WeekDayTranslationList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class WeekDayTranslationList_Item {
    constructor(
        /**
         * @summary `weekDay`.
         * @public
         * @readonly
         */
        readonly weekDay: WeekDay,
        /**
         * @summary `typeOfDay`.
         * @public
         * @readonly
         */
        readonly typeOfDay: TypeOfDay
    ) {}

    /**
     * @summary Restructures an object into a WeekDayTranslationList_Item
     * @description
     *
     * This takes an `object` and converts it to a `WeekDayTranslationList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WeekDayTranslationList_Item`.
     * @returns {WeekDayTranslationList_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof WeekDayTranslationList_Item]: WeekDayTranslationList_Item[_K];
        }
    ): WeekDayTranslationList_Item {
        return new WeekDayTranslationList_Item(_o.weekDay, _o.typeOfDay);
    }

    /**
     * @summary The enum used as the type of the component `weekDay`
     * @public
     * @static
     */

    public static _enum_for_weekDay = _enum_for_WeekDay;
}
/* END_OF_SYMBOL_DEFINITION WeekDayTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WeekDayTranslationList_Item */
/**
 * @summary The Leading Root Component Types of WeekDayTranslationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WeekDayTranslationList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'weekDay',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WeekDayTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WeekDayTranslationList_Item */
/**
 * @summary The Trailing Root Component Types of WeekDayTranslationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WeekDayTranslationList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WeekDayTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WeekDayTranslationList_Item */
/**
 * @summary The Extension Addition Component Types of WeekDayTranslationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WeekDayTranslationList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WeekDayTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekDayTranslationList_Item */
let _cached_decoder_for_WeekDayTranslationList_Item: $.ASN1Decoder<WeekDayTranslationList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekDayTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _decode_WeekDayTranslationList_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) WeekDayTranslationList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekDayTranslationList_Item} The decoded data structure.
 */
export function _decode_WeekDayTranslationList_Item(el: _Element) {
    if (!_cached_decoder_for_WeekDayTranslationList_Item) {
        _cached_decoder_for_WeekDayTranslationList_Item = function (
            el: _Element
        ): WeekDayTranslationList_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'WeekDayTranslationList-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'weekDay';
            sequence[1].name = 'typeOfDay';
            let weekDay!: WeekDay;
            let typeOfDay!: TypeOfDay;
            weekDay = $._decode_implicit<WeekDay>(() => _decode_WeekDay)(
                sequence[0]
            );
            typeOfDay = $._decode_implicit<TypeOfDay>(() => _decode_TypeOfDay)(
                sequence[1]
            );
            return new WeekDayTranslationList_Item(weekDay, typeOfDay);
        };
    }
    return _cached_decoder_for_WeekDayTranslationList_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WeekDayTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekDayTranslationList_Item */
let _cached_encoder_for_WeekDayTranslationList_Item: $.ASN1Encoder<WeekDayTranslationList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekDayTranslationList_Item */

/* START_OF_SYMBOL_DEFINITION _encode_WeekDayTranslationList_Item */
/**
 * @summary Encodes a(n) WeekDayTranslationList_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekDayTranslationList_Item, encoded as an ASN.1 Element.
 */
export function _encode_WeekDayTranslationList_Item(
    value: WeekDayTranslationList_Item,
    elGetter: $.ASN1Encoder<WeekDayTranslationList_Item>
) {
    if (!_cached_encoder_for_WeekDayTranslationList_Item) {
        _cached_encoder_for_WeekDayTranslationList_Item = function (
            value: WeekDayTranslationList_Item,
            elGetter: $.ASN1Encoder<WeekDayTranslationList_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_WeekDay,
                            $.BER
                        )(value.weekDay, $.BER),
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
    return _cached_encoder_for_WeekDayTranslationList_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WeekDayTranslationList_Item */

/* eslint-enable */
