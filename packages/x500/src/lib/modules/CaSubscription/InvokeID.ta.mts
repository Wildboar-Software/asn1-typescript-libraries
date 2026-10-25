/* eslint-disable */
import { ASN1Element as _Element, type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeID
 * @description
 *
 * INTEGER (0..127). Unique per authorizer–CA pair for one request/response;
 * reusable after that interaction completes. Not the wrapper InvokeID
 * (OCTET STRING SIZE (6)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID  ::=  INTEGER (0..127)
 * ```
 */
export type InvokeID = INTEGER;


export const _decode_InvokeID: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_InvokeID: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
