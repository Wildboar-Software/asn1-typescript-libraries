/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FQDN
 * @description
 *
 * Fully Qualified Domain Name used e.g. as PDN GW name or SCEF-ID (SIZE 9..255)
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FQDN  ::=   OCTET STRING (SIZE (9..255))
 * ```
 */
export
type FQDN = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) FQDN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FQDN = (el: _Element): FQDN => {
    const value = $._decodeOctetString(el);
    if (value.length < 9 || value.length > 255) {
        throw new ASN1SizeError("FQDN violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) FQDN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FQDN, encoded as an ASN.1 Element.
 */
export const _encode_FQDN = $._encodeOctetString;


/* eslint-enable */
