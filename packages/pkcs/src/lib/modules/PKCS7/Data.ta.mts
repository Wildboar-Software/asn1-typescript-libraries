/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Data  ::=  OCTET STRING
 * ```
 */
export type Data = OCTET_STRING; // OctetStringType




export const _decode_Data = $._decodeOctetString;




export const _encode_Data = $._encodeOctetString;


/* eslint-enable */
