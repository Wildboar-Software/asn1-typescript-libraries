import * as $ from "@wildboar/asn1/functional";
import { _decode_RDNSequence, _encode_RDNSequence, } from "./RDNSequence.ta.mjs";
/**
 * @summary Decodes an ASN.1 element into a(n) Name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Name} The decoded data structure.
 */
export const _decode_Name = $._decode_inextensible_choice({
    "UNIVERSAL 16": ["rdnSequence", _decode_RDNSequence],
});
/**
 * @summary Encodes a(n) Name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Name, encoded as an ASN.1 Element.
 */
export const _encode_Name = $._encode_choice({
    rdnSequence: _encode_RDNSequence,
}, $.BER);
/* eslint-enable */
