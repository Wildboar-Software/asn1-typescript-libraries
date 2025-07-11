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
    FilterItem_substrings_strings_Item,
    _decode_FilterItem_substrings_strings_Item,
    _encode_FilterItem_substrings_strings_Item,
} from '../MSAbstractService/FilterItem-substrings-strings-Item.ta.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./AttributeType.ta.mjs";

/**
 * @summary FilterItem_substrings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterItem-substrings ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class FilterItem_substrings {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `strings`.
         * @public
         * @readonly
         */
        readonly strings: FilterItem_substrings_strings_Item[]
    ) {}

    /**
     * @summary Restructures an object into a FilterItem_substrings
     * @description
     *
     * This takes an `object` and converts it to a `FilterItem_substrings`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FilterItem_substrings`.
     * @returns {FilterItem_substrings}
     */
    public static _from_object(
        _o: { [_K in keyof FilterItem_substrings]: FilterItem_substrings[_K] }
    ): FilterItem_substrings {
        return new FilterItem_substrings(_o.type_, _o.strings);
    }
}

/**
 * @summary The Leading Root Component Types of FilterItem_substrings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FilterItem_substrings: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        'strings',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of FilterItem_substrings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FilterItem_substrings: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of FilterItem_substrings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FilterItem_substrings: $.ComponentSpec[] = [];

let _cached_decoder_for_FilterItem_substrings: $.ASN1Decoder<FilterItem_substrings> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilterItem_substrings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterItem_substrings} The decoded data structure.
 */
export function _decode_FilterItem_substrings(el: _Element): FilterItem_substrings {
    if (!_cached_decoder_for_FilterItem_substrings) {
        _cached_decoder_for_FilterItem_substrings = function (
            el: _Element
        ): FilterItem_substrings {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'FilterItem-substrings contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'type';
            sequence[1].name = 'strings';
            let type_!: AttributeType;
            let strings!: FilterItem_substrings_strings_Item[];
            type_ = _decode_AttributeType(sequence[0]);
            strings = $._decodeSequenceOf<FilterItem_substrings_strings_Item>(
                () => _decode_FilterItem_substrings_strings_Item
            )(sequence[1]);
            return new FilterItem_substrings(type_, strings);
        };
    }
    return _cached_decoder_for_FilterItem_substrings(el);
}

let _cached_encoder_for_FilterItem_substrings: $.ASN1Encoder<FilterItem_substrings> | null = null;

/**
 * @summary Encodes a(n) FilterItem_substrings into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterItem_substrings, encoded as an ASN.1 Element.
 */
export function _encode_FilterItem_substrings(
    value: FilterItem_substrings,
    elGetter: $.ASN1Encoder<FilterItem_substrings>
): _Element {
    if (!_cached_encoder_for_FilterItem_substrings) {
        _cached_encoder_for_FilterItem_substrings = function (
            value: FilterItem_substrings        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AttributeType(
                            value.type_,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<FilterItem_substrings_strings_Item>(
                            () => _encode_FilterItem_substrings_strings_Item,
                            $.BER
                        )(value.strings, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_FilterItem_substrings(value, elGetter);
}


/* eslint-enable */
