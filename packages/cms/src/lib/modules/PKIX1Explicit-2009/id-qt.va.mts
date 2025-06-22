/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix } from "../PKIX1Explicit-2009/id-pkix.va.mjs";

/**
 * @summary id_qt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-qt OBJECT IDENTIFIER ::= { id-pkix 2 }
 * ```
 *
 * @constant
 */
export const id_qt: OBJECT_IDENTIFIER = _OID.fromParts([2], id_pkix);

/* eslint-enable */
