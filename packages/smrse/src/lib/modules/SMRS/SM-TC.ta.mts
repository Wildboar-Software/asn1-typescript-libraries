/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SM_TC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SM-TC  ::=  INTEGER (0..65535)
 * ```
 *
 * Tariff class carried in `RPDataMT.mt-tariffClass`. TR 101 635 does
 * not define this type or assign meanings to the integers. The SMRP
 * profile this module follows calls the field a service tariff.
 */
export
type SM_TC = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SM_TC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SM_TC = (el: _Element): SM_TC => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 65535) {
        throw new ASN1OverflowError("SM_TC violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) SM_TC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SM_TC, encoded as an ASN.1 Element.
 */
export const _encode_SM_TC = $._encodeInteger;


/* eslint-enable */
