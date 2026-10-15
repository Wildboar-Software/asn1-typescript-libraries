/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary TimeoutPeriod
 * @description
 * 
 * return-timeout-period in seconds, from 1 through 600. If a confirmed
 * operation's return is still missing when this period expires, the invoker
 * sends CLTU-PEER-ABORT with diagnostic return timeout. CCSDS 912.1-B-5, table
 * 3-11 and section 4.1.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeoutPeriod                  ::=    INTEGER (1 .. 600)
 * ```
 */
export
type TimeoutPeriod = INTEGER;
export function _decode_TimeoutPeriod (el: _Element): TimeoutPeriod {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 1, 600)) {
        throw new ASN1OverflowError("TimeoutPeriod violates INTEGER (1..600)");
    }
    return _decoded;
}
export const _encode_TimeoutPeriod: $.ASN1Encoder<TimeoutPeriod> = $._encodeInteger;


/* eslint-enable */
