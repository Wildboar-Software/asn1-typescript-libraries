/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxNumOfPDP_Contexts } from "./maxNumOfPDP-Contexts.va.mjs";

/**
 * @summary ContextId
 * @description
 *
 * Identifies a PDP context (or EPS APN configuration) for the subscriber.
 * INTEGER 1..maxNumOfPDP-Contexts (3GPP TS 29.002 V19.1.0 clauses 7.6.3.55 and
 * 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextId  ::=  INTEGER (1..maxNumOfPDP-Contexts)
 * ```
 */
export
type ContextId = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ContextId = (el: _Element): ContextId => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > maxNumOfPDP_Contexts) {
        throw new ASN1OverflowError("ContextId violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) ContextId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextId, encoded as an ASN.1 Element.
 */
export const _encode_ContextId = $._encodeInteger;


/* eslint-enable */
