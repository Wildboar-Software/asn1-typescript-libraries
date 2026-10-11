/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxReportingAmount } from "./maxReportingAmount.va.mjs";

/**
 * @summary ReportingAmount
 * @description
 *
 * INTEGER (1..maxReportingAmount) (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingAmount  ::=  INTEGER (1..maxReportingAmount)
 * ```
 */
export
type ReportingAmount = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportingAmount
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ReportingAmount = (el: _Element): ReportingAmount => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > maxReportingAmount) {
        throw new ASN1OverflowError("ReportingAmount violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) ReportingAmount into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingAmount, encoded as an ASN.1 Element.
 */
export const _encode_ReportingAmount = $._encodeInteger;


/* eslint-enable */
