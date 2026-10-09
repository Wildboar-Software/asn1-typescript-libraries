/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary BillingIndicators
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BillingIndicators  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type BillingIndicators = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) BillingIndicators
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BillingIndicators = (el: _Element): BillingIndicators => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 4) {
        throw new ASN1SizeError("BillingIndicators violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) BillingIndicators into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BillingIndicators, encoded as an ASN.1 Element.
 */
export const _encode_BillingIndicators = $._encodeOctetString;


/* eslint-enable */
