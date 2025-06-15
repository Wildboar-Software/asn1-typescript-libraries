/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary AssociationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationId  ::=  INTEGER
 * ```
 */
export type AssociationId = INTEGER;


export const _decode_AssociationId = $._decodeInteger;


export const _encode_AssociationId = $._encodeInteger;


/* eslint-enable */
