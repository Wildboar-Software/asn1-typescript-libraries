/* eslint-disable */
import {
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RepairActivityID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepairActivityID  ::=  INTEGER
 * ```
 */
export
type RepairActivityID = INTEGER;
export const _decode_RepairActivityID = $._decodeInteger;
export const _encode_RepairActivityID = $._encodeInteger;


/* eslint-enable */
