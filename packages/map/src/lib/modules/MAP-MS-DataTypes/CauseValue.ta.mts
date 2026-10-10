/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseValue
 * @description
 *
 * Cause value extracted from the Cause parameter in ITU-T Recommendation Q.763.
 * Use of the cause value refers to ITU-T Recommendation Q.850 (3GPP TS 29.002
 * V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseValue  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type CauseValue = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) CauseValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CauseValue = (el: _Element): CauseValue => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("CauseValue violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CauseValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CauseValue, encoded as an ASN.1 Element.
 */
export const _encode_CauseValue = $._encodeOctetString;


/* eslint-enable */
