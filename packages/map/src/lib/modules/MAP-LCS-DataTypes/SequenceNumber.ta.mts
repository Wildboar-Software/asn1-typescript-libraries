/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxReportingAmount } from "./maxReportingAmount.va.mjs";

/**
 * @summary SequenceNumber
 * @description
 *
 * INTEGER (1..maxReportingAmount). First report is 1; H-GMLC knows the
 * procedure is complete when it reaches reportingAmount (3GPP TS 29.002 V19.1.0
 * clauses 7.6.11.32 and 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SequenceNumber  ::=  INTEGER (1..maxReportingAmount)
 * ```
 */
export
type SequenceNumber = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SequenceNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SequenceNumber = (el: _Element): SequenceNumber => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > maxReportingAmount) {
        throw new ASN1OverflowError("SequenceNumber violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) SequenceNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceNumber, encoded as an ASN.1 Element.
 */
export const _encode_SequenceNumber = $._encodeInteger;


/* eslint-enable */
