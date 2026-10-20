/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
// export { id_at } from "../UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_encryptedCACertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-encryptedCACertificate OBJECT IDENTIFIER ::= {id-at 37 2}
 * ```
 * 
 * @constant
 */
export
const id_at_encryptedCACertificate: OBJECT_IDENTIFIER = _OID.fromParts([
    37,
    2,
], id_at);

/* eslint-enable */
