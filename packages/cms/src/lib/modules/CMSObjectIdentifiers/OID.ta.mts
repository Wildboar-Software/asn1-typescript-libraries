/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary OID
 * @description
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
