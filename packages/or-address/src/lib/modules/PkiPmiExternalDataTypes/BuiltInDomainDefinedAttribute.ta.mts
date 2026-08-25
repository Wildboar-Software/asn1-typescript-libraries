/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    PrintableString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { escape_oraddress_attribute_value, isPrintableString } from "../../utils.mjs";
import { type DomainDefinedAttributeJSON } from "../../types.mjs";
import { ub_domain_defined_attribute_type_length } from "./ub-domain-defined-attribute-type-length.va.mjs";
import { ub_domain_defined_attribute_value_length } from "./ub-domain-defined-attribute-value-length.va.mjs";
import { builtInDomainDefinedAttributeFromString } from "../../parse.mjs";

/**
 * @summary BuiltInDomainDefinedAttribute
 * @description
 *
 * One MD-defined attribute: `type` and `value` PrintableStrings (ITU-T X.402 (1999),
 * §18.1). Intended as an interim native addressing convention; MDs should migrate to
 * standard attributes.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BuiltInDomainDefinedAttribute ::= SEQUENCE {
 *   type   PrintableString(SIZE (1..ub-domain-defined-attribute-type-length)),
 *   value  PrintableString(SIZE (1..ub-domain-defined-attribute-value-length)) }
 * ```
 *
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
    ) {
        if (type_.length > ub_domain_defined_attribute_type_length) {
            throw new Error("BuiltInDomainDefinedAttribute.type must be 16 characters or less");
        }
        if (value.length > ub_domain_defined_attribute_value_length) {
            throw new Error("BuiltInDomainDefinedAttribute.value must be 16 characters or less");
        }
        if (!isPrintableString(type_)) {
            throw new Error("Invalid BuiltInDomainDefinedAttribute.type");
        }
        if (!isPrintableString(value)) {
            throw new Error("Invalid BuiltInDomainDefinedAttribute.value");
        }
    }

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
    public static _from_object(_o: { type_: PrintableString, value: PrintableString }): BuiltInDomainDefinedAttribute {
        return new BuiltInDomainDefinedAttribute(_o.type_, _o.value);
    }

    /**
     * Convert to a string representation based on
     * [IETF RFC 1685](https://www.rfc-editor.org/info/rfc1685/).
     * 
     * This assumes the semicolon (`;`) as the delimiter and escapes it
     * accordingly.
     * 
     * Example output:
     * 
     * ```
     * DDA:RFC-822=fred(a)widget.co.uk
     * ```
     * 
     * @returns The IETF RFC 1685 string representation.
     * @public
     * @function
     */
    public toString(): string {
        return `DDA:${this.type_.replaceAll("=", "==")}=${escape_oraddress_attribute_value(this.value, ';'.charCodeAt(0))}`;
    }

    /**
     * Convert to a JSON representation.
     * @returns The JSON representation of this `BuiltInDomainDefinedAttribute`.
     * @public
     * @function
     */
    public toJSON(): DomainDefinedAttributeJSON {
        return {
            type: this.type_,
            value: this.value,
        };
    }
    
    /**
     * Convert from a JSON representation.
     * @param json The JSON representation of this `BuiltInDomainDefinedAttribute`.
     * @returns The `BuiltInDomainDefinedAttribute` represented by the JSON.
     * @public
     * @static
     * @function
     */
    public static fromJSON(json: DomainDefinedAttributeJSON): BuiltInDomainDefinedAttribute {
        return new BuiltInDomainDefinedAttribute(json.type, json.value);
    }

    /**
     * @summary Convert from a string representation based on
     * [IETF RFC 1685](https://www.rfc-editor.org/info/rfc1685/).
     * @description
     * 
     * This takes an IETF RFC 1685 string and converts it to a `BuiltInDomainDefinedAttribute`.
     * 
     * Example input:
     * 
     * ```
     * DDA:RFC-822=fred(a)widget.co.uk
     * ```
     * 
     * @param s The string representation of this `BuiltInDomainDefinedAttribute`.
     * @returns The `BuiltInDomainDefinedAttribute` represented by the string.
     */
    public static fromString(s: string): BuiltInDomainDefinedAttribute | null {
        return builtInDomainDefinedAttributeFromString(s);
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
export const _root_component_type_list_1_spec_for_BuiltInDomainDefinedAttribute: $.ComponentSpec[] =
    [
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
export const _root_component_type_list_2_spec_for_BuiltInDomainDefinedAttribute: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of BuiltInDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BuiltInDomainDefinedAttribute: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) BuiltInDomainDefinedAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BuiltInDomainDefinedAttribute} The decoded data structure.
 */
export function _decode_BuiltInDomainDefinedAttribute(el: _Element): BuiltInDomainDefinedAttribute {
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
}

/**
 * @summary Encodes a(n) BuiltInDomainDefinedAttribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BuiltInDomainDefinedAttribute, encoded as an ASN.1 Element.
 */
export function _encode_BuiltInDomainDefinedAttribute(value: BuiltInDomainDefinedAttribute): _Element {
    const components: _Element[] = [
        $._encodePrintableString(value.type_, $.BER),
        $._encodePrintableString(value.value, $.BER),
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
