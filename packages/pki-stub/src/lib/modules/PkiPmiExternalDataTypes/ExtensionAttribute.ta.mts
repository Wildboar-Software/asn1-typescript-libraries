/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1/functional@11";

/**
 * @summary ExtensionAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttribute ::= SEQUENCE {
 *   extension-attribute-type
 *     [0]  EXTENSION-ATTRIBUTE.&id({ExtensionAttributeTable}),
 *   extension-attribute-value
 *     [1]  EXTENSION-ATTRIBUTE.&Type
 *            ({ExtensionAttributeTable}{@extension-attribute-type}) }
 * ```
 *
 * @class
 */
export class ExtensionAttribute {
    constructor(
        /**
         * @summary `extension_attribute_type`.
         * @public
         * @readonly
         */
        readonly extension_attribute_type: INTEGER,
        /**
         * @summary `extension_attribute_value`.
         * @public
         * @readonly
         */
        readonly extension_attribute_value: _Element
    ) {}

    /**
     * @summary Restructures an object into a ExtensionAttribute
     * @description
     *
     * This takes an `object` and converts it to a `ExtensionAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionAttribute`.
     * @returns {ExtensionAttribute}
     */
    public static _from_object(
        _o: { [_K in keyof ExtensionAttribute]: ExtensionAttribute[_K] }
    ): ExtensionAttribute {
        return new ExtensionAttribute(
            _o.extension_attribute_type,
            _o.extension_attribute_value
        );
    }
}

/**
 * @summary The Leading Root Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtensionAttribute: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "extension-attribute-type",
            false,
            $.hasTag(_TagClass.context, 0)
        ),
        new $.ComponentSpec(
            "extension-attribute-value",
            false,
            $.hasTag(_TagClass.context, 1)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtensionAttribute: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtensionAttribute: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionAttribute} The decoded data structure.
 */
export function _decode_ExtensionAttribute(el: _Element): ExtensionAttribute {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            "ExtensionAttribute contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    sequence[0].name = "extension-attribute-type";
    sequence[1].name = "extension-attribute-value";
    let extension_attribute_type!: INTEGER;
    let extension_attribute_value!: _Element;
    extension_attribute_type = $._decode_explicit<INTEGER>(
        () => $._decodeInteger
    )(sequence[0]);
    extension_attribute_value = $._decode_explicit<_Element>(
        () => $._decodeAny
    )(sequence[1]);
    return new ExtensionAttribute(
        extension_attribute_type,
        extension_attribute_value
    );
}

/**
 * @summary Encodes a(n) ExtensionAttribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionAttribute, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionAttribute(
    value: ExtensionAttribute) {
    const components: _Element[] = [
        /* REQUIRED   */ $._encode_explicit(
            _TagClass.context,
            0,
            () => $._encodeInteger,
            $.BER
        )(value.extension_attribute_type, $.BER),
        /* REQUIRED   */ $._encode_explicit(
            _TagClass.context,
            1,
            () => $._encodeAny,
            $.BER
        )(value.extension_attribute_value, $.BER),
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
