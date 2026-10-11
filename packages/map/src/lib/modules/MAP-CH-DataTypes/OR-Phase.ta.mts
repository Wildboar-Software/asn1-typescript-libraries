/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OR_Phase
 * @description
 *
 * INTEGER (1..127) optimal-routeing capability (3GPP TS 29.002 V19.1.0 clauses
 * 10.1.3 and 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OR-Phase  ::=  INTEGER (1..127)
 * ```
 */
export
type OR_Phase = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) OR_Phase
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_OR_Phase = (el: _Element): OR_Phase => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > 127) {
        throw new ASN1OverflowError("OR_Phase violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) OR_Phase into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OR_Phase, encoded as an ASN.1 Element.
 */
export const _encode_OR_Phase = $._encodeInteger;


/* eslint-enable */
