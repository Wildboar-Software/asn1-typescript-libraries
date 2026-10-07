/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TEID
 * @description
 *
 * Value part of the GTP Tunnel Endpoint Identifier, used to distinguish tunnels
 * between the same pair of entities. Encoding in 3GPP TS 29.060.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TEID  ::=  OCTET STRING (SIZE (4))
 * ```
 */
export
type TEID = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TEID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TEID = (el: _Element): TEID => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 4) {
        throw new ASN1SizeError("TEID violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) TEID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TEID, encoded as an ASN.1 Element.
 */
export const _encode_TEID = $._encodeOctetString;


/* eslint-enable */
