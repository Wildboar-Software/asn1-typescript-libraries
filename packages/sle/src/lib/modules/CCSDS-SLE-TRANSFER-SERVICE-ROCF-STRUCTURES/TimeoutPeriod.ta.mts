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
 * return-timeout-period, in seconds, from 1 to 600. The maximum time from
 * invocation of a confirmed ROCF operation until the invoker receives the
 * return. Service management sets it. If the return is still missing when the
 * period expires, the invoker peer-aborts with the return-timeout diagnostic.
 * The period accounts for user and provider performance and for delay in the
 * communications service. Generation of the return must not depend on a human
 * action.
 *
 * CCSDS 911.5-B-4, section 4.1.3, table 3-11, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeoutPeriod            ::=    INTEGER (1 .. 600)
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
