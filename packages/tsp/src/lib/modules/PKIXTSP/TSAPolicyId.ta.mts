/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TSAPolicyId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSAPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type TSAPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_TSAPolicyId = $._decodeObjectIdentifier;


export const _encode_TSAPolicyId = $._encodeObjectIdentifier;


/* eslint-enable */
