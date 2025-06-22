/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

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
