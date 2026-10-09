/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACP127DataParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACP127DataParameters  ::=  INTEGER
 * ```
 */
export
type ACP127DataParameters = INTEGER;
export const _decode_ACP127DataParameters = $._decodeInteger;
export const _encode_ACP127DataParameters = $._encodeInteger;


/* eslint-enable */
