/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxPositioningDataInformation } from "./maxPositioningDataInformation.va.mjs";

/**
 * @summary PositioningDataInformation
 * @description
 *
 * GERAN positioning data as in 3GPP TS 49.031, 2..10 octets (3GPP TS 29.002
 * V19.1.0 clauses 7.6.11.11A and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositioningDataInformation  ::=  OCTET STRING (SIZE (2..maxPositioningDataInformation))
 * ```
 */
export
type PositioningDataInformation = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) PositioningDataInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PositioningDataInformation = (el: _Element): PositioningDataInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > maxPositioningDataInformation) {
        throw new ASN1SizeError("PositioningDataInformation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) PositioningDataInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositioningDataInformation, encoded as an ASN.1 Element.
 */
export const _encode_PositioningDataInformation = $._encodeOctetString;


/* eslint-enable */
