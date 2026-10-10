/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LMSI
 * @description
 *
 * Local Mobile Station Identity: a local identity allocated by the VLR for
 * internal management of subscriber data. Size 4 octets. Shall not be sent to
 * the SGSN. In `IMSI-WithLMSI`, all-zero means LMSI is not in use.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.16 and 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LMSI  ::=  OCTET STRING (SIZE (4))
 * ```
 */
export
type LMSI = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) LMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LMSI = (el: _Element): LMSI => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 4) {
        throw new ASN1SizeError("LMSI violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) LMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LMSI, encoded as an ASN.1 Element.
 */
export const _encode_LMSI = $._encodeOctetString;


/* eslint-enable */
