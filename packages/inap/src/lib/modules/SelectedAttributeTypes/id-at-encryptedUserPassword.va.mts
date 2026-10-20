/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
// export { id_at } from "../UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_encryptedUserPassword
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-encryptedUserPassword OBJECT IDENTIFIER ::= {id-at 35 2}
 * ```
 * 
 * @constant
 */
export
const id_at_encryptedUserPassword: OBJECT_IDENTIFIER = _OID.fromParts([
    35,
    2,
], id_at);

/* eslint-enable */
