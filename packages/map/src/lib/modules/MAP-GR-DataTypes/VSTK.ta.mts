/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary VSTK
 * @description
 *
 * 16-octet VGCS/VBS Short Term Key (3GPP TS 43.020) (3GPP TS 29.002 V19.1.0
 * clauses 10.4.3 and 17.7.12).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VSTK  ::=  OCTET STRING (SIZE (16))
 * ```
 */
export
type VSTK = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) VSTK
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_VSTK = (el: _Element): VSTK => {
    const value = $._decodeOctetString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("VSTK violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) VSTK into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VSTK, encoded as an ASN.1 Element.
 */
export const _encode_VSTK = $._encodeOctetString;


/* eslint-enable */
