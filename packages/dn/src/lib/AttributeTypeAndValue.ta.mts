/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * JSON Encoding Rules encoding of {@link AttributeTypeAndValue}.
 */
export type AttributeTypeAndValueJSON = {
    type: string;
    value: unknown;
};

/**
 * @summary AttributeTypeAndValue
 * @description
 *
 * One distinguished attribute type-and-value pair as used in a relative
 * distinguished name. `value` is an open type whose syntax is that of the
 * attribute identified by `type_`.
 *
 * When matching names, two such pairs of the same type are compared with that
 * attribute type's equality matching rule (for naming attributes, the assertion
 * syntax is the same as the attribute syntax).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeAndValue ::= SEQUENCE {
 *   type                  ATTRIBUTE.&id({SupportedAttributes}),
 *   value                 ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   ... }
 * ```
 *
 */
export class AttributeTypeAndValue {
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
        readonly value: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeAndValue
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeAndValue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeAndValue`.
     * @returns {AttributeTypeAndValue}
     */
    public static _from_object(
        _o: { [_K in keyof AttributeTypeAndValue]: AttributeTypeAndValue[_K] }
    ): AttributeTypeAndValue {
        return new AttributeTypeAndValue(
            _o.type_,
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Convert this `AttributeTypeAndValue` to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * Open-type `value` is encoded with {@link _Element.toJSON}. The ASN.1
     * identifier `type` is used as the JSON member name.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): AttributeTypeAndValueJSON {
        return {
            type: this.type_.toJSON(),
            value: this.value.toJSON(),
        };
    }

    /**
     * @summary Convert this `AttributeTypeAndValue` to a string
     * @description
     *
     * Returns the attribute type as a dot-delimited object identifier and the
     * attribute value as `value.toString()`, with surrounding double quotes stripped,
     * separated by `=`.
     *
     * @returns A string of the form `type=value`
     * @function
     * @public
     */
    public toString(): string {
        const valueString = this.value.toString();
        const firstCharacter = valueString.charAt(0);
        const lastCharacter = valueString.charAt(valueString.length - 1);
        const quotesSurroundValue = (
            (valueString.length >= 2)
            && ((firstCharacter === '"') && (lastCharacter === '"'))
        );
        const unquotedValue = quotesSurroundValue
            ? valueString.slice(1, -1)
            : valueString;
        return `${this.type_.toString()}=${unquotedValue}`;
    }
}

/**
 * @summary The Leading Root Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeAndValue: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "type",
            false,
            $.hasTag(_TagClass.universal, 6)
        ),
        new $.ComponentSpec("value", false, $.hasAnyTag),
    ];

/**
 * @summary The Trailing Root Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeAndValue: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeAndValue: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeAndValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeAndValue} The decoded data structure.
 */
export function _decode_AttributeTypeAndValue(el: _Element): AttributeTypeAndValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            "AttributeTypeAndValue contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    sequence[0].name = "type";
    sequence[1].name = "value";
    let type_!: OBJECT_IDENTIFIER;
    let value!: _Element;
    type_ = $._decodeObjectIdentifier(sequence[0]);
    value = sequence[1];
    return new AttributeTypeAndValue(type_, value, sequence.slice(2));
}

/**
 * @summary Encodes a(n) AttributeTypeAndValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeAndValue, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeAndValue(value: AttributeTypeAndValue): _Element {
    const components: _Element[] = [
        $._encodeObjectIdentifier(value.type_, $.BER),
        value.value,
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
