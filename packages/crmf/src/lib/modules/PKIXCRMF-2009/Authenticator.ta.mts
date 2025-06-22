/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Authenticator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Authenticator  ::=  UTF8String
 * ```
 */
export type Authenticator = UTF8String; // UTF8String




export const _decode_Authenticator = $._decodeUTF8String;




export const _encode_Authenticator = $._encodeUTF8String;


/* eslint-enable */
