/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SM_RP_SMEA
 * @description
 *
 * OCTET STRING (1..12): 3GPP TS 23.040 address field (length, type-of-address,
 * value) (3GPP TS 29.002 V19.1.0 clause 17.7.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-RP-SMEA  ::=  OCTET STRING (SIZE (1..12))
 * ```
 */
export
type SM_RP_SMEA = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) SM_RP_SMEA
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SM_RP_SMEA = (el: _Element): SM_RP_SMEA => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 12) {
        throw new ASN1SizeError("SM_RP_SMEA violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SM_RP_SMEA into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_RP_SMEA, encoded as an ASN.1 Element.
 */
export const _encode_SM_RP_SMEA = $._encodeOctetString;


/* eslint-enable */
