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
 * Virtual channel identifier inside a GvcId, from 0 through 63. Annex A further
 * limits the range by the transfer-frame version in that GVCID: TM is 0 through
 * 7 (3 bits); AOS, USLP, and TC are 0 through 63 (6 bits). CCSDS 912.1-B-5,
 * Annex A2.5.
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
