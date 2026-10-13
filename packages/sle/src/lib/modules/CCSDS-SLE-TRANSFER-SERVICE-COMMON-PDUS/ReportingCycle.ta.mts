/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReportingCycle
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportingCycle           ::=    INTEGER (2 .. 600)
 * ```
 */
export
type ReportingCycle = INTEGER;
export const _decode_ReportingCycle: $.ASN1Decoder<ReportingCycle> = $._decodeInteger;
export const _encode_ReportingCycle: $.ASN1Encoder<ReportingCycle> = $._encodeInteger;


/* eslint-enable */
