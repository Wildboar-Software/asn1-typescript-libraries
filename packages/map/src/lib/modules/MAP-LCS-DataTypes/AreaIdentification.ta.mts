/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AreaIdentification
 * @description
 *
 * OCTET STRING (2..7). Octets 1–3 MCC/MNC (filler 1111 if 2-digit MNC); 4–5
 * LAC; octet 6 RAC for RAI; 6–7 CI for CGI; 4–7 UC-Id for UTRAN cell (3GPP TS
 * 29.002 V19.1.0 clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaIdentification  ::=  OCTET STRING (SIZE (2..7))
 * ```
 */
export
type AreaIdentification = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) AreaIdentification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AreaIdentification = (el: _Element): AreaIdentification => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 7) {
        throw new ASN1SizeError("AreaIdentification violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) AreaIdentification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaIdentification, encoded as an ASN.1 Element.
 */
export const _encode_AreaIdentification = $._encodeOctetString;


/* eslint-enable */
