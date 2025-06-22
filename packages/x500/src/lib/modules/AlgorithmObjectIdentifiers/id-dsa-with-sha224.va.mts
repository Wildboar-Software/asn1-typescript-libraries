/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { sigAlgs } from "../AlgorithmObjectIdentifiers/sigAlgs.va.mjs";
/**
 * @summary id_dsa_with_sha224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa-with-sha224      ID ::= { sigAlgs 1 }
 * ```
 *
 * @constant
 */
export const id_dsa_with_sha224: ID = _OID.fromParts([1], sigAlgs);

/* eslint-enable */
