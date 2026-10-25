/* eslint-disable */
import { ASN1Element as _Element, ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ID
 * @description
 *
 * Module-wide alias of OBJECT IDENTIFIER (`ID ::= OBJECT IDENTIFIER`). Used as
 * the type of assigned OIDs (`id-at`, `id-oc`, `id-ce`, ...) in X.500 modules.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ID     ::=  OBJECT IDENTIFIER
 * ```
 */
export type ID = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ID: $.ASN1Decoder<ObjectIdentifier> = $._decodeObjectIdentifier;


export const _encode_ID: $.ASN1Encoder<ObjectIdentifier> = $._encodeObjectIdentifier;


/* eslint-enable */
