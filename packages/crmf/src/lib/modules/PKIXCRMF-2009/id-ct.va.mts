/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_smime } from "../PKIXCRMF-2009/id-smime.va.mjs";

/**
 * @summary id_ct
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct   OBJECT IDENTIFIER ::= { id-smime  1 }
 * ```
 *
 * @constant
 */
export const id_ct: OBJECT_IDENTIFIER = _OID.fromParts([1], id_smime);

/* eslint-enable */
