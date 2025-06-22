/* eslint-disable */
import { ASN1Element as _Element, BOOLEAN } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MgtBoolean
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtBoolean  ::=  BOOLEAN
 * ```
 */
export type MgtBoolean = BOOLEAN; // BooleanType


export const _decode_MgtBoolean = $._decodeBoolean;


export const _encode_MgtBoolean = $._encodeBoolean;


/* eslint-enable */
