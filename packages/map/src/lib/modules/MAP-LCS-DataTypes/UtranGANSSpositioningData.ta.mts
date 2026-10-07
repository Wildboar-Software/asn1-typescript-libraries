/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxUtranGANSSpositioningData } from "./maxUtranGANSSpositioningData.va.mjs";

/**
 * @summary UtranGANSSpositioningData
 * @description
 *
 * GANSS-PositioningDataSet of RANAP PositionData (3GPP TS 25.413), 1..9 octets
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.11.11D and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UtranGANSSpositioningData  ::=  OCTET STRING (SIZE (1..maxUtranGANSSpositioningData))
 * ```
 */
export
type UtranGANSSpositioningData = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UtranGANSSpositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UtranGANSSpositioningData = (el: _Element): UtranGANSSpositioningData => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > maxUtranGANSSpositioningData) {
        throw new ASN1SizeError("UtranGANSSpositioningData violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) UtranGANSSpositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UtranGANSSpositioningData, encoded as an ASN.1 Element.
 */
export const _encode_UtranGANSSpositioningData = $._encodeOctetString;


/* eslint-enable */
