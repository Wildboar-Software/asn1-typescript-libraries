/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UTRANGANSSPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRANGANSSPositioningData  ::=  OCTET STRING
 * ```
 */
export
type UTRANGANSSPositioningData = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UTRANGANSSPositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UTRANGANSSPositioningData = $._decodeOctetString;

/**
 * @summary Encodes a(n) UTRANGANSSPositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UTRANGANSSPositioningData, encoded as an ASN.1 Element.
 */
export const _encode_UTRANGANSSPositioningData = $._encodeOctetString;


/* eslint-enable */
