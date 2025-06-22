/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary AP_invocation_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AP-invocation-identifier  ::=  INTEGER
 * ```
 */
export type AP_invocation_identifier = INTEGER;


export const _decode_AP_invocation_identifier = $._decodeInteger;


export const _encode_AP_invocation_identifier = $._encodeInteger;


/* eslint-enable */
