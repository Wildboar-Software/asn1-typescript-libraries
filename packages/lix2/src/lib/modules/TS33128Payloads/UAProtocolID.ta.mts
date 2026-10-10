/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UAProtocolID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UAProtocolID  ::=  OCTET STRING (SIZE(5))
 * ```
 */
export
type UAProtocolID = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UAProtocolID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UAProtocolID = (el: _Element): UAProtocolID => {
    const value = $._decodeOctetString(el);
    if (value.length < 5 || value.length > 5) {
        throw new ASN1SizeError("UAProtocolID violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) UAProtocolID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UAProtocolID, encoded as an ASN.1 Element.
 */
export const _encode_UAProtocolID = $._encodeOctetString;


/* eslint-enable */
