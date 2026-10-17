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
 * Virtual Channel identifier inside a global VCID. It must be a valid VCID for
 * the Transfer Frame version of that global VCID. Annex A comments give the
 * ranges: TM 0 to 7, AOS 0 to 63, and USLP 0 to 63. The master-channel
 * selection is a separate alternative and is not a numeric VCID.
 *
 * CCSDS 911.2-B-4, sections 3.4.2.7.4 and 1.6.1.8.20.
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
