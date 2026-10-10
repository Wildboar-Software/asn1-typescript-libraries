/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFUENGAPID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFUENGAPID  ::=  INTEGER (0..1099511627775)
 * ```
 */
export
type AMFUENGAPID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFUENGAPID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AMFUENGAPID = $._decodeInteger;

/**
 * @summary Encodes a(n) AMFUENGAPID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFUENGAPID, encoded as an ASN.1 Element.
 */
export const _encode_AMFUENGAPID = $._encodeInteger;


/* eslint-enable */
