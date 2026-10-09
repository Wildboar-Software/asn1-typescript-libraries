/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiameterIdentity
 * @description
 *
 * Diameter identity (name or realm). Size 9..255 octets. Content is defined in
 * IETF RFC 3588. Used for MME Name, SGSN Name/Realm, 3GPP AAA Server Name, and
 * similar Diameter identities.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8, 7.6.2.65, 7.6.2.68 and 7.6.2.69).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiameterIdentity  ::=  OCTET STRING (SIZE(9..255))
 * ```
 */
export
type DiameterIdentity = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) DiameterIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_DiameterIdentity = (el: _Element): DiameterIdentity => {
    const value = $._decodeOctetString(el);
    if (value.length < 9 || value.length > 255) {
        throw new ASN1SizeError("DiameterIdentity violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) DiameterIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiameterIdentity, encoded as an ASN.1 Element.
 */
export const _encode_DiameterIdentity = $._encodeOctetString;


/* eslint-enable */
