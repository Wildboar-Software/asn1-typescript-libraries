/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UESBI_IuB
 * @description
 *
 * UE Specific Behaviour Information Iu-B. See 3GPP TS 25.413. BIT STRING size
 * 1..128.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.6.20 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UESBI-IuB     ::=  BIT STRING (SIZE(1..128))
 * ```
 */
export
type UESBI_IuB = BIT_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) UESBI_IuB
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UESBI_IuB = (el: _Element): UESBI_IuB => {
    const value = $._decodeBitString(el);
    if (value.length < 1 || value.length > 128) {
        throw new ASN1SizeError("UESBI_IuB violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) UESBI_IuB into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UESBI_IuB, encoded as an ASN.1 Element.
 */
export const _encode_UESBI_IuB = $._encodeBitString;


/* eslint-enable */
