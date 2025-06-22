/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Digest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Digest  ::=  OCTET STRING
 * ```
 */
export type Digest = OCTET_STRING; // OctetStringType




export const _decode_Digest = $._decodeOctetString;




export const _encode_Digest = $._encodeOctetString;


/* eslint-enable */
