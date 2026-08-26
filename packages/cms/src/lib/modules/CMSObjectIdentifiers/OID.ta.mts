/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary OID
 * @description
 *
 * Type alias for OBJECT IDENTIFIER in the CMS object-identifier module
 * (ITU-T X.894 | ISO/IEC 24824-4 Annex / ANSI X9.73).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OID  ::=  OBJECT IDENTIFIER
 * ```
 */
export type OID = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_OID = $._decodeObjectIdentifier;




export const _encode_OID = $._encodeObjectIdentifier;


/* eslint-enable */
