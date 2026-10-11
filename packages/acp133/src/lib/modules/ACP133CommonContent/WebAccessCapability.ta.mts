/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WebAccessCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WebAccessCapability  ::=  BOOLEAN
 * ```
 */
export
type WebAccessCapability = BOOLEAN; // BooleanType
export const _decode_WebAccessCapability = $._decodeBoolean;
export const _encode_WebAccessCapability = $._encodeBoolean;


/* eslint-enable */
