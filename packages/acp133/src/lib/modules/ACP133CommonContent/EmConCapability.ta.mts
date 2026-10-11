/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EmConCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmConCapability  ::=  BOOLEAN
 * ```
 */
export
type EmConCapability = BOOLEAN; // BooleanType
export const _decode_EmConCapability = $._decodeBoolean;
export const _encode_EmConCapability = $._encodeBoolean;


/* eslint-enable */
