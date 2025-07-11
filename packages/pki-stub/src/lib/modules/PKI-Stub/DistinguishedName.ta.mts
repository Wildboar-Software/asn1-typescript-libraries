/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
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
 * DistinguishedName ::= RDNSequence
 * ```
 */
export type DistinguishedName = RDNSequence; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistinguishedName} The decoded data structure.
 */
export const _decode_DistinguishedName: $.ASN1Decoder<DistinguishedName> = _decode_RDNSequence;

/**
 * @summary Encodes a(n) DistinguishedName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistinguishedName, encoded as an ASN.1 Element.
 */
export const _encode_DistinguishedName: $.ASN1Encoder<DistinguishedName> = _encode_RDNSequence;

/* eslint-enable */
