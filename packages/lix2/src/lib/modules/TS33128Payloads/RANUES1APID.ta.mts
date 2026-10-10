/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANUES1APID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUES1APID  ::=  INTEGER (0..16777215)
 * ```
 */
export
type RANUES1APID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) RANUES1APID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RANUES1APID = $._decodeInteger;

/**
 * @summary Encodes a(n) RANUES1APID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANUES1APID, encoded as an ASN.1 Element.
 */
export const _encode_RANUES1APID = $._encodeInteger;


/* eslint-enable */
