/* eslint-disable */
import { ASN1Element as _Element, BOOLEAN } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

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
