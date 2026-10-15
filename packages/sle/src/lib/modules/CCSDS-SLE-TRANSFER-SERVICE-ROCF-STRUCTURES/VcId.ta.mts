/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary VcId
 * @description
 * 
 * Virtual Channel Identifier. Used as the telemetry VCID inside a global VCID
 * and as the telecommand VC of a CLCW filter. The INTEGER allows 0..63. The
 * annex A comment gives the usable range as 0..7 for TM (3 bits), 0..63 for
 * AOS, 0..63 for USLP, and 0..63 for telecommand. Section 3.4.2.7.4 requires a
 * VCID that is valid for the frame version in references [3], [6], and [10].
 *
 * CCSDS 911.5-B-4, section 3.4.2.7.4 and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VcId                     ::=    INTEGER (0 .. 63)
 * ```
 */
export
type VcId = INTEGER;
export function _decode_VcId (el: _Element): VcId {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 0, 63)) {
        throw new ASN1OverflowError("VcId violates INTEGER (0..63)");
    }
    return _decoded;
}
export const _encode_VcId: $.ASN1Encoder<VcId> = $._encodeInteger;


/* eslint-enable */
