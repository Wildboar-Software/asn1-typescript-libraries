/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary JoinContextType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinContextType  ::=  CONTEXT.&id({SupportedContexts})
 * ```
 */
export type JoinContextType = OBJECT_IDENTIFIER; // ObjectClassFieldType


export const _decode_JoinContextType = $._decodeObjectIdentifier;


export const _encode_JoinContextType = $._encodeObjectIdentifier;


/* eslint-enable */
