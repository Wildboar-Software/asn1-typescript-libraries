/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MaxMessageSize
 * @description
 *
 * Largest message, in kilobytes, that the mailbox for
 * this entry can receive. ACP 133 SUPP-1(A).
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
