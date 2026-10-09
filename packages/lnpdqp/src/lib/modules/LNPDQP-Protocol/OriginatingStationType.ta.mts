/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary OriginatingStationType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatingStationType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type OriginatingStationType = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatingStationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_OriginatingStationType = (el: _Element): OriginatingStationType => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("OriginatingStationType violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) OriginatingStationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatingStationType, encoded as an ASN.1 Element.
 */
export const _encode_OriginatingStationType = $._encodeOctetString;


/* eslint-enable */
