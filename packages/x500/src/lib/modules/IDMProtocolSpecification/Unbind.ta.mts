/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Unbind
 * @description
 *
 * NULL. Orderly close; destructive — outstanding operation results
 * are lost. DAP: initiator only; other protocols: either side. Either
 * side may also just drop TCP. To avoid data loss, Unbind only when
 * all requests have been responded to.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Unbind  ::=  NULL
 * ```
 */
export type Unbind = NULL; // NullType


export const _decode_Unbind = $._decodeNull;


export const _encode_Unbind = $._encodeNull;


/* eslint-enable */
