/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardingOptions
 * @description
 *
 * One octet: bit 8 notification to forwarding party; bit 7 redirecting
 * presentation; bit 6 notification to calling party; bits 4–3 forwarding reason
 * (not reachable, busy, no reply, unconditional in SRI result or deflection in
 * RCH). See 3GPP TS 22.082 (3GPP TS 29.002 V19.1.0 clauses 7.6.4.6 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingOptions  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type ForwardingOptions = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingOptions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ForwardingOptions = (el: _Element): ForwardingOptions => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("ForwardingOptions violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ForwardingOptions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingOptions, encoded as an ASN.1 Element.
 */
export const _encode_ForwardingOptions = $._encodeOctetString;


/* eslint-enable */
