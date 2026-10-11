/* eslint-disable */
import {
    ASN1Element as _Element,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SuppressionOfAnnouncement
 * @description
 *
 * NULL. Use and presence as in 3GPP TS 23.078 (3GPP TS 29.002 V19.1.0 clauses
 * 10.1.3 and 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuppressionOfAnnouncement  ::=  NULL
 * ```
 */
export
type SuppressionOfAnnouncement = NULL; // NullType

/**
 * @summary Decodes an ASN.1 element into a(n) SuppressionOfAnnouncement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SuppressionOfAnnouncement = $._decodeNull;

/**
 * @summary Encodes a(n) SuppressionOfAnnouncement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuppressionOfAnnouncement, encoded as an ASN.1 Element.
 */
export const _encode_SuppressionOfAnnouncement = $._encodeNull;


/* eslint-enable */
