import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
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
export declare class AttributeTypeAndValue {
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: OBJECT_IDENTIFIER;
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: _Element;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];
    constructor(
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    type_: OBJECT_IDENTIFIER, 
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    value: _Element, 
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    _unrecognizedExtensionsList?: _Element[]);
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
    static _from_object(_o: {
        [_K in keyof AttributeTypeAndValue]: AttributeTypeAndValue[_K];
    }): AttributeTypeAndValue;
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
    toJSON(): AttributeTypeAndValueJSON;
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
    toString(): string;
}
/**
 * @summary The Leading Root Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export declare const _root_component_type_list_1_spec_for_AttributeTypeAndValue: $.ComponentSpec[];
/**
 * @summary The Trailing Root Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export declare const _root_component_type_list_2_spec_for_AttributeTypeAndValue: $.ComponentSpec[];
/**
 * @summary The Extension Addition Component Types of AttributeTypeAndValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export declare const _extension_additions_list_spec_for_AttributeTypeAndValue: $.ComponentSpec[];
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeAndValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeAndValue} The decoded data structure.
 */
export declare function _decode_AttributeTypeAndValue(el: _Element): AttributeTypeAndValue;
/**
 * @summary Encodes a(n) AttributeTypeAndValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeAndValue, encoded as an ASN.1 Element.
 */
export declare function _encode_AttributeTypeAndValue(value: AttributeTypeAndValue): _Element;
//# sourceMappingURL=AttributeTypeAndValue.ta.d.mts.map