/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MaxMessageSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaxMessageSize  ::=  INTEGER
 * ```
 */
export
type MaxMessageSize = INTEGER;
export const _decode_MaxMessageSize = $._decodeInteger;
export const _encode_MaxMessageSize = $._encodeInteger;


/* eslint-enable */
