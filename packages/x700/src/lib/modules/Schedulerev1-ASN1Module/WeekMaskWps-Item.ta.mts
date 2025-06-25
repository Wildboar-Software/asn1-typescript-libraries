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
    DaysOfWeek,
    _decode_DaysOfWeek,
    _encode_DaysOfWeek,
} from '../Schedulerev1-ASN1Module/DaysOfWeek.ta.mjs';
import {
    TimesOfDayWps,
    _decode_TimesOfDayWps,
    _encode_TimesOfDayWps,
} from '../Schedulerev1-ASN1Module/TimesOfDayWps.ta.mjs';
/**
 * @summary WeekMaskWps_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WeekMaskWps-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class WeekMaskWps_Item {
    constructor(
        /**
         * @summary `daysOfWeek`.
         * @public
         * @readonly
         */
        readonly daysOfWeek: DaysOfWeek,
        /**
         * @summary `timesOfDayWps`.
         * @public
         * @readonly
         */
        readonly timesOfDayWps: TimesOfDayWps
    ) {}

    /**
     * @summary Restructures an object into a WeekMaskWps_Item
     * @description
     *
     * This takes an `object` and converts it to a `WeekMaskWps_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WeekMaskWps_Item`.
     * @returns {WeekMaskWps_Item}
     */
    public static _from_object(
        _o: { [_K in keyof WeekMaskWps_Item]: WeekMaskWps_Item[_K] }
    ): WeekMaskWps_Item {
        return new WeekMaskWps_Item(_o.daysOfWeek, _o.timesOfDayWps);
    }
}

/**
 * @summary The Leading Root Component Types of WeekMaskWps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WeekMaskWps_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'daysOfWeek',
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        'timesOfDayWps',
        false,
        $.hasAnyTag
    ),
];

/**
 * @summary The Trailing Root Component Types of WeekMaskWps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WeekMaskWps_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of WeekMaskWps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WeekMaskWps_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_WeekMaskWps_Item: $.ASN1Decoder<WeekMaskWps_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WeekMaskWps_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekMaskWps_Item} The decoded data structure.
 */
export function _decode_WeekMaskWps_Item(el: _Element): WeekMaskWps_Item {
    if (!_cached_decoder_for_WeekMaskWps_Item) {
        _cached_decoder_for_WeekMaskWps_Item = function (
            el: _Element
        ): WeekMaskWps_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'WeekMaskWps-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'daysOfWeek';
            sequence[1].name = 'timesOfDayWps';
            let daysOfWeek!: DaysOfWeek;
            let timesOfDayWps!: TimesOfDayWps;
            daysOfWeek = _decode_DaysOfWeek(sequence[0]);
            timesOfDayWps = _decode_TimesOfDayWps(sequence[1]);
            return new WeekMaskWps_Item(daysOfWeek, timesOfDayWps);
        };
    }
    return _cached_decoder_for_WeekMaskWps_Item(el);
}

let _cached_encoder_for_WeekMaskWps_Item: $.ASN1Encoder<WeekMaskWps_Item> | null = null;

/**
 * @summary Encodes a(n) WeekMaskWps_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekMaskWps_Item, encoded as an ASN.1 Element.
 */
export function _encode_WeekMaskWps_Item(
    value: WeekMaskWps_Item,
    elGetter: $.ASN1Encoder<WeekMaskWps_Item>
): _Element {
    if (!_cached_encoder_for_WeekMaskWps_Item) {
        _cached_encoder_for_WeekMaskWps_Item = function (
            value: WeekMaskWps_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DaysOfWeek(
                            value.daysOfWeek,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TimesOfDayWps(
                            value.timesOfDayWps,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_WeekMaskWps_Item(value, elGetter);
}


/* eslint-enable */
