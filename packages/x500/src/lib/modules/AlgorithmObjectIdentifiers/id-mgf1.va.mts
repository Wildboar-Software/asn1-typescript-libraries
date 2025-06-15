/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
/**
 * @summary id_mgf1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mgf1                 ID ::= { pkcs-1 8 }
 * ```
 *
 * @constant
 */
export const id_mgf1: ID = new _OID([8], pkcs_1);

/* eslint-enable */
