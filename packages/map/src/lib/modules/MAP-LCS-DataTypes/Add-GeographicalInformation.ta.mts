/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxAdd_GeographicalInformation } from "./maxAdd-GeographicalInformation.va.mjs";

/**
 * @summary Add_GeographicalInformation
 * @description
 *
 * Any 3GPP TS 23.032 shape. Discarded if a valid Ext-GeographicalInformation is
 * in the same message. Invalid shape/length treated as invalid data if not
 * received with a valid Ext-GeographicalInformation (3GPP TS 29.002 V19.1.0
 * clauses 7.6.11.21 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Add-GeographicalInformation  ::=  OCTET STRING (SIZE (1..maxAdd-GeographicalInformation))
 * ```
 */
export
type Add_GeographicalInformation = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Add_GeographicalInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Add_GeographicalInformation = (el: _Element): Add_GeographicalInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > maxAdd_GeographicalInformation) {
        throw new ASN1SizeError("Add_GeographicalInformation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Add_GeographicalInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Add_GeographicalInformation, encoded as an ASN.1 Element.
 */
export const _encode_Add_GeographicalInformation = $._encodeOctetString;


/* eslint-enable */
