/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
// export { id_at } from "../UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_encryptedConfKeyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-encryptedConfKeyInfo OBJECT IDENTIFIER ::= {id-at 60 2}
 * ```
 * 
 * @constant
 */
export
const id_at_encryptedConfKeyInfo: OBJECT_IDENTIFIER = _OID.fromParts([
    60,
    2,
], id_at);

/* eslint-enable */
