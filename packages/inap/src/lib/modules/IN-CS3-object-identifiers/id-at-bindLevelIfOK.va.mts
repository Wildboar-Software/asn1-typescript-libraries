/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_at } from "../IN-CS3-object-identifiers/id-at.va.mjs";
// export { id_at } from "../IN-CS3-object-identifiers/id-at.va.mjs";


/**
 * @summary id_at_bindLevelIfOK
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at-bindLevelIfOK OBJECT IDENTIFIER ::= {id-at bindLevelIfOK(4)}
 * ```
 * 
 * @constant
 */
export
const id_at_bindLevelIfOK: OBJECT_IDENTIFIER = _OID.fromParts([
    /* bindLevelIfOK */ 4,
], id_at);

/* eslint-enable */
