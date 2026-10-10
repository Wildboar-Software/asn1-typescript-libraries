/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxUtranPositioningDataInfo } from "./maxUtranPositioningDataInfo.va.mjs";

/**
 * @summary UtranPositioningDataInfo
 * @description
 *
 * positioningDataDiscriminator and positioningDataSet of RANAP PositionData
 * (3GPP TS 25.413), 3..11 octets (3GPP TS 29.002 V19.1.0 clauses 7.6.11.11B and
 * 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UtranPositioningDataInfo  ::=  OCTET STRING (SIZE (3..maxUtranPositioningDataInfo))
 * ```
 */
export
type UtranPositioningDataInfo = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UtranPositioningDataInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UtranPositioningDataInfo = (el: _Element): UtranPositioningDataInfo => {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > maxUtranPositioningDataInfo) {
        throw new ASN1SizeError("UtranPositioningDataInfo violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) UtranPositioningDataInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UtranPositioningDataInfo, encoded as an ASN.1 Element.
 */
export const _encode_UtranPositioningDataInfo = $._encodeOctetString;


/* eslint-enable */
