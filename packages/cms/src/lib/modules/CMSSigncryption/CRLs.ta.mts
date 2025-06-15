/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary CRLs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLs      ::=  [XER:BASE64] OCTET STRING
 * ```
 */
export type CRLs = OCTET_STRING; // OctetStringType




export const _decode_CRLs = $._decodeOctetString;




export const _encode_CRLs = $._encodeOctetString;


/* eslint-enable */
