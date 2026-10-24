/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResultCodeType
 * @description
 *
 * Result of a location request or of an individual positioning.
 * Category Om on LCS-RGMT-CDR, LCS-HGMT-CDR, LCS-VGMT-CDR, and
 * LCS-GNI-CDR: when the operator provisions it, it is always
 * present. TS 32.298 takes the result code defined in the OMA
 * Mobile Location Protocol.
 *
 * 3GPP TS 32.271 V12.1.0 clauses 6.1.3.2 and 6.1.3.3.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.2.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultCodeType  ::=  INTEGER ( 0 .. MAX )
 * ```
 */
export
type ResultCodeType = INTEGER;

export const _decode_ResultCodeType = (el: _Element): ResultCodeType => {
    const value = $._decodeInteger(el);
    if (value < 0) {
        throw new ASN1OverflowError("ResultCodeType violates INTEGER range");
    }
    return value;
};

export
const _encode_ResultCodeType: $.ASN1Encoder<ResultCodeType> = $._encodeInteger;

/* eslint-enable */
