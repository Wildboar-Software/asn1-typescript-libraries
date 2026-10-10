/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PGWRNSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGWRNSI  ::=  BOOLEAN
 * ```
 */
export
type PGWRNSI = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) PGWRNSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PGWRNSI = $._decodeBoolean;

/**
 * @summary Encodes a(n) PGWRNSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PGWRNSI, encoded as an ASN.1 Element.
 */
export const _encode_PGWRNSI = $._encodeBoolean;


/* eslint-enable */
