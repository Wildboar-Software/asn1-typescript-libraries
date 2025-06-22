/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ansi_x9_62 } from "../AlgorithmObjectIdentifiers/ansi-x9-62.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary ecdsa_with_SHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA384       ID ::= { ansi-x9-62 signatures(4)
 *                                                 ecdsa-with-SHA2(3) 3 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA384: ID = _OID.fromParts(
    [/* signatures */ 4, /* ecdsa-with-SHA2 */ 3, 3],
    ansi_x9_62
);

/* eslint-enable */
