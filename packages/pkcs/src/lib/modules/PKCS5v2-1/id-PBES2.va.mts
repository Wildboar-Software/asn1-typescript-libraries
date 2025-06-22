/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { pkcs_5 } from "../PKCS5v2-1/pkcs-5.va.mjs";

/**
 * @summary id_PBES2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-PBES2 OBJECT IDENTIFIER ::= {pkcs-5 13}
 * ```
 *
 * @constant
 */
export const id_PBES2: OBJECT_IDENTIFIER = _OID.fromParts([13], pkcs_5);

/* eslint-enable */
