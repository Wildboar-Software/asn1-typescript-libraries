/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
// export { id_at } from "../UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_encryptedRoleOccupant
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-encryptedRoleOccupant OBJECT IDENTIFIER ::= {id-at 33 2}
 * ```
 * 
 * @constant
 */
export
const id_at_encryptedRoleOccupant: OBJECT_IDENTIFIER = _OID.fromParts([
    33,
    2,
], id_at);

/* eslint-enable */
