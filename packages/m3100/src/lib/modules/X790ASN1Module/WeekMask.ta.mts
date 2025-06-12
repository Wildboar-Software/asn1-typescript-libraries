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
    WeekMask_daysOfWeek,
    WeekMask_daysOfWeek_sunday /* IMPORTED_LONG_NAMED_BIT */,
    sunday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_monday /* IMPORTED_LONG_NAMED_BIT */,
    monday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_tuesday /* IMPORTED_LONG_NAMED_BIT */,
    tuesday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_wednesday /* IMPORTED_LONG_NAMED_BIT */,
    wednesday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_thursday /* IMPORTED_LONG_NAMED_BIT */,
    thursday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_friday /* IMPORTED_LONG_NAMED_BIT */,
    friday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_saturday /* IMPORTED_LONG_NAMED_BIT */,
    saturday /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_WeekMask_daysOfWeek,
    _encode_WeekMask_daysOfWeek,
} from '../X790ASN1Module/WeekMask-daysOfWeek.ta.mjs';
export {
    WeekMask_daysOfWeek,
    WeekMask_daysOfWeek_sunday /* IMPORTED_LONG_NAMED_BIT */,
    sunday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_monday /* IMPORTED_LONG_NAMED_BIT */,
    monday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_tuesday /* IMPORTED_LONG_NAMED_BIT */,
    tuesday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_wednesday /* IMPORTED_LONG_NAMED_BIT */,
    wednesday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_thursday /* IMPORTED_LONG_NAMED_BIT */,
    thursday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_friday /* IMPORTED_LONG_NAMED_BIT */,
    friday /* IMPORTED_SHORT_NAMED_BIT */,
    WeekMask_daysOfWeek_saturday /* IMPORTED_LONG_NAMED_BIT */,
    saturday /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_WeekMask_daysOfWeek,
    _encode_WeekMask_daysOfWeek,
} from '../X790ASN1Module/WeekMask-daysOfWeek.ta.mjs';
import {
    WeekMask_intervalsOfDay_Item,
    _decode_WeekMask_intervalsOfDay_Item,
    _encode_WeekMask_intervalsOfDay_Item,
} from '../X790ASN1Module/WeekMask-intervalsOfDay-Item.ta.mjs';
export {
    WeekMask_intervalsOfDay_Item,
    _decode_WeekMask_intervalsOfDay_Item,
    _encode_WeekMask_intervalsOfDay_Item,
} from '../X790ASN1Module/WeekMask-intervalsOfDay-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION WeekMask */
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
 * @class
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
    public static get _default_value_for_intervalsOfDay() {
        return [
            /* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 0 */
        ];
    }
}
/* END_OF_SYMBOL_DEFINITION WeekMask */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WeekMask */
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
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'intervalsOfDay',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_WeekMask */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WeekMask */
/**
 * @summary The Trailing Root Component Types of WeekMask
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WeekMask: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_WeekMask */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WeekMask */
/**
 * @summary The Extension Addition Component Types of WeekMask
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WeekMask: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_WeekMask */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekMask */
let _cached_decoder_for_WeekMask: $.ASN1Decoder<WeekMask> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WeekMask */

/* START_OF_SYMBOL_DEFINITION _decode_WeekMask */
/**
 * @summary Decodes an ASN.1 element into a(n) WeekMask
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WeekMask} The decoded data structure.
 */
export function _decode_WeekMask(el: _Element) {
    if (!_cached_decoder_for_WeekMask) {
        _cached_decoder_for_WeekMask = function (el: _Element): WeekMask {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let daysOfWeek: OPTIONAL<WeekMask_daysOfWeek> =
                WeekMask._default_value_for_daysOfWeek;
            let intervalsOfDay: OPTIONAL<WeekMask_intervalsOfDay_Item[]> =
                WeekMask._default_value_for_intervalsOfDay;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
            /* END_OF_CALLBACKS_MAP */
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
            return new WeekMask /* SEQUENCE_CONSTRUCTOR_CALL */(
                daysOfWeek,
                intervalsOfDay,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_WeekMask(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WeekMask */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekMask */
let _cached_encoder_for_WeekMask: $.ASN1Encoder<WeekMask> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WeekMask */

/* START_OF_SYMBOL_DEFINITION _encode_WeekMask */
/**
 * @summary Encodes a(n) WeekMask into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WeekMask, encoded as an ASN.1 Element.
 */
export function _encode_WeekMask(
    value: WeekMask,
    elGetter: $.ASN1Encoder<WeekMask>
) {
    if (!_cached_encoder_for_WeekMask) {
        _cached_encoder_for_WeekMask = function (
            value: WeekMask,
            elGetter: $.ASN1Encoder<WeekMask>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_WeekMask */

/* eslint-enable */
