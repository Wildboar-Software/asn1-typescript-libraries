/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxUtranAdditionalPositioningData } from "./maxUtranAdditionalPositioningData.va.mjs";

/**
 * @summary UtranAdditionalPositioningData
 * @description
 *
 * Additional-PositioningDataSet of RANAP PositionData (3GPP TS 25.413), 1..8
 * octets (3GPP TS 29.002 V19.1.0 clauses 7.6.11.11E and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UtranAdditionalPositioningData  ::=  OCTET STRING (SIZE (1..maxUtranAdditionalPositioningData))
 * ```
 */
export
type UtranAdditionalPositioningData = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UtranAdditionalPositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UtranAdditionalPositioningData = (el: _Element): UtranAdditionalPositioningData => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > maxUtranAdditionalPositioningData) {
        throw new ASN1SizeError("UtranAdditionalPositioningData violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) UtranAdditionalPositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UtranAdditionalPositioningData, encoded as an ASN.1 Element.
 */
export const _encode_UtranAdditionalPositioningData = $._encodeOctetString;


/* eslint-enable */
