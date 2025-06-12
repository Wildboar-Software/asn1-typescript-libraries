/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION AttributeSet */
/**
 * @summary AttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeSet{ATTRIBUTE:AttrSet} ::= SEQUENCE {
 *     type      ATTRIBUTE.&id({AttrSet}),
 *     values    SET SIZE (1..MAX) OF ATTRIBUTE.
 *                 &Type({AttrSet}{@type})
 * }
 * ```
 *
 * @class
 */
export class AttributeSet {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `values`.
         * @public
         * @readonly
         */
        readonly values: _Element[]
    ) {}

    /**
     * @summary Restructures an object into a AttributeSet
     * @description
     *
     * This takes an `object` and converts it to a `AttributeSet`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeSet`.
     * @returns {AttributeSet}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeSet]: AttributeSet[_K] }
    ): AttributeSet {
        return new AttributeSet(_o.type_, _o.values);
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeSet */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeSet */
/**
 * @summary The Leading Root Component Types of AttributeSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeSet: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "values",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeSet */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeSet */
/**
 * @summary The Trailing Root Component Types of AttributeSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeSet: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeSet */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeSet */
/**
 * @summary The Extension Addition Component Types of AttributeSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeSet: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeSet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeSet */
let _cached_decoder_for_AttributeSet: $.ASN1Decoder<AttributeSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeSet */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeSet */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeSet} The decoded data structure.
 */
export function _decode_AttributeSet(el: _Element) {
    if (!_cached_decoder_for_AttributeSet) {
        _cached_decoder_for_AttributeSet = function (
            el: _Element
        ): AttributeSet {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeSet contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "values";
            let type_!: OBJECT_IDENTIFIER;
            let values!: _Element[];
            type_ = $._decodeObjectIdentifier(sequence[0]);
            values = $._decodeSetOf<_Element>(() => $._decodeAny)(sequence[1]);
            return new AttributeSet(type_, values);
        };
    }
    return _cached_decoder_for_AttributeSet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeSet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeSet */
let _cached_encoder_for_AttributeSet: $.ASN1Encoder<AttributeSet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeSet */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeSet */
/**
 * @summary Encodes a(n) AttributeSet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSet, encoded as an ASN.1 Element.
 */
export function _encode_AttributeSet(
    value: AttributeSet,
    elGetter: $.ASN1Encoder<AttributeSet>
) {
    if (!_cached_encoder_for_AttributeSet) {
        _cached_encoder_for_AttributeSet = function (
            value: AttributeSet,
            elGetter: $.ASN1Encoder<AttributeSet>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.type_,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<_Element>(
                            () => $._encodeAny,
                            $.BER
                        )(value.values, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeSet(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeSet */

/* eslint-enable */
