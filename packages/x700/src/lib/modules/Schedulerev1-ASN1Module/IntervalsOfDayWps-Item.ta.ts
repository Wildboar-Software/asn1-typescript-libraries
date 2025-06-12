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
    Time24Wps,
    _decode_Time24Wps,
    _encode_Time24Wps,
} from '../Schedulerev1-ASN1Module/Time24Wps.ta.js';
export {
    Time24Wps,
    _decode_Time24Wps,
    _encode_Time24Wps,
} from '../Schedulerev1-ASN1Module/Time24Wps.ta.js';

/* START_OF_SYMBOL_DEFINITION IntervalsOfDayWps_Item */
/**
 * @summary IntervalsOfDayWps_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntervalsOfDayWps-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class IntervalsOfDayWps_Item {
    constructor(
        /**
         * @summary `intervalStart`.
         * @public
         * @readonly
         */
        readonly intervalStart: Time24Wps,
        /**
         * @summary `intervalEnd`.
         * @public
         * @readonly
         */
        readonly intervalEnd: Time24Wps
    ) {}

    /**
     * @summary Restructures an object into a IntervalsOfDayWps_Item
     * @description
     *
     * This takes an `object` and converts it to a `IntervalsOfDayWps_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntervalsOfDayWps_Item`.
     * @returns {IntervalsOfDayWps_Item}
     */
    public static _from_object(
        _o: { [_K in keyof IntervalsOfDayWps_Item]: IntervalsOfDayWps_Item[_K] }
    ): IntervalsOfDayWps_Item {
        return new IntervalsOfDayWps_Item(_o.intervalStart, _o.intervalEnd);
    }
}
/* END_OF_SYMBOL_DEFINITION IntervalsOfDayWps_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IntervalsOfDayWps_Item */
/**
 * @summary The Leading Root Component Types of IntervalsOfDayWps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IntervalsOfDayWps_Item: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IntervalsOfDayWps_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IntervalsOfDayWps_Item */
/**
 * @summary The Trailing Root Component Types of IntervalsOfDayWps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IntervalsOfDayWps_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IntervalsOfDayWps_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IntervalsOfDayWps_Item */
/**
 * @summary The Extension Addition Component Types of IntervalsOfDayWps_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IntervalsOfDayWps_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IntervalsOfDayWps_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IntervalsOfDayWps_Item */
let _cached_decoder_for_IntervalsOfDayWps_Item: $.ASN1Decoder<IntervalsOfDayWps_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IntervalsOfDayWps_Item */

/* START_OF_SYMBOL_DEFINITION _decode_IntervalsOfDayWps_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) IntervalsOfDayWps_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntervalsOfDayWps_Item} The decoded data structure.
 */
export function _decode_IntervalsOfDayWps_Item(el: _Element) {
    if (!_cached_decoder_for_IntervalsOfDayWps_Item) {
        _cached_decoder_for_IntervalsOfDayWps_Item = function (
            el: _Element
        ): IntervalsOfDayWps_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'IntervalsOfDayWps-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'intervalStart';
            sequence[1].name = 'intervalEnd';
            let intervalStart!: Time24Wps;
            let intervalEnd!: Time24Wps;
            intervalStart = _decode_Time24Wps(sequence[0]);
            intervalEnd = _decode_Time24Wps(sequence[1]);
            return new IntervalsOfDayWps_Item(intervalStart, intervalEnd);
        };
    }
    return _cached_decoder_for_IntervalsOfDayWps_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IntervalsOfDayWps_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IntervalsOfDayWps_Item */
let _cached_encoder_for_IntervalsOfDayWps_Item: $.ASN1Encoder<IntervalsOfDayWps_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IntervalsOfDayWps_Item */

/* START_OF_SYMBOL_DEFINITION _encode_IntervalsOfDayWps_Item */
/**
 * @summary Encodes a(n) IntervalsOfDayWps_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntervalsOfDayWps_Item, encoded as an ASN.1 Element.
 */
export function _encode_IntervalsOfDayWps_Item(
    value: IntervalsOfDayWps_Item,
    elGetter: $.ASN1Encoder<IntervalsOfDayWps_Item>
) {
    if (!_cached_encoder_for_IntervalsOfDayWps_Item) {
        _cached_encoder_for_IntervalsOfDayWps_Item = function (
            value: IntervalsOfDayWps_Item,
            elGetter: $.ASN1Encoder<IntervalsOfDayWps_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Time24Wps(
                            value.intervalStart,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Time24Wps(
                            value.intervalEnd,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IntervalsOfDayWps_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IntervalsOfDayWps_Item */

/* eslint-enable */
