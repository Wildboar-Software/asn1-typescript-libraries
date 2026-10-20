/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
// export { id_at } from "../UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_encryptedStreetAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-encryptedStreetAddress OBJECT IDENTIFIER ::= {id-at 9 2}
 * ```
 * 
 * @constant
 */
export
const id_at_encryptedStreetAddress: OBJECT_IDENTIFIER = _OID.fromParts([
    9,
    2,
], id_at);

/* eslint-enable */
