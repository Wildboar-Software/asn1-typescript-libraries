/* eslint-disable */
import {
    ASN1Construction as _Construction,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1UniversalType as _UniversalType,
    type OBJECT_IDENTIFIER,
    ObjectIdentifier,
    type DotDelimitedOidString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    attributeTypeAndValueToKey,
    attributeTypeAndValueToString,
    defaultValueEncoder,
    distinguishedValueToString,
} from "./atav/tostr.mjs";
import {
    compareAttributeTypeAndValue,
    compareDistinguishedValuesHeuristically,
    type GetDistinguishedValueMatcher,
} from "./atav/compare.mjs";
import attributeTypeAndValueToASN1String from "./atav/toasn1.mjs";
import { getAttributeTypeAndValueEncodedLength } from "./atav/encodedLength.mjs";
import { distinguishedTypeToFriendlyString } from "./atav/distinguishedTypeToString.mjs";
import { atavFromString, atavFromStringX520 } from "./atav/fromstr.mjs";
import {
    isAttributeTypeAndValueString,
    validateAttributeTypeAndValueString,
    validateAttributeValueSemantics,
} from "./atav/validate.mjs";
import {
    isAttributeTypeAndValueBER,
    validateAttributeTypeAndValueBER,
    validateAttributeTypeAndValueElement,
} from "./atav/validateBER.mjs";
import { isAttributeTypeAndValueOf } from "./atav/brand.mjs";
import type { ParsedAttributeTypeAndValue } from "./ParsedAttributeTypeAndValue.mjs";
import type {
    AttributeTypeAndValueBER,
    AttributeTypeAndValueOf,
    AttributeTypeAndValueString,
    EscapedAttributeTypeAndValueString,
} from "./brands.mjs";
import decodeBERElement from "./decodeBERElement.mjs";

/**
 * @summary Reversible JSON encoding of an {@link AttributeTypeAndValue}.
 * @description
 *
 * `type` is the numeric object identifier in dotted-decimal notation, and
 * `value` is `#` followed by the hexadecimal BER encoding of the value
 * element (the same form as IETF RFC 4514 uses for unrecognized syntaxes).
 * This can be converted back with {@link AttributeTypeAndValue.fromJSON}.
 */
export type AttributeTypeAndValueJSON = {
    type: string;
    value: string;
};

/**
 * @summary Irreversible JSON Encoding Rules encoding of an
 * {@link AttributeTypeAndValue}.
 * @description
 *
 * `type` is the numeric object identifier in dotted-decimal notation, and
 * `value` is whatever the value element's `toJSON()` returns. The value
 * cannot be converted back to an element from this.
 */
export type AttributeTypeAndValueJER = {
    type: string;
    value: unknown;
};

const HEX_VALUE_RE: RegExp = /^#(?:[0-9A-Fa-f]{2})+$/;

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
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    public readonly type_: OBJECT_IDENTIFIER;
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    public readonly value: _Element;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        type_: OBJECT_IDENTIFIER,
        value: _Element,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.type_ = type_;
        this.value = value;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
     * @summary Get the length of the BER encoding of this `AttributeTypeAndValue`
     * @description
     *
     * Calculates the number of bytes the BER encoding would occupy (using
     * definite lengths) without producing the encoding. See
     * {@link getAttributeTypeAndValueEncodedLength}.
     *
     * @returns The number of bytes in the BER encoding
     * @function
     * @public
     */
    public getEncodedLength(): number {
        return getAttributeTypeAndValueEncodedLength(this);
    }

    /**
     * @summary Convert this `AttributeTypeAndValue` to reversible JSON
     * @description
     *
     * The `type` is written as a numeric object identifier, and the `value` is
     * written as `#` followed by the hexadecimal BER encoding of the value
     * element. Unlike {@link toJER}, this loses no information about the
     * value, so {@link AttributeTypeAndValue.fromJSON} can reverse it. (The
     * unrecognized extensions are not included, as with the string forms.)
     *
     * @returns An object having a numeric OID `type` and a hex-encoded `value`
     * @function
     * @public
     */
    public toJSON(): AttributeTypeAndValueJSON {
        return {
            type: this.type_.toString(),
            value: defaultValueEncoder(this.value),
        };
    }

    /**
     * @summary Convert this `AttributeTypeAndValue` to irreversible JER
     * @description
     *
     * Like {@link toJSON}, except the `value` is encoded by calling the
     * `toJSON()` method of the value element, loosely following ITU-T X.697
     * (JER). This is more readable, but it cannot be converted back into an
     * `AttributeTypeAndValue`, because the value's syntax is not known.
     *
     * @returns An object having a numeric OID `type` and a JER `value`
     * @function
     * @public
     */
    public toJER(): AttributeTypeAndValueJER {
        return {
            type: this.type_.toString(),
            value: this.value.toJSON(),
        };
    }

    /**
     * @summary Convert the output of {@link toJSON} back to an `AttributeTypeAndValue`
     * @description
     *
     * @param json An object having a numeric OID `type` and a `value` of `#`
     *  followed by the hexadecimal BER encoding of exactly one element
     * @returns The `AttributeTypeAndValue`
     * @throws {SyntaxError} If `type` is not a valid numeric object identifier,
     *  or `value` is not a hexstring
     * @throws {ASN1Error} If `value` is not exactly one BER element
     * @function
     * @public
     * @static
     */
    public static fromJSON(json: AttributeTypeAndValueJSON): AttributeTypeAndValue {
        if (typeof json !== "object" || json === null) {
            throw new SyntaxError("AttributeTypeAndValue JSON must be an object");
        }
        const { type, value } = json;
        if (typeof type !== "string") {
            throw new SyntaxError("AttributeTypeAndValue JSON type must be a string");
        }
        if (typeof value !== "string" || !HEX_VALUE_RE.test(value)) {
            throw new SyntaxError(
                "AttributeTypeAndValue JSON value must be # followed by hexadecimal octets",
            );
        }
        return new AttributeTypeAndValue(
            ObjectIdentifier.fromStringWithBigArcs(type),
            decodeBERElement(
                Buffer.from(value.slice(1), "hex"),
                "AttributeTypeAndValue.value",
            ),
        );
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
     * @param escape Whether to escape the value as in IETF RFC 4514
     * @returns A string of the form `type=value`
     * @function
     * @public
     */
    public toString(escape: boolean = false): string {
        return attributeTypeAndValueToString(this, escape, false);
    }

    /**
     * @summary Convert this `AttributeTypeAndValue` to an LDAP string
     * @description
     *
     * Like {@link toString}, except an attribute type that is not a registered
     * LDAP descriptor is unrecognized: the type is a numeric object identifier
     * and the value is its hexadecimal BER encoding.
     *
     * @param escape Whether to escape the value as in IETF RFC 4514
     * @returns A string of the form `type=value`
     * @function
     * @public
     */
    public toLdapString(escape: boolean = false): string {
        return attributeTypeAndValueToString(this, escape, true);
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
     * @summary Convert this `AttributeTypeAndValue` to textual ASN.1 value notation
     * @description
     *
     * Writes the type as a numeric object identifier and the value as the
     * result of the value element's `toString()`, which is only a "good
     * enough" approximation of ASN.1 value notation. See
     * {@link attributeTypeAndValueToASN1String}.
     *
     * @returns A string of the form `{ type numericoid, value ... }`
     * @function
     * @public
     */
    public toASN1String(): string {
        return attributeTypeAndValueToASN1String(this);
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
     * has no string form, it is its hexadecimal BER encoding. Set `escape` to
     * escape the value, as is needed when embedding the key in an RDN or DN
     * key; the hexadecimal form is never escaped. The key is not meant to be
     * displayed.
     *
     * @param escape Whether to escape the value as in IETF RFC 4514
     * @returns A string of the form `numericoid=normalizedvalue`
     * @function
     * @public
     */
    public toKey(escape: boolean = false): string {
        return attributeTypeAndValueToKey(this, escape);
    }

    /**
     * @summary Get the short name of this attribute's type
     * @description
     *
     * Returns the short name used when writing this `AttributeTypeAndValue`
     * as a string, such as `cn` or `o`, or `null` if the type has no known
     * short name. See {@link distinguishedTypeToFriendlyString}.
     *
     * @param ldapStrict Whether to recognize only registered LDAP descriptors
     * @returns The short name, or `null` if there is none
     * @function
     * @public
     */
    public getTypeName(ldapStrict: boolean = false): string | null {
        return distinguishedTypeToFriendlyString(this.type_, ldapStrict);
    }

    /**
     * @summary Convert only the value of this `AttributeTypeAndValue` to a string
     * @description
     *
     * Returns the native string form of the value if its syntax is
     * recognized. See {@link distinguishedValueToString}.
     *
     * @param comparable Whether to normalize the output for byte-wise comparison
     * @returns The stringified value, or `null` if it cannot be stringified
     * @function
     * @public
     */
    public valueToString(comparable: boolean = false): string | null {
        return distinguishedValueToString(this.type_, this.value, comparable);
    }

    /**
     * @summary Test whether this `AttributeTypeAndValue` has one of the given types
     * @description
     *
     * This does not change or copy this object; it only narrows its type. See
     * {@link isAttributeTypeAndValueOf}.
     *
     * @param types An object identifier, or an array of them, in
     *  dotted-decimal notation
     * @returns Whether the attribute type is one of `types`
     * @function
     * @public
     */
    public isOf<T extends DotDelimitedOidString>(
        types: T | readonly T[],
    ): this is AttributeTypeAndValueOf<T> {
        return isAttributeTypeAndValueOf(this, types);
    }

    /**
     * @summary Compare a value with this one's, assuming the same attribute type
     * @description
     *
     * Compares `value` with the value of this `AttributeTypeAndValue` heuristically,
     * as if it were a distinguished value of this attribute type. See
     * {@link compareDistinguishedValuesHeuristically}.
     *
     * @param value The distinguished value to compare to this one's value
     * @returns `true` if the values (probably) match; `false` otherwise
     * @function
     * @public
     */
    public compareValue(value: _Element): boolean {
        return compareDistinguishedValuesHeuristically(this.type_, this.value, value);
    }

    /**
     * @summary Split a string such as `cn=Smith` into its type and value
     * @description
     *
     * The value is unescaped as in IETF RFC 4514, but nothing is validated or
     * recognized. See {@link atavFromString}.
     *
     * @param str The attribute type and value, e.g. `cn=Smith`
     * @returns The attribute type name and unescaped value
     * @throws {SyntaxError} If there is no equals sign
     * @function
     * @public
     * @static
     */
    public static parseString(str: string): ParsedAttributeTypeAndValue {
        return atavFromString(str);
    }

    /**
     * @summary Parse a recognized attribute type and value
     * @description
     *
     * Converts the output of {@link AttributeTypeAndValue.parseString} to an
     * `AttributeTypeAndValue`, if the attribute type is one of the X.520
     * attribute types this library knows the directory syntax of. See
     * {@link atavFromStringX520}.
     *
     * @param parsed The attribute type name and unescaped value
     * @returns The `AttributeTypeAndValue`
     * @throws {SyntaxError} If the attribute type is not recognized or the
     *  value is invalid for its syntax
     * @function
     * @public
     * @static
     */
    public static fromParsedX520(parsed: ParsedAttributeTypeAndValue): AttributeTypeAndValue {
        return atavFromStringX520(parsed);
    }

    /**
     * @summary Parse a string such as `cn=Smith` to an `AttributeTypeAndValue`
     * @description
     *
     * This is {@link AttributeTypeAndValue.parseString} followed by
     * {@link AttributeTypeAndValue.fromParsedX520}.
     *
     * @param str The attribute type and value, e.g. `cn=Smith`
     * @returns The `AttributeTypeAndValue`
     * @throws {SyntaxError} If the string is malformed or the attribute type
     *  is not recognized
     * @function
     * @public
     * @static
     */
    public static fromStringX520(str: string): AttributeTypeAndValue {
        return atavFromStringX520(atavFromString(str));
    }

    /**
     * @summary Validate that a string is an `attributeTypeAndValue`
     * @description
     *
     * See {@link validateAttributeTypeAndValueString}.
     *
     * @param atav The attribute type and value, e.g. `cn=Smith`
     * @param escaped Whether the value is escaped per IETF RFC 4514
     * @throws {SyntaxError} If `atav` is invalid
     * @function
     * @public
     * @static
     */
    public static validateString(
        atav: string,
        escaped: true,
    ): asserts atav is EscapedAttributeTypeAndValueString;
    public static validateString(
        atav: string,
        escaped?: false,
    ): asserts atav is AttributeTypeAndValueString;
    public static validateString(
        atav: string,
        escaped?: boolean,
    ): asserts atav is AttributeTypeAndValueString | EscapedAttributeTypeAndValueString;
    public static validateString(
        atav: string,
        escaped: boolean = false,
    ): asserts atav is AttributeTypeAndValueString | EscapedAttributeTypeAndValueString {
        validateAttributeTypeAndValueString(atav, escaped);
    }

    /**
     * @summary Check whether a string is a valid `attributeTypeAndValue`
     * @description
     *
     * See {@link isAttributeTypeAndValueString}.
     *
     * @param atav The attribute type and value, e.g. `cn=Smith`
     * @param escaped Whether the value is escaped per IETF RFC 4514
     * @returns Whether `atav` is valid
     * @function
     * @public
     * @static
     */
    public static isString(
        atav: string,
        escaped: true,
    ): atav is EscapedAttributeTypeAndValueString;
    public static isString(
        atav: string,
        escaped?: false,
    ): atav is AttributeTypeAndValueString;
    public static isString(
        atav: string,
        escaped?: boolean,
    ): atav is AttributeTypeAndValueString | EscapedAttributeTypeAndValueString;
    public static isString(
        atav: string,
        escaped: boolean = false,
    ): atav is AttributeTypeAndValueString | EscapedAttributeTypeAndValueString {
        return isAttributeTypeAndValueString(atav, escaped);
    }

    /**
     * @summary Validate an unescaped attribute value against its type's rules
     * @description
     *
     * See {@link validateAttributeValueSemantics}.
     *
     * @param type The attribute type name, as written in the DN
     * @param value The unescaped string value
     * @throws {SyntaxError} If the value is invalid
     * @function
     * @public
     * @static
     */
    public static validateValueSemantics(type: string, value: string): void {
        validateAttributeValueSemantics(type, value);
    }

    /**
     * @summary Validate the BER encoding of an `AttributeTypeAndValue`
     * @description
     *
     * See {@link validateAttributeTypeAndValueBER}.
     *
     * @param bytes The BER encoding
     * @throws {ASN1Error} If `bytes` is invalid
     * @function
     * @public
     * @static
     */
    public static validateBER(bytes: Uint8Array): asserts bytes is AttributeTypeAndValueBER {
        validateAttributeTypeAndValueBER(bytes);
    }

    /**
     * @summary Check whether bytes are a valid BER `AttributeTypeAndValue`
     * @description
     *
     * See {@link isAttributeTypeAndValueBER}.
     *
     * @param bytes The BER encoding
     * @returns Whether `bytes` is valid
     * @function
     * @public
     * @static
     */
    public static isBER(bytes: Uint8Array): bytes is AttributeTypeAndValueBER {
        return isAttributeTypeAndValueBER(bytes);
    }

    /**
     * @summary Validate an element as an `AttributeTypeAndValue`
     * @description
     *
     * See {@link validateAttributeTypeAndValueElement}.
     *
     * @param el The element
     * @throws {ASN1Error} If `el` is invalid
     * @function
     * @public
     * @static
     */
    public static validateElement(el: _Element): void {
        validateAttributeTypeAndValueElement(el);
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
    if (
        sequence[0].tagClass !== _TagClass.universal
        || sequence[0].construction !== _Construction.primitive
        || sequence[0].tagNumber !== _UniversalType.objectIdentifier
    ) {
        throw new _ConstructionError(
            "AttributeTypeAndValue.type was not a primitive universal OBJECT IDENTIFIER.",
            sequence[0],
        );
    }
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
