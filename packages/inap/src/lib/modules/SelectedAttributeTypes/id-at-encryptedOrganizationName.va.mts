/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
// export { id_at } from "../UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_encryptedOrganizationName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-encryptedOrganizationName OBJECT IDENTIFIER ::= {id-at 10 2}
 * ```
 * 
 * @constant
 */
export
const id_at_encryptedOrganizationName: OBJECT_IDENTIFIER = _OID.fromParts([
    10,
    2,
], id_at);

/* eslint-enable */
