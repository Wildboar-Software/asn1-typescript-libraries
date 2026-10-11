/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NoReplyConditionTime
 * @description
 *
 * INTEGER (5..30) seconds for call forwarding on no reply (3GPP TS 29.002
 * V19.1.0 clauses 7.6.4.7 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NoReplyConditionTime  ::=  INTEGER (5..30)
 * ```
 */
export
type NoReplyConditionTime = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) NoReplyConditionTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NoReplyConditionTime = (el: _Element): NoReplyConditionTime => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 5 || n > 30) {
        throw new ASN1OverflowError("NoReplyConditionTime violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) NoReplyConditionTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoReplyConditionTime, encoded as an ASN.1 Element.
 */
export const _encode_NoReplyConditionTime = $._encodeInteger;


/* eslint-enable */
