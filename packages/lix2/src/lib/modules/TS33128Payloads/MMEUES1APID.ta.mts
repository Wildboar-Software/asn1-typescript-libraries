/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEUES1APID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEUES1APID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type MMEUES1APID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) MMEUES1APID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMEUES1APID = $._decodeInteger;

/**
 * @summary Encodes a(n) MMEUES1APID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEUES1APID, encoded as an ASN.1 Element.
 */
export const _encode_MMEUES1APID = $._encodeInteger;


/* eslint-enable */
