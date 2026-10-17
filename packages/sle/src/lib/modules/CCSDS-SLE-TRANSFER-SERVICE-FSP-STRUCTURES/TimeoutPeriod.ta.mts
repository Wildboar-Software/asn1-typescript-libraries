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
 * Return timeout, in seconds. Annex A constrains it to 1 through 600. It is the
 * maximum time from invocation of a confirmed FSP operation until the invoker
 * receives the return. If the return is missing when the period expires, the
 * invoker invokes FSP-PEER-ABORT with diagnostic `return timeout`. The period
 * accounts for user and provider performance and for delay in the underlying
 * communications service. Generation of the return does not depend on human
 * interaction. The same numeric range is used for the minimum reporting cycle,
 * which is a separate parameter.
 * 
 * CCSDS 912.3-B-3, sections 3.10.2.5 (table 3-11) and 4.1.3, and annex A2.5.
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
