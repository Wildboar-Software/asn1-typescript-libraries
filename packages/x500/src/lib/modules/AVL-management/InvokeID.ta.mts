/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeID
 * @description
 *
 * Protected-protocol invoke identifier: INTEGER (0..127). Unique per client–server pair for an open request/response; **reusable after that interaction completes**. Not the wrapper’s 6-octet `InvokeID`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID  ::=  INTEGER (0..127)
 * ```
 */
export type InvokeID = INTEGER;


export const _decode_InvokeID = $._decodeInteger;


export const _encode_InvokeID = $._encodeInteger;


/* eslint-enable */
