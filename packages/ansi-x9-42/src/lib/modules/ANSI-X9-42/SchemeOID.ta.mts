/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary SchemeOID
 * @description
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
