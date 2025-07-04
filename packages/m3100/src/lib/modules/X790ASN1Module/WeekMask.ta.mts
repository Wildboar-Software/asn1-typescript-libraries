/* eslint-disable */
import {
    OPTIONAL,
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
    WeekMask_daysOfWeek,
    _decode_WeekMask_daysOfWeek,
    _encode_WeekMask_daysOfWeek,
} from '../X790ASN1Module/WeekMask-daysOfWeek.ta.mjs';
import {
    WeekMask_intervalsOfDay_Item,
    _decode_WeekMask_intervalsOfDay_Item,
    _encode_WeekMask_intervalsOfDay_Item,
} from '../X790ASN1Module/WeekMask-intervalsOfDay-Item.ta.mjs';
import { Time24 } from '@wildboar/attribute-asn1module';


/**
 * @summary WeekMask
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WeekMask ::= SEQUENCE {
 *   daysOfWeek
 *     BIT STRING {sunday(0), monday(1), tuesday(2), wednesday(3), thursday(4),
 *                 friday(5), saturday(6)} DEFAULT '1111111'B,
 *   intervalsOfDay
 *     SET OF SEQUENCE {intervalStart  Time24,
 *                      intervalEnd    Time24}
 *       -- DEFAULT {(0,0),(23,59)}
 *         DEFAULT
 *         {{intervalStart {hour 0, minute 0}, -- !!! replace "hoyr" by "hour" --
 *           intervalEnd {hour 23, minute 59}}},
 *   ...
 * }
 * ```
 *
 */
export class WeekMask {
    constructor(
        /**
         * @summary `daysOfWeek`.
         * @public
         * @readonly
         */
        readonly daysOfWeek: OPTIONAL<WeekMask_daysOfWeek>,
        /**
         * @summary `intervalsOfDay`.
         * @public
         * @readonly
         */
        readonly intervalsOfDay: OPTIONAL<WeekMask_intervalsOfDay_Item[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a WeekMask
     * @description
     *
     * This takes an `object` and converts it to a `WeekMask`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WeekMask`.
     * @returns {WeekMask}
     */
    public static _from_object(
        _o: { [_K in keyof WeekMask]: WeekMask[_K] }
    ): WeekMask {
        return new WeekMask(
            _o.daysOfWeek,
            _o.intervalsOfDay,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `daysOfWeek`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_daysOfWeek() {
        return new Uint8ClampedArray([1, 1, 1, 1, 1, 1, 1]);
    }
    /**
     * @summary Getter that returns the default value for `intervalsOfDay`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_intervalsOfDay(): WeekMask_intervalsOfDay_Item[] {
        return [
            new WeekMask_intervalsOfDay_Item(
                new Time24(0, 0),
                new Time24(23, 59),
            ),
        ];
    }
}


/**
 * @summary The Leading Root Component Types of WeekMask
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WeekMask: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'daysOfWeek',
        true,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        'intervalsOfDay',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of WeekMask
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WeekMask: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of WeekMask
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WeekMask: $.ComponentSpec[] = [];


let _cached_decoder_for_WeekMask: $.ASN1Decoder<WeekMask> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) WeekMask
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekMask} The decoded data structure.
 */
export function _decode_WeekMask(el: _Element): WeekMask {
    if (!_cached_decoder_for_WeekMask) {
        _cached_decoder_for_WeekMask = function (el: _Element): WeekMask {
            let daysOfWeek: OPTIONAL<WeekMask_daysOfWeek> =
                WeekMask._default_value_for_daysOfWeek;
            let intervalsOfDay: OPTIONAL<WeekMask_intervalsOfDay_Item[]> =
                WeekMask._default_value_for_intervalsOfDay;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                daysOfWeek: (_el: _Element): void => {
                    daysOfWeek = _decode_WeekMask_daysOfWeek(_el);
                },
                intervalsOfDay: (_el: _Element): void => {
                    intervalsOfDay = $._decodeSetOf<WeekMask_intervalsOfDay_Item>(
                        () => _decode_WeekMask_intervalsOfDay_Item
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_WeekMask,
                _extension_additions_list_spec_for_WeekMask,
                _root_component_type_list_2_spec_for_WeekMask,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new WeekMask (
                daysOfWeek,
                intervalsOfDay,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_WeekMask(el);
}


let _cached_encoder_for_WeekMask: $.ASN1Encoder<WeekMask> | null = null;


/**
 * @summary Encodes a(n) WeekMask into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekMask, encoded as an ASN.1 Element.
 */
export function _encode_WeekMask(
    value: WeekMask,
    elGetter: $.ASN1Encoder<WeekMask>
): _Element {
    if (!_cached_encoder_for_WeekMask) {
        _cached_encoder_for_WeekMask = function (
            value: WeekMask        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.daysOfWeek === undefined ||
                            $.deepEq(
                                value.daysOfWeek,
                                WeekMask._default_value_for_daysOfWeek
                            )
                                ? undefined
                                : _encode_WeekMask_daysOfWeek(
                                      value.daysOfWeek,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.intervalsOfDay ===
                                undefined ||
                            $.deepEq(
                                value.intervalsOfDay,
                                WeekMask._default_value_for_intervalsOfDay
                            )
                                ? undefined
                                : $._encodeSetOf<WeekMask_intervalsOfDay_Item>(
                                      () =>
                                          _encode_WeekMask_intervalsOfDay_Item,
                                      $.BER
                                  )(value.intervalsOfDay, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_WeekMask(value, elGetter);
}


/* eslint-enable */
