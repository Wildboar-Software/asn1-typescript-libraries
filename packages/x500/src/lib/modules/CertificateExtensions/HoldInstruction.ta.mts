/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HoldInstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HoldInstruction  ::=  OBJECT IDENTIFIER
 * ```
 */
export type HoldInstruction = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_HoldInstruction = $._decodeObjectIdentifier;


export const _encode_HoldInstruction = $._encodeObjectIdentifier;


/* eslint-enable */
