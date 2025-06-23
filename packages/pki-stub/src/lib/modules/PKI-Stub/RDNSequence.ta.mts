/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../PKI-Stub/RelativeDistinguishedName.ta.mjs";

/**
 * @summary RDNSequence
 * @description
 *
 * A sequence of relative distinguished names in an order that descends from the
 * root of the DIT.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RDNSequence  ::=  SEQUENCE OF RelativeDistinguishedName
 * ```
 */
export type RDNSequence = RelativeDistinguishedName[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) RDNSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RDNSequence} The decoded data structure.
 */
export const _decode_RDNSequence: $.ASN1Decoder<RDNSequence> = $._decodeSequenceOf<RelativeDistinguishedName>(
    () => _decode_RelativeDistinguishedName
);

/**
 * @summary Encodes a(n) RDNSequence into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNSequence, encoded as an ASN.1 Element.
 */
export const _encode_RDNSequence: $.ASN1Encoder<RDNSequence> = $._encodeSequenceOf<RelativeDistinguishedName>(
    () => _encode_RelativeDistinguishedName,
    $.BER
);

/* eslint-enable */
