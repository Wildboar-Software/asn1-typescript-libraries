import { _decode_RDNSequence, _encode_RDNSequence, } from "./RDNSequence.ta.mjs";
/**
 * @summary Decodes an ASN.1 element into a(n) DistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DistinguishedName} The decoded data structure.
 */
export const _decode_DistinguishedName = _decode_RDNSequence;
/**
 * @summary Encodes a(n) DistinguishedName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistinguishedName, encoded as an ASN.1 Element.
 */
export const _encode_DistinguishedName = _encode_RDNSequence;
/* eslint-enable */
