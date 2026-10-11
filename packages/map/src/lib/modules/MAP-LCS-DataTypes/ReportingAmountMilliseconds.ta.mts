/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxReportingAmountMilliseconds } from "./maxReportingAmountMilliseconds.va.mjs";

/**
 * @summary ReportingAmountMilliseconds
 * @description
 *
 * INTEGER (1..maxReportingAmountMilliseconds) (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingAmountMilliseconds  ::=  INTEGER (1..maxReportingAmountMilliseconds)
 * ```
 */
export
type ReportingAmountMilliseconds = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingAmountMilliseconds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReportingAmountMilliseconds = (el: _Element): ReportingAmountMilliseconds => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > maxReportingAmountMilliseconds) {
        throw new ASN1OverflowError("ReportingAmountMilliseconds violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) ReportingAmountMilliseconds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingAmountMilliseconds, encoded as an ASN.1 Element.
 */
export const _encode_ReportingAmountMilliseconds = $._encodeInteger;


/* eslint-enable */
