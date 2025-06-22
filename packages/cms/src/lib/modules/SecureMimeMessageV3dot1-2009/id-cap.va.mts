/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_smime } from "../SecureMimeMessageV3dot1-2009/id-smime.va.mjs";

/**
 * @summary id_cap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-cap  OBJECT IDENTIFIER ::= { id-smime 11 }
 * ```
 *
 * @constant
 */
export const id_cap: OBJECT_IDENTIFIER = _OID.fromParts([11], id_smime);

/* eslint-enable */
