/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../constraints.mjs";

/**
 * @summary VcId
 * @description
 *
 * Virtual Channel identifier, an INTEGER from 0 through 63. It must be a valid
 * VCID for the transfer-frame version of the global VCID that contains it.
 * Annex comments in the return and CLTU books further limit the usable range:
 * TM 0 to 7, and AOS and USLP 0 to 63. ROCF also uses it as the telecommand VC
 * of a CLCW filter, for which the comment allows 0 to 63. FSP constrains the
 * integer to 0 through 63 and does not restate those per-version ranges. The
 * master-channel selection is a separate alternative of `GvcId` and is not a
 * numeric VCID.
 *
 * CCSDS 911.2-B-4 and 911.5-B-4, section 3.4.2.7.4 and annex A2.5. CCSDS
 * 912.1-B-5, annex A2.5. CCSDS 912.3-B-3, annex A2.5.
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
