/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GERANPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GERANPositioningData  ::=  OCTET STRING
 * ```
 */
export
type GERANPositioningData = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GERANPositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GERANPositioningData = $._decodeOctetString;

/**
 * @summary Encodes a(n) GERANPositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GERANPositioningData, encoded as an ASN.1 Element.
 */
export const _encode_GERANPositioningData = $._encodeOctetString;


/* eslint-enable */
