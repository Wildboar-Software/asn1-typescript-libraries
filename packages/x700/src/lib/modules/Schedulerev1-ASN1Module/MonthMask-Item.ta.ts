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
    DaysOfMonth,
    _decode_DaysOfMonth,
    _encode_DaysOfMonth,
} from '../Schedulerev1-ASN1Module/DaysOfMonth.ta.js';
export {
    DaysOfMonth,
    _decode_DaysOfMonth,
    _encode_DaysOfMonth,
} from '../Schedulerev1-ASN1Module/DaysOfMonth.ta.js';
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

/* START_OF_SYMBOL_DEFINITION MonthMask_Item */
/**
 * @summary MonthMask_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MonthMask-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class MonthMask_Item {
    constructor(
        /**
         * @summary `daysOfMonth`.
         * @public
         * @readonly
         */
        readonly daysOfMonth: DaysOfMonth,
        /**
         * @summary `timesOfDayWps`.
         * @public
         * @readonly
         */
        readonly timesOfDayWps: TimesOfDayWps
    ) {}

    /**
     * @summary Restructures an object into a MonthMask_Item
     * @description
     *
     * This takes an `object` and converts it to a `MonthMask_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonthMask_Item`.
     * @returns {MonthMask_Item}
     */
    public static _from_object(
        _o: { [_K in keyof MonthMask_Item]: MonthMask_Item[_K] }
    ): MonthMask_Item {
        return new MonthMask_Item(_o.daysOfMonth, _o.timesOfDayWps);
    }
}
/* END_OF_SYMBOL_DEFINITION MonthMask_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MonthMask_Item */
/**
 * @summary The Leading Root Component Types of MonthMask_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MonthMask_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'daysOfMonth',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'timesOfDayWps',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MonthMask_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MonthMask_Item */
/**
 * @summary The Trailing Root Component Types of MonthMask_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MonthMask_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MonthMask_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MonthMask_Item */
/**
 * @summary The Extension Addition Component Types of MonthMask_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MonthMask_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MonthMask_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MonthMask_Item */
let _cached_decoder_for_MonthMask_Item: $.ASN1Decoder<MonthMask_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MonthMask_Item */

/* START_OF_SYMBOL_DEFINITION _decode_MonthMask_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) MonthMask_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MonthMask_Item} The decoded data structure.
 */
export function _decode_MonthMask_Item(el: _Element) {
    if (!_cached_decoder_for_MonthMask_Item) {
        _cached_decoder_for_MonthMask_Item = function (
            el: _Element
        ): MonthMask_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'MonthMask-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'daysOfMonth';
            sequence[1].name = 'timesOfDayWps';
            let daysOfMonth!: DaysOfMonth;
            let timesOfDayWps!: TimesOfDayWps;
            daysOfMonth = _decode_DaysOfMonth(sequence[0]);
            timesOfDayWps = _decode_TimesOfDayWps(sequence[1]);
            return new MonthMask_Item(daysOfMonth, timesOfDayWps);
        };
    }
    return _cached_decoder_for_MonthMask_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MonthMask_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MonthMask_Item */
let _cached_encoder_for_MonthMask_Item: $.ASN1Encoder<MonthMask_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MonthMask_Item */

/* START_OF_SYMBOL_DEFINITION _encode_MonthMask_Item */
/**
 * @summary Encodes a(n) MonthMask_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonthMask_Item, encoded as an ASN.1 Element.
 */
export function _encode_MonthMask_Item(
    value: MonthMask_Item,
    elGetter: $.ASN1Encoder<MonthMask_Item>
) {
    if (!_cached_encoder_for_MonthMask_Item) {
        _cached_encoder_for_MonthMask_Item = function (
            value: MonthMask_Item,
            elGetter: $.ASN1Encoder<MonthMask_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DaysOfMonth(
                            value.daysOfMonth,
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
    return _cached_encoder_for_MonthMask_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MonthMask_Item */

/* eslint-enable */
