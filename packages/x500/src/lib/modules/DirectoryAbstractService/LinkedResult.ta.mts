/* eslint-disable */
import { ASN1Element as _Element, type NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary LinkedResult
 * @description
 *
 * NULL. Returned for each `linkedLDAP` request so intermediate DSAs can
 * complete handling. Final LDAP result is not carried here.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkedResult  ::=  NULL
 * ```
 */
export type LinkedResult = NULL; // NullType


export const _decode_LinkedResult: $.ASN1Decoder<null> = $._decodeNull;


export const _encode_LinkedResult: $.ASN1Encoder<null> = $._encodeNull;


/* eslint-enable */
