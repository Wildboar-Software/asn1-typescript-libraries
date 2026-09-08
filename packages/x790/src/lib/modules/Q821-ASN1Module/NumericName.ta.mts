/* eslint-disable */
import {
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumericName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumericName  ::=  INTEGER
 * ```
 */
export
type NumericName = INTEGER;
export const _decode_NumericName = $._decodeInteger;
export const _encode_NumericName = $._encodeInteger;


/* eslint-enable */
