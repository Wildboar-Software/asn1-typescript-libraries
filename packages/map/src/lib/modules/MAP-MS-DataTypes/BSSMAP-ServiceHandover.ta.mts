/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BSSMAP_ServiceHandover
 * @description
 *
 * BSSMAP Service Handover information element as defined in 3GPP TS 48.008
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.6.5 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BSSMAP-ServiceHandover  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type BSSMAP_ServiceHandover = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) BSSMAP_ServiceHandover
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BSSMAP_ServiceHandover = (el: _Element): BSSMAP_ServiceHandover => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("BSSMAP_ServiceHandover violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) BSSMAP_ServiceHandover into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSSMAP_ServiceHandover, encoded as an ASN.1 Element.
 */
export const _encode_BSSMAP_ServiceHandover = $._encodeOctetString;


/* eslint-enable */
