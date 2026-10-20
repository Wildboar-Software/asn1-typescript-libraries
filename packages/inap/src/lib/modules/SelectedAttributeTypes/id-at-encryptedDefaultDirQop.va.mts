/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
// export { id_at } from "../UsefulDefinitions/id-at.va.mjs";


/**
 * @summary id_at_encryptedDefaultDirQop
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-encryptedDefaultDirQop OBJECT IDENTIFIER ::= {id-at 56 2}
 * ```
 * 
 * @constant
 */
export
const id_at_encryptedDefaultDirQop: OBJECT_IDENTIFIER = _OID.fromParts([
    56,
    2,
], id_at);

/* eslint-enable */
