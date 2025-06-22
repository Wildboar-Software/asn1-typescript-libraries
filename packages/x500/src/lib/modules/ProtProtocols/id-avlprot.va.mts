/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_wrprot } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/id-wrprot.va.mjs";
/**
 * @summary id_avlprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avlprot          OBJECT IDENTIFIER ::= {id-wrprot 0}
 * ```
 *
 * @constant
 */
export const id_avlprot: OBJECT_IDENTIFIER = _OID.fromParts([0], id_wrprot);

/* eslint-enable */
