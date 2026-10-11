/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxReportingIntervalMilliseconds } from "./maxReportingIntervalMilliseconds.va.mjs";

/**
 * @summary ReportingIntervalMilliseconds
 * @description
 *
 * INTEGER (1..maxReportingIntervalMilliseconds) (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingIntervalMilliseconds  ::=  INTEGER (1..maxReportingIntervalMilliseconds)
 * ```
 */
export
type ReportingIntervalMilliseconds = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingIntervalMilliseconds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReportingIntervalMilliseconds = (el: _Element): ReportingIntervalMilliseconds => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > maxReportingIntervalMilliseconds) {
        throw new ASN1OverflowError("ReportingIntervalMilliseconds violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) ReportingIntervalMilliseconds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingIntervalMilliseconds, encoded as an ASN.1 Element.
 */
export const _encode_ReportingIntervalMilliseconds = $._encodeInteger;


/* eslint-enable */
