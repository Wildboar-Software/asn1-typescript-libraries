/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSTPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSTPDU  ::=  OCTET STRING (SIZE(1..270))
 * ```
 */
export
type SMSTPDU = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) SMSTPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SMSTPDU = (el: _Element): SMSTPDU => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 270) {
        throw new ASN1SizeError("SMSTPDU violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SMSTPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSTPDU, encoded as an ASN.1 Element.
 */
export const _encode_SMSTPDU = $._encodeOctetString;


/* eslint-enable */
