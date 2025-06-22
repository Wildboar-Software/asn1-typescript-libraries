/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ApplicationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationContext  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ApplicationContext = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ApplicationContext = $._decodeObjectIdentifier;


export const _encode_ApplicationContext = $._encodeObjectIdentifier;


/* eslint-enable */
