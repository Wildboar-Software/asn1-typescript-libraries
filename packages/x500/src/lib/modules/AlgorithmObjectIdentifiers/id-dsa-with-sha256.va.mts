/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { sigAlgs } from "../AlgorithmObjectIdentifiers/sigAlgs.va.mjs";
/**
 * @summary id_dsa_with_sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa-with-sha256      ID ::= { sigAlgs 2 }
 * ```
 *
 * @constant
 */
export const id_dsa_with_sha256: ID = _OID.fromParts([2], sigAlgs);

/* eslint-enable */
