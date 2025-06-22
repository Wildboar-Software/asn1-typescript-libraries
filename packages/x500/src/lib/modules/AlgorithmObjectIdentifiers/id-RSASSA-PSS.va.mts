/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va.mjs";
/**
 * @summary id_RSASSA_PSS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-RSASSA-PSS           ID ::= { pkcs-1 10 }
 * ```
 *
 * @constant
 */
export const id_RSASSA_PSS: ID = _OID.fromParts([10], pkcs_1);

/* eslint-enable */
