/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../PKI-Stub/AttributeTypeAndValue.ta.mjs";

/**
 * @summary RelativeDistinguishedName
 * @description
 *
 * One RDN: a `SET SIZE (1..MAX)` of {@link AttributeTypeAndValue}. Order of
 * the attribute type-and-value pairs does not matter. A given attribute type
 * shall appear at most once. Each pair is a distinguished value of the named
 * entry (contexts on that value are not part of the RDN).
 *
 * Two RDNs match if, for every AVA in one, there is an AVA of the same type in
 * the other whose values match under that attribute type's equality matching
 * rule. Naming attributes use an assertion syntax identical to the attribute
 * syntax, and that equality rule is required to be commutative and transitive.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelativeDistinguishedName  ::=  SET SIZE (1..MAX) OF AttributeTypeAndValue
 * ```
 */
export type RelativeDistinguishedName = AttributeTypeAndValue[]; // SetOfType

/**
 * @summary Decodes an ASN.1 element into a(n) RelativeDistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelativeDistinguishedName} The decoded data structure.
 */
export const _decode_RelativeDistinguishedName: $.ASN1Decoder<RelativeDistinguishedName> = $._decodeSetOf<AttributeTypeAndValue>(
    () => _decode_AttributeTypeAndValue
);

/**
 * @summary Encodes a(n) RelativeDistinguishedName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelativeDistinguishedName, encoded as an ASN.1 Element.
 */
export const _encode_RelativeDistinguishedName: $.ASN1Encoder<RelativeDistinguishedName> = $._encodeSetOf<AttributeTypeAndValue>(
    () => _encode_AttributeTypeAndValue,
    $.BER
);

/* eslint-enable */
