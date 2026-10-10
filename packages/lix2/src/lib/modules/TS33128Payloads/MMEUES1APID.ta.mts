/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
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
export const _decode_MMEUES1APID = (el: _Element): MMEUES1APID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 4294967295n) {
        throw new ASN1OverflowError("MMEUES1APID violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) MMEUES1APID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMEUES1APID, encoded as an ASN.1 Element.
 */
export const _encode_MMEUES1APID = $._encodeInteger;


/* eslint-enable */
