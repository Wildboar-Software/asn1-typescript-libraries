/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Local_GroupID
 * @description
 *
 * Local group ID defined by an operator identified by the PLMN-ID (SIZE 1..10).
 * Details in 3GPP TS 29.272. (3GPP TS 29.002 V19.1.0 clauses 7.6.3.102 and
 * 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Local-GroupID  ::=  OCTET STRING (SIZE (1..10))
 * ```
 */
export
type Local_GroupID = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Local_GroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Local_GroupID = (el: _Element): Local_GroupID => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 10) {
        throw new ASN1SizeError("Local_GroupID violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Local_GroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Local_GroupID, encoded as an ASN.1 Element.
 */
export const _encode_Local_GroupID = $._encodeOctetString;


/* eslint-enable */
