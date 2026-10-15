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
 * `return-timeout-period`, in seconds, from 1 to 600. Service management sets
 * it. It is the maximum time from invocation of a confirmed RAF operation until
 * the invoker receives the return. On expiry the invoker aborts the association
 * with RAF-PEER-ABORT diagnostic `return timeout`. The period accounts for user
 * and provider performance and for communications delay. Generating the return
 * must not wait on a person. Annex A states that the integer is measured in
 * seconds.
 * 
 * CCSDS 911.1-B-5, table 3-11, sections 4.1.3 and 3.10, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeoutPeriod                  ::=  INTEGER (1 .. 600)
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
