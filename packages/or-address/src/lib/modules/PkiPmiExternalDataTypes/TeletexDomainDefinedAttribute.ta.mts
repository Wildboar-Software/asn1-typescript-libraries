/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    TeletexString,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { teletexToString } from "@wildboar/teletex";
import { escape_oraddress_attribute_value } from "../../utils.mjs";
import { type DomainDefinedAttributeJSON } from "../../types.mjs";
import { teletexDomainDefinedAttributeFromString } from "../../parse.mjs";

/**
 * @summary TeletexDomainDefinedAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexDomainDefinedAttribute ::= SEQUENCE {
 *   type   TeletexString(SIZE (1..ub-domain-defined-attribute-type-length)),
 *   value  TeletexString(SIZE (1..ub-domain-defined-attribute-value-length)) }
 * ```
 *
 */
export class TeletexDomainDefinedAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: TeletexString,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: TeletexString
    ) {
        // We use 32 here because I think diacritics don't count as characters
        // for these purposes. This limit is the worst-case scenario: a
        // diacritic on every character.
        if (type_.length > 32) {
            throw new Error("TeletexDomainDefinedAttribute.type must be 16 characters or less");
        }
        if (value.length > 32) {
            throw new Error("TeletexDomainDefinedAttribute.value must be 16 characters or less");
        }
    }

    /**
     * @summary Restructures an object into a TeletexDomainDefinedAttribute
     * @description
     *
     * This takes an `object` and converts it to a `TeletexDomainDefinedAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TeletexDomainDefinedAttribute`.
     * @returns {TeletexDomainDefinedAttribute}
     */
    public static _from_object(
        _o: {
            type_: TeletexString;
            value: TeletexString;
        }
    ): TeletexDomainDefinedAttribute {
        return new TeletexDomainDefinedAttribute(_o.type_, _o.value);
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
        const type_ = teletexToString(this.type_);
        const value = teletexToString(this.value);
        return `DDA:${type_.replaceAll("=", "==")}=${escape_oraddress_attribute_value(value, ';'.charCodeAt(0))}`;
    }

    /**
     * Convert to a JSON representation.
     * @returns The JSON representation of this `TeletexDomainDefinedAttribute`.
     * @public
     * @function
     */
    public toJSON(): DomainDefinedAttributeJSON {
        return {
            type: teletexToString(this.type_),
            value: teletexToString(this.value),
        };
    }

    /**
     * @summary Convert from a string representation based on
     * [IETF RFC 1685](https://www.rfc-editor.org/info/rfc1685/).
     * @description
     * 
     * This takes an IETF RFC 1685 string and converts it to a `TeletexDomainDefinedAttribute`.
     * 
     * Example input:
     * 
     * ```
     * DDA:RFC-822=fred(a)widget.co.uk
     * ```
     * 
     * @param s The string representation of this `TeletexDomainDefinedAttribute`.
     * @returns The `TeletexDomainDefinedAttribute` represented by the string.
     */
    public static fromString(s: string): TeletexDomainDefinedAttribute | null {
        return teletexDomainDefinedAttributeFromString(s);
    }

}

/**
 * @summary The Leading Root Component Types of TeletexDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TeletexDomainDefinedAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 20)
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.universal, 20)
    ),
];

/**
 * @summary The Trailing Root Component Types of TeletexDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TeletexDomainDefinedAttribute: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TeletexDomainDefinedAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TeletexDomainDefinedAttribute: $.ComponentSpec[] = [];

let _cached_decoder_for_TeletexDomainDefinedAttribute: $.ASN1Decoder<TeletexDomainDefinedAttribute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexDomainDefinedAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexDomainDefinedAttribute} The decoded data structure.
 */
export function _decode_TeletexDomainDefinedAttribute(el: _Element): TeletexDomainDefinedAttribute {
    if (!_cached_decoder_for_TeletexDomainDefinedAttribute) {
        _cached_decoder_for_TeletexDomainDefinedAttribute = function (
            el: _Element
        ): TeletexDomainDefinedAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "TeletexDomainDefinedAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: TeletexString;
            let value!: TeletexString;
            type_ = $._decodeTeletexString(sequence[0]);
            value = $._decodeTeletexString(sequence[1]);
            return new TeletexDomainDefinedAttribute(type_, value);
        };
    }
    return _cached_decoder_for_TeletexDomainDefinedAttribute(el);
}

let _cached_encoder_for_TeletexDomainDefinedAttribute: $.ASN1Encoder<TeletexDomainDefinedAttribute> | null = null;

/**
 * @summary Encodes a(n) TeletexDomainDefinedAttribute into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexDomainDefinedAttribute, encoded as an ASN.1 Element.
 */
export function _encode_TeletexDomainDefinedAttribute(
    value: TeletexDomainDefinedAttribute,
    elGetter: $.ASN1Encoder<TeletexDomainDefinedAttribute>
): _Element {
    if (!_cached_encoder_for_TeletexDomainDefinedAttribute) {
        _cached_encoder_for_TeletexDomainDefinedAttribute = function (
            value: TeletexDomainDefinedAttribute        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeTeletexString(
                            value.type_,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeTeletexString(
                            value.value,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_TeletexDomainDefinedAttribute(value, elGetter);
}


/* eslint-enable */
