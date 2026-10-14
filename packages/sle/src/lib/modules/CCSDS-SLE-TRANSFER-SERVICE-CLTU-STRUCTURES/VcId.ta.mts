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
