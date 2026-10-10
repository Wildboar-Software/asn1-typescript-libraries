/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellID  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type CellID = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) CellID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CellID = (el: _Element): CellID => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("CellID violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CellID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellID, encoded as an ASN.1 Element.
 */
export const _encode_CellID = $._encodeOctetString;


/* eslint-enable */
