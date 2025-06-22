/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary UserKeyingMaterial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserKeyingMaterial  ::=  OCTET STRING
 * ```
 */
export type UserKeyingMaterial = OCTET_STRING; // OctetStringType




export const _decode_UserKeyingMaterial = $._decodeOctetString;




export const _encode_UserKeyingMaterial = $._encodeOctetString;


/* eslint-enable */
