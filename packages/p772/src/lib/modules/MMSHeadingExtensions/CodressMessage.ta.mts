/* eslint-disable */
import {
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary CodressMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CodressMessage  ::=  INTEGER
 * ```
 */
export
type CodressMessage = INTEGER;
export const _decode_CodressMessage = $._decodeInteger;
export const _encode_CodressMessage = $._encodeInteger;

/* eslint-enable */
