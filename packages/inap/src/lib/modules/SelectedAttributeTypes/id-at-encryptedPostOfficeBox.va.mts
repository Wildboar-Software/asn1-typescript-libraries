/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
// export { id_at } from "../UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_encryptedPostOfficeBox
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-encryptedPostOfficeBox OBJECT IDENTIFIER ::= {id-at 18 2}
 * ```
 * 
 * @constant
 */
export
const id_at_encryptedPostOfficeBox: OBJECT_IDENTIFIER = _OID.fromParts([
    18,
    2,
], id_at);

/* eslint-enable */
