/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SingleAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SingleAttribute{ATTRIBUTE:AttrSet} ::= SEQUENCE {
 *     type      ATTRIBUTE.&id({AttrSet}),
 *     value     ATTRIBUTE.&Type({AttrSet}{@type})
 * }
 * ```
 *
 * @class
 */
export class SingleAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: _Element
    ) {}

    /**
     * @summary Restructures an object into a SingleAttribute
     * @description
     *
     * This takes an `object` and converts it to a `SingleAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SingleAttribute`.
     * @returns {SingleAttribute}
     */
    public static _from_object(
        _o: { [_K in keyof SingleAttribute]: SingleAttribute[_K] }
    ): SingleAttribute {
        return new SingleAttribute(_o.type_, _o.value);
    }
}


/**
 * @summary The Leading Root Component Types of SingleAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SingleAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec("value", false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of SingleAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SingleAttribute: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SingleAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SingleAttribute: $.ComponentSpec[] = [];


let _cached_decoder_for_SingleAttribute: $.ASN1Decoder<SingleAttribute> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SingleAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SingleAttribute} The decoded data structure.
 */
export function _decode_SingleAttribute(el: _Element) {
    if (!_cached_decoder_for_SingleAttribute) {
        _cached_decoder_for_SingleAttribute = function (
            el: _Element
        ): SingleAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SingleAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: OBJECT_IDENTIFIER;
            let value!: _Element;
            type_ = $._decodeObjectIdentifier(sequence[0]);
            value = $._decodeAny(sequence[1]);
            return new SingleAttribute(type_, value);
        };
    }
    return _cached_decoder_for_SingleAttribute(el);
}


let _cached_encoder_for_SingleAttribute: $.ASN1Encoder<SingleAttribute> | null = null;


/**
 * @summary Encodes a(n) SingleAttribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SingleAttribute, encoded as an ASN.1 Element.
 */
export function _encode_SingleAttribute(
    value: SingleAttribute,
    elGetter: $.ASN1Encoder<SingleAttribute>
) {
    if (!_cached_encoder_for_SingleAttribute) {
        _cached_encoder_for_SingleAttribute = function (
            value: SingleAttribute        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.type_,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.value, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SingleAttribute(value, elGetter);
}


/* eslint-enable */
