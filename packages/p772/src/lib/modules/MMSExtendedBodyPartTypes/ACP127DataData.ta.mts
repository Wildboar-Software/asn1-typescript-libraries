/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_data_size } from "../MMSUpperBounds/ub-data-size.va.mjs";



/**
 * @summary ACP127DataData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACP127DataData  ::=  IA5String(SIZE (1..ub-data-size))
 * ```
 */
export
type ACP127DataData = IA5String; // IA5String
export function _decode_ACP127DataData (el: _Element): ACP127DataData {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > ub_data_size) {
        throw new ASN1SizeError("ACP127DataData violates SIZE constraint");
    }
    return value;
}
export const _encode_ACP127DataData = $._encodeIA5String;


/* eslint-enable */
