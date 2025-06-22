/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary KeyPurposeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyPurposeId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type KeyPurposeId = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_KeyPurposeId = $._decodeObjectIdentifier;


export const _encode_KeyPurposeId = $._encodeObjectIdentifier;


/* eslint-enable */
