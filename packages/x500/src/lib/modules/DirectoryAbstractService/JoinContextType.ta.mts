/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary JoinContextType
 * @description
 *
 * Context-type OID. If `JoinAttPair.joinContext` is present, only these
 * context types participate in the join; if absent, all contexts.
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
