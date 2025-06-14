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
    Time24,
    _decode_Time24,
    _encode_Time24,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/Time24.ta.mjs';
/* START_OF_SYMBOL_DEFINITION WeekMask_intervalsOfDay_Item */
/**
 * @summary WeekMask_intervalsOfDay_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WeekMask-intervalsOfDay-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class WeekMask_intervalsOfDay_Item {
    constructor(
        /**
         * @summary `intervalStart`.
         * @public
         * @readonly
         */
        readonly intervalStart: Time24,
        /**
         * @summary `intervalEnd`.
         * @public
         * @readonly
         */
        readonly intervalEnd: Time24
    ) {}

    /**
     * @summary Restructures an object into a WeekMask_intervalsOfDay_Item
     * @description
     *
     * This takes an `object` and converts it to a `WeekMask_intervalsOfDay_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WeekMask_intervalsOfDay_Item`.
     * @returns {WeekMask_intervalsOfDay_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof WeekMask_intervalsOfDay_Item]: WeekMask_intervalsOfDay_Item[_K];
        }
    ): WeekMask_intervalsOfDay_Item {
        return new WeekMask_intervalsOfDay_Item(
            _o.intervalStart,
            _o.intervalEnd
        );
    }
}
/* END_OF_SYMBOL_DEFINITION WeekMask_intervalsOfDay_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WeekMask_intervalsOfDay_Item */
/**
 * @summary The Leading Root Component Types of WeekMask_intervalsOfDay_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WeekMask_intervalsOfDay_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'intervalStart',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'intervalEnd',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WeekMask_intervalsOfDay_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WeekMask_intervalsOfDay_Item */
/**
 * @summary The Trailing Root Component Types of WeekMask_intervalsOfDay_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WeekMask_intervalsOfDay_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WeekMask_intervalsOfDay_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WeekMask_intervalsOfDay_Item */
/**
 * @summary The Extension Addition Component Types of WeekMask_intervalsOfDay_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WeekMask_intervalsOfDay_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WeekMask_intervalsOfDay_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekMask_intervalsOfDay_Item */
let _cached_decoder_for_WeekMask_intervalsOfDay_Item: $.ASN1Decoder<WeekMask_intervalsOfDay_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekMask_intervalsOfDay_Item */

/* START_OF_SYMBOL_DEFINITION _decode_WeekMask_intervalsOfDay_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) WeekMask_intervalsOfDay_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekMask_intervalsOfDay_Item} The decoded data structure.
 */
export function _decode_WeekMask_intervalsOfDay_Item(el: _Element) {
    if (!_cached_decoder_for_WeekMask_intervalsOfDay_Item) {
        _cached_decoder_for_WeekMask_intervalsOfDay_Item = function (
            el: _Element
        ): WeekMask_intervalsOfDay_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'WeekMask-intervalsOfDay-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'intervalStart';
            sequence[1].name = 'intervalEnd';
            let intervalStart!: Time24;
            let intervalEnd!: Time24;
            intervalStart = _decode_Time24(sequence[0]);
            intervalEnd = _decode_Time24(sequence[1]);
            return new WeekMask_intervalsOfDay_Item(intervalStart, intervalEnd);
        };
    }
    return _cached_decoder_for_WeekMask_intervalsOfDay_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WeekMask_intervalsOfDay_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekMask_intervalsOfDay_Item */
let _cached_encoder_for_WeekMask_intervalsOfDay_Item: $.ASN1Encoder<WeekMask_intervalsOfDay_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekMask_intervalsOfDay_Item */

/* START_OF_SYMBOL_DEFINITION _encode_WeekMask_intervalsOfDay_Item */
/**
 * @summary Encodes a(n) WeekMask_intervalsOfDay_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekMask_intervalsOfDay_Item, encoded as an ASN.1 Element.
 */
export function _encode_WeekMask_intervalsOfDay_Item(
    value: WeekMask_intervalsOfDay_Item,
    elGetter: $.ASN1Encoder<WeekMask_intervalsOfDay_Item>
) {
    if (!_cached_encoder_for_WeekMask_intervalsOfDay_Item) {
        _cached_encoder_for_WeekMask_intervalsOfDay_Item = function (
            value: WeekMask_intervalsOfDay_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Time24(
                            value.intervalStart,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Time24(
                            value.intervalEnd,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_WeekMask_intervalsOfDay_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WeekMask_intervalsOfDay_Item */

/* eslint-enable */
