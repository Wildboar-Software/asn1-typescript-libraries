/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Transfer_syntax_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Transfer-syntax-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Transfer_syntax_name = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_Transfer_syntax_name = $._decodeObjectIdentifier;


export const _encode_Transfer_syntax_name = $._encodeObjectIdentifier;


/* eslint-enable */
