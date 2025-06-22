/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_asx_delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-delegatedNameConstraints            OBJECT IDENTIFIER ::= {id-ce 42 2}
 * ```
 *
 * @constant
 */
export const id_asx_delegatedNameConstraints: OBJECT_IDENTIFIER = _OID.fromParts(
    [42, 2],
    id_ce
);

/* eslint-enable */
