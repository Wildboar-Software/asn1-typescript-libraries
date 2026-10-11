/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SupportedCCBS_Phase
 * @description
 *
 * INTEGER (1..127). Only 1 is used; 2–127 map to 1 (3GPP TS 29.002 V19.1.0
 * clause 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedCCBS-Phase  ::=  INTEGER (1..127)
 * ```
 */
export
type SupportedCCBS_Phase = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedCCBS_Phase
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SupportedCCBS_Phase = (el: _Element): SupportedCCBS_Phase => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > 127) {
        throw new ASN1OverflowError("SupportedCCBS_Phase violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) SupportedCCBS_Phase into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedCCBS_Phase, encoded as an ASN.1 Element.
 */
export const _encode_SupportedCCBS_Phase = $._encodeInteger;


/* eslint-enable */
