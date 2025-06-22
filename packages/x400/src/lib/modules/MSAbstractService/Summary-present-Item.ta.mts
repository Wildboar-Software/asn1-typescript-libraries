/* eslint-disable */
import {
    INTEGER,
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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";

/**
 * @summary Summary_present_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Summary-present-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Summary_present_Item {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element,
        /**
         * @summary `count`.
         * @public
         * @readonly
         */
        readonly count: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a Summary_present_Item
     * @description
     *
     * This takes an `object` and converts it to a `Summary_present_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Summary_present_Item`.
     * @returns {Summary_present_Item}
     */
    public static _from_object(
        _o: { [_K in keyof Summary_present_Item]: Summary_present_Item[_K] }
    ): Summary_present_Item {
        return new Summary_present_Item(_o.type_, _o.value, _o.count);
    }
}

/**
 * @summary The Leading Root Component Types of Summary_present_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Summary_present_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec('value', false, $.hasAnyTag),
    new $.ComponentSpec(
        'count',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of Summary_present_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Summary_present_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Summary_present_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Summary_present_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_Summary_present_Item: $.ASN1Decoder<Summary_present_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Summary_present_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Summary_present_Item} The decoded data structure.
 */
export function _decode_Summary_present_Item(el: _Element) {
    if (!_cached_decoder_for_Summary_present_Item) {
        _cached_decoder_for_Summary_present_Item = function (
            el: _Element
        ): Summary_present_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'Summary-present-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'type';
            sequence[1].name = 'value';
            sequence[2].name = 'count';
            let type_!: AttributeType;
            let value!: _Element;
            let count!: INTEGER;
            type_ = _decode_AttributeType(sequence[0]);
            value = $._decodeAny(sequence[1]);
            count = $._decodeInteger(sequence[2]);
            return new Summary_present_Item(type_, value, count);
        };
    }
    return _cached_decoder_for_Summary_present_Item(el);
}

let _cached_encoder_for_Summary_present_Item: $.ASN1Encoder<Summary_present_Item> | null = null;

/**
 * @summary Encodes a(n) Summary_present_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Summary_present_Item, encoded as an ASN.1 Element.
 */
export function _encode_Summary_present_Item(
    value: Summary_present_Item,
    elGetter: $.ASN1Encoder<Summary_present_Item>
) {
    if (!_cached_encoder_for_Summary_present_Item) {
        _cached_encoder_for_Summary_present_Item = function (
            value: Summary_present_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AttributeType(
                            value.type_,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.value, $.BER),
                        /* REQUIRED   */ $._encodeInteger(value.count, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Summary_present_Item(value, elGetter);
}


/* eslint-enable */
