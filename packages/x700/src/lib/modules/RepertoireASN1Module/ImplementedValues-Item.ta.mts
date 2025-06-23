/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
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
 * @summary ImplementedValues_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImplementedValues-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ImplementedValues_Item {
    constructor(
        /**
         * @summary `attributeId`.
         * @public
         * @readonly
         */
        readonly attributeId: OBJECT_IDENTIFIER,
        /**
         * @summary `defaultValue`.
         * @public
         * @readonly
         */
        readonly defaultValue: OPTIONAL<_Element>,
        /**
         * @summary `initialValue`.
         * @public
         * @readonly
         */
        readonly initialValue: OPTIONAL<_Element>,
        /**
         * @summary `minValue`.
         * @public
         * @readonly
         */
        readonly minValue: OPTIONAL<_Element>,
        /**
         * @summary `maxValue`.
         * @public
         * @readonly
         */
        readonly maxValue: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a ImplementedValues_Item
     * @description
     *
     * This takes an `object` and converts it to a `ImplementedValues_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ImplementedValues_Item`.
     * @returns {ImplementedValues_Item}
     */
    public static _from_object(
        _o: { [_K in keyof ImplementedValues_Item]: ImplementedValues_Item[_K] }
    ): ImplementedValues_Item {
        return new ImplementedValues_Item(
            _o.attributeId,
            _o.defaultValue,
            _o.initialValue,
            _o.minValue,
            _o.maxValue
        );
    }
}

/**
 * @summary The Leading Root Component Types of ImplementedValues_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ImplementedValues_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'attributeId',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'defaultValue',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'initialValue',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'minValue',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'maxValue',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of ImplementedValues_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ImplementedValues_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ImplementedValues_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ImplementedValues_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_ImplementedValues_Item: $.ASN1Decoder<ImplementedValues_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ImplementedValues_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ImplementedValues_Item} The decoded data structure.
 */
export function _decode_ImplementedValues_Item(el: _Element) {
    if (!_cached_decoder_for_ImplementedValues_Item) {
        _cached_decoder_for_ImplementedValues_Item = function (
            el: _Element
        ): ImplementedValues_Item {
            let attributeId!: OBJECT_IDENTIFIER;
            let defaultValue: OPTIONAL<_Element>;
            let initialValue: OPTIONAL<_Element>;
            let minValue: OPTIONAL<_Element>;
            let maxValue: OPTIONAL<_Element>;
            const callbacks: $.DecodingMap = {
                attributeId: (_el: _Element): void => {
                    attributeId = $._decodeObjectIdentifier(_el);
                },
                defaultValue: (_el: _Element): void => {
                    defaultValue = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                initialValue: (_el: _Element): void => {
                    initialValue = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                minValue: (_el: _Element): void => {
                    minValue = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
                maxValue: (_el: _Element): void => {
                    maxValue = $._decode_explicit<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ImplementedValues_Item,
                _extension_additions_list_spec_for_ImplementedValues_Item,
                _root_component_type_list_2_spec_for_ImplementedValues_Item,
                undefined
            );
            return new ImplementedValues_Item (
                attributeId,
                defaultValue,
                initialValue,
                minValue,
                maxValue
            );
        };
    }
    return _cached_decoder_for_ImplementedValues_Item(el);
}

let _cached_encoder_for_ImplementedValues_Item: $.ASN1Encoder<ImplementedValues_Item> | null = null;

/**
 * @summary Encodes a(n) ImplementedValues_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImplementedValues_Item, encoded as an ASN.1 Element.
 */
export function _encode_ImplementedValues_Item(
    value: ImplementedValues_Item,
    elGetter: $.ASN1Encoder<ImplementedValues_Item>
) {
    if (!_cached_encoder_for_ImplementedValues_Item) {
        _cached_encoder_for_ImplementedValues_Item = function (
            value: ImplementedValues_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.attributeId,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.defaultValue === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.defaultValue, $.BER),
                        /* IF_ABSENT  */ value.initialValue === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.initialValue, $.BER),
                        /* IF_ABSENT  */ value.minValue === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.minValue, $.BER),
                        /* IF_ABSENT  */ value.maxValue === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () => $._encodeAny,
                                  $.BER
                              )(value.maxValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ImplementedValues_Item(value, elGetter);
}


/* eslint-enable */
