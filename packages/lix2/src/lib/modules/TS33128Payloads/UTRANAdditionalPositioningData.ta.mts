/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UTRANAdditionalPositioningData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UTRANAdditionalPositioningData  ::=  OCTET STRING
 * ```
 */
export
type UTRANAdditionalPositioningData = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) UTRANAdditionalPositioningData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UTRANAdditionalPositioningData = $._decodeOctetString;

/**
 * @summary Encodes a(n) UTRANAdditionalPositioningData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UTRANAdditionalPositioningData, encoded as an ASN.1 Element.
 */
export const _encode_UTRANAdditionalPositioningData = $._encodeOctetString;


/* eslint-enable */
