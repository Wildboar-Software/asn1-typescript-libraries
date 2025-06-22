/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KeyDerivationMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationMethod  ::=  OBJECT IDENTIFIER
 * ```
 */
export type KeyDerivationMethod = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_KeyDerivationMethod = $._decodeObjectIdentifier;




export const _encode_KeyDerivationMethod = $._encodeObjectIdentifier;


/* eslint-enable */
