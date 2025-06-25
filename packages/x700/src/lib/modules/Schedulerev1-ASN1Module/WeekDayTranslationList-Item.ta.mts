/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    WeekDay,
    _enum_for_WeekDay,
    _decode_WeekDay,
    _encode_WeekDay,
} from '../Schedulerev1-ASN1Module/WeekDay.ta.mjs';
import {
    TypeOfDay,
    _decode_TypeOfDay,
    _encode_TypeOfDay,
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta.mjs';

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
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'typeOfDay',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of WeekDayTranslationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WeekDayTranslationList_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of WeekDayTranslationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WeekDayTranslationList_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_WeekDayTranslationList_Item: $.ASN1Decoder<WeekDayTranslationList_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) WeekDayTranslationList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekDayTranslationList_Item} The decoded data structure.
 */
export function _decode_WeekDayTranslationList_Item(el: _Element): WeekDayTranslationList_Item {
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


let _cached_encoder_for_WeekDayTranslationList_Item: $.ASN1Encoder<WeekDayTranslationList_Item> | null = null;


/**
 * @summary Encodes a(n) WeekDayTranslationList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekDayTranslationList_Item, encoded as an ASN.1 Element.
 */
export function _encode_WeekDayTranslationList_Item(
    value: WeekDayTranslationList_Item,
    elGetter: $.ASN1Encoder<WeekDayTranslationList_Item>
): _Element {
    if (!_cached_encoder_for_WeekDayTranslationList_Item) {
        _cached_encoder_for_WeekDayTranslationList_Item = function (
            value: WeekDayTranslationList_Item        ): _Element {
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


/* eslint-enable */
