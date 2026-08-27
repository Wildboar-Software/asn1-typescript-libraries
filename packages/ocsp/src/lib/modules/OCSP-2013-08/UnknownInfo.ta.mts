/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary UnknownInfo
 * @description
 *
 * Empty payload for the `unknown` alternative of `CertStatus`
 * ([RFC 6960 §4.2.1](https://datatracker.ietf.org/doc/html/rfc6960#section-4.2.1)).
 * The `unknown` state means the responder does not know about the
 * certificate being requested, usually because of an unrecognized
 * issuer not served by this responder
 * ([§2.2](https://datatracker.ietf.org/doc/html/rfc6960#section-2.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnknownInfo  ::=  NULL
 * ```
 */
export type UnknownInfo = NULL; // NullType




export const _decode_UnknownInfo = $._decodeNull;




export const _encode_UnknownInfo = $._encodeNull;


/* eslint-enable */
