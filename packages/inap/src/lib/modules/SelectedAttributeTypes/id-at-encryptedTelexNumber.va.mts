/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
// export { id_at } from "../UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_encryptedTelexNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-encryptedTelexNumber OBJECT IDENTIFIER ::= {id-at 21 2}
 * ```
 * 
 * @constant
 */
export
const id_at_encryptedTelexNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
    2,
], id_at);

/* eslint-enable */
