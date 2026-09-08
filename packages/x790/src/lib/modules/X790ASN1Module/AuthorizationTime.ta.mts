/* eslint-disable */
import {
    GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AuthorizationTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizationTime  ::=  GeneralizedTime
 * ```
 */
export
type AuthorizationTime = GeneralizedTime; // GeneralizedTime
export const _decode_AuthorizationTime = $._decodeGeneralizedTime;
export const _encode_AuthorizationTime = $._encodeGeneralizedTime;


/* eslint-enable */
