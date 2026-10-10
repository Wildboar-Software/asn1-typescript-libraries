/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReferenceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferenceID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type ReferenceID = INTEGER;
export const _decode_ReferenceID = $._decodeInteger;
export const _encode_ReferenceID = $._encodeInteger;


/* eslint-enable */
