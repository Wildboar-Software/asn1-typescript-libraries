/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DomainInfo
 * @description
 *
 * Unconstrained DMD-private type. No Directory-wide syntax or matching.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainInfo  ::=  ABSTRACT-SYNTAX.&Type
 * ```
 */
export type DomainInfo = _Element; // ObjectClassFieldType


export const _decode_DomainInfo: $.ASN1Decoder<_Element> = $._decodeAny;


export const _encode_DomainInfo: $.ASN1Encoder<_Element> = $._encodeAny;


/* eslint-enable */
