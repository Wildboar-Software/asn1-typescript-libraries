/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_pkix } from "../PkiPmiExternalDataTypes/id-pkix.va.mjs";
/**
 * @summary id_pe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pe                     OBJECT IDENTIFIER ::= { id-pkix 1 }
 * ```
 *
 * @constant
 */
export const id_pe: OBJECT_IDENTIFIER = _OID.fromParts([1], id_pkix);

/* eslint-enable */
