/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Restoration_Priority
 * @description
 *
 * One octet encoding Restoration Priority as the binary value of
 * Restoration-Priority in 3GPP TS 29.272.
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Restoration-Priority  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type Restoration_Priority = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Restoration_Priority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Restoration_Priority = (el: _Element): Restoration_Priority => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("Restoration_Priority violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Restoration_Priority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Restoration_Priority, encoded as an ASN.1 Element.
 */
export const _encode_Restoration_Priority = $._encodeOctetString;


/* eslint-enable */
