/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID  ::=  OCTET STRING (SIZE (6))
 * ```
 */
export type InvokeID = OCTET_STRING; // OctetStringType


export const _decode_InvokeID = $._decodeOctetString;


export const _encode_InvokeID = $._encodeOctetString;


/* eslint-enable */
