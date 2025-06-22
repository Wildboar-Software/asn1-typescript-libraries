/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary IV
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IV  ::=  OCTET STRING
 * ```
 */
export type IV = OCTET_STRING; // OctetStringType




export const _decode_IV = $._decodeOctetString;




export const _encode_IV = $._encodeOctetString;


/* eslint-enable */
