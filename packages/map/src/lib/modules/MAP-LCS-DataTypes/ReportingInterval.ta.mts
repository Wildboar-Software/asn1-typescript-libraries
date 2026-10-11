/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxReportingInterval } from "./maxReportingInterval.va.mjs";

/**
 * @summary ReportingInterval
 * @description
 *
 * INTEGER (1..maxReportingInterval) seconds (3GPP TS 29.002 V19.1.0 clause
 * 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingInterval  ::=  INTEGER (1..maxReportingInterval)
 * ```
 */
export
type ReportingInterval = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingInterval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReportingInterval = (el: _Element): ReportingInterval => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > maxReportingInterval) {
        throw new ASN1OverflowError("ReportingInterval violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) ReportingInterval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingInterval, encoded as an ASN.1 Element.
 */
export const _encode_ReportingInterval = $._encodeInteger;


/* eslint-enable */
