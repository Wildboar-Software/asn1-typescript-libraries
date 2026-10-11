/* eslint-disable */
import {
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorText
 * @description
 * 
 * Optional IA5String explanation attached to an error code (clause 7.1.20). Not
 * a substitute for the registered code.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorText  ::=  IA5String
 * ```
 */
export
type ErrorText = IA5String; // IA5String
export const _decode_ErrorText = $._decodeIA5String;
export const _encode_ErrorText = $._encodeIA5String;


/* eslint-enable */
