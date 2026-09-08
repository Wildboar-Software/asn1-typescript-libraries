/* eslint-disable */
import {
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TRFormatID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TRFormatID  ::=  INTEGER
 * ```
 */
export
type TRFormatID = INTEGER;
export const _decode_TRFormatID = $._decodeInteger;
export const _encode_TRFormatID = $._encodeInteger;


/* eslint-enable */
