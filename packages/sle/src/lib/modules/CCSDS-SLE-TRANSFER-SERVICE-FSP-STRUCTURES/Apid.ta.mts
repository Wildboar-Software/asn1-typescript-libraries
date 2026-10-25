/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary Apid
 * @description
 * 
 * Application Process Identifier. Annex A constrains it to 0 through 2047.
 * Section 1.6.1.6 defines APID by reference to the Space Packet Protocol, CCSDS
 * 133.0-B-1, and this issue does not restate that definition. A Packet whose
 * APID is outside the instance list is rejected with `invalidPacketApid`,
 * unless the list is `any`.
 * 
 * CCSDS 912.3-B-3, sections 1.6.1.6 and 3.6.2.18.1, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Apid                     ::=    INTEGER (0 .. 2047)
 * ```
 */
export
type Apid = INTEGER;
export function _decode_Apid (el: _Element): Apid {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 0, 2047)) {
        throw new ASN1OverflowError("Apid violates INTEGER (0..2047)");
    }
    return _decoded;
}
export const _encode_Apid: $.ASN1Encoder<Apid> = $._encodeInteger;


/* eslint-enable */
