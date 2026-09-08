/* eslint-disable */
import {
    GeneralizedTime,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ManagedObjectAccessFromTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManagedObjectAccessFromTime  ::=  GeneralizedTime
 * ```
 */
export
type ManagedObjectAccessFromTime = GeneralizedTime; // GeneralizedTime
export const _decode_ManagedObjectAccessFromTime = $._decodeGeneralizedTime;
export const _encode_ManagedObjectAccessFromTime = $._encodeGeneralizedTime;


/* eslint-enable */
