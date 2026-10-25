/* eslint-disable */
import {
    type INTEGER,
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
export const _decode_RepairActivityID: $.ASN1Decoder<INTEGER> = $._decodeInteger;
export const _encode_RepairActivityID: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
