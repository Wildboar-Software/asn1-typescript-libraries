/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANUENGAPID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUENGAPID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type RANUENGAPID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) RANUENGAPID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RANUENGAPID = $._decodeInteger;

/**
 * @summary Encodes a(n) RANUENGAPID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANUENGAPID, encoded as an ASN.1 Element.
 */
export const _encode_RANUENGAPID = $._encodeInteger;


/* eslint-enable */
