/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";




import { integerInRange } from "../../constraints.mjs";

/**
 * @summary Apid
 * @description
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
