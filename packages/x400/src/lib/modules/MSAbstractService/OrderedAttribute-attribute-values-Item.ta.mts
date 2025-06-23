/* eslint-disable */
import {
    OPTIONAL,
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
/**
 * @summary OrderedAttribute_attribute_values_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrderedAttribute-attribute-values-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OrderedAttribute_attribute_values_Item {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: OPTIONAL<_Element>,
        /**
         * @summary `position`.
         * @public
         * @readonly
         */
        readonly position: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a OrderedAttribute_attribute_values_Item
     * @description
     *
     * This takes an `object` and converts it to a `OrderedAttribute_attribute_values_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OrderedAttribute_attribute_values_Item`.
     * @returns {OrderedAttribute_attribute_values_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof OrderedAttribute_attribute_values_Item]: OrderedAttribute_attribute_values_Item[_K];
        }
    ): OrderedAttribute_attribute_values_Item {
        return new OrderedAttribute_attribute_values_Item(
            _o.value,
            _o.position
        );
    }
}

/**
 * @summary The Leading Root Component Types of OrderedAttribute_attribute_values_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OrderedAttribute_attribute_values_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'value',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'position',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of OrderedAttribute_attribute_values_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OrderedAttribute_attribute_values_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of OrderedAttribute_attribute_values_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OrderedAttribute_attribute_values_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_OrderedAttribute_attribute_values_Item: $.ASN1Decoder<OrderedAttribute_attribute_values_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OrderedAttribute_attribute_values_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrderedAttribute_attribute_values_Item} The decoded data structure.
 */
export function _decode_OrderedAttribute_attribute_values_Item(el: _Element) {
    if (!_cached_decoder_for_OrderedAttribute_attribute_values_Item) {
        _cached_decoder_for_OrderedAttribute_attribute_values_Item = function (
            el: _Element
        ): OrderedAttribute_attribute_values_Item {
            let value: OPTIONAL<_Element>;
            let position: OPTIONAL<INTEGER>;
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
                position: (_el: _Element): void => {
                    position = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OrderedAttribute_attribute_values_Item,
                _extension_additions_list_spec_for_OrderedAttribute_attribute_values_Item,
                _root_component_type_list_2_spec_for_OrderedAttribute_attribute_values_Item,
                undefined
            );
            return new OrderedAttribute_attribute_values_Item (
                value,
                position
            );
        };
    }
    return _cached_decoder_for_OrderedAttribute_attribute_values_Item(el);
}

let _cached_encoder_for_OrderedAttribute_attribute_values_Item: $.ASN1Encoder<OrderedAttribute_attribute_values_Item> | null = null;

/**
 * @summary Encodes a(n) OrderedAttribute_attribute_values_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrderedAttribute_attribute_values_Item, encoded as an ASN.1 Element.
 */
export function _encode_OrderedAttribute_attribute_values_Item(
    value: OrderedAttribute_attribute_values_Item,
    elGetter: $.ASN1Encoder<OrderedAttribute_attribute_values_Item>
) {
    if (!_cached_encoder_for_OrderedAttribute_attribute_values_Item) {
        _cached_encoder_for_OrderedAttribute_attribute_values_Item = function (
            value: OrderedAttribute_attribute_values_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.value === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.value, $.BER),
                        /* IF_ABSENT  */ value.position === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.position, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OrderedAttribute_attribute_values_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
