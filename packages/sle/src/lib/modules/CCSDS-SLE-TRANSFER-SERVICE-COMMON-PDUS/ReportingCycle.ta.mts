/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

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
export function _decode_ReportingCycle (el: _Element): ReportingCycle {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 2, 600)) {
        throw new ASN1OverflowError("ReportingCycle violates INTEGER (2..600)");
    }
    return _decoded;
}
export const _encode_ReportingCycle: $.ASN1Encoder<ReportingCycle> = $._encodeInteger;


/* eslint-enable */
