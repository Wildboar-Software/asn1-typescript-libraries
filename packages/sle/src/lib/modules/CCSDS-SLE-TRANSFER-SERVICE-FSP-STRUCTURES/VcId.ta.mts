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
 * Virtual Channel identifier. Annex A constrains it to 0 through 63. Virtual
 * Channel is a term of CCSDS 232.0-B-3, cited in section 1.6.1.4. This issue
 * does not further define the numbering. One service instance uses one VC, and
 * only one of FSP or TC VCA is allowed on a given VC.
 * 
 * CCSDS 912.3-B-3, section 1.6.1.4, annex A2.5, and annex B1.
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
