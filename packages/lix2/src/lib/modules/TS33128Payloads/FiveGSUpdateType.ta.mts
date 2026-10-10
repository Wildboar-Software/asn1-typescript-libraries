/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSUpdateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSUpdateType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type FiveGSUpdateType = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSUpdateType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_FiveGSUpdateType = (el: _Element): FiveGSUpdateType => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("FiveGSUpdateType violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) FiveGSUpdateType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSUpdateType, encoded as an ASN.1 Element.
 */
export const _encode_FiveGSUpdateType = $._encodeOctetString;


/* eslint-enable */
