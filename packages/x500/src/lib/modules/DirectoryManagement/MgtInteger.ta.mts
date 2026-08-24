/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MgtInteger
 * @description
 *
 * CMIP INTEGER wrapper. Timeouts are seconds. Counter attributes default to
 * `zero` (0). Size/time-limit policy values override DAP service controls when
 * the control is omitted or exceeds the policy; `0` means zero, not unlimited.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtInteger  ::=  INTEGER
 * ```
 */
export type MgtInteger = INTEGER;


export const _decode_MgtInteger = $._decodeInteger;


export const _encode_MgtInteger = $._encodeInteger;


/* eslint-enable */
