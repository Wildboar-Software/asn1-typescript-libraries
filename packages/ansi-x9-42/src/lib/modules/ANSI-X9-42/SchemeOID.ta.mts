/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary SchemeOID
 * @description
 *
 * OID from `NamedSchemes`: a scheme plus well-known SHA-1 KDF
 * parameters (`{id-sha1, NULL}`), so parameters need not be sent.
 * ANS X9.42-2003 §A.4, §A.4.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchemeOID  ::=  KEY-AGREEMENT.&id({NamedSchemes})
 * ```
 */
export type SchemeOID = OBJECT_IDENTIFIER; // ObjectClassFieldType




export const _decode_SchemeOID = $._decodeObjectIdentifier;




export const _encode_SchemeOID = $._encodeObjectIdentifier;


/* eslint-enable */
