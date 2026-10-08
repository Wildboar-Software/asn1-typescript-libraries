/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CSG_Id
 * @description
 *
 * Closed Subscriber Group identity, coded according to 3GPP TS 23.003 as a BIT
 * STRING of 27 bits (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSG-Id  ::=  BIT STRING (SIZE (27))
 * ```
 */
export
type CSG_Id = BIT_STRING;

/**
 * @summary Decodes an ASN.1 element into a(n) CSG_Id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CSG_Id = (el: _Element): CSG_Id => {
    const value = $._decodeBitString(el);
    if (value.length < 27 || value.length > 27) {
        throw new ASN1SizeError("CSG_Id violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CSG_Id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSG_Id, encoded as an ASN.1 Element.
 */
export const _encode_CSG_Id = $._encodeBitString;


/* eslint-enable */
