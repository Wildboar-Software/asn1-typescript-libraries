/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GERANGANSSPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GERANGANSSPositioningData  ::=  OCTET STRING
 * ```
 */
export
type GERANGANSSPositioningData = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) GERANGANSSPositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GERANGANSSPositioningData = $._decodeOctetString;

/**
 * @summary Encodes a(n) GERANGANSSPositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GERANGANSSPositioningData, encoded as an ASN.1 Element.
 */
export const _encode_GERANGANSSPositioningData = $._encodeOctetString;


/* eslint-enable */
