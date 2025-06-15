/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom } from "../AlgorithmObjectIdentifiers/certicom.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary id_ecDH
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecDH                 ID ::= { certicom schemes(1) ecdh(12) }
 * ```
 *
 * @constant
 */
export const id_ecDH: ID = new _OID([/* schemes */ 1, /* ecdh */ 12], certicom);

/* eslint-enable */
