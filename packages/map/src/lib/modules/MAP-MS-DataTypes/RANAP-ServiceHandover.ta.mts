/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANAP_ServiceHandover
 * @description
 *
 * Complete Service-Handover data type from 3GPP TS 25.413, encoded as mandated
 * there. Padding bits occupy the least significant bits.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.6.6 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANAP-ServiceHandover  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type RANAP_ServiceHandover = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) RANAP_ServiceHandover
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RANAP_ServiceHandover = (el: _Element): RANAP_ServiceHandover => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("RANAP_ServiceHandover violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) RANAP_ServiceHandover into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANAP_ServiceHandover, encoded as an ASN.1 Element.
 */
export const _encode_RANAP_ServiceHandover = $._encodeOctetString;


/* eslint-enable */
