/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary HashedPolicyInfo
 * @description
 *
 * Open type (`POLICY.&Type`): the value whose DER encoding is hashed in
 * {@link InfoSyntax_pointer}.`hash`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashedPolicyInfo  ::=  POLICY.&Type({Policies})
 * ```
 */
export type HashedPolicyInfo = _Element; // ObjectClassFieldType


export const _decode_HashedPolicyInfo: $.ASN1Decoder<_Element> = $._decodeAny;


export const _encode_HashedPolicyInfo: $.ASN1Encoder<_Element> = $._encodeAny;


/* eslint-enable */
