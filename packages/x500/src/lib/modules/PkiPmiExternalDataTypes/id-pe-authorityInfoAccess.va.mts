/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pe } from "../PkiPmiExternalDataTypes/id-pe.va.mjs";
/**
 * @summary id_pe_authorityInfoAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pe-authorityInfoAccess OBJECT IDENTIFIER ::= { id-pe 1 }
 * ```
 *
 * @constant
 */
export const id_pe_authorityInfoAccess: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_pe
);

/* eslint-enable */
