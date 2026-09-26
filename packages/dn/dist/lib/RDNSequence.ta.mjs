import * as $ from "@wildboar/asn1/functional";
import { _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName, } from "./RelativeDistinguishedName.ta.mjs";
/**
 * @summary Decodes an ASN.1 element into a(n) RDNSequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RDNSequence} The decoded data structure.
 */
export const _decode_RDNSequence = $._decodeSequenceOf(() => _decode_RelativeDistinguishedName);
/**
 * @summary Encodes a(n) RDNSequence into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDNSequence, encoded as an ASN.1 Element.
 */
export const _encode_RDNSequence = $._encodeSequenceOf(() => _encode_RelativeDistinguishedName, $.BER);
/* eslint-enable */
