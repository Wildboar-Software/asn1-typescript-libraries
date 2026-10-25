/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WebAccessCapability
 * @description
 *
 * Whether the entry can reach a web bulletin board to
 * download or access information. ACP 133 SUPP-1(A) does
 * not say which boolean value means the entry is
 * capable.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WebAccessCapability  ::=  BOOLEAN
 * ```
 */
export
type WebAccessCapability = BOOLEAN; // BooleanType
export const _decode_WebAccessCapability: $.ASN1Decoder<boolean> = $._decodeBoolean;
export const _encode_WebAccessCapability: $.ASN1Encoder<boolean> = $._encodeBoolean;


/* eslint-enable */
