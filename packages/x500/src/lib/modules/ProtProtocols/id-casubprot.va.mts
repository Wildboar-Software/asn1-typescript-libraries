/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_wrprot } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/id-wrprot.va.mjs";
/**
 * @summary id_casubprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-casubprot        OBJECT IDENTIFIER ::= {id-wrprot 1}
 * ```
 *
 * @constant
 */
export const id_casubprot: OBJECT_IDENTIFIER = _OID.fromParts([1], id_wrprot);

/* eslint-enable */
