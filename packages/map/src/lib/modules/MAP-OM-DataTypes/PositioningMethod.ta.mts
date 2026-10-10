/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PositioningMethod
 * @description
 *
 * OCTET STRING (SIZE 1). Coded as in 3GPP TS 32.422 (3GPP TS 29.002 V19.1.0
 * clause 17.7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningMethod  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type PositioningMethod = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) PositioningMethod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PositioningMethod = (el: _Element): PositioningMethod => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("PositioningMethod violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) PositioningMethod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositioningMethod, encoded as an ASN.1 Element.
 */
export const _encode_PositioningMethod = $._encodeOctetString;


/* eslint-enable */
