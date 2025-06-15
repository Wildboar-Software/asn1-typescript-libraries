/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary CRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLStreamIdentifier  ::=  INTEGER (0..MAX)
 * ```
 */
export type CRLStreamIdentifier = INTEGER;


export const _decode_CRLStreamIdentifier = $._decodeInteger;


export const _encode_CRLStreamIdentifier = $._encodeInteger;


/* eslint-enable */
