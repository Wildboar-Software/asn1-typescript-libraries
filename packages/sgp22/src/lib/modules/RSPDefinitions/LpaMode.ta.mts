/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LpaMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LpaMode  ::=  INTEGER
 * ```
 */
export
type LpaMode = INTEGER;
export const _decode_LpaMode = $._decodeInteger;
export const _encode_LpaMode = $._encodeInteger;


/* eslint-enable */
