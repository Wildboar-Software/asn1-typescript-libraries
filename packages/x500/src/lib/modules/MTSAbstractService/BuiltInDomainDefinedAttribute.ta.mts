/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    PrintableString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary BuiltInDomainDefinedAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInDomainDefinedAttribute ::= SEQUENCE {
 *   type   PrintableString(SIZE (1..ub-domain-defined-attribute-type-length)),
 *   value  PrintableString(SIZE (1..ub-domain-defined-attribute-value-length))
 * }
 * ```
 *
 * @class
 */
export class BuiltInDomainDefinedAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: PrintableString,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: PrintableString
    ) {}

    /**
     * @summary Restructures an object into a BuiltInDomainDefinedAttribute
     * @description
     *
     * This takes an `object` and converts it to a `BuiltInDomainDefinedAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BuiltInDomainDefinedAttribute`.
     * @returns {BuiltInDomainDefinedAttribute}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof BuiltInDomainDefinedAttribute]: BuiltInDomainDefinedAttribute[_K];
            }
        >
    ): BuiltInDomainDefinedAttribute {
        return new BuiltInDomainDefinedAttribute(_o.type_, _o.value);
    }
}

/**
 * @summary The Leading Root Component Types of BuiltInDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BuiltInDomainDefinedAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 19)
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.universal, 19)
    ),
];

/**
 * @summary The Trailing Root Component Types of BuiltInDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BuiltInDomainDefinedAttribute: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BuiltInDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BuiltInDomainDefinedAttribute: $.ComponentSpec[] = [];

let _cached_decoder_for_BuiltInDomainDefinedAttribute: $.ASN1Decoder<BuiltInDomainDefinedAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInDomainDefinedAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInDomainDefinedAttribute} The decoded data structure.
 */
export function _decode_BuiltInDomainDefinedAttribute(el: _Element) {
    if (!_cached_decoder_for_BuiltInDomainDefinedAttribute) {
        _cached_decoder_for_BuiltInDomainDefinedAttribute = function (
            el: _Element
        ): BuiltInDomainDefinedAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "BuiltInDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: PrintableString;
            let value!: PrintableString;
            type_ = $._decodePrintableString(sequence[0]);
            value = $._decodePrintableString(sequence[1]);
            return new BuiltInDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_BuiltInDomainDefinedAttribute(el);
}

let _cached_encoder_for_BuiltInDomainDefinedAttribute: $.ASN1Encoder<BuiltInDomainDefinedAttribute> | null = null;

/**
 * @summary Encodes a(n) BuiltInDomainDefinedAttribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInDomainDefinedAttribute, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInDomainDefinedAttribute(
    value: BuiltInDomainDefinedAttribute,
    elGetter: $.ASN1Encoder<BuiltInDomainDefinedAttribute>
) {
    if (!_cached_encoder_for_BuiltInDomainDefinedAttribute) {
        _cached_encoder_for_BuiltInDomainDefinedAttribute = function (
            value: BuiltInDomainDefinedAttribute        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodePrintableString(
                            value.type_,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodePrintableString(
                            value.value,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_BuiltInDomainDefinedAttribute(value, elGetter);
}


/* eslint-enable */
