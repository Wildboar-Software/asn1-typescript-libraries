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
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta.js';
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
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta.js';
import {
    TimesOfDayWps,
    _decode_TimesOfDayWps,
    _encode_TimesOfDayWps,
} from '../Schedulerev1-ASN1Module/TimesOfDayWps.ta.js';
export {
    TimesOfDayWps,
    _decode_TimesOfDayWps,
    _encode_TimesOfDayWps,
} from '../Schedulerev1-ASN1Module/TimesOfDayWps.ta.js';

/* START_OF_SYMBOL_DEFINITION TypeOfDaysMaskWps_Item */
/**
 * @summary TypeOfDaysMaskWps_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfDaysMaskWps-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class TypeOfDaysMaskWps_Item {
    constructor(
        /**
         * @summary `typeOfDay`.
         * @public
         * @readonly
         */
        readonly typeOfDay: TypeOfDay,
        /**
         * @summary `timesOfDay`.
         * @public
         * @readonly
         */
        readonly timesOfDay: TimesOfDayWps
    ) {}

    /**
     * @summary Restructures an object into a TypeOfDaysMaskWps_Item
     * @description
     *
     * This takes an `object` and converts it to a `TypeOfDaysMaskWps_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TypeOfDaysMaskWps_Item`.
     * @returns {TypeOfDaysMaskWps_Item}
     */
    public static _from_object(
        _o: { [_K in keyof TypeOfDaysMaskWps_Item]: TypeOfDaysMaskWps_Item[_K] }
    ): TypeOfDaysMaskWps_Item {
        return new TypeOfDaysMaskWps_Item(_o.typeOfDay, _o.timesOfDay);
    }
}
/* END_OF_SYMBOL_DEFINITION TypeOfDaysMaskWps_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TypeOfDaysMaskWps_Item */
/**
 * @summary The Leading Root Component Types of TypeOfDaysMaskWps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TypeOfDaysMaskWps_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'typeOfDay',
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec('timesOfDay', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TypeOfDaysMaskWps_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TypeOfDaysMaskWps_Item */
/**
 * @summary The Trailing Root Component Types of TypeOfDaysMaskWps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TypeOfDaysMaskWps_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TypeOfDaysMaskWps_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TypeOfDaysMaskWps_Item */
/**
 * @summary The Extension Addition Component Types of TypeOfDaysMaskWps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TypeOfDaysMaskWps_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TypeOfDaysMaskWps_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfDaysMaskWps_Item */
let _cached_decoder_for_TypeOfDaysMaskWps_Item: $.ASN1Decoder<TypeOfDaysMaskWps_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfDaysMaskWps_Item */

/* START_OF_SYMBOL_DEFINITION _decode_TypeOfDaysMaskWps_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfDaysMaskWps_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TypeOfDaysMaskWps_Item} The decoded data structure.
 */
export function _decode_TypeOfDaysMaskWps_Item(el: _Element) {
    if (!_cached_decoder_for_TypeOfDaysMaskWps_Item) {
        _cached_decoder_for_TypeOfDaysMaskWps_Item = function (
            el: _Element
        ): TypeOfDaysMaskWps_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'TypeOfDaysMaskWps-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'typeOfDay';
            sequence[1].name = 'timesOfDay';
            let typeOfDay!: TypeOfDay;
            let timesOfDay!: TimesOfDayWps;
            typeOfDay = _decode_TypeOfDay(sequence[0]);
            timesOfDay = _decode_TimesOfDayWps(sequence[1]);
            return new TypeOfDaysMaskWps_Item(typeOfDay, timesOfDay);
        };
    }
    return _cached_decoder_for_TypeOfDaysMaskWps_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TypeOfDaysMaskWps_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfDaysMaskWps_Item */
let _cached_encoder_for_TypeOfDaysMaskWps_Item: $.ASN1Encoder<TypeOfDaysMaskWps_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfDaysMaskWps_Item */

/* START_OF_SYMBOL_DEFINITION _encode_TypeOfDaysMaskWps_Item */
/**
 * @summary Encodes a(n) TypeOfDaysMaskWps_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfDaysMaskWps_Item, encoded as an ASN.1 Element.
 */
export function _encode_TypeOfDaysMaskWps_Item(
    value: TypeOfDaysMaskWps_Item,
    elGetter: $.ASN1Encoder<TypeOfDaysMaskWps_Item>
) {
    if (!_cached_encoder_for_TypeOfDaysMaskWps_Item) {
        _cached_encoder_for_TypeOfDaysMaskWps_Item = function (
            value: TypeOfDaysMaskWps_Item,
            elGetter: $.ASN1Encoder<TypeOfDaysMaskWps_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TypeOfDay(
                            value.typeOfDay,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TimesOfDayWps(
                            value.timesOfDay,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TypeOfDaysMaskWps_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TypeOfDaysMaskWps_Item */

/* eslint-enable */
