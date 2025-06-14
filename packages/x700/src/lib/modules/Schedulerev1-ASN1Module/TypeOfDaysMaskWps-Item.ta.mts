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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    TypeOfDay,
    _decode_TypeOfDay,
    _encode_TypeOfDay,
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta.mjs';
import {
    TimesOfDayWps,
    _decode_TimesOfDayWps,
    _encode_TimesOfDayWps,
} from '../Schedulerev1-ASN1Module/TimesOfDayWps.ta.mjs';
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
            value: TypeOfDaysMaskWps_Item        ): _Element {
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
