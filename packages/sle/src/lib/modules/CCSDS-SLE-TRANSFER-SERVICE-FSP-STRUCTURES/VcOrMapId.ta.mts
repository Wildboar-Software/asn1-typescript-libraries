/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary VcOrMapId
 * @description
 * 
 * Integer from 0 to 63 used both as a Virtual Channel identifier and as a MAP
 * identifier. Table 3-11 reports the VC of this service instance in this range.
 * The polling-vector and priority-list entries use the same range.
 * 
 * CCSDS 912.3-B-3, annex A2.5 and section 3.10.2.5 (table 3-11).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VcOrMapId                ::=    INTEGER (0 .. 63)
 * ```
 */
export
type VcOrMapId = INTEGER;
export function _decode_VcOrMapId (el: _Element): VcOrMapId {
    const _decoded = $._decodeInteger(el);
    if (!integerInRange(_decoded, 0, 63)) {
        throw new ASN1OverflowError("VcOrMapId violates INTEGER (0..63)");
    }
    return _decoded;
}
export const _encode_VcOrMapId: $.ASN1Encoder<VcOrMapId> = $._encodeInteger;


/* eslint-enable */
