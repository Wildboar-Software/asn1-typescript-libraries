/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary Priority
 * @description
 * 
 * Absolute priority. Annex A says 1 is the highest priority and 64 is the
 * lowest. In the absolute-priority scheme every priority is different.
 * 
 * CCSDS 912.3-B-3, annex A2.5 and section B2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Priority                 ::=  INTEGER (1 .. 64)
 * ```
 */
export
type Priority = INTEGER;
export function _decode_Priority (el: _Element): Priority {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 1, 64)) {
        throw new ASN1OverflowError("Priority violates INTEGER (1..64)");
    }
    return _decoded;
}
export const _encode_Priority: $.ASN1Encoder<Priority> = $._encodeInteger;


/* eslint-enable */
