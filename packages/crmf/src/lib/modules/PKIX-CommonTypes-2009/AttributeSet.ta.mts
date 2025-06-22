/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


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
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "values",
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of AttributeSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeSet: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AttributeSet
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeSet: $.ComponentSpec[] = [];


let _cached_decoder_for_AttributeSet: $.ASN1Decoder<AttributeSet> | null = null;


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


let _cached_encoder_for_AttributeSet: $.ASN1Encoder<AttributeSet> | null = null;


/**
 * @summary Encodes a(n) AttributeSet into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSet, encoded as an ASN.1 Element.
 */
export function _encode_AttributeSet(
    value: AttributeSet,
    elGetter: $.ASN1Encoder<AttributeSet>
) {
    if (!_cached_encoder_for_AttributeSet) {
        _cached_encoder_for_AttributeSet = function (
            value: AttributeSet        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.type_,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<_Element>(
                            () => $._encodeAny,
                            $.DER
                        )(value.values, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AttributeSet(value, elGetter);
}


/* eslint-enable */
