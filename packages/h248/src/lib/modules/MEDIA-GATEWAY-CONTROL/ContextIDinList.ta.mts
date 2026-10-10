/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ContextIDinList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextIDinList  ::=  INTEGER(0..4294967295)
 * ```
 */
export
type ContextIDinList = INTEGER;
export const _decode_ContextIDinList = $._decodeInteger;
export const _encode_ContextIDinList = $._encodeInteger;


/* eslint-enable */
