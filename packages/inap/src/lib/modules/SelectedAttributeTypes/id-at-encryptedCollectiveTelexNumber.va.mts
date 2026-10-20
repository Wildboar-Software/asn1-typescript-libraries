/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
// export { id_at } from "../UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_encryptedCollectiveTelexNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-encryptedCollectiveTelexNumber OBJECT IDENTIFIER ::= {id-at 21 1 2}
 * ```
 * 
 * @constant
 */
export
const id_at_encryptedCollectiveTelexNumber: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
    1,
    2,
], id_at);

/* eslint-enable */
