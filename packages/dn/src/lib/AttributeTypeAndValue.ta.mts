/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    attributeTypeAndValueToKey,
    attributeTypeAndValueToString,
    defaultValueEncoder,
} from "./atav/tostr.mjs";
import {
    compareAttributeTypeAndValue,
    type GetDistinguishedValueMatcher,
} from "./atav/compare.mjs";

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
     * Uses a short attribute name when one is known, including names that are
     * not registered LDAP descriptors, and the value's native string form when
     * the syntax is recognized. Otherwise the type is a numeric object
     * identifier and the value is its hexadecimal BER encoding.
     *
     * @returns A string of the form `type=value`
     * @function
     * @public
     */
    public toString(): string {
        return attributeTypeAndValueToString(this, false, false);
    }

    /**
     * @summary Convert this `AttributeTypeAndValue` to an LDAP string
     * @description
     *
     * Like {@link toString}, except an attribute type that is not a registered
     * LDAP descriptor is unrecognized: the type is a numeric object identifier
     * and the value is its hexadecimal BER encoding.
     *
     * @returns A string of the form `type=value`
     * @function
     * @public
     */
    public toLdapString(): string {
        return attributeTypeAndValueToString(this, false, true);
    }

    /**
     * @summary Convert this `AttributeTypeAndValue` to an interoperable string
     * @description
     *
     * Always writes the attribute type as a numeric object identifier and the
     * attribute value with the unrecognized hexadecimal BER encoding (`#`
     * followed by the hex octets of the value element).
     *
     * @returns A string of the form `numericoid=#hex`
     * @function
     * @public
     */
    public toInteropString(): string {
        return `${this.type_.toString()}=${defaultValueEncoder(this.value)}`;
    }

    /**
     * @summary Convert this `AttributeTypeAndValue` to a comparison key
     * @description
     *
     * Produces a string such that two `AttributeTypeAndValue`s that would
     * match under the equality matching rule of their attribute type
     * (probably) produce identical keys, so they can be compared byte-for-byte
     * or used as map keys. Since the matching rule of an arbitrary attribute
     * type cannot be known, the value normalization is heuristic: for
     * instance, most strings are case-folded, and DNS names are converted to
     * punycode.
     *
     * The attribute type is always a numeric object identifier, so keys do not
     * change as attribute names become known. The value is not escaped; if it
     * has no string form, it is its hexadecimal BER encoding. To escape the
     * value, as is needed when embedding the key in an RDN or DN key, use
     * `attributeTypeAndValueToKey()` with `escape` set, since the hexadecimal
     * form must not be escaped. The key is not meant to be displayed.
     *
     * @returns A string of the form `numericoid=normalizedvalue`
     * @function
     * @public
     */
    public toKey(): string {
        return attributeTypeAndValueToKey(this, false);
    }

    /**
     * @summary Compare this `AttributeTypeAndValue` with another for equality
     * @description
     *
     * Two attribute type and value pairs match if they have the same attribute
     * type and their values match under the equality matching rule of that type.
     * If `getMatcher` is omitted or does not recognize the type, values are
     * compared heuristically.
     *
     * @param other The other attribute type and value
     * @param getMatcher Optional function to look up the equality matcher for an attribute type
     * @returns `true` if they match; `false` otherwise
     * @function
     * @public
     */
    public compare(
        other: AttributeTypeAndValue,
        getMatcher?: GetDistinguishedValueMatcher,
    ): boolean {
        return compareAttributeTypeAndValue(this, other, getMatcher);
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
