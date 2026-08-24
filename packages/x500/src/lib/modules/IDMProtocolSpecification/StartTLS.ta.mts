/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary StartTLS
 * @description
 *
 * NULL. TCP initiator requests TLS. May be sent at any time, but no
 * further PDUs until `tLSResponse`. After TLS is already established,
 * a second StartTLS ⇒ `operationsError`. After TLS closure, do not
 * respond to requests received before closure.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StartTLS  ::=  NULL
 * ```
 */
export type StartTLS = NULL; // NullType


export const _decode_StartTLS = $._decodeNull;


export const _encode_StartTLS = $._encodeNull;


/* eslint-enable */
