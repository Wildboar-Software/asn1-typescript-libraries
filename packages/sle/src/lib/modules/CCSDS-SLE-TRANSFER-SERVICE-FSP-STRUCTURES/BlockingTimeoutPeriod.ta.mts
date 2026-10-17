/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary BlockingTimeoutPeriod
 * @description
 * 
 * Milliseconds from insertion of the first Packet into a Frame Data Unit until
 * that unit is passed to the FOP, regardless of how many Packets it contains.
 * The period applies to all blocking on the VC, independent of MAP. Annex A
 * constrains it to 100 through 100000. The reported parameter is null when
 * blocking is off; that alternative is part of the GET-PARAMETER value, not of
 * this integer.
 * 
 * CCSDS 912.3-B-3, section 3.10.2.5 (table 3-11) and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockingTimeoutPeriod       ::=    INTEGER (100 .. 100000)
 * ```
 */
export
type BlockingTimeoutPeriod = INTEGER;
export function _decode_BlockingTimeoutPeriod (el: _Element): BlockingTimeoutPeriod {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 100, 100000)) {
        throw new ASN1OverflowError("BlockingTimeoutPeriod violates INTEGER (100..100000)");
    }
    return _decoded;
}
export const _encode_BlockingTimeoutPeriod: $.ASN1Encoder<BlockingTimeoutPeriod> = $._encodeInteger;


/* eslint-enable */
