/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxExt_GeographicalInformation } from "./maxExt-GeographicalInformation.va.mjs";

/**
 * @summary Ext_GeographicalInformation
 * @description
 *
 * 3GPP TS 23.032 shapes allowed: ellipsoid point with uncertainty
 * circle/ellipse, with altitude and uncertainty ellipsoid, ellipsoid arc,
 * ellipsoid point. Other type-of-shape invalid. One-octet value discarded if
 * Add-GeographicalInformation is in the same message; otherwise invalid (3GPP
 * TS 29.002 V19.1.0 clauses 7.6.11.11 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-GeographicalInformation  ::=  OCTET STRING (SIZE (1..maxExt-GeographicalInformation))
 * ```
 */
export
type Ext_GeographicalInformation = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_GeographicalInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Ext_GeographicalInformation = (el: _Element): Ext_GeographicalInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > maxExt_GeographicalInformation) {
        throw new ASN1SizeError("Ext_GeographicalInformation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) Ext_GeographicalInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_GeographicalInformation, encoded as an ASN.1 Element.
 */
export const _encode_Ext_GeographicalInformation = $._encodeOctetString;


/* eslint-enable */
