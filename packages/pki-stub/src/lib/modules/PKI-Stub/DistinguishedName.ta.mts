/* eslint-disable */
import { ASN1Element as _Element } from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1/functional@11";
import {
    RDNSequence,
    _decode_RDNSequence,
    _encode_RDNSequence,
} from "../PKI-Stub/RDNSequence.ta.mjs";

/**
 * @summary DistinguishedName
 * @description
 *
 * A sequence of relative distinguished names in an order that descends from the
 * root of the DIT.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DistinguishedName  ::=  RDNSequence
 * ```
 */
export type DistinguishedName = RDNSequence; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistinguishedName} The decoded data structure.
 */
export function _decode_DistinguishedName(el: _Element): DistinguishedName {
    return _decode_RDNSequence(el);
}

/**
 * @summary Encodes a(n) DistinguishedName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_DistinguishedName(
    value: DistinguishedName,
    elGetter: $.ASN1Encoder<DistinguishedName>
) {
    return _encode_RDNSequence(value, elGetter);
}


/* eslint-enable */
