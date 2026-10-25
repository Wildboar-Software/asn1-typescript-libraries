/* eslint-disable */
import { ASN1Element as _Element, ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MgtOID
 * @description
 *
 * OBJECT IDENTIFIER wrapper (object class, service id, collective exclusions,
 * etc.). Equality is OID equality.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtOID  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MgtOID = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_MgtOID: $.ASN1Decoder<ObjectIdentifier> = $._decodeObjectIdentifier;


export const _encode_MgtOID: $.ASN1Encoder<ObjectIdentifier> = $._encodeObjectIdentifier;


/* eslint-enable */
