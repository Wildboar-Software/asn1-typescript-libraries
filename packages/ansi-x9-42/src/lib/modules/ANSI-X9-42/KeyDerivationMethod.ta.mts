/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KeyDerivationMethod
 * @description
 *
 * OID identifying which KDF is used: `kdasn1der` (§7.7.1, DER
 * `OtherInfo`) or `kdConcatenation` (§7.7.2, `ZZ || Counter ||
 * [OtherInfo]`). Constrains `SchemeSyntax`. Both KDFs use an ASC
 * X9-approved hash of at least 160 bits (SHA-1 in this edition).
 * ANS X9.42-2003 §7.7, §A.4.
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
