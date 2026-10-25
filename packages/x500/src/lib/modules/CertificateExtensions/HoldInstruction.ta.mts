/* eslint-disable */
import { ASN1Element as _Element, ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary HoldInstruction
 * @description
 *
 * OBJECT IDENTIFIER hold instruction. Only with reason `certificateHold`.
 * Always non-critical. No codes defined in X.509 itself. Shall be absent
 * when a hold is converted to a final revocation.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HoldInstruction  ::=  OBJECT IDENTIFIER
 * ```
 */
export type HoldInstruction = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_HoldInstruction: $.ASN1Decoder<ObjectIdentifier> = $._decodeObjectIdentifier;


export const _encode_HoldInstruction: $.ASN1Encoder<ObjectIdentifier> = $._encodeObjectIdentifier;


/* eslint-enable */
