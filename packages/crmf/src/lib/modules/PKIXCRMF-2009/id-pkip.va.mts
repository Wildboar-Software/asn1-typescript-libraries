/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix } from "@wildboar/x500/src/lib/modules/PkiPmiExternalDataTypes/id-pkix.va.mjs";


/**
 * @summary id_pkip
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkip  OBJECT IDENTIFIER ::= { id-pkix 5 }
 * ```
 *
 * @constant
 */
export const id_pkip: OBJECT_IDENTIFIER = _OID.fromParts([5], id_pkix);

/* eslint-enable */
